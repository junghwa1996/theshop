import React from "react";

class Modal extends React.Component {
  state = {
    visible: false
  };

  componentDidUpdate() {
    this.toggleBodyScroll();
  }

  render() {
    const { visible } = this.state;
    const { htmlSrc, title } = this.props;
    return (
      <>
        {visible && (
          <div className="modal">
            <div className="modal__frame">
              <div className="modal_wrapper">
                <div className="modal__title">{title}</div>
                <iframe src={htmlSrc} className="modal__content" />
              </div>
              <div onClick={() => this.hide()} className="modal__close">
                닫기
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  toggleBodyScroll() {
    const { visible } = this.state;

    const body = document.querySelector("body");
    if (visible) {
      if (body.style.overflowY === "auto" || body.style.overflowY === "") {
        body.style.overflowY = "hidden";
      }
    } else {
      if (body.style.overflowY === "hidden") {
        body.style.overflowY = "auto";
      }
    }
  }
}

export default Modal;
