import {
  AcademicCapIcon,
  BeakerIcon,
  BoltIcon,
  CloudIcon,
  FireIcon,
  TruckIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";
import Container from "./ui/Container";
import Text from "./ui/Text";
import Title from "./ui/Title";

type Certification = {
  name: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
};

const certifications: Certification[] = [
  {
    name: "Spawanie stali nierdzewnej",
    description:
      "Certyfikat DVS potwierdzający umiejętności spawania stali nierdzewnej i kwasoodpornej. Gwarancja najwyższej jakości spoin, odpornych na korozję i wysokie temperatury.",
    icon: FireIcon,
  },
  {
    name: "Spawanie stali czarnej",
    description:
      "Certyfikat DVS w zakresie spawania stali czarnej. Profesjonalne wykonanie konstrukcji stalowych, rurociągów i instalacji przemysłowych z zachowaniem najwyższych standardów.",
    icon: WrenchIcon,
  },
  {
    name: "Spawanie aluminium",
    description:
      "Certyfikat DVS dotyczący spawania aluminium. Precyzyjne łączenie lekkich i wytrzymałych konstrukcji aluminiowych, wykorzystywanych w nowoczesnych instalacjach.",
    icon: BeakerIcon,
  },
  {
    name: "Lutowanie twarde",
    description:
      "Certyfikat na lutowanie twarde metali kolorowych i innych. Umożliwia wykonywanie precyzyjnych połączeń o wysokiej wytrzymałości w instalacjach specjalistycznych.",
    icon: BoltIcon,
  },
  {
    name: "Uprawnenia F-Gazy",
    description:
      "Certyfikat F-Gazy upoważniający do pracy z czynnikami chłodniczymi. Gwarancja ekologicznego i bezpiecznego montażu oraz serwisu klimatyzacji i układów chłodniczych.",
    icon: CloudIcon,
  },
  {
    name: "Instalacje gazowe i energetyczne",
    description:
      "Świadectwa kwalifikacyjne w zakresie dozoru i eksploatacji urządzeń oraz instalacji gazowych i energetycznych. Bezpieczeństwo i profesjonalizm na każdym etapie realizacji.",
    icon: AcademicCapIcon,
  },
  {
    name: "Obsługa minikoparki",
    description:
      "Uprawnienia do prowadzenia prac ziemnych z wykorzystaniem minikoparki. Możliwość kompleksowej realizacji projektów instalacyjnych, od wykopu po montaż.",
    icon: TruckIcon,
  },
];

const CertificationCard = ({ cert }: { cert: Certification }) => (
  <div className="relative pl-12">
    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-100">
      <cert.icon className="h-6 w-6 text-amber-900" />
    </div>
    <div className="font-semibold text-gray-900">{cert.name}</div>
    <div className="mt-1 text-gray-600">{cert.description}</div>
  </div>
);

const CertificatesHeader = () => (
  <div className="mx-auto max-w-2xl lg:mx-0">
    <Title textPretty>Specjalizacje i certyfikaty</Title>
    <Text className="mt-6">
      Moje kwalifikacje potwierdzone są certyfikatami renomowanych instytucji, w
      tym Niemieckiego Stowarzyszenia Spawalniczego (DVS). Ciągłe doskonalenie
      umiejętności i zdobywanie nowych uprawnień pozwala mi podejmować się
      realizacji nawet najbardziej wymagających i skomplikowanych projektów
      technicznych w różnych branżach przemysłowych.
    </Text>
  </div>
);

const Certificates = () => {
  return (
    <Container className="mt-20 lg:mt-40">
      <CertificatesHeader />
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base/7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {certifications.map((cert) => (
          <CertificationCard key={cert.name} cert={cert} />
        ))}
      </div>
    </Container>
  );
};

export default Certificates;
