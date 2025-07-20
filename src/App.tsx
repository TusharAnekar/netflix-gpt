import { Provider } from "react-redux";

import Body from "./Body";
import AuthProvider from "./components/AuthProvider";
import appStore from "./store";

const App = (): React.JSX.Element => (
  <Provider store={appStore}>
    <AuthProvider />
    <Body />
  </Provider>
);

export default App;
