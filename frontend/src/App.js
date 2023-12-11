import HomeLayout from "./layout/homeLayout/HomeLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
      <HomeLayout/>
      </Router>
      
    </div>
  );
}

export default App;
