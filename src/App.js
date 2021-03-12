import './App.css';
import {Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import Views from './Components'
import store from './redux/store/'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" component={Views}/>
          </Switch>
        </Router>
      </Provider>
    </div>
    
  );
}

export default App;
