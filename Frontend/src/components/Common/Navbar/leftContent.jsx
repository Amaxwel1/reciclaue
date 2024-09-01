import { Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import * as C from "./styles";

const LeftContent = () => {
  return (
    <Flex alignItems="center" justifyContent={"space-between"} gap={4}>
      <Link to="/home">
        <Image src="./logo2.png" width="250px"></Image>
      </Link>
      <C.Nav>
        <C.Ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link>Aprenda a reciclar</Link>
          </li>
          <li>
            <Link to="/quem-somos">Quem Somos</Link>
          </li>
          <li>
            <Link>Contato</Link>
          </li>
        </C.Ul>
      </C.Nav>
    </Flex>
  );
};

export default LeftContent;
