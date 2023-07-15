import React from "react";

import img2 from "../img/sass.png";
import "./content.css";

const Content = ()=>{
    //javascript alanı

    const imgstyle ={
        display:"Block",
        width:"300px",
        margin:"1rem auto"
    }
    return(
        //jsx alanı
        <div>
            <h2 style={{color:"red"}}>React JS</h2>{/*inline styldır bu*/}
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod pariatur corporis neque laborum quam animi, voluptatem accusantium.</p>
            <img src={img2} alt="go" width="200px"/>
            <img style={imgstyle} src={img2} alt="go2" />
            <p className="par-1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis unde delectus hic iure itaque eveniet voluptatum cumque rerum qui doloremque inventore eum molestiae similique earum voluptates, velit, odit recusandae distinctio expedita necessitatibus? Sapiente pariatur aliquid natus sunt at atque cupiditate esse molestiae. Eos corrupti rem architecto doloremque reprehenderit totam eius!</p>
        </div>
    );
};

export default Content;