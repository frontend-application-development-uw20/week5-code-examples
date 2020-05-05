import React from 'react';
import { BrowserRouter as Router, Route, Link, useParams, Switch, withRouter } from 'react-router-dom';
import './App.css';
import GithubUser from './GithubUser';
import Movies from './Movies';
import MovieDetails from './MovieDetails';

const Home = (props) => {
  console.log(props);
  return (
    <div>
      This is the home page
    </div>
  );
}

const WrappedHome = withRouter(Home);

const Dashboard = () => {
  return <div>Dashboard</div>;
}

const About = (props) => {
  return <div>About</div>;
}

const Color = () => {
  const { colorName } = useParams();
  return <div style={{ backgroundColor: colorName }}>Here's your color</div>;
}

const NotFound = () => <div>404</div>

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/color/green">Color</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </ul>

        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/about" component={About} />
          <Route path="/color/:colorName" component={Color} />
          <Route exact path="/movies" component={Movies} />
          <Route path="/movies/:imdbID" component={MovieDetails} />
          <Route path="*" component={NotFound}></Route>
        </Switch>
        {/* <WrappedHome /> */}
      </Router>
      {/* <GithubUser /> */}
    </div>
  );
}

export default App;
