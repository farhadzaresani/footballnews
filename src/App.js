import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import LayOut from "./Components/LayOut/LayOut";
import Home from "./Pages/Home";
import Leagues from "./Pages/Leagues";
import Matches from "./Pages/Matches";
import News from "./Pages/News";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LayOut/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/Matches" element={<Matches/>}/>
        <Route path="/News" element={<News/>}/>
        <Route path="/Leagues" element={<Leagues/>}/>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
