import Layout from "../../Components/Layout/index.jsx";
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  Divider,
  Card,
  CardBody,
} from "@chakra-ui/react";

import images from "../../assets/images.jsx";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Layout navBarBg="transparent">
        <Flex
          direction="column"
          bgImage={`url(${images.bg})`}
          bgSize="cover"
          bgPosition="center"
          h="100vh"
          position="relative"
          p={{ base: 4, md: 8 }}
          alignItems="center"
          zIndex={1}
        >
          <Flex
            position="relative"
            w="90%"
            p={{ base: 4, md: 6 }}
            h={{ base: "auto", md: "75%" }}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent="center"
            top={16}
          >
            <Box
              maxW={{ base: "100%", md: "60%" }}
              w={{ base: "100%", md: "50%" }}
              h="100%"
              alignSelf="center"
              justifyContent="center"
              alignItems="center"
              p={{ base: 4, md: 6, lg: 6 }}
              display="flex"
              flexDirection="column"
              mb={{ base: 4, md: 0 }}
            >
              <Text
                fontFamily="inter"
                fontWeight="bold"
                fontSize={{ base: "sm", md: "2xl", lg: "2xl" }}
                textAlign="justify"
                w={{ base: "auto", md: "100%" }}
                overflowWrap="anywhere"
                wordBreak="break-word"
                p={{ base: 4, md: 1 }}
                mt={{ base: 2, md: 6 }}
              >
                Transforme seu lixo reciclável em receita: com a Recicla Ué,
                sustentabilidade e lucro caminham juntos.
              </Text>
              <Text
                fontFamily="inter"
                fontSize={{ base: "sm", md: "2xl", lg: "2xl" }}
                textAlign={{ base: "center", md: "justify" }}
                w={{ base: "80%", md: "100%" }}
                overflowWrap="break-word"
                wordBreak="break-word"
                mt={{ base: 2, md: 4 }}
              >
                Na <strong>Recicla Ué</strong>, acreditamos que a reciclagem
                pode ser simples, prática e acessível para todos. Nosso
                propósito é transformar a maneira como condomínios e empresas de
                diversos segmentos lidam com seus resíduos, promovendo uma
                gestão de reciclagem eficiente e sustentável.
              </Text>
              <Button
                position="relative"
                color="white"
                size={{ base: "sm", md: "md" }}
                m={{ base: 4, md: 2 }}
                w={{ base: "80%", md: "auto" }}
                bg="#177027"
                fontSize={{ base: "auto", md: "16" }}
                _hover={{
                  bg: "white",
                  borderColor: "white",
                  color: "#177027",
                }}
              >
                <Link to="/quem-somos">Quero conhecer o Recicla Ué</Link>
              </Button>
            </Box>
            <Box
              maxW={{ base: "100%", md: "40%" }}
              ml={{ base: 2, md: 0 }}
              justifyContent="center"
              alignItems="center"
              display="flex"
              alignSelf="left"
              p={{ base: 4, md: 6 }}
              flexDirection="column"
              h="100%"
            >
              <Image
                alt="mascote"
                boxSizing="content-box"
                boxSize={{ base: "20vw", md: "30vw" }}
                src={images.heroi}
                objectFit={{ sm: "contain", base: "contain", md: "cover" }}
              />
            </Box>
          </Flex>
        </Flex>
        {/* ----------------------------- PAGINA 2 -------------------------------------------- */}
        <Flex
          direction="column"
          bgColor="white"
          bgSize="cover"
          bgPosition="center"
          minH="100vh"
          h="100vh"
          position="relative"
          alignItems="center"
          pt={12}
        >
          <Text
            fontFamily="inter"
            mt="6"
            fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
            fontWeight="bold"
          >
            DIFERENCIAIS E BENEFÍCIOS
          </Text>
          <Flex width="100%" position="relative" pt={12}>
            <Image
              alt="background circles"
              src={images.circle}
              w={{ base: "60%", md: "100%" }}
              maxW="100vw"
              h="96%"
              zIndex={1}
            />
            <Box>
              <Box>
                <Image
                  alt="lixeira"
                  position="absolute"
                  top="25%"
                  left="20%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  src={images.bin}
                  boxSize="40"
                ></Image>
                <Text
                  fontFamily="inter"
                  overflow={{ base: "hidden", md: "hidden" }}
                  fontSize={{ sm: "xm", base: "xl", md: "2xl", lg: "2xl" }}
                  fontWeight="bold"
                  position="absolute"
                  top="42%"
                  left="20%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  w="80"
                >
                  Reciclagem facilitada
                </Text>
                <Divider
                  position="absolute"
                  top="45%"
                  left="18.6%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  orientation="horizontal"
                  borderColor="blackAlpha.900"
                  w="72"
                />
                <Text
                  fontFamily="inter"
                  color="blackAlpha.700"
                  fontSize={{ sm: "sm", base: "md", md: "xl", lg: "xl" }}
                  fontWeight="bold"
                  position="absolute"
                  top="60%"
                  left="20%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  w="80"
                >
                  Com o nosso site, o processo de reciclagem se torna mais fácil
                  do que nunca. Conectamos seu condomínio ou empresa a um
                  serviço de retirada de lixo reciclável.
                </Text>
              </Box>
              <Box>
                <Image
                  alt="reciclagem rentável"
                  position="absolute"
                  top="25%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  src={images.investimento}
                  boxSize="36"
                ></Image>
                <Text
                  fontFamily="inter"
                  fontSize={{ sm: "sm", base: "xl", md: "2xl", lg: "2xl" }}
                  fontWeight="bold"
                  position="absolute"
                  top="42%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  w="80"
                >
                  Lucre com reciclagem
                </Text>
                <Divider
                  position="absolute"
                  top="45%"
                  left="49%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  orientation="horizontal"
                  borderColor="blackAlpha.900"
                  w="72"
                />
                <Text
                  fontFamily="inter"
                  color="blackAlpha.700"
                  fontWeight="bold"
                  fontSize={{ sm: "sm", base: "md", md: "xl", lg: "xl" }}
                  position="absolute"
                  top="62%"
                  left="50%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  w="80"
                >
                  Garantindo que seu lixo seja encaminhado de forma segura e
                  ágil para centros de triagem especializados. Dessa forma, você
                  contribui para um meio ambiente mais limpo e sustentável, sem
                  complicações.
                </Text>
              </Box>
              <Box>
                <Image
                  alt="bola de papel"
                  position="absolute"
                  top="25%"
                  left="79%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  src={images.recicle}
                  boxSize="40"
                ></Image>
                <Text
                  fontFamily="inter"
                  fontSize={{ sm: "sm", base: "xl", md: "2xl", lg: "2xl" }}
                  fontWeight="bold"
                  position="absolute"
                  top="40%"
                  left="84%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  w="80"
                >
                  Faça parte
                </Text>
                <Divider
                  position="absolute"
                  top="43%"
                  left="78%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  orientation="horizontal"
                  borderColor="blackAlpha.900"
                  w="72"
                />
                <Text
                  fontFamily="inter"
                  color="blackAlpha.700"
                  fontWeight="bold"
                  fontSize={{ sm: "sm", base: "md", md: "xl", lg: "xl" }}
                  position="absolute"
                  top="60%"
                  left="79%"
                  transform="translate(-50%, -50%)"
                  zIndex={2}
                  w="80"
                >
                  Ao fazer parte do Recicla Ué, você não só contribui para a
                  preservação ambiental, mas também beneficia-se
                  financeiramente, fazendo com que a reciclagem se torne uma
                  atividade vantajosa.
                </Text>
              </Box>
            </Box>
          </Flex>
        </Flex>
        {/* ----------------------------- PAGINA 3 -------------------------------------------- */}
        <Flex
          bg="white"
          direction="column"
          bgImage={`url(${images.bg3})`}
          bgSize="cover"
          bgPosition="center"
          h="112vh"
          position="relative"
          p={{ base: 4, md: 8 }}
          alignItems="center"
        >
          <Text
            fontFamily="inter"
            fontSize={{ base: "1xl", md: "3xl", lg: "2xl" }}
            fontWeight="bold"
            mt={16}
            id="tutorial"
          >
            COMO RECICLAR O SEU LIXO?
          </Text>
          <Flex
            maxW="60vw"
            w="50vw"
            maxH="50%"
            h="30%"
            flexWrap="wrap"
            position="absolute"
            right={{ base: "10%", md: "50%" }}
            bottom={{ base: "30%", md: "50%" }}
          >
            <Image
              alt="mão segura garrafa"
              position="relative"
              bottom="22%"
              maxH="80%"
              boxSizing="content-box"
              boxSize={{ base: "auto", md: "15vw" }}
              src={images.moes}
              objectFit={{ sm: "contain", base: "contain", md: "cover" }}
            />
            <Text
              fontFamily="inter"
              fontWeight="bold"
              w={{ base: "40vw", md: "32vw" }}
              position="absolute"
              left="14vw"
              top="12%"
              textAlign="justify"
              fontSize="xl"
            >
              Como identificar se um lixo é reciclavel?
            </Text>
            <Text
              fontFamily="inter"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="justify"
              w={{ base: "40vw", md: "32vw" }}
              position="absolute"
              left="14vw"
              top="24%"
              pt={2}
            >
              Verifique o símbolo de reciclagem no item, o tipo de material
              (plástico, papel, vidro, metal), e se ele está limpo e de acordo
              com as diretrizes locais para determinar se é reciclável.
            </Text>
          </Flex>
          <Flex
            maxW="60vw"
            w="50vw"
            maxH="50%"
            h="30%"
            flexWrap="wrap"
            position="absolute"
            right={{ base: "10%", md: "52%" }}
            top={{ base: "30%", md: "50%" }}
          >
            <Image
              alt="mão segura garrafa de vidro"
              maxH="80%"
              boxSizing="content-box"
              boxSize={{ base: "auto", md: "18vw" }}
              src={images.moes1}
              objectFit={{ sm: "contain", base: "contain", md: "cover" }}
            />
            <Text
              fontFamily="inter"
              fontWeight="bold"
              w={{ base: "40vw", md: "32vw" }}
              position="absolute"
              left="16vw"
              bottom="14vw"
              textAlign="justify"
              fontSize="xl"
              mb={1}
            >
              Onde deixar o seu lixo reciclado?
            </Text>
            <Text
              fontFamily="inter"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="justify"
              w={{ base: "40vw", md: "32vw" }}
              position="absolute"
              left="16vw"
              top="19%"
            >
              <strong>Em casa:</strong> Coloque o lixo reciclável em sacos
              separados por tipo de material e deixe-os em um local de fácil
              acesso para a coleta seletiva.
              <br />
              <strong>Em condominios:</strong> Deposite o lixo reciclável nos
              recipientes específicos para cada material, geralmente localizados
              nas áreas de descarte ou ecopontos do condomínio.
            </Text>
          </Flex>

          <Flex
            maxW="60vw"
            w="50vw"
            maxH="50%"
            h="30%"
            flexWrap="wrap"
            position="absolute"
            bottom={{ base: "90%", md: "40%" }}
            left={{ base: "10%", md: "49.3%" }}
          >
            <Text
              fontFamily="inter"
              fontWeight="bold"
              w={{ base: "40vw", md: "32vw" }}
              position="absolute"
              right="16vw"
              top="8%"
              textAlign="justify"
              fontSize="xl"
            >
              Como separar devidamente o seu lixo reciclado?
            </Text>
            <Text
              fontFamily="inter"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="justify"
              w={{ base: "40vw", md: "32vw" }}
              position="absolute"
              right="16vw"
              top="24%"
            >
              Para separar devidamente o lixo reciclável, organize-o por tipo de
              material (plástico, papel, vidro, metal), assegure-se de que
              estejam limpos e secos, e siga as diretrizes locais de descarte,
              incluindo a utilização de recipientes adequados para cada
              categoria.
            </Text>
            <Image
              alt="mão segura papel"
              position="relative"
              left="68.4%"
              bottom="14%"
              maxH="100%"
              boxSizing="content-box"
              boxSize={{ base: "auto", md: "16vw" }}
              src={images.moes2}
              objectFit={{ sm: "contain", base: "contain", md: "contain" }}
            />
          </Flex>
          <Flex
            maxW="60vw"
            w="50vw"
            maxH="50%"
            h="30%"
            flexWrap="wrap"
            position="absolute"
            bottom={{ base: "40%", md: "6%" }}
            left={{ base: "10%", md: "49.4%" }}
          >
            <Text
              fontFamily="inter"
              fontWeight="bold"
              w={{ base: "40vw", md: "32vw" }}
              position="absolute"
              right="16vw"
              top="6%"
              textAlign="justify"
              fontSize="xl"
            >
              Quem coleta o meu lixo e para onde vai?
            </Text>
            <Text
              fontFamily="inter"
              fontSize={{ base: "sm", md: "md", lg: "lg" }}
              textAlign="justify"
              w={{ sm: "50vw", base: "40vw", md: "32vw" }}
              position="absolute"
              right="16vw"
              top="22%"
            >
              O lixo reciclável é coletado por empresas de coleta seletiva ou
              cooperativas de reciclagem e levado a centros de triagem, onde é
              separado e encaminhado para indústrias que reutilizam os
              materiais.
            </Text>
            <Image
              alt="mão segura lata"
              position="relative"
              left="76.3%"
              boxSize={{ base: "auto", md: "12vw" }}
              src={images.moes3}
              objectFit={{ sm: "contain", base: "contain", md: "inherit" }}
            ></Image>
          </Flex>
        </Flex>
        {/* ----------------------------- PAGINA 3 -------------------------------------------- */}

        <Flex
          bg="white"
          direction="column"
          maxH="100%"
          h="100%"
          position="relative"
          alignItems="center"
        >
          <Image
            alt="garrafa pet"
            src={images.pet}
            boxSize="22vw"
            position="relative"
            right="24%"
            bottom="10%"
          />
          <Image
            alt="bola de papel"
            src={images.ball}
            boxSize="10vw"
            position="relative"
            bottom="18%"
            left="8%"
          />
          <Flex
            justifyContent="center"
            w="100%"
            position="relative"
            bottom={20}
          >
            <Box maxW="45%" alignSelf="center">
              <Text
                fontFamily="inter"
                fontWeight="bold"
                w={{ base: "40vw", md: "70%" }}
                textAlign="justify"
                fontSize="2xl"
                mb={2}
                mx={18}
              >
                O que é Reciclagem?
              </Text>
              <Text
                fontFamily="inter"
                fontSize="xl"
                textAlign="justify"
                w={{ sm: "50vw", base: "40vw", md: "70%" }}
                mx={18}
              >
                Reciclagem é o processo de coletar, separar e transformar
                materiais descartados, como plástico, papel, vidro e metal, em
                novos produtos ou matérias-primas, reduzindo assim o consumo de
                recursos naturais, economizando energia e diminuindo o impacto
                ambiental causado pelo lixo.
              </Text>
            </Box>
            <Box
              maxW="50%"
              display="flex"
              flexDirection="column"
              alignItems="end"
            >
              <Text
                fontFamily="inter"
                fontWeight="bold"
                w={{ base: "40vw", md: "70%" }}
                textAlign="left"
                fontSize="2xl"
                mb={4}
                mx={18}
              >
                Para que serve a reciclagem?
              </Text>
              <Text
                fontFamily="inter"
                fontSize="xl"
                textAlign="justify"
                w={{ sm: "50vw", base: "40vw", md: "70%" }}
                mx={18}
              >
                Verifique o símbolo de reciclagem no item, o tipo de material
                (plástico, papel, vidro, metal), e se ele está limpo e de acordo
                com as diretrizes locais para determinar se é reciclável.
              </Text>
            </Box>
          </Flex>
        </Flex>
        {/* ----------------------------- PAGINA 4 -------------------------------------------- */}
        <Flex
          bg="white"
          direction="column"
          alignItems="center"
          h="100vw"
          position="relative"
        >
          <Image
            alt="bola de papel"
            src={images.ball}
            objectFit={{ sm: "contain", base: "contain", md: "cover" }}
            boxSize={{ base: "auto", md: "16vw" }}
            position="relative"
            bottom="10%"
          />

          <Image
            alt="cesto com lixo"
            src={images.cesto}
            objectFit={{ sm: "contain", base: "contain", md: "contain" }}
            boxSize={{ base: "auto", md: "32%" }}
            position="relative"
            bottom="16%"
            zIndex={2}
            mt={20}
          />
          <Image
            alt="background quadrado"
            src={images.square}
            objectFit={{ sm: "contain", base: "contain", md: "fill" }}
            boxSize={{ base: "auto", md: "90%" }}
            position="relative"
            maxH="62%"
            bottom="26%"
          />

          <Flex
            position="absolute"
            top="32%"
            justifyContent="center"
            wrap="wrap"
            gap={16}
            maxW="90%"
            maxH="45%"
            mt={20}
          >
            <Card
              borderRadius={16}
              zIndex="3"
              bg="transparent"
              w="40vw"
              maxW="45vw"
              maxH="20vw"
              h="20vw"
              borderStyle="solid"
              borderColor="#001AFF"
              borderWidth={1}
              mr={1}
              ml={6}
            >
              <CardBody display="flex" alignItems="center" h="30%">
                <Box display="flex" flexDir="column" alignItems="center">
                  <Image
                    alt="papelões"
                    objectFit={{
                      sm: "contain",
                      base: "contain",
                      md: "cover",
                    }}
                    boxSize="90%"
                    src={images.papeloes}
                  />
                  <Text fontFamily="inter" fontSize="4xl">
                    PAPEL
                  </Text>
                </Box>

                <Divider
                  orientation="vertical"
                  borderColor="blackAlpha.900"
                  borderWidth="1px"
                  mx={4}
                />

                <Box
                  display="flex"
                  flexDir="column"
                  h="100%"
                  justifyContent="space-evenly"
                >
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    pt={1}
                  >
                    PODE
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    ml={4}
                  >
                    Folhas em geral - Cardernos usados - Livros - Jornais -
                    Revistas - Papelão - Embalagens de papel
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    pb={1}
                    pt={2}
                  >
                    NÃO PODE
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    ml={4}
                  >
                    Lenços - Guardanapos - Papel higiênico - Fotografias -
                    Papeis sujos com óleo e graxas
                  </Text>
                </Box>
              </CardBody>
            </Card>

            <Card
              ml={1}
              mr={6}
              borderRadius={16}
              zIndex="3"
              bg="transparent"
              w="40vw"
              maxW="45vw"
              maxH="20vw"
              h="20vw"
              borderStyle="solid"
              borderColor="#DBFF00"
              borderWidth={1}
            >
              <CardBody display="flex" alignItems="center" h="30%">
                <Box display="flex" flexDir="column" alignItems="center">
                  <Image
                    alt="metais"
                    objectFit={{ sm: "contain", base: "contain", md: "fill" }}
                    boxSize="90%"
                    src={images.metal}
                  />
                  <Text fontFamily="inter" fontSize="4xl">
                    METAL
                  </Text>
                </Box>

                <Divider
                  orientation="vertical"
                  borderColor="blackAlpha.900"
                  borderWidth="1px"
                  mx={4}
                />

                <Box
                  display="flex"
                  flexDir="column"
                  h="100%"
                  justifyContent="space-evenly"
                >
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    pb={1}
                  >
                    PODE
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    ml={4}
                  >
                    Latas - Alumínio - Clipes - Talheres de metal
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    pb={1}
                    pt={2}
                  >
                    NÃO PODE
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    ml={4}
                  >
                    Embalagens de tintas e produtos químicos - pilhas - batérias
                    - embalagens contaminadas
                  </Text>
                </Box>
              </CardBody>
            </Card>

            <Card
              mr={1}
              ml={6}
              borderRadius={16}
              zIndex="3"
              bg="transparent"
              w="40vw"
              maxW="45vw"
              maxH="20vw"
              h="20vw"
              borderStyle="solid"
              borderColor="#FF0000"
              borderWidth={1}
            >
              <CardBody display="flex" alignItems="center" h="30%">
                <Box display="flex" flexDir="column" alignItems="center">
                  <Image
                    alt="plástico"
                    objectFit={{ sm: "contain", base: "contain", md: "fill" }}
                    boxSize="90%"
                    src={images.plasticos}
                  />
                  <Text pt={10} fontFamily="inter" fontSize="4xl">
                    PLASTICO
                  </Text>
                </Box>

                <Divider
                  orientation="vertical"
                  borderColor="blackAlpha.900"
                  borderWidth="1px"
                  mx={4}
                />

                <Box
                  display="flex"
                  flexDir="column"
                  h="100%"
                  justifyContent="space-evenly"
                >
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    pb={1}
                  >
                    PODE
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    ml={4}
                  >
                    Sacolas limpas - Garrafas PET - Embalagens de produto de
                    limpeza - frascos de cosméticos
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    pb={1}
                    pt={2}
                  >
                    NÃO PODE
                  </Text>
                  <Text
                    fontFamily="inter"
                    fontSize="xl"
                    textAlign="left"
                    ml={4}
                  >
                    Fita adesiva - embalagens de biscoito e salgadinhos
                  </Text>
                </Box>
              </CardBody>
            </Card>
            <Card
              ml={1}
              mr={6}
              borderRadius={16}
              zIndex="3"
              bg="transparent"
              w="40vw"
              maxW="45vw"
              maxH="20vw"
              h="20vw"
              borderStyle="solid"
              borderColor="#00FF0A"
              borderWidth={1}
            >
              <CardBody display="flex" alignItems="center" h="30%">
                <Box display="flex" flexDir="column" alignItems="center">
                  <Image
                    alt="vidros"
                    objectFit={{ sm: "contain", base: "contain", md: "fill" }}
                    boxSize="90%"
                    src={images.vidro}
                  />
                  <Text fontFamily="inter" fontSize="4xl">
                    VIDRO
                  </Text>
                </Box>

                <Divider
                  orientation="vertical"
                  borderColor="blackAlpha.900"
                  borderWidth="1px"
                  mx={4}
                />

                <Box
                  display="flex"
                  flexDir="column"
                  h="100%"
                  justifyContent="space-evenly"
                >
                  <Text fontSize="xl" textAlign="left" pb={1}>
                    PODE
                  </Text>
                  <Text fontSize="xl" textAlign="left" ml={4}>
                    Garrafas de bebidas - potes de vidro - todos os tipos de
                    embalagens de vidro
                  </Text>
                  <Text fontSize="xl" textAlign="left" pb={1} pt={2}>
                    NÃO PODE
                  </Text>
                  <Text fontSize="xl" textAlign="left" ml={4}>
                    Espelho - Cerâmica
                  </Text>
                </Box>
              </CardBody>
            </Card>
          </Flex>
        </Flex>
        {/* ----------------------------- PAGINA 5 -------------------------------------------- */}
        <Flex
          alignItems="center"
          flexDir="column"
          w="85%"
          mx="auto"
          justifySelf="center"
          mb={28}
        >
          <Image
            alt="logo recicla ué"
            src={images.logo}
            objectFit={{ sm: "contain", base: "contain", md: "contain" }}
            boxSize="12%"
          />
          <Text fontSize="4xl" fontWeight="bold" textAlign="left" pb={1} pt={4}>
            Dúvidas Frequentes
          </Text>
          <Box w="80%" mt={16}>
            <Text
              textAlign="left"
              fontSize="xl"
              h="auto"
              bg="#D9D9D9"
              borderRadius={6}
              p={1}
            >
              • Como realizar a reciclagem?
            </Text>
            <Text ml={6} my={4} textAlign="left" fontSize="xl" h="auto">
              O produto deverá ser reciclável. Depois deve ser descartado
              corretamente para o destino na coleta seletiva. Cada material tem
              seu processo de reciclagem.
            </Text>
            <Text
              textAlign="left"
              fontSize="xl"
              h="auto"
              bg="#D9D9D9"
              borderRadius={6}
              p={1}
            >
              • Qual a importância dos catadores para a reciclagem?
            </Text>
            <Text ml={6} my={4} textAlign="left" fontSize="xl" h="auto">
              Os catadores são os que organizam os materiais para a reciclagem.
              Eles coletam, separam, transportam e acondicionam. Portanto é uma
              das profissões essenciais para que o processo de reciclagem
              funcione bem no país.
            </Text>
            <Text
              textAlign="left"
              fontSize="xl"
              h="auto"
              bg="#D9D9D9"
              borderRadius={6}
              p={1}
            >
              • Posso misturar diferentes tipos de materiais recicláveis no
              mesmo recipiente?
            </Text>
            <Text ml={6} my={4} textAlign="left" fontSize="xl" h="auto">
              Não misture nenhum dos materiais, sempre separe os materiais em
              diferentes recipientes para uma coleta mais eficiente.
            </Text>
            <Text
              textAlign="left"
              fontSize="xl"
              h="auto"
              bg="#D9D9D9"
              borderRadius={6}
              p={1}
            >
              • Quais são os benefícios ambientais da reciclagem?
            </Text>
            <Text ml={6} my={4} textAlign="left" fontSize="xl" h="auto">
              A reciclagem reduz a necessidade de extrair novos recursos,
              preservando habitats naturais e diminuindo a poluição.
            </Text>
            <Text
              textAlign="left"
              fontSize="xl"
              h="auto"
              bg="#D9D9D9"
              borderRadius={6}
              p={1}
            >
              • Como a reciclagem contribui para a redução da poluição?
            </Text>
            <Text ml={6} my={4} textAlign="left" fontSize="xl" h="auto">
              A reciclagem ajuda a diminuir o volume de lixo em aterros,
              reduzindo a emissão de gases de efeito estufa e a contaminação do
              solo, ar e água.
            </Text>
            <Text
              textAlign="left"
              fontSize="xl"
              h="auto"
              bg="#D9D9D9"
              borderRadius={6}
              p={0.5}
            >
              • A reciclagem realmente faz diferença?
            </Text>
            <Text ml={6} my={4} textAlign="left" fontSize="xl" h="auto">
              Sim, a reciclagem tem um impacto significativo, na economia de
              energia e recursos e redução de lixo em aterros.
            </Text>
          </Box>
        </Flex>
      </Layout>
    </>
  );
}

export default Home;
