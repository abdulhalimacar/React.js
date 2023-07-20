//obje ile tüm stateleri tek elde toplama yöntemi...

import { useState } from "react";

const Form2 = () => {
  const [formValues, setFormvalues] = useState({
    username:"",
    email:"",
    password:"",

  });

  const {username,email,password} = formValues;//doğrudan uesrname veya email değerini kullanmak için böyle yaptık böyle yapmasaydık formvalues.username demeliydik örneğin... 
  

  const handleSubmit = (e) => {
    e.preventDefault(); //bunu yapmadan önce submite bastığımızda sayfa refresh oluyordu bunu yaptıktan sonra refreshten kurtulduk...bunu kaldır tekrar bakalım ne olacak...
    console.log(e.target);
    console.log("submitted");
    alert(`username:${username},
        email:${email},
        password:${password}`);

    //submite bastıktan sonra girilen değerlerin sıfırlanması...
    setFormvalues({username:"",
    email:"",
    password:"",})
    
  };

  const handleForm = (e) => {

    // console.log(e.target.value);
    // console.log(e.target.id);
    setFormvalues({...formValues, [e.target.id]:e.target.value});
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
          onChange={handleForm}
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
          onChange={handleForm} //onchange={(e)=>setEmail(e.target.value)} böyle inline de yapabilirdik...
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
          onChange={handleForm}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form2;

//birşey dom'a basılacaksa ve interaktif olacaksa state olması gerekir o şeyin
