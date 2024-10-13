import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConsolePage } from './pages/ConsolePage';
import { GoogleAdPage } from './pages/GoogleAdPage'; // Import the new page
import './App.scss';

function App() {
  return (
    <div data-component="App">
      <Router>
        <Routes>
          <Route path="/" element={<ConsolePage />} /> {/* Default route */}
          <Route path="/google-ad" element={<GoogleAdPage />} /> {/* New route for GoogleAdPage */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
