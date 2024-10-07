import { useTranslations } from "next-intl";
import Title from "@/components/ui/Title";
import Text from "@/components/ui/Text";

const Hero = () => {
  // const t = useTranslations("About");

  return (
    <section className="w-container flex flex-col">
      <Title>Moje usługi</Title>
      <Text>
        Moją misją jest realizacja projektów z zakresu instalacji gazowych,
        wodnych, przemysłowych oraz klimatyzacyjnych, dbając o najwyższą jakość
        na każdym etapie prac. Specjalizuję się także w precyzyjnym spawaniu{" "}
        <Text backlight>stali nierdzewnej</Text>, <Text backlight>czarnej</Text>{" "}
        i <Text backlight>aluminium</Text>. Prace spawalnicze wykonuję zarówno u
        klienta, jak i w swoim warsztacie, zapewniając pełną elastyczność i
        wygodę. Dysponuję zaawansowanym sprzętem renomowanych marek, takich jak
        KEMPPI, ORBITALUM, HILTI, BOSCH czy MILWAUKEE, co gwarantuje najwyższą
        jakość usług. Oferuję również drobne prace tokarskie, dzięki czemu mogę
        zapewnić kompleksowe rozwiązania. Każde zlecenie traktuję z pełnym
        profesjonalizmem, ale nie zapominam przy tym o uśmiechu i dobrym
        podejściu do ludzi. Bo ciepło to nie tylko temperatura, ale też relacje!
      </Text>
    </section>
  );
};

export default Hero;
