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

import './i18n'

import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

function App() {

  const [ t, i18n ] = useTranslation();

  const changeLanguage2 = (lng) => {
    i18n.changeLanguage(lng)
  }

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
    const bannerLink = document.querySelector('.Main-banner-link')
    bannerLink.classList.add('active')
    const mainBannerH2 = document.querySelector('.Main-banner h2')
    mainBannerH2.classList.add('active')
    const videoBannerSkills = document.querySelector('.videoBanner-skills')
    videoBannerSkills.classList.add('active')
    
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
          arrows: true,
          auto: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          auto: true,
        }
      }]
  };
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Condor Labs</title>
        <meta 
          name="Custom Software Development Services | Web & Mobile App Solutions" 
          content="Looking for custom software development in Roskilde? We specialize in creating high-quality web and mobile applications tailored to your business needs. Boost your growth with our expert solutions in cloud computing, AI, and more. Contact us today for a free consultation!" />
          <meta name="robots" content="index, follow"></meta>
      </Helmet>
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
              {t('HeaderLink1')}
            </a>
          </li>
          <li>
            <a href={'#services'} className='Header-link'>
              {t('HeaderLink2')}
            </a>
          </li>
          <li>
            <a href={'#kontakt'} className='Header-link'>
              {t('HeaderLink3')}
            </a>
          </li>
        </ul>
        <div className='i18n'>
          <button onClick={() => changeLanguage2('dk')}>DK</button>
          <button onClick={() => changeLanguage2('en')}>EN</button>
        </div>
      </header>

      <section className='Main-banner'>
        <div className='container'>
          <h1>
            {t('BannerTitle')}
          </h1>
          <h2>
            {t('BannerSubTitle')}
          </h2>
          <a className='Main-banner-link' href="">
            {t('BannerButton')}
          </a>
          <ul class="df container videoBanner-skills">
            <li>
              <a href="/diseno-web/">
                <figure class="flex">
                  <img src="https://daniloviacava-40daf.web.app/static/img/responsive.svg" alt="" width={30} />
                  <h2>{t('ServiceUno')}</h2>
                </figure>
                <p>
                  {t('ServiceUnoDescription')}
                </p>
              </a>
            </li>
            <li>
              <a href="/portafolio/">
                <figure class="flex">
                  <img src="https://daniloviacava-40daf.web.app/static/img/profiles.svg" alt="" width={30} />
                  <h2>{t('ServiceDos')}</h2>
                </figure>
                <p>
                  {t('ServiceDosDescription')}
                </p>
              </a>
            </li>
            <li>
              <a href="/viaje-de-trabajo/">
                <figure class="flex">
                  <img src="https://daniloviacava-40daf.web.app/static/img/handshake.svg" alt="" width={30} />
                  <h2>{t('ServiceTres')}</h2>
                </figure>
                <p>
                  {t('ServiceTresDescription')}
                </p>
              </a>
            </li>
            <li>
              <a href="/imagenes-de-drones/">
                  <figure class="flex">
                    <img src="https://daniloviacava-40daf.web.app/static/img/drone.svg" alt="" width={30} />
                  <h2>{t('ServiceCuatro')}</h2>
                </figure>
                <p>
                  {t('ServiceCuatroDescription')}
                </p>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section className='Introduction' id='introduction'>
        <p className=''>
        {t('Intro')}
        </p>
      </section>

      <section className='Services' id="services">
        <h3 className='Services-h3'>{t('ServicesMainTitle')} <br/> {t('ServicesMainSubTitle')}</h3>
        <div className='container flex f-start relative'>
          <figure 
            className='Service web' 
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <img src={responsive} alt="" width="60" />
            <figcaption>
              {t('ServiceTitle')}
              <p>
              {t('ServiceTitle1')} <br/>
              {t('ServiceTitle2')} <br/>
              {t('ServiceTitle3')} <br/>
              {t('ServiceTitle4')}<br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service consultoria'
            onMouseOver={mouseEnterConsultoria}
            onMouseLeave={mouseLeaveConsultoria}>
            <img src={consultoria} alt="" width="60" />
            <figcaption>
              {t('ServiceTitleDos')}
              <p>
              {t('ServiceTitleDos1')} <br/>
              {t('ServiceTitleDos2')} <br/>
              {t('ServiceTitleDos3')} <br/>
              {t('ServiceTitleDos4')}<br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service sikkerhed'
            onMouseOver={mouseEnterSikkerhed}
            onMouseLeave={mouseLeaveSikkerhed}>
            <img src={hosting} alt="" width="60" />
            <figcaption>
              {t('ServiceTitleCuatro')}
              <p>
                {t('ServiceTitleCuatro1')} <br/>
                {t('ServiceTitleCuatro2')} <br/>
                {t('ServiceTitleCuatro3')} <br/>
                {t('ServiceTitleCuatro4')}<br/>
              </p>
            </figcaption>
          </figure>
          <figure className='Service billeder'
            onMouseOver={mouseEnterBilleder}
            onMouseLeave={mouseLeaveBilleder}>
            <img src={drone} alt="" width="60" />
            <figcaption>
              {t('ServiceTitleTres')}
              <p>
                {t('ServiceTitleTres1')} <br/>
                {t('ServiceTitleTres2')} <br/>
                {t('ServiceTitleTres3')} <br/>
                {t('ServiceTitleTres4')}<br/>
              </p>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='Portafolio'>
        <div className='container'>
          <h4 className='Portafolio-h4'>{t('PortafolioTitle')}
          </h4>
          <p className='Portafolio-p'>{t('PortafolioSubTitle')}</p>
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

      <section className='Stories'>
        <div className='container flex evenly'>
          <h4>
            {t('StoriesTitle')} <br/>
            <img src="https://daniloviacava-40daf.web.app/static/img/Fb-rates.png" alt=""/> <br/>
            <i>{t('StoriesTitleI')}</i>
          </h4>

          <div className='Stories-slider'>
            <Slider {...settings}>
              <div className='Stories-slide'>
                <h3>{t('StorieUnoH3')}</h3>
                <p>
                  {t('StorieUnoP')}
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>{t('StorieDosH3')}</h3>
                <p>
                  {t('StorieDosP')}
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>{t('StorieTresH3')}</h3>
                <p>
                  {t('StorieTresP')}
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>{t('StorieCuatroH3')}</h3>
                <p>
                  {t('StorieCuatroP')}
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>{t('StorieCincoH3')}</h3>
                <p>
                  {t('StorieCincoP')}
                </p>
              </div>
              <div className='Stories-slide'>
                <h3>{t('StorieSeisH3')}</h3>
                <p>
                  {t('StorieSeisP')}
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      <section className='Connect' id="kontakt">
        <div className='container relative'>
          <h4>{t('ContactTitle')}</h4>

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
                  placeholder={t('ContactName')} />
                <input 
                  type='text'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('ContactEmailForm')} />
                <input 
                  type='text'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('ContactPhoneForm')} />
                <input 
                  type='text'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('ContactMessageForm')}
                  className="Input-message" />
                
                <button className='button' onClick={handleData}>
                  {t('ContactButtonForm')}
                </button>
              </form>
            </div>
            <div className='Connect-info'>
              <ul>
                <li>
                  <p>
                    {t('ContactAddresse')}
                  </p>
                </li>
                <li>
                  <p>
                    {t('ContactEmail')}
                  </p>
                </li>
                <li>
                  <p>
                    {t('ContactPhone')}
                  </p>
                </li>
                <li>
                  <p>
                    {t('ContactCVR')}
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
