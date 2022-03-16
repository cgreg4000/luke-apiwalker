import './App.css';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import People from './components/People';
import SearchForm from './components/SearchForm';
import Planet from './components/Planet';

function App() {
  return (
    <BrowserRouter>
      <div className="App container mt-5">
        <SearchForm></SearchForm>
      
        <Switch>
          <Route exact path='/people/:id'>
            <People></People>
          </Route>
          <Route exact path='/planets/:id'>
            <Planet></Planet>
          </Route>
        </Switch>
      </div>
      
    </BrowserRouter>
    
  );
}

export default App;
