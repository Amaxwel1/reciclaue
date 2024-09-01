import { Flex, Button } from "@chakra-ui/react";
import { TbLogin } from "react-icons/tb";

const RightContent = () => {
  return (
    <Flex alignItems="center" gap={2} marginRight="40px">
      <Button
        leftIcon={<TbLogin />}
        bg="#2C2C2C"
        height="30px"
        textColor="white"
        _hover={{ bg: "#161616" }}
      >
        Login
      </Button>
    </Flex>
  );
};

export default RightContent;
