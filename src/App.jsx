import React, {Component} from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Topbar from "./components/topbar/topbar";
import Content from "./components/content/index.js";
import Footer from "./components/footer/index.jsx";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Topbar/>
          <Content/>
          <Footer/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
