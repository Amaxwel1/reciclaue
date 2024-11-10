import Layout from "../../Components/Layout";
import {
  Box,
  Flex,
  Text,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Image,
} from "@chakra-ui/react";
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
        <Box width="100%" mb={8} mt={12}>
          <Flex justify="space-between" width="100%">
            {/* Textos alinhados à esquerda */}
            <Box width="48%" textAlign="left" mt={12}>
              <br></br>
              <br></br>
              <Text mb={4} textAlign="justify" textIndent="1.5em">
                Em uma análise dos dados coletados no{" "}
                <strong>dia 3 de outubro de 2024</strong>, a operação de coleta
                de lixo reciclável em três condomínios apresenta um conjunto de
                métricas relevantes. Esses dados foram coletados em uma amostra
                composta pelos condomínios abaixo, com o objetivo de simular e
                projetar os valores e resultados para uma operação sustentável.
              </Text>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <Text mb={4} textAlign="justify" textIndent="1.5em">
                Nosso principal objetivo é{" "}
                <strong>
                  incentivar os moradores a separarem corretamente o lixo
                </strong>
                . Após essa etapa, fazemos a coleta exclusivamente dos materiais
                recicláveis, que são vendidos para gerar receita. Uma vez
                cobertos os custos operacionais, o restante do valor é destinado
                ao condomínio, que poderá utilizá-lo da forma que achar mais
                conveniente.
              </Text>
            </Box>

            {/* Textos alinhados à direita */}
            <Box width="48%" textAlign="justify">
              <Heading as="h2" size="md" mb={4} mt={12}>
                <strong>Dados dos condomínios:</strong>
              </Heading>
              <Text mb={2} textAlign="justify" textIndent="1.5em">
                Condomínio Pau Brasil: 252 moradores, gerando 59,094 kg de lixo
                reciclado.
              </Text>
              <Text mb={2} textAlign="justify" textIndent="1.5em">
                Condomínio Ipê Amarelo: 360 moradores, gerando 84,42 kg de lixo
                reciclado.
              </Text>
              <Text mb={2} textAlign="justify" textIndent="1.5em">
                Condomínio Asa Branca: 90 moradores, gerando 21,105 kg de lixo
                reciclado.
              </Text>
              <Text mb={4} textAlign="justify" textIndent="1.5em">
                Esses três condomínios juntos representam um volume total de
                164,619 kg de lixo reciclável, que será coletado em uma rota
                planejada de 57 km diários, distribuída em 4 paradas.
              </Text>

              <Heading as="h2" size="md" mb={4}>
                <strong>Análise Financeira e Repasse aos Condomínios:</strong>
              </Heading>
              <Text textAlign="justify" textIndent="1.5em">
                A operação gera uma receita mensal estimada de R$ 6.068,27.
              </Text>
              <Text textAlign="justify" textIndent="1.5em">
                Deste montante, 10% será repassado para os condomínios,
                totalizando R$ 606,83. Com o operacional mensal projetado em R$
                3.955,82, estando dentro da receita gerada.
              </Text>
              <Text mt={4} textAlign="justify" textIndent="1.5em">
                Esses valores são estimativas iniciais, que podem sofrer
                alterações com o tempo conforme a quantidade de resíduos
                coletados e as condições operacionais mudem. Essa estrutura
                financeira busca não apenas tornar a operação sustentável, mas
                também fornecer retorno aos condomínios participantes,
                incentivando a participação e conscientização sobre a
                importância da reciclagem.
              </Text>
            </Box>
          </Flex>

          {/* Imagem centralizada */}
          <Flex justify="center" mt={8} mb={8}>
            <Image
              src={images.grafico2}
              alt="Gráfico"
              maxW="500px"
              borderRadius="md"
            />
          </Flex>

          {/* Modelo de Custos */}
          <Box textAlign="center" mt={8} mb={4}>
            <Box textAlign="center" mt={8} mb={4}>
              <Heading as="h3" size="md">
                Modelo de Custos de Startup de Negócios
              </Heading>
            </Box>
            <br></br>

            {/* Resumo e Tabelas Centralizadas */}
            <Flex
              direction="column"
              align="center"
              maxW="100%"
              mx="auto"
              mb={6}
            >
              <Box width="100%" textAlign="center" mb={6}>
                <Heading as="h4" size="sm" mb={2}>
                  Resumo
                </Heading>
                <Table
                  variant="striped"
                  colorScheme="green"
                  size="sm"
                  mx="auto"
                >
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
                      <Td>R$ 19.987,31</Td>
                      <Td>R$ -</Td>
                      <Td>R$ 19.987,31</Td>
                    </Tr>
                    <Tr>
                      <Td>Diferença (Financiamento - Despesas)</Td>
                      <Td>R$ 6.012,69</Td>
                      <Td>R$ -</Td>
                      <Td>R$ -</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              {/* Outras Tabelas (exemplo de uma) */}
              <Box width="100%" textAlign="center" mb={6}>
                <Heading as="h4" size="sm" mb={2}>
                  Financiamento
                </Heading>
                <Table
                  variant="striped"
                  colorScheme="green"
                  size="sm"
                  mx="auto"
                >
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
              <Box width="100%" textAlign="center" mb={6}>
                <Heading as="h4" size="sm" mb={2}>
                  Despesas Variáveis
                </Heading>
                <Table
                  variant="striped"
                  colorScheme="green"
                  size="sm"
                  mx="auto"
                >
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
                      <Td>Total</Td>
                      <Td>R$ 11.055,15</Td>
                      <Td>R$ -</Td>
                      <Td>R$ -</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              {/* Despesas Fixas */}
              <Box width="100%" textAlign="center" mb={6}>
                <Heading as="h4" size="sm" mb={2}>
                  Despesas Fixas
                </Heading>
                <Table
                  variant="striped"
                  colorScheme="green"
                  size="sm"
                  mx="auto"
                >
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
                      <Td>Total</Td>
                      <Td>R$ 8.932,16</Td>
                      <Td>R$ -</Td>
                      <Td>R$ -</Td>
                    </Tr>
                  </Tbody>
                </Table>
              </Box>

              {/* Outras tabelas aqui, caso necessário */}
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
};

export default TabelaPrecos;
