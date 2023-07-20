import "bootstrap/dist/css/bootstrap.min.css";
// import Form from "./components/forms/form";
// import Form2 from "./components/forms/form2";
import Keyboard from "./components/keyboard/keyboard";
import Mouse from "./components/mouse/mouse";



function App(){
  return(
    <div className="container mt-4 text-center">
      {/* <Form2/> */}
      {/* <Form/> */}
      {/* <Keyboard/> */}
      <Mouse/>
    </div>
  );
};

export default App;