import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router";
import Counter from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import Context, { ThemeContext } from "./Hooks/Context";
import UseReducer from "./Hooks/useReducer";
// import Parent from "./Hooks/UseCallback/Parent";
import UseMemo from "./Hooks/UseMemo";
import UseRef from "./Hooks/UseRef";
import Parent from "./Hooks/useImperativeHandle/Parent";
import UseLayoutEffect from "./Hooks/UseLayoutEffect";
import UseTransition from "./Hooks/UseTransition";
import UseID from "./Hooks/UseId";
import One from "./MediaQueries/One";
import { Form } from "./MediaQueries/Form";
import Navbar from "./MediaQueries/Navbar";
function App() {
  return (
    <>
      {/* <BrowserRouter>
        {" "}
        <Routes>
          <Route index element={<Home />} /> */}
      {/* <Route path="about" element={<About />} /> */}

      {/* <Route element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route> */}
      {/* 
          <Route path="concerts">
            <Route index element={<ConcertsHome />} />
            <Route path=":city" element={<City />} />
            <Route path="trending" element={<Trending />} />
          </Route> */}
      {/* </Routes>
      </BrowserRouter> */}
      {/* <Counter />
      <UseEffect/> */}
      {/* <ThemeContext.Provider  value="dark">
        <Context />
      </ThemeContext.Provider>
      <UseReducer/>
      <Parent/>
      <UseMemo/> */}
      {/* <UseRef/> */}
      {/* <Parent /> */}
      {/* <UseLayoutEffect/>
      <UseTransition/> */}
      {/* <UseID/> */}
      {/* <One/>
      <Form/> */}
      <Navbar/>
    </>
  );
}

export default App;
