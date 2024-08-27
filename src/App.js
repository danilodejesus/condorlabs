'use client';
import condor from './assets/home/banner/condorlabs.png';
import responsive from './assets/home/services/responsive.jpg'
import consultoria from './assets/home/services/consultoria-tec.jpg'
import hosting from './assets/home/services/hosting.png'
import drone from './assets/home/services/drone.jpg'

import './App.css';

import Slider from "react-slick";

import { useEffect, useState } from 'react';
import { database } from './firebaseConfig';
import { ref, get, push, set } from 'firebase/database';

function App() {
  const [users, setUsers] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleData  = () => {
    try {
      const usersRef = ref(database, 'users');
      const newDataRef = push(usersRef);

      set(newDataRef, {
        name,
        email,
        phone,
        message
      });
      setName('')
      setEmail('')
      setPhone('')
      setMessage('')
      alert('Data added successfully')
    } catch (error) {
      console.error('Firebase error: ', error);
    }
  }

  useEffect(() => {
    const header = document.querySelector('.App-header')
    header.classList.add('active')
    const title = document.querySelector('.Main-banner h1')
    title.classList.add('active')


    setTimeout(() => {
      const skills = document.querySelector('.videoBanner-skills')
      skills.classList.add('active')
    }, 4000);
    
    const usersRef = ref(database, 'users');
    get(usersRef).then((snapshot) => {
      if (snapshot.exists()) {
        const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
          id,
          ...data,
        }));
        setUsers(usersArray);
      } else {
        console.log('No data available')
      }
    }).catch((error) => {
        console.error(error)
    });
  }, [])

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

  var portafolio = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    auto: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        }
      }]
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
            <a href={'#introduction'} className='Header-link'>
              Os
            </a>
          </li>
          <li>
            <a href={'#services'} className='Header-link'>
              Tjenester
            </a>
          </li>
          <li>
            <a href={'#kontakt'} className='Header-link'>
              Kontakt
            </a>
          </li>
        </ul>
      </header>

      <section className='Main-banner'>
        <div className='container'>
          <h1>
            Moment to update
          </h1>
          <h2>
            Strong and scalable systems
          </h2>
          <a className='Main-banner-link' href="">
            About us
          </a>
          <ul class="df container videoBanner-skills active">
            <li>
              <a href="/diseno-web/">
                <figure class="flex">
                  <img src="https://daniloviacava-40daf.web.app/static/img/responsive.svg" alt="" width={30} />
                  <h2>WEBDESIGN</h2>
                </figure>
                <p>Vores nøgleservice er professionelle og unikke hjemmesider. <br/>
                  <span>Tilgængelig på mobile enheder, SEO (Google) klar.</span>
                </p>
              </a>
            </li>
            <li>
              <a href="/portafolio/">
                <figure class="flex">
                  <img src="https://daniloviacava-40daf.web.app/static/img/profiles.svg" alt="" width={30} />
                  <h2>RÅDGIVNING</h2>
                </figure>
                <p>
                  Hvordan virksomheden hjælper med at optimere processer ved hjælp af avanceret teknologi.
                </p>
              </a>
            </li>
            <li>
              <a href="/viaje-de-trabajo/">
                <figure class="flex">
                  <img src="https://daniloviacava-40daf.web.app/static/img/handshake.svg" alt="" width={30} />
                  <h2>HOSTING</h2>
                </figure>
                <p>
                  Vi tilbyder avancerede webhosting- og cybersikkerhedstjenester.
                </p>
              </a>
            </li>
            <li>
              <a href="/imagenes-de-drones/">
                  <figure class="flex">
                    <img src="https://daniloviacava-40daf.web.app/static/img/drone.svg" alt="" width={30} />
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

      <section className='Introduction' id='introduction'>
        <p className=''>
        Condor Labs søger at forbinde kondorens majestæt med avanceret teknologi, <br/> 
        der fremhæver en forpligtelse til ekspertise, innovation og bæredygtighed, <br/> 
        alle vigtige værdier​​både på det teknologiske  <br/> 
        område og i Dansk Kultur.
        </p>
      </section>

      <section className='Services' id="services">
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

      <section className='Portafolio'>
        <div className='container'>
          <h4 className='Portafolio-h4'>Nuestro trabajo, es nuestra pasión.
          </h4>
          <p>Proyectos Web</p>
          <div className='Portafolio-slider'>
            <Slider {...portafolio}>
              <a href="https://profealtoque.com.pe/" target='_blank' className='Portafolio-slide'>
                <figure>
                  <div className='Portafolio-mascara'>
                    <div className='Portafolio-item-bg'></div>
                  </div>
                </figure>
              </a>
              <a href="https://millas-latam.web.app/" target='_blank' className='Portafolio-slide'>
                <figure>
                  <div className='Portafolio-mascara'>
                    <div className='Portafolio-item-bg'
                    style={{background: 'url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/millas-latam.png?alt=media&token=f0c7f428-7bf4-4d49-99fe-cf4ac7893897) center center no-repeat', backgroundSize: 'cover'}}></div>
                  </div>
                </figure>
              </a>
              <a href="http://www.clubterrazas.com.pe/" target='_blank' className='Portafolio-slide'>
                <figure>
                  <div className='Portafolio-mascara'>
                    <div className='Portafolio-item-bg'
                      style={{background: 'url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/terrazas.jpg?alt=media&token=94c03751-ab06-4e2e-89fd-33efabce4117) center center no-repeat', backgroundSize: 'cover'}}></div>
                  </div>
                </figure>
              </a>
              <a href="https://www.clinicainternacional.com.pe/" target='_blank' className='Portafolio-slide'>
                <figure>
                  <div className='Portafolio-mascara'>
                    <div className='Portafolio-item-bg'
                    style={{background: 'url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/clinicaInternacional.jpg?alt=media&token=c367036f-5b56-43b9-bf3c-aaf74ad08b95) center center no-repeat', backgroundSize: 'cover'}}></div>
                  </div>
                </figure>
              </a>
              <a href="https://www.sanpiox.edu.pe/" target='_blank' className='Portafolio-slide'>
                <figure>
                  <div className='Portafolio-mascara'>
                    <div className='Portafolio-item-bg'
                    style={{background: 'url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/sanpiox.jpg?alt=media&token=55944382-8c24-49bb-b7e3-2d1384fb72d3) center center no-repeat', backgroundSize: 'cover'}}></div>
                  </div>
                </figure>
              </a>
              <a href="https://www.canalipe.gob.pe/" target='_blank' className='Portafolio-slide'>
                <figure>
                  <div className='Portafolio-mascara'>
                    <div className='Portafolio-item-bg'
                    style={{background: 'url(https://firebasestorage.googleapis.com/v0/b/daniloviacava-40daf.appspot.com/o/canalipe.jpg?alt=media&token=a6774d89-f051-4614-bf8c-ad43b0c2d536) center center no-repeat', backgroundSize: 'cover'}}></div>
                  </div>
                </figure>
              </a>
            </Slider>
          </div>
        </div>
      </section>

      <section className='Connect' id="kontakt">
        <div className='container relative'>
          <h4>Kontakt os</h4>

          {/* <div>
            <h4>Data from realtime database</h4>
            <div>
              {users.map((user) => (
                <div key={user.id}>
                  {user.title} <br/>
                  {user.subtitle}
                </div>
              ))}
            </div>
          </div> */}

          <div className='flex'>
            <div className='Connect-form'>
              <form>
                <input 
                  type='text'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder='Navne' />
                <input 
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder='Email' />
                <input 
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder='Cellulære' />
                <input 
                  type='text'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder='Besked'
                  className='Input-message' />
                
                <button className='button' onClick={handleData}>
                  Sende
                </button>
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
