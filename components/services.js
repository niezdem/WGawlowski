import Service from "./service";

const serviceData = [
  {
    key: 0,
    icon: "fas fa-bolt",
    heading: "Spawanie",
    text:
      "Spawanie stali nierdzewnych i kwasoodpornych, aluminium i stali czarnych. Lutowanie kolorowych metali.",
  },
  {
    key: 1,
    icon: "fas fa-wrench",
    heading: "Instalacje i serwis",
    text:
      "Instalacje przemysłowe, centralnego ogrzewania (kotłownie), ciepła technologicznego, wody lodowej i gazu. Montaż i serwis.",
  },
  {
    key: 2,
    icon: "fas fa-snowflake",
    heading: "Klimatyzacja",
    text:
      "Montaż i serwis klimatyzacji. Profesjonalne doradztwo, terminowa realizacja i najlepsze urządzenia.",
  },
];

const Services = () => (
  <div className="services_background">
    <div className="container">
      <h1>Moje usługi</h1>
      <p className="services_text">
        Celem mojej działalności jest realizacja projektów w zakresie instalacji
        gazowych, wodnych, przemysłowych oraz wszelkiego rodzaju instalacji
        klimatyzacyjnych. Zajmuję się również spawaniem stali nierdzewnych,
        czarnych i aluminium. Prace spawalnicze wykonuję u klienta i we własnym
        warsztacie. Dysponuję profesjonalnym sprzetęm renomowanych firm takich
        jak KEMPPI, ORBITALUM, HILTI, BOSCH, MILWAUKEE i innych. Wykonuję także
        drobne prace tokarskie na własnym urządzeniu.
      </p>
      <ul className="services_container">
        {serviceData.map((service) => (
          <Service
            icon={service.icon}
            heading={service.heading}
            text={service.text}
            key={service.key}
          />
        ))}
      </ul>
    </div>
  </div>
);

export default Services;
