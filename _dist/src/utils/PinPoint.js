import Analytics from "@aws-amplify/analytics";
import { ConsoleLogger as Logger } from "@aws-amplify/core";
import { DeviceInfos } from "./DeviceInfos";

const logger = new Logger("PinPoint");

export async function sendEvent(eventName, params, context, args) {
  try {
    const generated = await endpointGenerated();
    const values = getParamsByContext(eventName, params, context, args);
    Analytics.record({
      name: eventName.toString(),
      attributes: { ...values, ...generated },
      immediate: true
    });
  } catch (e) {
    console.error(e);
  }
}

export const ZB_EVENT_TYPE = {
  ZB_APP_INSTALL: "ZB_APP_INSTALL",
  ONEROOM_FILTER_RESULTS: "ONEROOM_FILTER_RESULTS",
  VILLA_FILTER_RESULTS: "VILLA_FILTER_RESULTS",
  OFFICETEL_FILTER_RESULTS: "OFFICETEL_FILTER_RESULTS",
  APART_FILTER_RESULTS: "APART_FILTER_RESULTS",
  ZB_SCREEN_MAP_CLICK: "ZB_SCREEN_MAP_CLICK",
  ZB_GNB_CLICK: "ZB_GNB_CLICK",
  SIGN_UP: "SIGN_UP",
  ZB_SCREEN_CLICK: "ZB_SCREEN_CLICK",
  ZB_SCREEN_VIEW: "ZB_SCREEN_VIEW",
  VIEW_ITEM: "VIEW_ITEM",
  ECOMMERCE_PURCHASE: "ECOMMERCE_PURCHASE",
  ADD_TO_WISHLIST: "ADD_TO_WISHLIST",
  ZB_AD_CLICK: "ZB_AD_CLICK",
  ZB_AD_IMPRESSION: "ZB_AD_IMPRESSION",
  VIEW_SEARCH_RESULTS: "VIEW_SEARCH_RESULTS",
  ZB_WAY_SEARCHING: "ZB_WAY_SEARCHING",
  ZB_VR_MOVING: "ZB_VR_MOVING",
  ZB_VR_LOADING: "ZB_VR_LOADING",
  RN_BUNDLE_INIT: "RN_BUNDLE_INIT",
  CODE_PUSH_CHECK: "CODE_PUSH_CHECK",
  CODE_PUSH_START: "CODE_PUSH_START",
  CODE_PUSH_END: "CODE_PUSH_END",
  APART_PURCHASE:"APART_PURCHASE",
  ZB_AD_PAGE_OPEN: "ZB_AD_PAGE_OPEN"    // 핀포인트 추가
};

export async function endpointGenerated() {
  const result = await Promise.all([
    DeviceInfos.getAdIdObject(),
    DeviceInfos.getUserAgent(),
    DeviceInfos.getAppsflyerId(),
    DeviceInfos.getIpAddress()
  ]);

  const { value: adid, uuid } = result[0];
  const userAgent = result[1];
  const appsflyerId = result[2];
  const deviceIP = result[3];

  logger.log(
    "adId= ",
    adid,
    " uuid= ",
    uuid,
    " appsflyerId= ",
    appsflyerId,
    " userAgent= ",
    userAgent
  );

  const params = {
    appVersion: `${DeviceInfos.getVersion()}`,
    locale: `${DeviceInfos.getDeviceLocale()}`,
    make: `${DeviceInfos.getBrand()}`,
    model: `${DeviceInfos.getModel()}`,
    modelVersion: `${DeviceInfos.getDeviceId()}`,
    platform: `${DeviceInfos.getSystemName()}`,
    platformVersion: `${DeviceInfos.getSystemVersion()}`,
    timezone: `${DeviceInfos.getTimezone()}`,
    adId: adid,
    uuid: uuid,
    appsflyerId: appsflyerId,
    deviceIP: deviceIP
    // userAgent: userAgent
  };

  const sendParams = {};

  Object.keys(params).forEach((key, index) => {
    const value = params[key];
    if (!!value && value.length > 0) sendParams[key] = value;
  });

  return sendParams;
}

function getParamsByContext(eventName, params, context, args) {
  const result = {};
  Object.keys(params).forEach(key => {
    const value = getValueByContext(eventName, key, params[key], context, args);
    if (value) {
      result[key] = value;
    }
  });
  return result;
}

function getValueByContext(eventName, key, value, context, args) {
  let result = null;
  let error = null;

  if (value === null) {
    error = new Error(
      `eventName: ${eventName}, key: ${key}: null value is not allowed in sendEvent param`
    );
  }
  switch (typeof value) {
    case "string":
      result = value;
      break;
    case "number": {
      result = `${value}`;
      break;
    }
    case "boolean": {
      result = `${value}`;
      break;
    }
    case "function":
      if (!!context) {
        try {
          const funcResult = value.call(context, context, args);
          result = getValueByContext(eventName, key, funcResult, context, args);
        } catch (e) {
          error = e;
        }
      }
      break;
    case "object": {
      error = new Error(`
			eventName: ${eventName}, key: ${key}, value: ${JSON.stringify(
        value
      )}: type object is not allowed in sendEvent param`);
      break;
    }
    case "symbol": {
      error = new Error(
        `eventName: ${eventName}, key: ${key}, value: ${value.toString()}: type symbol is not allowed in sendEvent param`
      );
      break;
    }
    case "undefined": {
      error = new Error(
        `eventName: ${eventName}, key: ${key}: type undefined is not allowed in sendEvent param`
      );
      break;
    }
  }

  if (error) {
    if (process.env.STAGE === "prod") {
      // Bugsnag.notify(error)
    } else {
      console.error(error);
    }
  }

  return result;
}
