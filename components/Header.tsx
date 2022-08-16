import {
  Flex,
  IconButton,
  Spacer,
  chakra,
  Button,
  Box,
} from "@chakra-ui/react";
import Logo from "./Logo";
import Wrapper from "./Wrapper";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { scheme } from "../chakra/scheme";

interface IHeaderProps {
  toggleTheme: Function;
  currentTheme: Mode;
}
const Header = ({ currentTheme, toggleTheme }: IHeaderProps) => {
  const ThemeIcon = currentTheme === "light" ? RiMoonFill : RiSunFill;
  const oppositeTheme = currentTheme === "light" ? "dark" : "light";
  const contrastTypography = currentTheme === "light" ? "black" : "white";

  return (
    <Box bgColor="brand.bgColor" w="100%">
      <Wrapper>
        <Flex w="100%" p={3}>
          <Logo />
          <Spacer />
          <Flex width="200px" transform="translateY(.3em)">
            <ThemeIcon
              color={ contrastTypography }
              aria-label={`toggle theme`}
              onClick={() =>
                toggleTheme(oppositeTheme)
              }
              style={{ transform: "translateY(.6em)" }}
            />
            <Spacer />
            <Button
              bgColor={ contrastTypography }
              _hover={{ bgColor: "brand.typography" }}
              color={ currentTheme === "light" ? "white" : "black" }
            >
              ANALYZE ASAs
            </Button>
          </Flex>
        </Flex>
      </Wrapper>
    </Box>
  );
};
export default Header;
