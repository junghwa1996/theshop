import React from "react";
import ScreenModel from "./ScreenModel";
import { sendEvent, ZB_EVENT_TYPE } from "../../src/utils/PinPoint";

class Done extends React.Component {
  state = {
    loaded: false
  };

  model = null;

  componentDidMount() {
    this.model = new ScreenModel();
    this.setState({ loaded: true });

    sendEvent(ZB_EVENT_TYPE.ZB_SCREEN_VIEW, {
      screen_name: "청약인증완료",
      ad_area_danji_id: "51434",
      ad_name: "롯데캐슬클라시아"
    });
  }

  render() {
    const { loaded } = this.state;
    if (!loaded) return <div />;
    const { images } = this.model;
    return (
      <div className="container">
        <img src={images.title} className="catalog_img-full" alt="done" />
      </div>
    );
  }
}

export default Done;
