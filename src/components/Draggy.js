import React from "react";
import Draggable from "react-draggable";

class Draggy extends React.Component {
  render() {
    return (
      <Draggable>
        <div>
          <h3 className="draggy">Dont try to drag this around the screen!</h3>
        </div>
      </Draggable>
    );
  }
}

export default Draggy;
