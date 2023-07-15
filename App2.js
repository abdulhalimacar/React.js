import React from "react";
import Header from "./components/Header";
import Footer from "./components/footer";
import Content from "./components/contents";


function App() {//bu bir component tanımlamadır... 
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;

//stillendirme yapılmayacaksa <></> kullanılabilir ama styling kullanılacaksa div kullanılabilir...
