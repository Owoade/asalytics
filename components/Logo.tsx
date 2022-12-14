import { Box, Flex, Spacer, chakra } from "@chakra-ui/react";

const Logo = () => {
  return (
    <Flex width="110px">
      <Box
        w="25px"
        height="50px"
        className="logo"
        bgColor="brand.typography"
        _after={{
          left: "0",
          bottom: "-2px",
          backgroundColor: "brand.bgColor",
          width: "18px",
          height: "30px",
        }}
      ></Box>
      <Spacer />
      <chakra.span fontWeight="extrabold" transform="translate(-.5em,1.9em)">ASAlytics</chakra.span>
    </Flex>
  );
};

export default Logo;
