import React from "react";

// All previous props here.
function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
     ❌
    </span>
  );
}

export default DeleteBtn;