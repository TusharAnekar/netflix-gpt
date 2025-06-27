import { Provider } from "react-redux";

import Body from "./Body";
import appStore from "./store";

const App = (): React.JSX.Element => (
  <Provider store={appStore}>
    <Body />
  </Provider>
);

export default App;
