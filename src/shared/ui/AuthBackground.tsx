import React from 'react';

const AuthBackground: React.FC = ({children}) => {
  return (
    <div
      style={{
        backgroundColor: "#fffcee",
        minHeight: "100vh",
        width: "100%",
        display: "flex", // Flexbox 활성화
        justifyContent: "center", // 가로 방향 가운데 정렬
        alignItems: "center", // 세로 방향 가운데 정렬
      }}
    >
      {children}
    </div>
  );
};

export default AuthBackground;
