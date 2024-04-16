import { Fragment } from "react";
// import Atm from "./components/Atm";
import Navbar from "./components/Navbar";
import UseState from "./components/basics/UseState";
import UseEffect from "./components/basics/UseEffect";
import UseReducer from "./components/basics/UseReducer";
import UseMemo from "./components/basics/UseMemo";
import UseCallback from "./components/basics/useCallback/UseCallback";

function App() {
  return (
    <Fragment>
      <Navbar />
      <UseState />
      <UseEffect />
      <UseReducer />
      <UseMemo />
      <UseCallback />
    </Fragment>
  );
}

export default App;
