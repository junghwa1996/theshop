class ScreenModel {
  images = this.isMobile
    ? {
        title: require("../../static/app_event_upload_done.png")
      }
    : {
        title: require("../../static/web-event-upload-done.png")
      };

  get isMobile() {
    return window.innerWidth <= 650;
  }
}

export default ScreenModel;
