import React from "react";
import {render} from "react-dom";

import Child from "./components/Child";
import Store from "./models/Store";

const store = new Store();

render(
  <div>
    <Child auth={store} />
  </div>,
  document.getElementById("root")
);

// playing around in the console
window.store = store;
