import { Navbar } from './components/Navbar/Navbar';
import styles from './App.module.css'
import { Hero } from './components/Navbar/Hero/Hero';

function App() {

  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero></Hero>
    </div>
  );
}

export default App
