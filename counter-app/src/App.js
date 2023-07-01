import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Counter from "./components/Counter";
import Login from "./components/Login";
import Type1useEffect from "./components/Type-1-UseEffect";
import Type2useEffect from "./components/Type-2-UseEffect";
import Type3UseEffect from "./components/Type-3-UseEffect";
import Type4UseEffect from "./components/Type-4-UseEffect";
import Params from "./components/01-07-23/Params";
import SingleProduct from "./components/01-07-23/SingleProduct";
import DeclarativeWay from "./components/01-07-23/DeclarativeWay";
import Map from "./components/01-07-23/Map";
import Wrapper from "./components/01-07-23/Wrapper";
import StyledComponent from "./components/01-07-23/StyledComponent";
import { useState } from "react";

function App() {
  const [myUsers, setMyUsers] = useState(["aditya", "mitesh", "DJ"]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/styled-components" element={<StyledComponent />} />
        <Route exact path="/wrapper" element={<Wrapper />} />
        <Route
          exact
          path="/map"
          element={
            <Map
              myUsers={myUsers}
              setMyUsers={setMyUsers}
              myName={"Santosh"}
              studentList={["Nikhil", "Mahendar", "Rohan"]}
            />
          }
        />
        <Route exact path="/declarative-way" element={<DeclarativeWay />} />
        <Route
          exact
          path="/single-product/:santosh"
          element={<SingleProduct />}
        />
        <Route exact path="/params" element={<Params />} />
        <Route exact path="/type-1-useeffect" element={<Type1useEffect />} />
        <Route exact path="/type-2-useeffect" element={<Type2useEffect />} />
        <Route exact path="/type-3-useeffect" element={<Type3UseEffect />} />
        <Route exact path="/type-4-useeffect" element={<Type4UseEffect />} />
        <Route exact path="/counter" element={<Counter />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/welcome" element={<Welcome />} />
        <Route exact path="/home" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
