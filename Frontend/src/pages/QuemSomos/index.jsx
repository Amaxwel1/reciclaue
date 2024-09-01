import Footer from "../../components/Common/Footer";
import Navbar from "../../components/Common/Navbar";
import { Box, Flex, Text, Image, Stack, Heading } from "@chakra-ui/react";
import ValoresSection from "./cards-mvv";

const QuemSomos = () => {
  return (
    <>
      <Navbar />
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="center"
        padding={8}
        mt={-200}
        maxW="1200px"
        mx="auto"
      >
        {/* Seção da Imagem */}
        <Box
          flex="1"
          textAlign="center"
          mb={[8, 0]}
          ml={-220}
          mr={150}
          mt={300}
        >
          <Box>
            <Image
              src="./Hero2.png"
              alt="Recicla Ué"
              borderRadius="md"
              maxW="577px"
              mx="auto"
            />
          </Box>
          <Box
            width="570px"
            height="247px"
            bg="#009061"
            borderRadius="md"
            mt={4}
            position="relative"
            overflow="hidden"
            top={-120}
            left={50}
          >
            <Image
              src="./logo1.png"
              alt="Transforme seu lixo reciclável em receita"
              maxW="261px"
              position="relative"
              left="0"
              top="-5"
              m={4}
            />
            <Text
              color="Black"
              fontSize="x-large"
              fontWeight="bold"
              position="absolute"
              fontFamily="inter"
              left="260px"
              mt={55}
              top="35"
            >
              Transforme seu lixo <br /> reciclável em receita
            </Text>
          </Box>
        </Box>

        {/* Seção de Texto */}
        <Box flex="2" ml={[0, 0, 16]} mr={-220}>
          <Heading as="h2" size="lg" mb={4} textAlign="center">
            Conheça o nosso{" "}
            <Text as="span" color="green.500">
              Projeto
            </Text>
          </Heading>
          <Stack spacing={4}>
            <Text fontSize="lg">
              <Text as="strong">A Recicla Ué</Text> nasceu da constatação de que
              a gestão de resíduos recicláveis pode ser ao mesmo tempo{" "}
              <Text as="strong">sustentável</Text> e{" "}
              <Text as="strong">lucrativa</Text>. Percebemos que muitos
              condomínios e empresas enfrentam dificuldades em lidar de maneira{" "}
              <Text as="strong">eficiente</Text> e{" "}
              <Text as="strong">ecológica</Text> com seus resíduos, e não havia
              uma solução integrada e acessível no mercado para atender a essa
              demanda.
            </Text>
            <Text fontSize="lg">
              Com essa visão em mente, desenvolvemos a Recicla Ué, uma startup
              comprometida em transformar a reciclagem em algo simples e
              acessível para todos. Nos mesmos cuidamos da coleta dos resíduos
              recicláveis diretamente nos condomínios e empresas, garantindo uma
              solução prática e eficiente.
            </Text>
            <Text fontSize="lg">
              Embora estejamos nos primeiros passos, nosso{" "}
              <Text as="strong">diferencial</Text> já se destaca: entender as
              necessidades reais dos nossos futuros clientes e oferecer soluções
              tecnológicas que promovam a sustentabilidade, a economia e a
              organização.
            </Text>
            <Text fontSize="lg">
              Hoje, a Recicla Ué é uma plataforma em constante evolução,
              preparada para se adaptar às demandas de um mercado em
              transformação. Valorizamos o diálogo, dedicando tempo para
              compreender as necessidades dos nossos parceiros e{" "}
              <Text as="strong">
                construir soluções que realmente fazem a diferença
              </Text>
              .
            </Text>
            <Text fontSize="lg">
              Nosso <Text as="strong">propósito</Text> é claro:
            </Text>
            <Text as="em" fontSize="lg">
              “Transformar a gestão de resíduos em uma experiência simples e
              lucrativa, contribuindo para um futuro mais sustentável para
              pessoas e empresas.”
            </Text>
          </Stack>
        </Box>
      </Flex>
      <ValoresSection />
      <Flex
        direction={["column", "column", "row"]}
        align="center"
        justify="center"
        mt={50}
        mx="auto"
      >
        <Box alignItems="center" mb={50}>
          <Image
            src="./lixeiras.png"
            alt="Transforme seu lixo reciclável em receita"
            position="relative"
            left="2%"
          />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default QuemSomos;
