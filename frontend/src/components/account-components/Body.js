import React from 'react';

function Body({children}) {
  return (
      <div className="relative min-h-screen">
        <main className="w-full min-h-screen">{children}</main>
      </div>
  );
};

export default Body;
