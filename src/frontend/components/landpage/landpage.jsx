import { Navbar } from "../layout/_navbar";
import { LandpageBanner } from "../layout/bannerlayout/_banner";
import { ChakraUi } from "../layout/_chakraui";
import { GymClass } from "./gprogram";
import "../../design/componentsdesign/landpage.scss";
import React from "react";
import { AboutDesc } from "../../data/metadata";
import { AboutGym } from "./about";
import { Testimonial } from "./testimonial";
import { TrainerData } from "../../data/clubdata";
import { 
  Box, 
  Text, 
  Heading, 
  Button, 
  Flex,
  Card,
  CardBody,
  CardFooter ,
  Image 
} from "@chakra-ui/react";

export const GymStats = () => {
  return (
    <>
      <Box w="100%" h="20vh" bg="linear-gradient(to top, #FF7517, #FFAC41)">
        <Flex display="flex" justify="space-around" pt="1.0%" gap="40px" alignItems="center">
          <Heading fontSize="3rem">
            We Raise Your
            <br /> Confidence
          </Heading>
          <Flex display="flex" gap="60px">
            <Flex display="flex" flexDirection="column" align="center">
              <Text fontSize="3.5rem" fontWeight="600">
                10k+
                <Text fontSize="2rem">Members</Text>
              </Text>
            </Flex>
            <Flex display="flex" flexDirection="column" align="center">
              <Text fontSize="3.5rem" fontWeight="600">
                60+
                <Text fontSize="2rem">Partner</Text>
              </Text>
            </Flex>
            <Flex display="flex" flexDirection="column" align="center">
              <Text fontSize="3.5rem" fontWeight="600">
                42+
                <Text fontSize="2rem">Best Coach</Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export const Trainer = () => {
  return (
    <>
      <Box w="100%" h="100vh" backgroundColor="#FF7517">
        <Heading display="flex" flexDirection="column" justifyContent="center" alignItems="center" pt="7%" fontSize="3rem">
          Our Trainer
          <Text fontSize="20px" pt="1%">
            Shape Your Future : Join Us as a Gym Model and Inspire Change!
          </Text>
        </Heading>
        <Box w="100%" h="100%" display="flex">
          {TrainerData.map((trainer, index) => (
            <Card key={index} w="300px" h="auto" display="flex" flexDirection="column">
              <CardBody>
                <Image src={trainer.Image} w="400px" h="auto" />
                
              </CardBody>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
}

export const PersonalTraining = () => {
  return (
    <Box id="Why" w="100%" h="70vh" backgroundImage="url('/images/background pt.jpg')" backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" position="relative">
      <Box h="100%" w="100%" backgroundColor="black" opacity="75%" position="absolute" top="0" left="0" zIndex="1"></Box>
      <Flex direction="column" align="start" p="20px" className="pt__heading" position="relative" zIndex="2" pt="10%" pl="10%">
        <Heading color="white" fontSize="50px" mb="4">
          PROGRESS GETS <br />PERSONAL
        </Heading>
        <Text color="white" fontSize="lg" mb="4">
          The focus is on you. Get personal training from any one of our Certified Fitness Coaches. <br />Track your progress and celebrate the results.
        </Text>
        <Button
          color="white"
          bgColor ="orange"
          border="none"
          fontFamily="inherit"
          textAlign="center"
          cursor="pointer"
          borderRadius="none"
          padding="30px"
          mt="2%"
          transition="0.4s"
          _hover={{ boxShadow: "7px 5px 56px -14px #c3d900" }}
          _active={{
            transform: "scale(0.97)",
            boxShadow: "7px 5px 56px -10px #c3d900",
          }}
        >
          Personal Training
        </Button>
      </Flex>
    </Box>
  );
};


export class HomeMenu extends React.Component {
  render() {
    return (
      <>
        <Navbar />
        <LandpageBanner />
        <GymStats />
        <AboutGym />
        <GymClass />
        <Trainer />
        <PersonalTraining />
        <Testimonial />
        <ChakraUi />
      </>
    );
  }
}
