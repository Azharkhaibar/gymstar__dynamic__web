import React from "react";
import { Programs } from "../../data/metadata";
import { Box, Flex, Heading, Image, Text, Button, Divider, AbsoluteCenter } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

export const GymClass = () => {
  return (
    <Box id="gprogram" w="100%" h="110vh" backgroundImage="url('/images/backgroundgym.jpg')" backgroundAttachment="scroll" backgroundSize="cover" backgroundPosition="center" position="relative">
      <Box h="100%" w="100%" backgroundColor="black" opacity="85%" position="absolute" top="0" left="0" zIndex="1"></Box>
      <Flex direction="column" align="center" pt="6%" className="gprogram__heading" position="relative" zIndex="2">
        <Heading as="h4" fontSize="20px" color="white" fontFamily="inherit">
          Our Programs
        </Heading>

        <Heading as="h2" fontSize="3rem" fontWeight="700" color="white" fontFamily="inherit">
          Build your best body
        </Heading>
      </Flex>
      <Flex justify="center" align="center" gap="35px" p="20px" pt="3%" className="gprogram__container" position="relative" zIndex="2">
        <Box w="400px" boxShadow="15px 15px 30px #191919, -15px -15px 30px rgba(221, 175, 22, 0.075)" minH="600px" border="2px solid rgba(255, 166, 0, 0.295)" borderRadius="15px" className="gprogram__card" bgColor="#1A1C20">
          <Flex direction="column" className="program__item">
            <Image src={Programs.img__one} alt="none" w="100%" h="auto" borderRadius="15px" />
            <Box p="25px">
              <Heading as="h3" fontSize="35px" color="white" pt="2%">
                Flex Muscle
                <Text fontSize="12px" fontWeight="300" opacity="0.7" pt="2%">
                  Live Program 3 or 6 Months
                </Text>
              </Heading>
              <Text fontSize="18px" color="white" pt="2%" fontWeight="400">
                {Programs.desc__one}
              </Text>
              <Button
                mt="4%"
                w="100%"
                color="white"
                bgGradient="linear(to-l, #f38c16 0%, #2c2903 100%)"
                border="none"
                fontFamily="inherit"
                textAlign="center"
                borderRadius="20px"
                cursor="pointer"
                transition="0.4s"
                _hover={{ boxShadow: "7px 5px 56px -14px #c3d900" }}
                _active={{
                  transform: "scale(0.97)",
                  boxShadow: "7px 5px 56px -10px #c3d900",
                }}
                rightIcon={<FaArrowRight />}
              >
                {Programs.ButtonHold}
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box w="400px" boxShadow="15px 15px 30px #191919, -15px -15px 30px rgba(221, 175, 22, 0.075)" minH="600px" border="2px solid rgba(255, 166, 0, 0.295)" borderRadius="15px" className="gprogram__card" bgColor="#1A1C20">
          <Flex direction="column" className="program__item">
            <Image src={Programs.img__two} alt="none" w="100%" h="auto" borderRadius="15px" />
            <Box p="25px">
              <Heading as="h3" fontSize="35px" color="white" pt="2%">
                Yoga Basic
                <Text fontSize="12px" fontWeight="300" opacity="0.7" pt="2%">
                  Live Program 3 or 6 Months
                </Text>
              </Heading>
              <Text fontSize="18px" color="white" pt="2%" fontWeight="400">
                {Programs.desc__two}
              </Text>
              <Button
                mt="4%"
                w="100%"
                color="white"
                bgGradient="linear(to-l, #f38c16 0%, #2c2903 100%)"
                border="none"
                fontFamily="inherit"
                textAlign="center"
                borderRadius="20px"
                cursor="pointer"
                transition="0.4s"
                _hover={{ boxShadow: "7px 5px 56px -14px #c3d900" }}
                _active={{
                  transform: "scale(0.97)",
                  boxShadow: "7px 5px 56px -10px #c3d900",
                }}
                rightIcon={<FaArrowRight />}
              >
                {Programs.ButtonHold}
              </Button>
            </Box>
          </Flex>
        </Box>
        <Box w="400px" boxShadow="15px 15px 30px #191919, -15px -15px 30px rgba(221, 175, 22, 0.075)" minH="600px" border="2px solid rgba(255, 166, 0, 0.295)" borderRadius="15px" className="gprogram__card" bgColor="#1A1C20">
          <Flex direction="column" className="program__item">
            <Image src={Programs.img__three} alt="none" w="100%" h="auto" borderRadius="15px" />
            <Box p="25px">
              <Heading as="h3" fontSize="35px" color="white" pt="2%">
                Lift Weighting
                <Text fontSize="12px" fontWeight="300" opacity="0.7" pt="2%">
                  Live Program 3 or 6 Months
                </Text>
              </Heading>
              <Text fontSize="18px" color="white" pt="2%" fontWeight="400">
                {Programs.desc__three}
              </Text>
              <Button
                mt="4%"
                w="100%"
                color="white"
                bgGradient="linear(to-l, #f38c16 0%, #2c2903 100%)"
                border="none"
                p="20px"
                borderRadius="20px"
                fontFamily="inherit"
                textAlign="center"
                cursor="pointer"
                transition="0.4s"
                _hover={{ boxShadow: "7px 5px 56px -14px #c3d900" }}
                _active={{
                  transform: "scale(0.97)",
                  boxShadow: "7px 5px 56px -10px #c3d900",
                }}
                rightIcon={<FaArrowRight />}
              >
                {Programs.ButtonHold}
              </Button>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};
