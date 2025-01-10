import React from "react";

function ExpandableButton({ isOpen, toggleOpen }) {
  return (
    <button onClick={toggleOpen}>
      <span
        class="material-symbols-outlined"
        style={{
          transform: `rotate(${isOpen ? 180 : 0}deg)`,
          transition: `all 0.25s`,
        }}
      >
        arrow_downward
      </span>
    </button>
  );
}

export default ExpandableButton;
