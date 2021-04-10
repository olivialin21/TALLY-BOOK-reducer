import { BrowserRouter, Switch, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './App.css';
import Home from './pages/Home';
import Input from './pages/Input';
import Feedback from './pages/Feedback';

function App() {
  return (
    // <StoreProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/input" component={Input} />
          <Route path="/feedback" component={Feedback} />
        </Switch>
      </BrowserRouter>
    // </StoreProvider>
  );
}

export default App;
