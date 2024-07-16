import React from "react";
import { Box, Flex, Text, Link, Button, useBreakpointValue, Icon } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaUser } from "react-icons/fa";

export const Navbar = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Box as="nav" position="absolute" width="100%" zIndex="10" borderBottom="2px solid rgba(128, 128, 128, 0.164)" padding="2rem" backgroundColor="transparent">
      <Flex justify="space-around" align="center" wrap="wrap">
        <Text fontSize="1.8rem" fontWeight="bold" textTransform="uppercase" letterSpacing="2px" color="#f8b400">
          STARGYM
        </Text>
        {!isMobile && (
          <Flex as="ul" listStyleType="none" gap="2rem" margin="0" padding="0">
            <Box as="li">
              <Link href="#" textDecoration="none" color="white" fontSize="1rem" opacity="0.6" padding="0.5rem" transition="color 0.3s, opacity 0.3s" _hover={{ color: "#ffffff", opacity: 1 }} fontFamily="Varela, sans-serif">
                SERVICES
              </Link>
            </Box>
            <Box as="li">
              <Link href="#" textDecoration="none" color="white" fontSize="1rem" opacity="0.6" padding="0.5rem" transition="color 0.3s, opacity 0.3s" _hover={{ color: "#ffffff", opacity: 1 }} fontFamily="Varela, sans-serif">
                PROGRAMS
              </Link>
            </Box>
            <Box as="li">
              <Link href="#" textDecoration="none" color="white" fontSize="1rem" opacity="0.6" padding="0.5rem" transition="color 0.3s, opacity 0.3s" _hover={{ color: "#ffffff", opacity: 1 }} fontFamily="Varela, sans-serif">
                SHOP
              </Link>
            </Box>
            <Box as="li">
              <Link href="#" textDecoration="none" color="white" fontSize="1rem" opacity="0.6" padding="0.5rem" transition="color 0.3s, opacity 0.3s" _hover={{ color: "#ffffff", opacity: 1 }} fontFamily="Varela, sans-serif">
                CONTACT US
              </Link>
            </Box>
          </Flex>
        )}
        <Flex align="center" gap="0.5rem">
          <Link href="#" textDecoration="none" color="white" fontSize="1rem" opacity="1" padding="0.5rem" transition="color 0.3s, opacity 0.3s" _hover={{ color: "#ffffff", opacity: 1 }} fontFamily="Varela, sans-serif">
            <Icon as={FaMapMarkerAlt} color="#f8b400" w="25px" h="25px" />
          </Link>
          <Link href="#" textDecoration="none" color="white" fontSize="1rem" opacity="1" padding="0.5rem" transition="color 0.3s, opacity 0.3s" _hover={{ color: "#ffffff", opacity: 1 }} fontFamily="Varela, sans-serif">
            <Icon as={FaUser} color="#f8b400" w="25px" h="25px" />
          </Link>
          <Button as="a" href="#" backgroundColor="#f8b400" color="#ffffff" padding="0.6rem 1.5rem" borderRadius="30px" fontSize="1.1rem" transition="background-color 0.3s" _hover={{ backgroundColor: "#e69900" }}>
            GET STARTED
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};
