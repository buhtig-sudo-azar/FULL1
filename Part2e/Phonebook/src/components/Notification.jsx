import React from 'react';

const Notification = ({ message, type }) => {
  if (message === null) {
    return null;
  }

  const style = {
    color: type === 'success' ? 'green' : 'red',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  return <div style={style}>{message}</div>;
};

export default Notification;