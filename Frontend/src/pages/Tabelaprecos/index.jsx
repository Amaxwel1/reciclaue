import Layout from "../../Components/Layout";
import { Box, Flex, Text, Heading, Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const TabelaPrecos = () => {
  return (
    <Layout navBarBg="#5AA062">
      <Flex
        direction="column"
        align="center"
        justify="center"
        padding={8}
        maxW="1300px" // Limita a largura máxima da seção principal
        mx="auto"
        px={4} // Espaçamento nas laterais
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

          {/* Modelo de Custos */}
          <Box mt={8} mb={4}>
            <Heading as="h3" size="md">
              Modelo de Custos de Startup de Negócios
            </Heading>
          </Box>

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
                </Tr>
                <Tr>
                  <Td>Publicidade - Web</Td>
                  <Td>R$ 300,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 300,00</Td>
                </Tr>
                <Tr>
                  <Td>Equipamentos (Financiamento Caminhão)</Td>
                  <Td>R$ 2.717,68</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 2.717,68</Td>
                </Tr>
                <Tr>
                  <Td>Seguro (Caminhão)</Td>
                  <Td>R$ 326,84</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 326,84</Td>
                </Tr>
                <Tr>
                  <Td>Folha de pagamentos</Td>
                  <Td>R$ 1.800,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 1.800,00</Td>
                </Tr>
                <Tr>
                  <Td>Imposto sobre a folha de pagamento</Td>
                  <Td>R$ 1.285,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 1.285,00</Td>
                </Tr>
                <Tr>
                  <Td>Telefone (5G do Tablet)</Td>
                  <Td>R$ 75,00</Td>
                  <Td>R$ -</Td>
                  <Td>R$ 75,00</Td>
                </Tr>
                <Tr>
                  <Td>Total</Td>
                  <Td>R$ 9.426,38</Td>
                  <Td></Td>
                  <Td>-R$ 9.426,38</Td>
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
