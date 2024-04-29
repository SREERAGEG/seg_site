import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.css'
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Experience } from './components/Experience/Experience';
import { Project } from './components/Projects/Project';
import { Contact } from './components/Contact/Contact';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero></Hero>
      <About></About>
      <Experience></Experience>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App
