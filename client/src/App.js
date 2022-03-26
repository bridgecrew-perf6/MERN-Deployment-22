import logo from './logo.svg';
import './App.css';
import { Link, Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';
import UpdatePirate from './components/UpdatePirate';
import ViewPirate from './components/ViewPirate';
import CreatePirate from './components/CreatePirate';
import DisplayAllPirates from './components/DisplayAllPirates';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Switch>
          <Route exact path="/pirates">
            <DisplayAllPirates/>
          </Route>
          <Route exact path="/pirates/new">
            <CreatePirate/>
          </Route>
          <Route exact path="/pirates/view/:id">
            <ViewPirate/>
          </Route>
          <Route exact path="/pirates/update/:id">
            <UpdatePirate/>
          </Route>
          <Route exact path="/">
            <Redirect to="pirates" />
          </Route>

        </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
