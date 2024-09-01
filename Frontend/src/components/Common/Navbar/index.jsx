import { HStack } from "@chakra-ui/react";
import RightContent from "./rightContent";
import LeftContent from "./leftContent";

const Navbar = () => {
  return (
    <>
      <HStack
        w="full"
        alignItems="center"
        p={"1"}
        justifyContent={"space-between"}
        bg="#5AA062"
      >
        <LeftContent />
        <RightContent />
      </HStack>
    </>
  );
};

export default Navbar;
