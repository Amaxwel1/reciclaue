import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FaBullseye, FaLightbulb, FaHandsHelping, FaEye } from "react-icons/fa";

function ValoresSection() {
  return (
    <Flex
      justifyContent="space-around"
      alignItems="center"
      p={10}
      bg="#509F63"
      color="white"
      mb={200}
    >
      <Box
        textAlign="center"
        width={303}
        height={333}
        bg="#F2F2F2"
        borderRadius="25px"
        p={8}
        ml={-25}
        mr={-25}
      >
        <Icon as={FaBullseye} boxSize={8} mb={4} color="black" />
        <Heading size="md" mb={2} color="black" fontFamily="inter">
          Propósito
        </Heading>
        <Text
          fontSize="medium"
          color="black"
          fontStyle="italic"
          fontFamily="inter"
        >
          "Transformar a gestão de resíduos em uma experiência simples e
          lucrativa, contribuindo para um futuro mais sustentável para pessoas e
          empresas."
        </Text>
      </Box>

      <Box
        textAlign="center"
        width={303}
        height={333}
        bg="#F2F2F2"
        borderRadius="25px"
        p={8}
        ml={-25}
        mr={-25}
      >
        <Icon as={FaLightbulb} boxSize={8} mb={4} color="black" />
        <Heading size="md" mb={2} color="black" fontFamily="inter">
          Valores
        </Heading>
        <Text
          fontSize="medium"
          color="black"
          fontStyle="italic"
          fontFamily="inter"
        >
          • Sustentabilidade
          <br />
          • Inovação
          <br />
          • Transparência
          <br />
          • Responsabilidade Social
          <br />
          • Eficiência
          <br />• Parceria
        </Text>
      </Box>

      <Box
        textAlign="center"
        width={303}
        height={333}
        bg="#F2F2F2"
        borderRadius="25px"
        p={8}
        ml={-25}
        mr={-25}
      >
        <Icon as={FaHandsHelping} boxSize={8} mb={4} color="black" />
        <Heading size="md" mb={2} color="black" fontFamily="inter">
          Missão
        </Heading>
        <Text
          fontSize="medium"
          color="black"
          fontStyle="italic"
          fontFamily="inter"
        >
          Transformar a gestão de resíduos recicláveis em uma experiência
          acessível, prática e lucrativa para condomínios e empresas, promovendo
          a sustentabilidade e contribuindo para um futuro mais verde.
        </Text>
      </Box>

      <Box
        textAlign="center"
        width={303}
        height={333}
        bg="#F2F2F2"
        borderRadius="25px"
        p={8}
        ml={-25}
        mr={-25}
      >
        <Icon as={FaEye} boxSize={8} mb={4} color="black" />
        <Heading size="md" mb={2} color="black" fontFamily="inter">
          Visão
        </Heading>
        <Text
          fontSize="medium"
          color="black"
          fontStyle="italic"
          fontFamily="inter"
        >
          Ser referência nacional em soluções de reciclagem, facilitando o
          acesso a práticas sustentáveis para todos e inspirando mudanças
          positivas no meio ambiente e na sociedade.
        </Text>
      </Box>
    </Flex>
  );
}

export default ValoresSection;
