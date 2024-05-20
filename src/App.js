import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import DrawingCanvas from './components/DrawingCanvas';

// Define the App component
function App() {
  return (
    <Router>
      <Switch>
        {/* Define routes for the application */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/canvas" component={DrawingCanvas} />
      </Switch>
    </Router>
  );
}

// Export the App component
export default App;