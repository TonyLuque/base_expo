import React from "react";
import Svg, { Path } from "react-native-svg";

const RightArrow = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21.2498C17.108 21.2498 21.25 17.1088 21.25 11.9998C21.25 6.89179 17.108 2.74979 12 2.74979C6.892 2.74979 2.75 6.89179 2.75 11.9998C2.75 17.1088 6.892 21.2498 12 21.2498Z"
        fill="#3AC8B7"
        stroke="#3AC8B7"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.5576 15.471L14.0436 12L10.5576 8.52898"
        fill="#3AC8B7"
      />
      <Path
        d="M10.5576 15.471L14.0436 12L10.5576 8.52898"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default RightArrow;
