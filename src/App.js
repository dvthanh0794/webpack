import React from "react"
import './style.scss';
import MyImage from './assets/images/img.jpg';
import Test from 'Component/Test'
import Counter from './features/counter/Counter.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const routes = [
    {
      path: "/counter",
      component: Counter
    },
    {
      path: "/test",
      component: Tacos,
      routes: [
        {
          path: "/test/1",
          component: Sub1
        },
        {
          path: "/test/2",
          component: Sub2
        }
      ]
    }
  ];

  function RouteWithSubRoutes(route) {
    return (
      <Route
        path={route.path}
        render={props => (
          // pass the sub-routes down to keep nesting
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
  }

function App() {
    return (
        <Router>
             <ul>
                <li>
                    <Link to="/test">Router</Link>
                </li>
                <li>
                    <Link to="/counter">Couter</Link>
                </li>
                </ul>
            <div>
                <Switch>
                {routes.map((route, i) => (
                    <RouteWithSubRoutes key={i} {...route} />
                ))}
                </Switch>
            </div>
        </Router>
    )}

    function Tacos({ routes }) {
        return (
            <div>
            <h2>Sub router</h2>
            <ul>
                <li>
                <Link to="/test/1">Sub router 1</Link>
                </li>
                <li>
                <Link to="/test/2">Sub router 2</Link>
                </li>
            </ul>
        
            <Switch>
                {routes.map((route, i) => (
                <RouteWithSubRoutes key={i} {...route} />
                ))}
            </Switch>
            </div>
        );
    }
    
    function Sub1() {
        return <h3>Sub router 1</h3>;
    }
    
    function Sub2() {
        return <h3>Sub router 2</h3>;
    }

export default App