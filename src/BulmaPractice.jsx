import { RootPage } from "./pages/Root";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { BulmaRootPage } from "./pages/BulmaRootPage";
import { AboutMe } from "./pages/AboutMe";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { Metaverse } from "./pages/projects/Metaverse";
import { Intern } from "./pages/projects/Intern";
import { Contact } from "./pages/Contact";

export function BulmaPractice() {
    return (
      
      <div>
        <Header />
      <Router>
        <Switch>
          <Route path="/" exact>
          <BulmaRootPage />
          </Route>
          <Route path="/aboutme">
          <AboutMe/>
          </Route>
          <Route path="/projectslist">
          <Projects/>
          </Route>
          <Route path="/projects/metaverse">
            <Metaverse/>
          </Route>
          <Route path="/projects/intern">
            <Intern/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </Router>
      <Footer/>
      </div>
    );
  }