import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  dk: {
    translation: {
      "HeaderLink1": "Os",
      "HeaderLink2": "Tjenester",
      "HeaderLink3": "Kontakt",

      "BannerTitle": "Øjeblik til at opdatere",
      "BannerSubTitle": "Stærke og skalerbare systemer",
      "BannerButton": "Os",

      "ServiceUno": "WEBDESIGN",
      "ServiceUnoDescription": "Vores nøgleservice er professionelle og unikke hjemmesider. Tilgængelig på mobile enheder, SEO (Google) klar.",
      "ServiceDos": "RÅDGIVNING",
      "ServiceDosDescription": "Hvordan virksomheden hjælper med at optimere processer ved hjælp af avanceret teknologi.",
      "ServiceTres": "HOSTING",
      "ServiceTresDescription": "Vi tilbyder avancerede webhosting- og cybersikkerhedstjenester.",
      "ServiceCuatro": "DRONE BILLEDER",
      "ServiceCuatroDescription": "Vi leverer luftfotografering og videotjenester med droner",

      "Intro": "Condor Labs søger at forbinde kondorens majestæt med avanceret teknologi, der fremhæver en forpligtelse til ekspertise, innovation og bæredygtighed, alle vigtige værdier​​både på det teknologiske område og i Dansk Kultur.",

      "ServiceTitle": "Systemudvikling",
      "ServiceTitle1": "E-handel",
      "ServiceTitle2": "Webudvikling",
      "ServiceTitle3": "Mobileapplikationer",
      "ServiceTitle4": "Wordpress-opdatering",

      "ServiceTitleDos": "Teknologirådgivning",
      "ServiceTitleDos1": "Systemintegration",
      "ServiceTitleDos2": "Softwarerådgivning",
      "ServiceTitleDos3": "Digital transformation",
      "ServiceTitleDos4": "Wordpress-opdatering",

      "ServiceTitleTres": "Drone billeder",
      "ServiceTitleTres1": "Byggeeftersyn",
      "ServiceTitleTres2": "Fotografi og video",
      "ServiceTitleTres3": "Præcision i landbruget",
      "ServiceTitleTres4": "Sikkerhed og overvågning",

      "ServiceTitleCuatro": "Hosting og sikkerhed",
      "ServiceTitleCuatro1": "Webhosting",
      "ServiceTitleCuatro2": "Penetrationstests",
      "ServiceTitleCuatro3": "24/7 Sikkerhedsovervågning",
      "ServiceTitleCuatro4": "Webapplikationssikkerhed",

      "StoriesTitle": "Meninger",
      "StoriesTitleI": "Tilfredse kunder",

      "StorieUnoH3": "Anna Bøttern",
      "StorieUnoP": "De udviklede et intuitivt og brugervenligt system til mig, jeg var i stand til at reducere tiden i mine salgsprocesser.",

      "StorieDosH3": "Henrik Larsen",
      "StorieDosP": "Opmærksomheden på detaljerne, den dybe forståelse af vores behov og evnen til at levere skalerbare løsninger til tiden var enestående. Vi kunne ikke være mere tilfredse med resultatet.",

      "StorieTresH3": "Charlotte Hansen",
      "StorieTresP": "De hjalp os med at designe og udvikle et helt skræddersyet flådestyringssystem, der giver os mulighed for at optimere vores logistik.",

      "StorieCuatroH3": "Cristina Montoro",
      "StorieCuatroP": "Vi var imponerede over den kreativitet og innovative tilgang, som Condor Labs bragte til udviklingen af ​​vores mobilapp. Ikke alene levede de op til vores forventninger, de overgik dem ved at introducere funktioner, som vi ikke havde overvejet, men som har været nøglen til succesen for vores app på markedet.",

      "StorieCincoH3": "Isak Ringheim",
      "StorieCincoP": "E-handelsplatformen, som Condor Labs udviklede til os, har transformeret den måde, vi driver forretning på online. Deres team forstod perfekt vores krav og gjorde dem til en intuitiv, hurtig og sikker løsning.",

      "StorieSeisH3": "Christian Sørensen",
      "StorieSeisP": "De hjalp os med at udvikle en mobil aftalebestillingsapp, vi har set en markant stigning i konverteringer og en forbedring af brugeroplevelsen. Jeg vil helt klart anbefale deres tjenester til enhver virksomhed, der ønsker at skille sig ud på det digitale marked.",

      "PortafolioTitle": "Vores projekter er vores passion",
      "PortafolioSubTitle": "Webprojekter",

      "ContactTitle": "Kontakt os",
      "ContactName": "Navne",
      "ContactEmailForm": "Email",
      "ContactPhoneForm": "Cellulære",
      "ContactMessageForm": "Besked",
      "ContactButtonForm": "Sende",

      "ContactAddresse": "Adresse: Tofthøjvej 18 2th",
      "ContactEmail": "Email: danilojesusv@gmail.com",
      "ContactPhone": "Cellulær: +45 60 90 22 94",
      "ContactCVR": "CVR: 44989646"


    }
  },
  en: {
    translation: {
      "HeaderLink1": "Us",
      "HeaderLink2": "Services",
      "HeaderLink3": "Contact",

      "BannerTitle": "Moment to update",
      "BannerSubTitle": "Strong and scalable systems",
      "BannerButton": "About us",

      "ServiceUno": "WEB DESIGN",
      "ServiceUnoDescription": "Our key service is professional and unique websites. Available on mobile devices, SEO (Google) ready.",

      "ServiceDos": "CONSULTING",
      "ServiceDosDescription": "How the company helps to optimize processes using advanced technology.",
      
      "ServiceTres": "HOSTING",
      "ServiceTresDescription": "We offer advanced web hosting and cyber security services.",

      "ServiceCuatro": "DRONE IMAGES",
      "ServiceCuatroDescription": "We offer advanced web hosting and cyber security services.aWe provide aerial photography and video services with drones.",

      "Intro": "Condor Labs seeks to connect the majesty of the condor with advanced technology, emphasizing a commitment to excellence, innovation and sustainability, all important values ​​both in the technological field and in Danish culture.",

      "ServiceTitle": "System development",
      "ServiceTitle1": "E-commerce",
      "ServiceTitle2": "Web development",
      "ServiceTitle3": "Mobile applications",
      "ServiceTitle4": "Wordpress update",

      "ServiceTitleDos": "Technology consulting",
      "ServiceTitleDos1": "System integration",
      "ServiceTitleDos2": "Software consulting",
      "ServiceTitleDos3": "Digital transformation",
      "ServiceTitleDos4": "Wordpress update",

      "ServiceTitleTres": "Drone images",
      "ServiceTitleTres1": "Construction inspection",
      "ServiceTitleTres2": "Photography and video",
      "ServiceTitleTres3": "Precision in agriculture",
      "ServiceTitleTres4": "Security and monitoring",

      "ServiceTitleCuatro": "Hosting y seguridad",
      "ServiceTitleCuatro1": "Web hosting",
      "ServiceTitleCuatro2": "Penetration tests",
      "ServiceTitleCuatro3": "24/7 Security Monitoring",
      "ServiceTitleCuatro4": "Web Application Security",

      "StoriesTitle": "Opinions",
      "StoriesTitleI": "Satisfied customers",

      "StorieUnoH3": "Anna Bøttern",
      "StorieUnoP": "They developed an intuitive and user-friendly system for me, I was able to reduce the time in my sales processes.",

      "StorieDosH3": "Henrik Larsen",
      "StorieDosP": "The attention to detail, deep understanding of our needs and ability to deliver scalable solutions on time was exceptional. We couldn't be happier with the result.",

      "StorieTresH3": "Charlotte Hansen",
      "StorieTresP": "They helped us design and develop a completely customized fleet management system that allows us to optimize our logistics.",

      "StorieCuatroH3": "Cristina Montoro",
      "StorieCuatroP": "We were impressed with the creativity and innovative approach that Condor Labs brought to the development of our mobile app. Not only did they meet our expectations, they exceeded them by introducing features that we hadn't considered, but which have been key to the success of our app in the marketplace.",

      "StorieCincoH3": "Isak Ringheim",
      "StorieCincoP": "The e-commerce platform that Condor Labs developed for us has transformed the way we do business online. Their team perfectly understood our requirements and turned them into an intuitive, fast and secure solution.",

      "StorieSeisH3": "Christian Sørensen",
      "StorieSeisP": "They helped us develop a mobile appointment booking app, we've seen a significant increase in conversions and an improvement in user experience. I would definitely recommend their services to any business looking to stand out in the digital market.",

      "PortafolioTitle": "Our projects are our passion",
      "PortafolioSubTitle": "Web projects",

      "ContactTitle": "Contact us",
      "ContactName": "Names",
      "ContactEmailForm": "Email",
      "ContactPhoneForm": "Phone",
      "ContactMessageForm": "Message",
      "ContactButtonForm": "Send",

      "ContactAddresse": "Addresse: Tofthøjvej 18 2th",
      "ContactEmail": "Email: danilojesusv@gmail.com",
      "ContactPhone": "Phone: +45 60 90 22 94",
      "ContactCVR": "CVR: 44989646"

    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "dk", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;