import FooterStyle from "../../scss/footer.module.scss";

const Footer = ()=>{
    return(
        <footer>
            <p className={FooterStyle.title}>Copyright by Marcus-Felix {new Date().getFullYear()}</p>
        </footer>
    );
};

export default Footer;
