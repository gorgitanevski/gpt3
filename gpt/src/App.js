import {
  Footer,
  Blog,
  Possibility,
  Features,
  WhatGP3,
  Header,
} from "./containers";

import { Cta, Brand, Navbar } from "./components";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGP3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
