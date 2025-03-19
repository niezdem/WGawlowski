import Container from "./ui/Container";
import Text from "./ui/Text";
import Title from "./ui/Title";

type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { label: "Lat doświadczenia w branży", value: "ponad 26" },
  { label: "Średnia długość instalacji", value: "45 metrów" },
  { label: "Zrealizowanych projektów", value: "3000+" },
];

const ServiceDescription = () => (
  <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
    <Text>
      Specjalizuję się w kompleksowym montażu instalacji przemysłowych,
      gazowych, wodnych oraz klimatyzacyjnych. Jako ekspert w dziedzinie
      spawalnictwa, realizuję projekty wymagające najwyższej precyzji i
      profesjonalizmu, zawsze dbając o najwyższą jakość wykonania i
      bezpieczeństwo instalacji.
    </Text>
    <Text size="base" className="mt-6 max-w-xl">
      Moją główną specjalnością jest precyzyjne spawanie{" "}
      <Text size="base" backlight>
        stali nierdzewnej, czarnej i aluminium
      </Text>
      , które wykonuję zarówno w warsztacie, jak i u klienta. Wykorzystuję
      najwyższej klasy sprzęt renomowanych marek: KEMPPI, ORBITALUM, HILTI,
      BOSCH, MILWAUKEE. Do prac ziemnych używam niezawodnej minikoparki YANMAR.
      Uzupełnieniem oferty jest własny warsztat tokarski, gdzie wykonuję
      spersonalizowane elementy i części, niezbędne do realizacji nietypowych
      projektów instalacyjnych. W każdym projekcie łączę techniczne
      doświadczenie z przyjaznym podejściem - bo ciepło to nie tylko
      temperatura, ale też relacje!
    </Text>
  </div>
);

const ServiceStats = ({ stats }: { stats: Stat[] }) => (
  <div className="lg:flex lg:flex-auto lg:justify-center">
    <dl className="w-64 space-y-8 xl:w-80">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col gap-y-4">
          <Title>{stat.value}</Title>
          <Text>{stat.label}</Text>
        </div>
      ))}
    </dl>
  </div>
);

const Services = () => {
  return (
    <>
      <Container className="-mt-12 sm:mt-0 xl:-mt-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <Title textPretty>Profesjonalne usługi</Title>

          <div className="mt-6 flex flex-col gap-x-8 gap-y-12 lg:flex-row">
            <ServiceDescription />
            <ServiceStats stats={stats} />
          </div>
        </div>
      </Container>
      <div className="hidden xl:block mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
        <img
          alt=""
          src="/img/service.jpg"
          className="aspect-5/3 w-full object-cover xl:rounded-3xl"
        />
      </div>
    </>
  );
};

export default Services;
