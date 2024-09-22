import { Flex, Link, Image, Button, Icon } from "@chakra-ui/react";
import logo from "../../assets/images/logoNav.png";
import { IoMdLogIn } from "react-icons/io";
import PropTypes from "prop-types";

export default function Navbar({ bg = "transparent" }) {
  return (
    <Flex
      fontFamily="sans-serif"
      justifyContent={{ base: "center", md: "space-around" }}
      h={{ base: "auto", md: 20 }}
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
      mr={{ base: 0, md: 28 }}
      py={{ base: 4, md: 0 }}
      w="100%"
      bg={bg}
      zIndex={3}
      position="absolute"
    >
      <Link variant="plain" href="/">
        <Image
          src={logo}
          h={{ base: 50, md: 80 }}
          width={{ base: 50, md: 80 }}
          objectFit="contain"
          alt="Logo Recicla Ue"
          mb={{ base: 4, md: 0 }}
          ml={54}
        />
      </Link>

      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection={{ base: "column", md: "row" }}
        gap={{ base: 4, md: 24 }}
        mb={{ base: 4, md: 0 }}
        fontSize="xl"
        mr={12}
      >
        <Link variant="plain" href="/" fontWeight="bold">
          Home
        </Link>
        <Link variant="plain" href="/#tutorial" fontWeight="bold">
          Aprender a reciclar
        </Link>
        <Link variant="plain" href="/quem-somos" fontWeight="bold">
          Quem somos
        </Link>
        <Link variant="plain" href="/contato" fontWeight="bold">
          Contato
        </Link>
      </Flex>
      <Link href="/manutencao">
        <Button
          color="white"
          bg="#177027"
          fontWeight="bold"
          _hover={{
            bg: "white",
            borderColor: "white",
            color: "#177027",
          }}
          w={{ base: "full", md: "auto" }}
          px={{ base: 6, md: 8 }}
          mr={52}
        >
          <Icon p="1" as={IoMdLogIn} boxSize={6} />
          Login
        </Button>
      </Link>
    </Flex>
  );
}
Navbar.propTypes = {
  bg: PropTypes.string,
};
