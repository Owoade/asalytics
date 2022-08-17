import { Avatar, Box, Button, Grid, Text } from "@chakra-ui/react";

const AssetCards = ({ assets }: { assets: IASA[] }) => {
  return (
    <Grid
      gridGap={"2.6em"}
      placeItems="center"
      width={{ md: "100%", sm: "450px", base: "100%" }}
      margin="0 auto"
      gridTemplateColumns={{
        lg: "repeat(4, 1fr)",
        md: "repeat(3, 1fr)",
        sm: "repeat(2, 1fr)",
        base: "repeat(1, 1fr)",
      }}
    >
      {assets.map((asset: IASA, i) => (
        <Card asset={asset} key={asset.name} index={i} />
      ))}
    </Grid>
  );
};

function Card({ asset, index }: { asset: IASA; index: number }) {

  const btnVariantColor = asset.available? "brand.available" : "brand.unavailable";

  return (
    <Box
      borderColor="brand.cardBorderColor"
      borderStyle={"solid"}
      borderWidth="thin"
      borderRadius="8px"
      p={3}
      width={{ sm: "200px", base: "100%" }}
      className="asset-card"
      key={asset.name}
      data-testid={`asa-item-${index}`}
    >
      <Avatar
        size="sm"
        display="block"
        m=".5em auto"
        name={asset.name}
        src={asset.logo}
      />
      <Text textAlign="center" my={"1em"}>
        {
        asset.name.trim().length >= 20
          ? `${asset.name.substring(0, 15)}...`
          : asset.name
        }
      </Text>
      <Button
        display="block"
        margin=".3em auto"
        bgColor={btnVariantColor}
        _hover={{ backgroundColor: btnVariantColor }}
        borderRadius="8px"
      >
        {asset.available ? "Available" : "Unavailable"}
      </Button>
    </Box>
  );
}

export default AssetCards;
