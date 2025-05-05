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
import { ButtonWithClickTracking } from "./HOC/Onet/One/Button";
import { FancyTextComponent } from "./HOC/Onet/Two/TextComponent";
import { PostComponentWithData } from "./HOC/Onet/DataFetching/PostComponent";
import { PrivateComponentComponentWithAuthorization } from "./HOC/Onet/WithAuthorization/PrivateComponent";
import { LoginComponentWithTranslation } from "./HOC/Onet/LanguageSwitching/LoginComponent";
import Search from "./Functionalies/Search";
import { SearchTwo } from "./Functionalies/SearchTwo";
import Pagination from "./Functionalies/Pagination";
import SearchThree from "./Functionalies/SearchThree";
import GeoLocation from "./Functionalies/GeoLocation";
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
      {/* <Navbar />
      <div>
        <h1>HOC Example</h1>
        <ButtonWithClickTracking label="Click Me" trackingInfo="Button 1" />

        <ButtonWithClickTracking label="Click Me Too" trackingInfo="Button 2" />
      </div> */}

      {/* <div>
        <h1>Hoc Example 2</h1>
        <FancyTextComponent text="hi how are you" />
        <FancyTextComponent text="hi " />
        <PostComponentWithData />
        <PrivateComponentComponentWithAuthorization userRole="admin" />
        <PrivateComponentComponentWithAuthorization userRole="guest" />
        <LoginComponentWithTranslation />
      </div> */}

      <div>
        {/* <Search/> */}
        {/* <SearchThree/> */}
        <SearchTwo />
        {/* <GeoLocation/> */}
      </div>
    </>
  );
}

export default App;
