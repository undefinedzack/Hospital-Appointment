import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

//CSS
import './App.css'

//Components
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";

const App = () => {
  return(
    <>
      <Router>
        <Switch>
          {/*Auth*/}
          <Route path={'/login'} exact component={Login} />
          <Route path={'/register'} exact component={Register} />

          <Route path={'/'} exact component={Home} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
