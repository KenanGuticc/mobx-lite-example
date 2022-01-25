import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {  observer } from "mobx-react";
import React from "react";
import Register from "./pages/Register";
import Info from "./pages/Info";
import { DataStoreProvider } from "./stores/context";

const App: React.FunctionComponent<{}> = () => {

  return (
    <DataStoreProvider>
      <div className="App">
        <Register />
        <Info />
      </div>
    </DataStoreProvider>
  );
};

export default observer(App);