import logo from './logo.svg';
import me from './yo.JPG'
import './App.css';
import Nav from './components/Nav';
import About from './pages/about';
import ScrollButton from './components/ScrollButton'

function App() {


  return (
    <div className="App">
      <Nav />
      <header className="App-header">

      <div className="overlay">
        <h1 className="title">
          <small className="subtitle">Espacio personal de</small>Pol Santos
        </h1>
        </div>
      </header>
      <main className="App-main">
        <section className='section' id='about'>
          <hr />
          <About />
        </section>
      </main>
      <ScrollButton/>
    </div>
  );
}

export default App;
