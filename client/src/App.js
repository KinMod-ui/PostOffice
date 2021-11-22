import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
import { connect } from "react-redux";
import AccessManager from "./Components/AccessManager";
import Dashboard from "./Components/Dashboard";
import GuardTables from "./Components/GuardTables";
import Login from "./Components/Auth/Login";
import Navbar from "./Components/Navbar";
import OutgoingHandle from "./Components/OutgoingHandle";
import RecieveHistory from "./Components/RecieveHistory";
import SendData from "./Components/SendData";
import Addpackage from "./Components/Addpackage";
import SentHistory from "./Components/SentHistory";
import Alert from "./Components/Alert";
import setAuthToken from "./utils/setAuthToken";
import Register from "./Components/Register";
import packageInc from "./Components/packageInc/packageInc";
import PrivateRoute from "./Components/routing/PrivateRoute";
import PublicRoute from "./Components/routing/PublicRoute";

// redux stuff
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

const App = () => {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          <Alert />
          <Routes>
            <Route
              exact
              path="/dashboard"
              element={<PrivateRoute component={Dashboard} />}
            />
            <Route
              exact
              path="/recieveHistory"
              element={<PrivateRoute component={RecieveHistory} />}
            />
            <Route
              exact
              path="/sentHistory"
              element={<PrivateRoute component={SentHistory} />}
            />
            <Route
              exact
              path="/sendData"
              element={<PrivateRoute component={SendData} />}
            />
            <Route
              exact
              path="/guardTables"
              element={<PrivateRoute component={GuardTables} />}
            />
            <Route
              exact
              path="/outgoingHandle"
              element={<PrivateRoute component={OutgoingHandle} />}
            />
            <Route
              exact
              path="/accessManager"
              element={<PrivateRoute component={AccessManager} />}
            />
            <Route
              exact
              path="/Addpackage"
              element={<PrivateRoute component={Addpackage} />}
            />
            <Route exact path="/" element={<Login />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
