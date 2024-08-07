import condor from './assets/home/condorlabs.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header container">
        <a href="/" className='Header-logo'>
          <figure className='flex'>
            <figcaption>Condor Labs</figcaption>
            <img width="40" src={condor} alt="Condor Labs"/>
          </figure>
        </a>
        <ul className='flex'>
          <li>
            <a href="/" className='Header-link'>
              Acerca de
            </a>
          </li>
          <li>
            <a href="/" className='Header-link'>
              Servicios
            </a>
          </li>
          <li>
            <a href="/" className='Header-link'>
              Contacto
            </a>
          </li>
        </ul>
      </header>

      <section className='Main-banner'>
        <div className='container'>
          <h1>
            Alas tecnológicas para tu éxito.
          </h1>
        </div>
      </section>
    </div>
  );
}

export default App;
