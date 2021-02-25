import {Route, Switch} from 'react-router-dom';
import { Main, List, Planner, Detail , About, Contact } from "./pages";

function App() {
  return (
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/List" component={List}/>
        <Route exact path="/Planner" component={Planner}/>
        <Route exact path="/Detail" component={Detail}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Contact" component={Contact}/>

      </Switch>

  );
}

export default App;
