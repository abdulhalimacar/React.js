import Card from "./components/card/card";
import Buton from "./components/button/button";
import data from "./util/data";//bu data ismine herhangi bir isim verilebilir...

function App(){
  return(
    <div>
     {data.map((item)=>{

      const {id,language,img,btn} = item;
      return( <Card key={id} language={language} img={img} btn ={btn}/>)//key olan language değişebilir adının bir önemi yok süslü içerisinde olan valuedur
     })}
      
    </div>
  );
};

export default App;

//çektiğimiz datanın id si varsa hata almamak adına key parametrisini id ye eşitlememiz gerek...yok id yoksa o zaman item'ın yanına index diye yeni bir şey belirle ve daha sonra key parametresini index'e eşitle.... 
