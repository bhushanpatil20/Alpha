import { Navbar, Container } from "../components/layout";
import Hero from "../components/common/Hero/Hero";
import Showcase from "../components/common/Showcase/Showcase";
import Footer from "../components/common/Footer/Footer";
import "../index.css";

function Home(){

return(

<>

<Navbar/>

<main>

<Hero />

<Showcase />

<Footer />

</main>

</>

);

}

export default Home;