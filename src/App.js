import logo from './logo.svg';
import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";
import File from './Project/File';
import Header from './Project/Header';
import Banner from './Project/Banner';
import Logo from './Project/Logo';
import Waitlist from './Project/Waitlist';
import Faq from './Project/Faq';
import Footer from './Project/Footer';


function App() {
  return(
    <>
      <div>
        <Header/>
        <Banner/>
        <Logo/>
        <Waitlist/>
        <File/>
        <Faq/>
        <Footer/>
      </div>
    </>
  )
}

export default App;
