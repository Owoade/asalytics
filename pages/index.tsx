import type { NextPage } from "next";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Loader from "../components/Loader";
import Wrapper from "../components/Wrapper";
import { GET_ASAS } from "../gql-queries";
import { useQuery } from "@apollo/client";
import AssetCards from "../components/AssetCards";
import { useState, useRef, useEffect } from "react";

const Home: NextPage = () => {

  const { error, data, loading } = useQuery<{ asalist: { result: IASA[] } }>(
    GET_ASAS
  );

  const [increament, setIncreament] = useState(0);
  const listRef = useRef<HTMLDivElement>(null);
  const scrollMax = useRef(false);

  // Functionality for infinite scroll
  function onScroll() {
    if (scrollMax.current) return;
    if (listRef.current) {
      
      const bottomDiv = listRef.current.getClientRects();
   
      if (bottomDiv[0].y > 1000) {
        return;
      }

      setIncreament((inc) => inc + 4);
    }
  }

  // Sets a maximum scroll point, as all assets can't fit 
  //into memory efficiently hence, this helps to limit the assets loaded to the DOM

  useEffect(() => {
    if (increament >= 53) scrollMax.current = true;
  }, [increament]);

  // The document object does not exists on the server in case of next js but useEffect
  // ensures that the document object exists before attaching the event listener
   
  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box bgColor="brand.bgColor" height={data ? "100%" : "100vh"} py="3em">
      <Wrapper>
        <Box>
          <Heading
            fontSize={{ sm: "28px", base: "20px" }}
            width={{ lg: "45%", base: "100%" }}
            margin="0 auto"
            textAlign="center"
          >
            List of Algorands Standard Assets on ASAlytics
          </Heading>
        </Box>
      </Wrapper>

      <Box width={{ lg: "900px", base: "90%" }} m={"3em auto"}>
        {loading && <Loader />}
        {data && (
          <AssetCards assets={data.asalist.result.slice(0, 20 + increament)} />
        )}
        {error && (
          <Text textAlign="center" color="red">
            An error occured while fetching data
          </Text>
        )}
      </Box>
      {/* This dummy hello div helps to acheive the infinite scrolling */}
      <Box ref={listRef} opacity={0}>
        hello
      </Box>
    </Box>
  );
};

export default Home;
