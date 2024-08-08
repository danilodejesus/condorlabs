import condor from './assets/home/banner/condorlabs.png';
import responsive from './assets/home/services/responsive.jpg'
import consultoria from './assets/home/services/consultoria-tec.jpg'
import hosting from './assets/home/services/hosting.png'
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
          <p>

          </p>
        </div>
      </section>

      <section className='Introduction container'>
        <p className=''>
          Condor Labs busca conectar la majestuosidad del cóndor con la tecnología avanzada, <br/> destacando un compromiso con la excelencia, la innovación y la sostenibilidad, <br/> todos valores importantes tanto en el ámbito tecnológico  <br/> como en la cultura danesa.
        </p>
      </section>

      <section className='Services'>
        <div className='container flex f-start'>
          <figure className='Service'>
            <img src={responsive} alt="" width="60" />
            <figcaption>
              Desarrollo Web y Tecnológico
              <p>
                Desarrollo web <br/>
                Aplicaciones móviles <br/>
                Integración de sistemas <br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service'>
            <img src={consultoria} alt="" width="60" />
            <figcaption>
              Consultoría Tecnológica
              <p>
                Cómo la empresa ayuda a optimizar procesos utilizando tecnología avanzada.
              </p>
            </figcaption>
          </figure>
          <figure className='Service'>
            <img src={hosting} alt="" width="60" />
            <figcaption>
              Hosting y Seguridad
              <p>
                Alojamiento web <br/>
                Medidas de seguridad <br/>
                Verificación de seguridad <br/>
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='Stories'>
        <p>
          Comentarios de clientes satisfechos en Dinamarca (si los hay) o proyectos destacados.
        </p>
      </section>

      <section className='Connect'>
        <div className='container'>
          <h4>Contáctanos</h4>
          <div className='flex'>
            <div className='Connect-form'>
              <form>
                <input placeholder='Nombres' />
                <input placeholder='Email' />
                <input placeholder='Celular' />
                <input placeholder='Mensaje' />
              </form>
            </div>
            <div className='Connect-info'>
              <ul>
                <li>
                  <p>
                    - Dirección: Tofthøjvej 18 2th - Denmark
                  </p>
                </li>
                <li>
                  <p>
                    - Celular: +45 60 90 22 94
                  </p>
                </li>
                <li>
                  <p>
                    - CVR: 44989646
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
