import Layout from "../../Components/Layout";
import {
  Box,
  Flex,
  Stack,
  Text,
  Input,
  Button,
  Image,
  FormControl,
} from "@chakra-ui/react";
import images from "../../assets/images.jsx";

const Contato = () => {
  return (
    <Layout navBarBg="#5AA062">
      <Flex
        direction={["column", "row"]}
        align="center"
        justify="space-between"
        bg="white"
        maxW="1200px"
        h="fit-content"
        mx="auto"
        p={8}
        position="relative"
        borderRadius="lg"
        overflow="hidden"
      >
        <Image
          src={images.logo7}
          style={{
            width: "55%",
            position: "sticky",
            marginLeft: "-2%",
            marginBottom: "-10%",
            zIndex: "1",
          }}
        ></Image>

        <Box position="relative" maxW="400px" zIndex="1">
          <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
            Nós entramos em contato com{" "}
            <Text as="span" color="green.500">
              você
            </Text>
          </Text>

          <Stack spacing={4} zIndex="1">
            <FormControl>
              <Input
                placeholder="Insira seu nome"
                borderColor="green.500"
                focusBorderColor="green.500"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Insira seu E-mail"
                type="email"
                borderColor="green.500"
                focusBorderColor="green.500"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Insira seu WhatsApp"
                type="tel"
                borderColor="green.500"
                focusBorderColor="green.500"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>
            <FormControl>
              <Input
                placeholder="Insira seu tipo de empresa"
                borderColor="green.500"
                focusBorderColor="green.500"
                _placeholder={{ color: "gray.500" }}
              />
            </FormControl>

            <Button colorScheme="green" w="full">
              Enviar formulário
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Box>
        <Image
          src={images.meninaVoadora}
          alt="Menina Voadora"
          position="absolute"
          bottom="20%"
          right="0%"
          maxW="20%"
          zIndex="-1"
        />
      </Box>
    </Layout>
  );
};

export default Contato;
