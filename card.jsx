import React from "react";
import Buton from "../button/button";
import CardStyle from "../card/card.module.css";

const Card = ({language,btn,img})=>{

    /*const {language, btn, img} = props;*/  //destructure yöntemi ile yakaladık...
    return(
        <div >
            <h1 className={CardStyle.title}>{language}</h1>
            <img className={CardStyle.images} src={img} alt="go" />
            <Buton btn={btn}/>
        </div>
    );
};

export default Card;

//destructure yöntemi olmadan da direkt olarak şu şekilde de gelen bilgileri yakalayabilirdik:
// const Card = ({language, btn, img}) ekleyerek sadece bu işi bitirebilirdik  aşağıya birşey eklemeye gerek yok...











