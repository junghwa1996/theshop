export class DeviceInfos {
  static getSDKVersion() {
    try {
      return 0;
    } catch (e) {
      return 0;
    }
  }

  static getBundleId() {
    try {
      return process.env.PLATFORM === "m" ? "com.jikbang4a.m" : "com.jikbang4a.pc";
    } catch (e) {
      return "";
    }
  }

  static getVersion() {
    return "";
  }

  static async getIpAddress() {
    try {
      return "";
    } catch (e) {
      return "";
    }
  }

  static getBuildNumber() {
    return "";
  }

  static async getCodePushVersion() {
    return "";
  }

  static clearUpdates() {
    return;
  }

  static getDeviceLocale() {
    try {
      return navigator.language;
    } catch (e) {
      return "";
    }
  }

  static getBrand() {
    return "";
  }

  static getModel() {
    return "";
  }

  static getDeviceId() {
    return "";
  }

  static getDeviceName() {
    return "";
  }

  static getSystemName() {
    return process.env.PLATFORM;
  }

  static getSystemVersion() {
    return "";
  }

  static getTimezone() {
    return "";
  }

  static async getAppsflyerId() {
    return null;
  }

  static async getAdIdObject() {
    return { value: null, uuid: null };
  }

  static async getUserAgent() {
    try {
      return `${navigator.userAgent}`;
    } catch (e) {
      return "";
    }
  }
}
