import ImageContainer from "./components/ImageContainer";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";
import "./tailwind.css";

function App() {
  return (
    <>
      <Navbar />
      <div className="container flex md:flex-row">
        <TextField />
        <ImageContainer />
      </div>
    </>
  );
}

export default App;
