import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
// import About from "./components/About";
import About from "./components/About";
import {  Route, Routes } from "react-router-dom";
export class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        {/* <News pageSize={6} country="in" category="business" /> */}

        <Routes>
          <Route
            path="/about"
            element={<About/>}
          ></Route>
          <Route
            path="/"
            element={<News key="general" pageSize={6} country="in" category="general" />}
          ></Route>
          <Route
            path="/business"
            element={<News key="business" pageSize={6} country="in" category="business" />}
          ></Route>
          <Route
            path="/entertainment"
            element={
              <News key="entertainment" pageSize={6} country="in" category="entertainment" />
            }
          ></Route>
          {/* <Route
            path="/general"
            element={<News key="general" pageSize={6} country="in" category="general" />}
          ></Route> */}
          <Route
            path="/health"
            element={<News key="health" pageSize={6} country="in" category="health" />}
          ></Route>
          <Route
            path="/science"
            element={<News key="science" pageSize={6} country="in" category="science" />}
          ></Route>
          <Route
            path="/sports"
            element={<News key="sports" pageSize={6} country="in" category="sports" />}
          ></Route>
          <Route
            path="/technology"
            element={<News key="technology" pageSize={6} country="in" category="technology" />}
          ></Route>
          {/* 
          <Route path="/entertainment">
            <News pageSize={6} country="in" category="entertainment" />
          </Route>
          <Route path="/general">
            <News pageSize={6} country="in" category="general" />
          </Route>
          <Route path="/health">
            <News pageSize={6} country="in" category="health" />
          </Route>
          <Route path="/science">
            <News pageSize={6} country="in" category="science" />
          </Route>
          <Route path="/sports">
            <News pageSize={6} country="in" category="sports" />
          </Route>
          <Route path="/technology">
            <News pageSize={6} country="in" category="technology" />
          </Route> */}
        </Routes>
      </>
    );
  }
}

export default App;
