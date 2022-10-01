import "./App.css";
import ListPage from "./pages/listPage";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { getDataReducer } from "./redux/reducer";
const store = createStore(getDataReducer, applyMiddleware(thunk));
function App() {
  return (
    <Provider store={store}>
      <ListPage />
    </Provider>
  );
}

export default App;
