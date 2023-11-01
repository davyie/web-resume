import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import './Page.css';

export default function Page({children}) {
  return <div className="container">
    <NavBar></NavBar>
    {children}
    <Footer></Footer>
  </div>
}