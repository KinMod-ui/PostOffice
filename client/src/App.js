import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Switch,
  BrowserRouter,
} from "react-router-dom";
import { useEffect } from "react";
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
import NotFound from './Components/NotFound';
import PrivateRoute from "./Components/routing/PrivateRoute";
import { LOGOUT } from './actions/types';

// redux stuff
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";

const App = () => {
  useEffect(() => {
    // check for token in LS when app first runs
    if (localStorage.token) {
      // if there is a token set axios headers for all requests
      setAuthToken(localStorage.token);
    }
    // try to fetch a user, if no token or invalid token we
    // will get a 401 response from our API
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener('storage', () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT });
    });
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
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
