import { RootPage } from "./pages/Root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Profile } from "./pages/Profile";


export function BulmaPractice() {
    return (
      <Router>
        <section className="section has-background-warning-light">
          <div className="container">
            <div className="block has-text-right">
              <button className="button is-warning is-inverted is-outlined">
                ログイン
              </button>
            </div>
            <Switch>
              <Route path="/" exact>
                <RootPage />
              </Route>
              <Route path="/profile" exact>
                <Profile />
              </Route>
              <Route path="/restaurants/:restaurantId">
              </Route>
            </Switch>
          </div>
        </section>
      </Router>
    );
  }