import React from "react";

class Toast extends React.Component {
  state = {
    visible: false,
    message: ""
  };

  duration;

  render() {
    const { visible, message } = this.state;
    return (
      <>
        {visible && (
          <div className="toast">
            <span>{message}</span>
          </div>
        )}
      </>
    );
  }

  show(message) {
    clearTimeout(this.duration);
    this.setState({ visible: false, message: "" }, () => {
      this.setState({ visible: true, message });
    });

    this.duration = setTimeout(() => {
      this.setState({ visible: false, message: "" });
    }, 3000);
  }
}

export default Toast;
