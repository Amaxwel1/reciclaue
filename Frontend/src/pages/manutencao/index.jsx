import React from "react";
import Layout from "../../Components/Layout";
import {
  Box,
  Flex,
  Stack,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import images from "../../assets/images.jsx";

const Melhoria = () => {
  return (
    <Layout navBarBg="#5AA062">
      <Flex
        direction="column"
        align="center"
        justify="center"
        bg="white"
        maxW="800px"
        h="100vh"
        mx="auto"
        p={8}
        borderRadius="lg"
      >

        <Text fontSize="2xl" fontWeight="bold" textAlign="center" mb={4}>
          Estamos passando por melhorias!
        </Text>
        
        <Text fontSize="lg" textAlign="center" mb={6}>
          Em breve, lançaremos uma nova página de login para nossos clientes.
        </Text>

        <Stack spacing={4} align="center">
          <Button colorScheme="green" size="lg">
            Fique Atento
          </Button>
        </Stack>
      </Flex>

      <Box>
        <Image
          src={images.meninaVoadora}
          alt="Menina Voadora"
          position="absolute"
          bottom="27%"
          right="0%"
          maxW="20%"
        />
      </Box>
    </Layout>
  );
};

export default Melhoria;
