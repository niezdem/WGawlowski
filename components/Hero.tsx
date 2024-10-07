import { useTranslations } from "next-intl";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";

const Hero = () => {
  // const t = useTranslations("Hero");

  return (
    <section className="bg-stone-900 bg-hero-pattern">
      <div className="w-container flex flex-col">
        <div className="grid gap-4 max-w-3xl">
          <Title color="text-stone-200" className="text-7xl leading-[1.125]">
            Od precyzyjnego spawu po trwałe ciepło.
          </Title>
          <Text color="text-stone-200/60">
            Nazywam się Wojciech Gawłowski i od lat doskonalę sztukę
            precyzyjnego spawania. Specjalizuję się w kompleksowych usługach
            instalacyjnych, łącząc doświadczenie z niezawodnością. Zadbam o Twój
            komfort na lata.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default Hero;
