import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import { reducer } from "./reducer";

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
