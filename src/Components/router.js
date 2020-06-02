import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Homem from "../Components/home";
import Header from "../Components/Header";
import PersonalDataView from "../Views/personalDataView";

export default function AppRouter() {
    return (
        <Router>
            <div>
                <Header />
                {/* <nav>
          <ul>
            <li>
              <Link to="/Homem">Homem</Link>
            </li>
           <li>
              <Link to="/personalData">personalData</Link>
            </li>
            <li>
              <Link to="/LookUp">LookUp</Link>
            </li>
          </ul>
        </nav> */}

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/personalData">
                        <PersonalDataView />
                    </Route>
                    <Route path="/LookUp">
                        <LookUp />
                    </Route>
                    <Route path="/Homem">
                        <Homem />
                    </Route>
                </Switch>
            </div>
        </Router>
    );

    function LookUp() {
        return <h2>l</h2>;
    }
    
        
    }
