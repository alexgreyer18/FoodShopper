import "../sass/styles.scss";

import Navbar from "../components/navbar";
import Topbar from "../components/topbar";
import Footer from "../components/footer";
import Slider from "../components/slider";

const Index = ()=> {
    
    return (
    <div>
        <Topbar/>
        <Navbar/>
        {/* <Slider/> */}
        <Footer/>
    </div>);
}

export default Index;