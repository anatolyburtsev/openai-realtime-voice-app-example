import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';  // Import ChakraProvider
import { ConsolePage } from './pages/ConsolePage';
import { GoogleAdPage } from './pages/GoogleAdPage'; // Import the new page
import './App.scss';
import { AmazonShoppingPage } from './pages/AmazonShoppingPage';

function App() {
  return (
    <ChakraProvider> {/* Wrap the entire app with ChakraProvider */}
      <div data-component="App">
        <Router>
          <Routes>
            <Route path="/" element={<ConsolePage />} /> {/* Default route */}
            <Route path="/google-ad" element={<GoogleAdPage />} /> {/* New route for GoogleAdPage */}
            <Route path="/amzn" element={<AmazonShoppingPage/>} /> {/* New route for GoogleAdPage */}
          </Routes>
        </Router>
      </div>
    </ChakraProvider>
  );
}

export default App;
