import Section from "./components/Section";
import Navbar from "./components/Navbar";
import Fitur from "./components/Fitur";
import Priview from "./components/Priview";
import Action from "./components/Action";
import Team from "./components/Team";
import Testi from "./components/Testi";
import Fotter from "./components/Fotter";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50 overflow-y-hidden ">
      <Navbar />
      <Nav />
      <Section />
      <Fitur />
      <Priview />
      <Testi />
      <Team />
      <Action />
      <Fotter />

    </div>
  );
}
