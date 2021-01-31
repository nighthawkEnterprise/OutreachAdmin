import NavBar from "./components/NavBar/NavBar";
import SimpleDesign from "./components/SimpleDesign/SimpleDesign";
import Home from "./components/HomePage/Home";
import MeetUs from "./components/MeetUs/MeetUs";
import AboutUs from "./components/AboutUsPage/AboutUs";
import Blog from "./components/BlogPage/Blog";
import Contact from "./components/ContactPage/Contact";
import Portfolio from "./components/Portfolio/PortfolioPage";
import Footer from "./components/Footer/Footer";
import SigninRegister from "./components/Forms/Form";
import dashbaord from "./components/BackendUI/dashboard/dashboard";
import inbox from "./components/BackendUI/inbox/inbox";
import payment from "./components/BackendUI/payment/payment";
import mobileApplication from "./components/BackendUI/mobileApplication/mobileApplication";
import tasks from "./components/BackendUI/task-s/tasks";
import adminAndtools from "./components/BackendUI/adminAndtools/adminAndtools";
import charts from "./components/BackendUI/charts/charts";
import settings from "./components/BackendUI/setting-s/settings";
import "./components/NavBar//NavBar.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
      </div>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/SimpleDesign" exact component={SimpleDesign} />
        <Route path="/AboutUs" exact component={AboutUs} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Portfolio" exact component={Portfolio} />
        <Route path="/MeetUs" component={MeetUs} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Footer" exact component={Footer} />
        <Route path="/signin" exact component={SigninRegister} />
        <Route path="/dashbaord" exact component={dashbaord} />
        <Route path="/inbox" exact component={inbox} />
        <Route path="/payment" exact component={payment} />
        <Route path="/mobileApplication" exact component={mobileApplication} />
        <Route path="/tasks" exact component={tasks} />
        <Route path="/adminAndtools" exact component={adminAndtools} />
        <Route path="/charts" exact component={charts} />
        <Route path="/settings" exact component={settings} />
      </Switch>
    </Router>
  );
}

export default App;
