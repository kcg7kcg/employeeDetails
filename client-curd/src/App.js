import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddUser from "./components/AddEmployee";
import EditUser from "./components/EditEmployee";
import UserList from "./components/EmployeeList";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import EmployeeList from "./components/EmployeeList";

const App = () => {
  return (
    <div className="App">
      <Router>
        <div className="container">
          <nav className="btn btn-warning navbar navbar-expand-lg navheader">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/create-employee"} className="nav-link">
                    Add Employee
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/employee-list"} className="nav-link">
                    Employee List
                  </Link>
                </li>
              </ul>
            </div>
          </nav>{" "}
          <br />
          <Switch>
            <Route exact path="/create-employee" component={AddEmployee} />

            <Route path="/edit/:id" component={EditEmployee} />

            <Route path="/employee-list" component={EmployeeList} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
