import {useState, useEffect} from "react";
 
 
const UseEffectHook = ()=>{

    const [count,setCount] = useState(0);

    //burada component did mount yaptık//her sayfa yenilendiğinde yani her doğumda mounting çalışır
    //fetch,async-await, localstorage,settimeout,setinterval

    //burada biz mountig ile data çekme simülasyonu yaptık:componendidmount yaptık
    // useEffect(() => {
    //   console.log("mouutn");
    //   setTimeout(()=>{
    //     alert("data fetched");
    //   },3000);


    // },[]); burada [bu dependencyi yeridir] eğer dependicy boşsa component did mount kullanılır  

    //componendidupdate yapacaz: ama burası didmount ile kullanılır: dolayısıyla dependincyinin yerinin boş olmaması lazım...
    useEffect(() => { 
      console.log("mounting+updating oldu burası artık");
      setTimeout(() => {
        alert("data fetched");
      }, 3000);
    }, [count]);
    
    

    const handleinc = ()=>{

        setCount(count+1);
    }

    return (
 
    <div className="container text-center">
        <h1 className="text-danger">useeffect</h1>
        <h3>count={count}</h3>
        <button className="btn btn-info" onClick={handleinc}>
            inc
        </button>
    </div>
  
)
};

export default UseEffectHook;
