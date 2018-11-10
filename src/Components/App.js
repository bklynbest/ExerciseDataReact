import React, { Component } from "react";
import { Header, Footer } from "./Layouts";
import Exercises from "./Exercises";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Exercises />
        <Footer />
      </div>
    );
  }
}

export default App;
