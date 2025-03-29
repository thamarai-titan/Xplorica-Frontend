import { RecoilRoot } from "recoil";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { Nav } from "./components/Nav";
import { Title } from "./components/Title";
const App = ()=>{

  return (
    <RecoilRoot>
    <div className="dark:bg-[#161616]">
    
    <Nav/>
    <Header/>
    <Title/>
   
    <MainContent/>
 
    
    </div>
    </RecoilRoot>
  );
}
export default App
