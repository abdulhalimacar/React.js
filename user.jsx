import { useState, useEffect } from "react";

const User = ()=>{
  const [user, setUser] = useState(""); 

  const getUser = () => { 
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  };

  useEffect(() => {
    //componentdidmount yaptık burada...
    getUser(); 
  }, []);

  //{name && name.first}>name true ise name.first'i al = {name?.first} ikisi aynıdır
  //{name?.first?.x} name varsa firstünü getir eğer first te varsa x'i de getir dedik burada

  console.log(user);

  const { name, dob, email, picture } = user;
  return (
    <div>
      <h1>{name && name.first}</h1> 
      <img className="rounded-circle" src={picture?.large} alt="" />
      <p>{email}</p> 
      {/* <h5>{dob?.date} {dob?.age}</h5> */}
      <h5>
        {new Date(dob?.date).toLocaleDateString("ar-SA")}
      </h5>

      <button className="btn btn-warning" onClick={getUser}>
        get user
      </button>
    </div>
  );
};

export default User;

