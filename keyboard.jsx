import { useState } from "react";

const Keyboard = ()=>{
    
    const [inputValue,setInputValue] = useState("");

    const go = (e) => { 

        e.target.value = e.target.value.toUpperCase();
        setInputValue(e.target.value);
    }

    const handlekeydown = (e) =>{
        console.log(e.keyCode);//klavyeden bastığımız şeyin numerik değerini görüyoruz
        //rakam girilirse engellemek istiyoruz veya şöyle yapılır:||
        if (e.keyCode>=48 && e.keyCode<=57){
            alert("number is not accepted!");
            e.preventDefault();//native davranışını engelliyoruz...prevent olmadığı zaman alert veriyor ama yine de sayıyı giriyor sayının girmesini engellemek istersek prevent koyarız
        }

        //enter'a basıldığında inputun değerini sıfırlasın...
        e.keyCode===13 && setInputValue("");
    }

    const handlepast = (e) => {
        e.target.style.border = "2px solid red";
        e.target.value += e.clipboardData.getData("text").toLowerCase()//clipboardtan gelen datayı oku ve buraya aktar dedik e.clipboarddata get data ile... += YAPARAK ÜZERİNE EKLEDİK DİKKAT! 
        e.preventDefault();//bunu yapmazsak iki kere yapıştırır ikincisi browserdan gelir... 
    }

    //kopyalamayı engelledik
    const copya = (e)=>{
        alert("you can not copy this part...!->>>>>>");
        e.preventDefault();

    }

    return (
      <div className="container text-center">
        <h1>clipboard</h1>
        <input className="form-control" type="text" onChange={go} onKeyDown={handlekeydown} value={inputValue} />
        {/*İNPUTA GİRİLEN ŞEYİ P YE YAZDIRDIK... text-start ile sola yasladık*/}

        {/* onkeydown bir tuşa basıldığında demektir
        onkeyup bir tuşa basıp bıraktıktan sonraki süreçtir*/}

        <p onCopy={copya} className="text-start mt-4" >{inputValue}</p>

        <textarea 

        className="form-control" 
        name="area" 
        id="area" 
        cols="30" 
        rows="10"
        onPaste={handlepast}>

       </textarea>
      </div>
    );
};

export default Keyboard;

//inputtan gelen elementi p de basmak/okumak istiyorum
//AFRSDECSX