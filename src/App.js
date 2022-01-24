import './App.css';

import Home from './pages/Home/Home.js';
import { BrowserRouter as Router} from "react-router-dom";
import store from "./redux/core/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Home/>
        </div>
      </Router>
    </Provider>
  )
}

export default App;
