
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Nav } from "./components/Nav";
import { Title } from "./components/Title";
const App = ()=>{

  return (

    <div className="dark:bg-[#161616]">
    
    <Nav/>
    <Header/>
    <Title/>
   
    <MainContent/>
 <Footer/>
    
    </div>

  );
}
export default App
