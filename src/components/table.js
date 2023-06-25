import React from 'react';

const TableWithIframes = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '65vh',
      }}
    >
      <iframe
        src="https://player.beatstars.com/?storeId=129588"
        width="75%"
        height="500px"
      ></iframe>
    </div>
  );
};

export default TableWithIframes;