import { BrowserRouter as Router, Route} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="container">
        <Header/>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
