import {
  Box,
  Container,
  Stack,
  Text,
  SimpleGrid,
  Flex,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { BsTwitterX, BsInstagram, BsYoutube, BsLinkedin } from "react-icons/bs";
import images from "../../assets/images.jsx";

const Footer = () => {
  return (
    <Flex
      as="footer"
      position="relative"
      backgroundImage={images.footer}
      backgroundSize="110%"
      backgroundRepeat="no-repeat"
      backgroundPosition="top"
      bottom="0"
      width="100%"
    >
      <Container maxW="7xl" paddingTop="150px">
        <Flex align="center" ml="-60px" mt={15} mb={-15}>
          <Image src={images.logo2} alt="Recicla Ué" width={250} />
        </Flex>
        <SimpleGrid columns={[1, null, 4]} spacing={130}>
          <Box>
            <Text fontWeight="bold" mb={2} fontFamily="inter">
              Endereço
            </Text>
            <Text fontFamily="inter">
              QS 07, Lote 01,
              <br />
              Taguatinga Sul - Taguatinga, Brasília - DF,
              <br />
              71966-700
            </Text>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2} fontFamily="inter">
              Menu
            </Text>
            <Stack spacing={2}>
              <Link
                to="/contato"
                style={{
                  fontFamily: "inter",
                }}
              >
                Contato
              </Link>
              <Link
                to="/"
                style={{
                  fontFamily: "inter",
                }}
              >
                Home
              </Link>
              <Link
                to="/quem-somos"
                style={{
                  fontFamily: "inter",
                }}
              >
                Quem Somos
              </Link>
              <Link
                to="/#tutorial"
                style={{
                  fontFamily: "inter",
                }}
              >
                Aprenda a reciclar
              </Link>
            </Stack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2} fontFamily="inter">
              Contato
            </Text>
            <Stack spacing={2}>
              <Flex align="center">
                <IoIosMail style={{ marginRight: "8px" }} />
                <Text fontFamily="inter">Email: reciclaue@gmail.com</Text>
              </Flex>
              <Flex align="center">
                <FaPhoneAlt style={{ marginRight: "8px" }} />
                <Text fontFamily="inter">(61) 93620-1899</Text>
              </Flex>
            </Stack>
          </Box>
          <Box>
            <Text fontWeight="bold" mb={2} fontFamily="inter">
              Redes Sociais
            </Text>
            <Stack direction="row" spacing={4}>
              <Link to="https://www.instagram.com/recicla_ue?igsh=MW9kcmtyYjQ5Z2N2YQ==">
                <BsInstagram />
              </Link>
            </Stack>
          </Box>
        </SimpleGrid>
        <Text
          mt={10}
          mb={3}
          textAlign="center"
          fontSize="sm"
          fontFamily="inter"
        >
          © 2024 Recicla Ué - Todos os direitos reservados.
        </Text>
      </Container>
    </Flex>
  );
};

export default Footer;
