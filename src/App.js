import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"

import VendingMachine from './VendingMachine';
import Snack from './Snacks';

/** Render App component with root */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<VendingMachine/>} />
          <Route path="/:snack" element={<Snack/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
