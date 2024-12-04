import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Fitur from "./components/Fitur";
import Priview from "./components/Priview";
import Action from "./components/Action";
import Team from "./components/Team";
import Testi from "./components/Testi";
import Fotter from "./components/Fotter";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 overflow-y-hidden ">
    <Navbar/>
    <Section/>
    <Fitur/>
    <Priview/>
    <Testi/>
    <Team/>
    <Action/>
    <Fotter/>
    
    </div>
  );
}
