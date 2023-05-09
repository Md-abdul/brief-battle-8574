import React from "react";
import { Box, Text , Image } from "@chakra-ui/react";

export default function Logo(props) {
  return (
    <Box {...props}>
      <Text fontSize="lg" mt={-5} fontWeight="bold">
        <Image src="" alt="logo"/>
      </Text>
    </Box>
  );
}
