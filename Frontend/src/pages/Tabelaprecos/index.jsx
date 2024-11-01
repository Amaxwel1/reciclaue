import Layout from "../../Components/Layout";
import { Box, Flex, Text, Heading, Table, Thead, Tbody, Tr, Th, Td, Image } from "@chakra-ui/react";
import images from "../../assets/images.jsx";

const TabelaPrecos = () => {
  return (
    <Layout navBarBg="#5AA062">
      <Flex
        direction="column"
        align="center"
        justify="center"
        padding={8}
        maxW="1300px"
        mx="auto"
        px={4}
      >
        {/* Seção de Texto */}
        <Box textAlign="center" width="100%" mb={8}>

          {/* Título do Projeto */}
          <Heading as="h2" size="lg" mb={4}>
            Conheça o nosso{" "}
            <Text as="span" color="green.500">
              Projeto
            </Text>
          </Heading>

          {/* Textos de apresentação */}
          <br></br>
          <Text fontSize="lg"> OS VALORES PODEM SOFRER ALTERAÇÕES, DADOS COLETADOS EM: 3 DE OUTUBRO DE 2024 </Text><br></br>
          <Text fontSize="lg"> Fazemos simulações dos valores, utilizamos como base 3 condominios </Text>
          <Text fontSize="lg"> Condominio Pau Brasil 84 Moradores e 88,2KG de lixo reciclado </Text>
          <Text fontSize="lg"> Condominio Ipe Amarelo 120 Moradores e 126KG de lixo reciclado </Text>
          <Text fontSize="lg"> Condominio Asa Branca 30 Moradores e 31,5KG de lixo reciclado </Text>
          <Text fontSize="lg"> Teremos diariamente 57KM rodados, 4 paradas, 3 clientes e 245,7KG de lixo </Text>
          <Text fontSize="lg"> 30,713KG de Aluminio Misto, 122,85KG de PEAD, 61,424KG Papelão, 30,713KG de Vidro Misto </Text>
          <Text fontSize="lg"> Receita mensal completa de R$ 11.010,43 </Text>
          <Text fontSize="lg"> 10% sera repassado ao condominio (R$ 1.101,04)</Text>
          <Text fontSize="lg"> Gasto mensal completo operacional de R$ 3.955,82</Text>
          <Text fontSize="lg"> </Text>
          <Text fontSize="lg"> </Text>
          <Text fontSize="lg"> </Text>
          <Text fontSize="lg"> </Text>
          <Text fontSize="lg"> </Text>
          <Text fontSize="lg"> </Text>
          <br></br>

          {/* Adicionando a imagem 'grafico' */}
          <Image
            src={images.grafico2}
            alt="Gráfico"
            maxW="500px"
            mx="auto"
            mb={4}
            borderRadius="md"
          />

          {/* Modelo de Custos */}
          <Box mt={8} mb={4}>
            <Heading as="h3" size="md">
              Modelo de Custos de Startup de Negócios
            </Heading>
          </Box>
          <br></br>

          {/* Resumo */}
          <Box maxW="100%" mx="auto" mb={6}>
            <Heading as="h4" size="sm" textAlign="center" mb={2}>Resumo</Heading>
            <Table variant="striped" colorScheme="green" size="sm" mx="auto">
              <Thead>
                <Tr>
                  <Th>Resumo</Th>
                  <Th>Orçamento</Th>
                  <Th>Real</Th>
                  <Th>Diferença</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Financiamento Total</Td>
                  <Td>R$ 26.000,00</Td>
                  <Td>R$ -</Td>
                  <Td>-R$ 26.000,00</Td>
                </Tr>
                <Tr>
                  <Td>Despesas Totais</Td>
                  <Td>R$ 20.481,53</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 20.481,53</Td>
                </Tr>
                <Tr>
                  <Td>Diferença (Financiamento - Despesas)</Td>
                  <Td>R$ 5.518,47</Td>
                  <Td>R$ -</Td>
                  <Td>R$ -</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          {/* Financiamento */}
          <Box maxW="100%" mx="auto" mb={6}>
            <Heading as="h4" size="sm" textAlign="center" mb={2}>Financiamento</Heading>
            <Table variant="striped" colorScheme="green" size="sm" mx="auto">
              <Thead>
                <Tr>
                  <Th>Financiamento</Th>
                  <Th>Orçamento</Th>
                  <Th>Real</Th>
                  <Th>Diferença</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Investidor 1</Td>
                  <Td>R$ 20.000,00</Td>
                  <Td>R$ -</Td>
                  <Td>-R$ 20.000,00</Td>
                </Tr>
                <Tr>
                  <Td>Aporte Financeiro Sócios</Td>
                  <Td>R$ 6.000,00</Td>
                  <Td>R$ -</Td>
                  <Td>-R$ 6.000,00</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          {/* Despesas Variáveis */}
          <Box maxW="100%" mx="auto" mb={6}>
            <Heading as="h4" size="sm" textAlign="center" mb={2}>Despesas Variáveis</Heading>
            <Table variant="striped" colorScheme="green" size="sm" mx="auto">
              <Thead>
                <Tr>
                  <Th>Despesas Variáveis</Th>
                  <Th>Orçamento</Th>
                  <Th>Real</Th>
                  <Th>Diferença</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Equipamento (Entrada Caminhão)</Td>
                  <Td>R$ 10.000,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 10.000,00</Td>
                </Tr>
                <Tr>
                  <Td>Hardware de tecnologia (Tablet)</Td>
                  <Td>R$ 764,15</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 764,15</Td>
                </Tr>
                <Tr>
                  <Td>Domínio da Web</Td>
                  <Td>R$ 40,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 40,00</Td>
                </Tr>
                <Tr>
                  <Td>EPI</Td>
                  <Td>R$ 251,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 251,00</Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>R$ 11.055,15</Td>
                  <Td></Td>
                  <Td>-R$ 11.055,15</Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>

          {/* Despesas Fixas */}
          <Box maxW="100%" mx="auto" mb={6}>
            <Heading as="h4" size="sm" textAlign="center" mb={2}>Despesas Fixas</Heading>
            <Table variant="striped" colorScheme="green" size="sm" mx="auto">
              <Thead>
                <Tr>
                  <Th>Despesas Fixas</Th>
                  <Th>Orçamento</Th>
                  <Th>Real</Th>
                  <Th>Diferença</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Taxas contábeis</Td>
                  <Td>R$ 400,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 400,00</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Publicidade - Web</Td>
                  <Td>R$ 300,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 300,00</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Equipamentos (Financiamento Caminhão)</Td>
                  <Td>R$ 2.717,68</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 2.717,68</Td>
                  <Td>4 Anos Pagando</Td>
                </Tr>
                <Tr>  
                  <Td>Seguro (Caminhão)</Td>
                  <Td>R$ 326,84</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 326,84</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Folha de pagamentos</Td>
                  <Td>R$ 1.800,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 1.800,00</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Imposto sobre a folha de pagamento</Td>
                  <Td>R$ 1.285,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 1.285,00</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Telefone (5G do Tablet)</Td>
                  <Td>R$ 75,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 75,00</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Web - Hospedagem</Td>
                  <Td>R$ 50,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 50,00</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Gasolina</Td>
                  <Td>R$ 870,82</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 870,82</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Reserva de Emergência</Td>
                  <Td>R$ 500,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 500,00</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Valor repassado ao Condomínio</Td>
                  <Td>R$ 1.101,04</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 1.101,04</Td>
                  <Td></Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>R$ 9.426,38</Td>
                  <Td>R$ -</Td>
                  <Td>-R$ 9.426,38</Td>
                  <Td></Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default TabelaPrecos;
