import { Box, Grid, Skeleton, SkeletonCircle } from "@chakra-ui/react";

const Loader = () => {
  return(
   <Grid gridGap={"2.6em"} placeItems="center" width={{ md: "100%", sm: "450px", base: "100%"}} margin="0 auto" gridTemplateColumns={{lg:"repeat(4, 1fr)", md: "repeat(3, 1fr)", sm: "repeat(2, 1fr)",base: "repeat(1, 1fr)"}}>
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
    <CardSkeleton />
   </Grid>
  ) ;
};

function CardSkeleton(){
  return (
    <Box borderColor="brand.cardBorderColor" borderStyle={"solid"} borderWidth="thin"  borderRadius="8px" p={3} width={{sm:"200px", base: "100%"}}>
      <SkeletonCircle size='10' m=".5em auto" />
      <Skeleton height='10px' my={"1em"} borderRadius="8px" />
      <Skeleton width="80px" margin=".3em auto" borderRadius="8px" height='30px' />
    </Box>
  )
}

export default Loader;
