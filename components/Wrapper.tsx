import { Box } from '@chakra-ui/react';

const Wrapper = ({ children } : IWrapper) => {
  return(
    <Box width={{lg:"900px", base: "90%"}}  margin="0 auto">
        {children}
    </Box>
  ) ;
};

export default Wrapper;
