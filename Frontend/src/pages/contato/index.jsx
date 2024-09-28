import React, { useState } from "react";
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
  useToast,
} from "@chakra-ui/react";
import images from "../../assets/images.jsx";
import emailjs from "emailjs-com";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    company: "",
  });

  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const serviceID = "service_78cc85j";
      const templateID = "ReCiclaaaaaaaaa_vy7ekdm";
      const userID = "GPvj57bPmXIJBugaz";

      const templateParams = {
        user_name: formData.name,
        user_email: formData.email,
        user_whatsapp: formData.whatsapp,
        user_company: formData.company, 
      };

      console.log(templateParams);

      const emailResponse = await emailjs.send(serviceID, templateID, templateParams, userID);

      if (emailResponse.status === 200) {
        toast({
          title: "Formulário enviado com sucesso!",
          description: "Em breve entraremos em contato com você.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      } else {
        toast({
          title: "Erro",
          description: "Houve um erro ao enviar o formulário. Tente novamente.",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "top",
        });
      }
    } catch (error) {
      console.error("Erro ao enviar o email", error);
      toast({
        title: "Erro",
        description: "Erro ao enviar o formulário. Tente novamente.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Layout navBarBg="#5AA062">
      <form onSubmit={handleSubmit}>
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
          overflow="visible"
          zIndex="2"
        >
          <Image
            src={images.logo7}
            style={{
              width: "70%",
              position: "sticky",
              marginLeft: "-6%",
              marginRight: "-30%",
              marginBottom: "-10%",
              zIndex: "1",
            }}
          ></Image>

          <Box position="relative" maxW="400px" zIndex="2" paddingBottom={-43}>
            <Text fontSize="xl" fontWeight="bold" textAlign="center" mb={4}>
              Nós entramos em contato com{" "}
              <Text as="span" color="green.500">
                você
              </Text>
            </Text>

            <Stack spacing={5} zIndex="2">
              <FormControl>
                <Input
                  name="name"
                  placeholder="Insira seu nome"
                  borderColor="green.500"
                  focusBorderColor="green.500"
                  _placeholder={{ color: "gray.500" }}
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="email"
                  placeholder="Insira seu E-mail"
                  type="email"
                  borderColor="green.500"
                  focusBorderColor="green.500"
                  _placeholder={{ color: "gray.500" }}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="whatsapp"
                  placeholder="Insira seu WhatsApp"
                  type="tel"
                  borderColor="green.500"
                  focusBorderColor="green.500"
                  _placeholder={{ color: "gray.500" }}
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                />
              </FormControl>
              <FormControl>
                <Input
                  name="company"
                  placeholder="Insira seu tipo de empresa"
                  borderColor="green.500"
                  focusBorderColor="green.500"
                  _placeholder={{ color: "gray.500" }}
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </FormControl>

              <Button type="submit" colorScheme="green" w="full">
                Enviar formulário
              </Button>
            </Stack>
          </Box>
        </Flex>
      </form>

      <Box>
        <Image
          src={images.meninaVoadora}
          alt="Menina Voadora"
          position="absolute"
          bottom="27%"
          right="0%"
          maxW="20%"
          zIndex="5"
        />
      </Box>
    </Layout>
  );
};

export default Contato;
