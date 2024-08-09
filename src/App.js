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
              Os
            </a>
          </li>
          <li>
            <a href="/" className='Header-link'>
              Tjenester
            </a>
          </li>
          <li>
            <a href="/" className='Header-link'>
              Kontakt
            </a>
          </li>
        </ul>
      </header>

      <section className='Main-banner'>
        <div className='container'>
          <h1>
            Teknologiske vinger til din succes.
          </h1>
          <ul class="df container videoBanner-skills active">
            <li>
              <a href="/diseno-web/">
                <figure class="df">
                  <h2>DISEÑO WEB</h2>
                </figure>
                <p>Nuestro servicio clave son páginas web profesionales y únicas. <br/>
                  <span>Disponible en dispositivos móviles, listo para SEO (Google).</span>
                </p>
              </a>
            </li>
            <li>
              <a href="/portafolio/">
                <figure class="df">
                  <h2>CONSULTORÍA TECNOLÓGICA</h2>
                </figure>
                <p>
                  Cómo la empresa ayuda a optimizar procesos utilizando tecnología avanzada.
                </p>
              </a>
            </li>
            <li>
              <a href="/viaje-de-trabajo/">
                <figure class="df">
                  <h2>HOSTING Y SEGURIDAD</h2>
                </figure>
                <p>
                  Ofrecemos servicios avanzados de alojamiento web y ciberseguridad.
                </p>
              </a>
            </li>
            <li>
              <a href="/imagenes-de-drones/">
                <figure class="df">
                  <h2>IMÁGENES DE DRONES</h2>
                </figure>
                <p>Brindamos servicios de fotografía y video aéreo con drones.  <span>Certificados con licencia para conducir drones.</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className='Introduction'>
        <p className=''>
          Condor Labs busca conectar la majestuosidad del cóndor con la tecnología avanzada, <br/> destacando un compromiso con la excelencia, la innovación y la sostenibilidad, <br/> todos valores importantes tanto en el ámbito tecnológico  <br/> como en la cultura danesa.
        </p>
      </section>

      <section className='Services'>
        <div className='container flex f-start'>
          <figure className='Service'>
            <img src={responsive} alt="" width="60" />
            <figcaption>
              Desarrollo de Sistemas
              <p>
                E-commerce <br/>
                Desarrollo web <br/>
                Aplicaciones móviles <br/>
                Actualización de WordPress<br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service'>
            <img src={consultoria} alt="" width="60" />
            <figcaption>
              Consultoría Tecnológica
              <p>
                Transformación Digital <br/>
                Integración de Sistemas <br/>
                Asesoramiento en Software <br/>
                Actualización de WordPress<br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service'>
            <img src={hosting} alt="" width="60" />
            <figcaption>
              Hosting y Seguridad
              <p>
                Alojamiento web <br/>
                Pruebas de Penetración <br/>
                Monitoreo de Seguridad 24/7 <br/>
                Seguridad de Aplicaciones Web <br/>
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
