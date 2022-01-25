import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {  observer, Provider } from "mobx-react";
import React, { useState } from "react";
import RootStore from "./stores/root.stores";
import Register from "./pages/Register";
import Info from "./pages/Info";

const App: React.FunctionComponent<{}> = () => {
  const [store] = useState(() => new RootStore());

  return (
    <Provider store={store}>
      <div className="App">
        <Register />
        <Info />
      </div>
    </Provider>
  );
};

export default observer(App);