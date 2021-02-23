import { sendEvent, ZB_EVENT_TYPE } from "../../src/utils/PinPoint";

class ScreenModel {
  images = this.isMobile
    ? {
        title: require("../../static/m_title_2_01.png"),
        placeholder: require("../../static/m_up_load_photo_btn.png"),
        frame: require("../../static/app_imgBox.png"),
        footer: require("../../static/m_notice_2.png"),
        arrow: require("../../static/btn_actionbar_page_back_30_x_30_nor.png"),
        replay: require("../../static/baseline-replay-black-48-dp.png")
      }
    : {
        title: require("../../static/web-title-2-01.png"),
        placeholder: require("../../static/w-up-load-photo-btn.png"),
        frame: require("../../static/web_imgBox.png"),
        footer: require("../../static/web-noti-2.png"),
        arrow: require("../../static/btn_actionbar_page_back_30_x_30_nor.png"),
        replay: require("../../static/baseline-replay-black-48-dp.png")
      };

  get isMobile() {
    return window.innerWidth <= 650;
  }

  genQueryParams(path) {
    const params = {};
    path.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str, key, value) {
      params[key] = value;
    });

    return params;
  }

  async requestSubmit(phone, file, mktAgreement) {
    // submit 이벤트 호출 시 핀포인트 호출
    sendEvent(ZB_EVENT_TYPE.ZB_SCREEN_CLICK, {
      screen_name: "청약인증",
      button_name: "보내기",
      ad_name: "롯데캐슬클라시아",
      ad_area_danji_id: area_danji_id
    })
  }
}

export default ScreenModel;
