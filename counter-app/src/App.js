import "./App.css";
import { useState } from "react";
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
import AllProducts2 from "./components/01-07-23/AllProducts2";
import SingleProduct2 from "./components/01-07-23/SingleProduct2";
import DynamicStyles from "./components/04-07-23/DynamicStyles";
import DynamicClasses from "./components/04-07-23/DynamicClasses";
import ChildrenProps from "./components/04-07-23/ChildrenProps";
import FormOne from "./components/06-07-23/FormOne";
import FormSingleState from "./components/08-07-23/FormSingleState";
import RenderTodos from "./components/08-07-23/RenderTodos";
import UseMemo from "./components/09-07-23/UseMemo";
import UseReducer from "./components/09-07-23/UseReducer";
import BackendProducts from "./components/11-07-23/BackendProducts";
import BackendSingleProduct from "./components/11-07-23/BackendSingleProduct";

function App() {
  const [myUsers, setMyUsers] = useState(["aditya", "mitesh", "DJ"]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/backend-single-product/:id"
          element={<BackendSingleProduct />}
        />
        <Route exact path="/backend-products" element={<BackendProducts />} />
        <Route exact path="/use-reducer" element={<UseReducer />} />
        <Route exact path="/use-memo" element={<UseMemo />} />
        <Route exact path="/render-todos" element={<RenderTodos />} />
        <Route exact path="/form-single-state" element={<FormSingleState />} />
        <Route exact path="/form-one" element={<FormOne />} />
        <Route exact path="/children-props" element={<ChildrenProps />} />
        <Route exact path="/dynamic-classes" element={<DynamicClasses />} />
        <Route exact path="/dynamic-styles" element={<DynamicStyles />} />
        <Route exact path="/all-products2" element={<AllProducts2 />} />
        <Route exact path="/single-product2/:id" element={<SingleProduct2 />} />
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
