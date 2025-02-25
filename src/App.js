import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import {Education} from "./components/Education";
import {Testimonials} from "./components/Testimonials";
import {Achievements} from "./components/Achievements";



function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
        <Education />
        <Achievements />
        <Testimonials />

        <Contact />

    </div>
  );
}

export default App;
