import { Provider } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Updated import
import Body from "./components/Body";
import Header from "./components/Header";
import store from "./redux/appStore";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route
              path="/"
              element={<Body />}>
              <Route
                index
                element={<MainContainer />}
              />
              <Route
                path="watch"
                element={<WatchPage />}
              />
            </Route>
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;
