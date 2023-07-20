import { useState } from "react";

const Mouse = ()=>{

    const [showhint, setShowhint] = useState(false);

    const [toggle,setToggle] = useState(false);

     const [CoordX, setCoordX] = useState(0); // Initialize with an initial value (0 in this case)

     const [CoordY, setCoordY] = useState(0);



    const go1 = ()=>{
        setShowhint(true);
      
    }

    const go2 = ()=>{
        setShowhint(false);
       
    }

    
    const iki = (e) =>{
        //çift tıkladığında background rengi kırmızı olsun bir kere bastığımda da yeşil olsun
        setToggle(!toggle); // toggle'ın o anki değerinin değilini aldık burada...

        toggle
          ? (e.target.className = " bg-success text-light w-50 p-4")
          : (e.target.className = " bg-danger text-light w-50 p-4");
    }

    const go4 = (e) =>{
        setCoordX(e.pageX);
        setCoordY(e.pageY);
    }
    


    return (
      <div className="container text-center d-flex flex-column align-items-center mt-4 gap-3">
        <h2 className="text-danger">MOUSE EVENTS</h2>

        <div id="todo-1" className="bg-success text-light w-50 p-4" onMouseEnter={go1} onMouseOut={go2}>
          todo item 1
        </div>

      {showhint && <p>hello</p>} 

     
        

        <div id="todo-2" className="bg-success text-light w-50 p-4" onDoubleClick={iki}>
          todo item 2
        </div>

        <div id="todo-3" className="bg-success text-light w-50 p-4">
          todo item 3
        </div>

        <p>X and Y</p>

        <p onMouseMove={go4} className="text-danger fw-bold">{CoordX}  {CoordY}</p>

      </div>
    );
};

export default Mouse;
