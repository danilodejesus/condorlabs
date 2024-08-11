import condor from './assets/home/banner/condorlabs.png';
import responsive from './assets/home/services/responsive.jpg'
import consultoria from './assets/home/services/consultoria-tec.jpg'
import hosting from './assets/home/services/hosting.png'
import drone from './assets/home/services/drone.jpg'

import './App.css';

import Slider from "react-slick";

function App() {
  const handleMouseEnter = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = "url('https://img.freepik.com/foto-gratis/experiencia-programacion-persona-que-trabaja-codigos-computadora_23-2150010125.jpg') center center no-repeat";

    const consultoria = document.querySelector('.consultoria')
    consultoria.style.opacity = '0'
    const sikkerhed = document.querySelector('.sikkerhed')
    sikkerhed.style.opacity = '0'
    const billeder = document.querySelector('.billeder')
    billeder.style.opacity = '0'
  }

  const handleMouseLeave = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = 'black';

    const consultoria = document.querySelector('.consultoria')
    consultoria.style.opacity = '1'
    const sikkerhed = document.querySelector('.sikkerhed')
    sikkerhed.style.opacity = '1'
    const billeder = document.querySelector('.billeder')
    billeder.style.opacity = '1'
  }

  const mouseEnterConsultoria = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = "url('https://assets-global.website-files.com/60c3d2d198ecc411de7f67bf/61020ab9005241c0e17a36a2_consultoria-em-tecnologia-da-informacao-o-que-e-e-quando-contratar.png') center center no-repeat";

    const consultoria = document.querySelector('.web')
    consultoria.style.opacity = '0'
    const sikkerhed = document.querySelector('.sikkerhed')
    sikkerhed.style.opacity = '0'
    const billeder = document.querySelector('.billeder')
    billeder.style.opacity = '0'
  }

  const mouseLeaveConsultoria = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = 'black';

    const consultoria = document.querySelector('.web')
    consultoria.style.opacity = '1'
    const sikkerhed = document.querySelector('.sikkerhed')
    sikkerhed.style.opacity = '1'
    const billeder = document.querySelector('.billeder')
    billeder.style.opacity = '1'
  }

  const mouseEnterSikkerhed = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = "url('https://static.vecteezy.com/system/resources/thumbnails/008/279/107/small/padlock-with-keyhole-in-data-security-on-circuit-modern-safety-digital-concept-photo.jpg') center center no-repeat";

    const consultoria = document.querySelector('.web')
    consultoria.style.opacity = '0'
    const sikkerhed = document.querySelector('.consultoria')
    sikkerhed.style.opacity = '0'
    const billeder = document.querySelector('.billeder')
    billeder.style.opacity = '0'
  }

  const mouseLeaveSikkerhed = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = 'black';

    const consultoria = document.querySelector('.web')
    consultoria.style.opacity = '1'
    const sikkerhed = document.querySelector('.consultoria')
    sikkerhed.style.opacity = '1'
    const billeder = document.querySelector('.billeder')
    billeder.style.opacity = '1'
  }

  const mouseEnterBilleder = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = "url('https://149355317.v2.pressablecdn.com/wp-content/uploads/2019/09/drones-construction-1024x768.jpg') center center no-repeat";

    const consultoria = document.querySelector('.web')
    consultoria.style.opacity = '0'
    const sikkerhed = document.querySelector('.consultoria')
    sikkerhed.style.opacity = '0'
    const billeder = document.querySelector('.sikkerhed')
    billeder.style.opacity = '0'
  }

  const mouseLeaveBilleder = () => {
    const serviceWeb = document.querySelector('.Services')
    serviceWeb.style.background = 'black';

    const consultoria = document.querySelector('.web')
    consultoria.style.opacity = '1'
    const sikkerhed = document.querySelector('.consultoria')
    sikkerhed.style.opacity = '1'
    const billeder = document.querySelector('.sikkerhed')
    billeder.style.opacity = '1'
  }

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    auto: true,
  };
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
                  <h2>WEBDESIGN</h2>
                </figure>
                <p>Vores nøgleservice er professionelle og unikke hjemmesider. <br/>
                  <span>Tilgængelig på mobile enheder, SEO (Google) klar.</span>
                </p>
              </a>
            </li>
            <li>
              <a href="/portafolio/">
                <figure class="df">
                  <h2>TEKNOLOGISK RÅDGIVNING</h2>
                </figure>
                <p>
                  Hvordan virksomheden hjælper med at optimere processer ved hjælp af avanceret teknologi.
                </p>
              </a>
            </li>
            <li>
              <a href="/viaje-de-trabajo/">
                <figure class="df">
                  <h2>HOSTING OG SIKKERHED</h2>
                </figure>
                <p>
                  Vi tilbyder avancerede webhosting- og cybersikkerhedstjenester.
                </p>
              </a>
            </li>
            <li>
              <a href="/imagenes-de-drones/">
                <figure class="df">
                  <h2>DRONE BILLEDER</h2>
                </figure>
                <p>Vi leverer luftfotografering og videotjenester med droner.
                  <span>Drone kørekort certifikater.</span>
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className='Introduction'>
        <p className=''>
        Condor Labs søger at forbinde kondorens majestæt med avanceret teknologi, <br/> 
        der fremhæver en forpligtelse til ekspertise, innovation og bæredygtighed, <br/> 
        alle vigtige værdier​​både på det teknologiske  <br/> 
        område og i Dansk Kultur.
        </p>
      </section>

      <section className='Services'>
        <div className='container flex f-start relative'>
          <figure 
            className='Service web' 
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img src={responsive} alt="" width="60" />
            <figcaption>
              Systemudvikling
              <p>
                E-handel <br/>
                Webudvikling <br/>
                Mobilapplikationer <br/>
                WordPress-opdatering<br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service consultoria'
            onMouseOver={mouseEnterConsultoria}
            onMouseLeave={mouseLeaveConsultoria}>
            <img src={consultoria} alt="" width="60" />
            <figcaption>
              Teknologirådgivning
              <p>
                Systemintegration <br/>
                Softwarerådgivning <br/>
                Digital transformation <br/>
                WordPress-opdatering<br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service sikkerhed'
            onMouseOver={mouseEnterSikkerhed}
            onMouseLeave={mouseLeaveSikkerhed}>
            <img src={hosting} alt="" width="60" />
            <figcaption>
              Hosting og sikkerhed
              <p>
                Webhosting <br/>
                Penetrationstests <br/>
                24/7 Sikkerhedsovervågning <br/>
                Webapplikationssikkerhed <br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service billeder'
            onMouseOver={mouseEnterBilleder}
            onMouseLeave={mouseLeaveBilleder}>
            <img src={drone} alt="" width="60" />
            <figcaption>
              Drone billeder
              <p>
                Byggeeftersyn <br/>
                Fotografi og video <br/>
                Præcision i landbruget <br/>
                Sikkerhed og overvågning <br/>
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='Stories'>
        <div className='container flex evenly'>
          <h4>
            Meninger <br/>
            <img src="https://daniloviacava-40daf.web.app/static/img/Fb-rates.png" alt=""/> <br/>
            <i>Tilfredse kunder</i>
          </h4>

          <div className='Stories-slider'>
            <Slider {...settings}>
              <div className='Stories-slide'>
                <h3>Anna Bøttern</h3>
                <p>
                  De udviklede et intuitivt og brugervenligt system til mig, jeg var i stand til at reducere tiden i mine salgsprocesser.
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>Henrik Larsen</h3>
                <p>
                  Opmærksomheden på detaljerne, den dybe forståelse af vores behov og evnen til at levere skalerbare løsninger til tiden var enestående. Vi kunne ikke være mere tilfredse med resultatet.
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>Charlotte Hansen</h3>
                <p>
                  De hjalp os med at designe og udvikle et helt skræddersyet flådestyringssystem, der giver os mulighed for at optimere vores logistik.
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>Cristina Montoro</h3>
                <p>
                  Vi var imponerede over den kreativitet og innovative tilgang, som Condor Labs bragte til udviklingen af ​​vores mobilapp. Ikke alene levede de op til vores forventninger, de overgik dem ved at introducere funktioner, som vi ikke havde overvejet, men som har været nøglen til succesen for vores app på markedet.
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>Isak Ringheim</h3>
                <p>
                  E-handelsplatformen, som Condor Labs udviklede til os, har transformeret den måde, vi driver forretning på online. Deres team forstod perfekt vores krav og gjorde dem til en intuitiv, hurtig og sikker løsning.
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>Christian Sørensen</h3>
                <p>
                  De hjalp os med at udvikle en mobil aftalebestillingsapp, vi har set en markant stigning i konverteringer og en forbedring af brugeroplevelsen. Jeg vil helt klart anbefale deres tjenester til enhver virksomhed, der ønsker at skille sig ud på det digitale marked.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className='Connect'>
        <div className='container relative'>
          <h4>Kontakt os</h4>
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
                    Adresse: Tofthøjvej 18 2th
                  </p>
                </li>
                <li>
                  <p>
                    Email: danilojesusv@gmail.com
                  </p>
                </li>
                <li>
                  <p>
                    Cellulær: +45 60 90 22 94
                  </p>
                </li>
                <li>
                  <p>
                    CVR: 44989646
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <footer className='Footer'>
        <div className='container flex between'>
          <div className='footer-left'>
            <div class="footer-socialNetwork">
              <a target="_blank" href="/">
                <img src="https://daniloviacava-40daf.web.app/static/img/facebookIcon.svg" alt="" width="12" />
              </a>
              <a target="_blank" href="/">
                <img src="https://daniloviacava-40daf.web.app/static/img/instagramIcon.svg" alt="" width="20" />
              </a>
              <a target="_blank" href="/">
                <img src="https://daniloviacava-40daf.web.app/static/img/whatsapp.png" alt="" width="20"/>
              </a>
            </div>
          </div>
          <div className='footer-right'>
            <p>
              Privatlivspolitik | © CondorLabs 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
