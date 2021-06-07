import { BrowserRouter as Router, Route} from 'react-router-dom';

import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Router>
        <div>
            <Dashboard/>
        </div>
    </Router>
  );
}

export default App;
