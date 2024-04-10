import React from "react";
import { greeting } from "../../portfolio"; // 경로에 따라 수정하세요
import "./MyComponent.css"; // 스타일 파일 import

const MyComponent = () => {
  return (
    <div>
      <h1>{greeting.username}</h1>
      <img src={process.env.PUBLIC_URL + greeting.profileImage} alt="Profile" />
    </div>
  );
};

export default MyComponent;
