import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import EmployeeList from "./components/userComponent/UserContainer";
import LoginForm from "./components/loginComponent/LoginForm";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginForm}></Route>
          <Route exact path="/dashboard" component={EmployeeList}></Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
