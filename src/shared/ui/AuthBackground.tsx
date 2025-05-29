import React from 'react';

const AuthBackground: React.FC = ({children}) => {
  return (
    <div
      style={{
        backgroundColor: '#fffcee',
        minHeight: '100vh',
        width: '100%',
      }}
    >
      {children}
    </div>
  );
};

export default AuthBackground;
