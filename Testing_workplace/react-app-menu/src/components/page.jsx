import React,{useState} from "react"
import Navbar from "./navbar";

const Page = () => {
  const logoUrl = "https://picsum.photos/100";
  const siteName = "example.com";

  return (
    <>
      <header>
        <div>{siteName}</div>
        <img src={logoUrl} alt="logo" />
        <Navbar/>
      </header>
      <footer>подвал</footer>
    </>
  );
};

export default Page;