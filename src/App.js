import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";

function App() {
  function Home() {
    return <h1>Welcome</h1>;
  }

  function Element() {
    const { element } = useParams();

    if(isNaN(element)) {
      return ShowText(element)
    } else {
      return Number(element);
    }
  }

  function Number(number) {
    return <h1>The number is: {number}</h1>
  }

  function ShowText(text) {
    return <h1>The text is: {text}</h1>
  }

  function ChangeColor() {
     const { word, color, background } = useParams();
    return <h1 style={{color: color, backgroundColor: background}}>The word is: {word}</h1>
  }
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/:element" element={<Element />}></Route>
          <Route path="/:word/:color/:background" element={<ChangeColor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
