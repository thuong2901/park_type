import React from "react";

import Body from "./Body";
import Sidebar from "./Sidebar";

function Layout({ children }){
  return (
    <Body>
      <div className="flex h-screen bg-gray-200">
        <Sidebar/>

        <div className="flex flex-col flex-1 overflow-hidden">
          <main className="content">
            <section className="sm:flex-row flex flex-col flex-1">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
            </section>
          </main>
        </div>
      </div>
    </Body>
  );
};
export default Layout;
