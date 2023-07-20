import { useState } from "react";

const Form = () =>{

    const [username,setUsername] = useState("ali");
    const [email,setEmail] = useState("");
    const [password,setPassaword] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();//bunu yapmadan önce submite bastığımızda sayfa refresh oluyordu bunu yaptıktan sonra refreshten kurtulduk...bunu kaldır tekrar bakalım ne olacak... 
        console.log(e.target);
        console.log("submitted");
        alert(`username:${username},
        email:${email},
        password:${password}`);

        //preventdefault submite bastıktan sonra eski girdiler kalıyor ama biz prevent defaultu kaldırırsak eski veriler submit'e bastıktan sonra silinir. peki biz prevent default dururken silme işlemini nasıl yaparız? aşağıdaki gibi yaparız...
        setUsername("");
        setEmail("");
        setPassaword("");
    }

    const handleUsername = (e)=>{
        console.log(e.target.value);
        setUsername(e.target.value);//gelen değerle value değerini güncelle dedik

    }

    const handleEmail = (e)=>{

        setEmail(e.target.value);
    }

    const handlePassaword = (e) => {
        setPassaword(e.target.value);
        console.log(e.target.value);
    }

    return (
      <form onSubmit={handleSubmit}>
        <h1 className="display-5 text-danger">FORMS</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            UserName: <span className="text-danger">{username}</span> 
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
            value={username}
            onChange={handleUsername}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmail}//onchange={(e)=>setEmail(e.target.value)} böyle inline de yapabilirdik...
          />
        </div>
        <div className="mb-3 mt-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input 
          type="password" 
          className="form-control" 
          id="password" 
          value={password} 
          onChange={handlePassaword}
           />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
};

export default Form;

//birşey dom'a basılacaksa ve interaktif olacaksa state olması gerekir o şeyin