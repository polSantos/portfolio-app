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
        <img
          width="1600"
          height="1131"
          class="img"
          src="https://wallpapercave.com/wp/wp3146629.jpg"
          srcset="https://wallpapercave.com/wp/wp3146629.jpg 800w,https://wallpapercave.com/wp/wp3146629.jpg 1200w,https://wallpapercave.com/wp/wp3146629.jpg 1600w,https://wallpapercave.com/wp/wp3146629.jpg 2400w"
          sizes="(max-width: 800px) 800px, (max-width: 1200px) 1200px, (max-width: 1600px) 1600px, (max-width: 2400px) 2400px, 1200px"
        />
        <div className="overlay">
          <h1 className="title">
            <small className="subtitle">Espacio personal de</small>Pol Santos
          </h1>
        </div>
      </header>
      <main className="App-main">
        <section className="section" id="about">
          <hr />
          <About />
        </section>
      </main>
      <ScrollButton />
    </div>
  );
}

export default App;
