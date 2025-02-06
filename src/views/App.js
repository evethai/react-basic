import logo from "./logo.svg";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import MyFComponent from "./Example/MyFComponent";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <MyFComponent />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Basic ReactJs to become fullstack developer</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyComponent />
      </header>
    </div>
  );
};

export default App;
