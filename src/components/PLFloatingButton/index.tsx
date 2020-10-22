import React, { FC, useState } from "react";
import "./style.sass";

type PositionInterface = {
  left: number;
  top: number;
  transition: string;
};

const firstPos = {
  left: 8,
  top: 40,
  transition: "none",
};
const FloatingButton: FC = (props) => {
  const [position, setPosition] = useState<PositionInterface>(firstPos);
  const [firstPosition, setFirstPosition] = useState<PositionInterface>(
    firstPos
  );

  const onClick = () => {
    console.log("button clicked");
  };

  const onTouchStart = (e: React.TouchEvent) => {
    console.log("touch start");

    setFirstPosition({
      ...position,
      left: e.touches[0].clientX - 20,
      top: e.touches[0].clientY - 20,
      transition: "none",
    });
  };

  const onTouchMove = (e: React.TouchEvent) => {
    console.log("touch move");
    setPosition({
      left: e.touches[0].clientX - 20,
      top: e.touches[0].clientY - 20,
      transition: "none",
    });
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    const changedX = e.changedTouches[0].clientX - 20 - firstPosition.left,
      changedY = e.changedTouches[0].clientY - 20 - firstPosition.top,
      movement = Math.sqrt(Math.pow(changedX, 2) + Math.pow(changedY, 2));
    console.log(movement);
    if (movement < 5) {
      onClick();
      return;
    }

    const fullWidth = window.screen.width,
      itemWidth = 40;
    let _left = 8;
    if (position.left > fullWidth / 2 - itemWidth) {
      _left = fullWidth - 8 - itemWidth;
    }
    setPosition({
      ...position,
      left: _left,
      transition: "transform .4s ease-in-out",
    });
  };

  return (
    <div
      className="floating-btn"
      onTouchStartCapture={onTouchStart}
      onTouchMoveCapture={onTouchMove}
      onTouchEndCapture={onTouchEnd}
      onClick={onClick}
      style={{
        transform: `translate(${position.left}px,${position.top}px)`,
        transition: position.transition,
      }}
    >
      <div className="floating-img" />
    </div>
  );
};

export default FloatingButton;
