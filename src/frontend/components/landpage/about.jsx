import React from "react";
import { Box, Text, Heading, Button, Flex, Image, Icon } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import '../../design/componentsdesign/about.scss'

export class AboutGym extends React.Component {
  render() {
    return (
      <>
        <Box h="100vh" w="100%" backgroundColor="black" pl="11%">
          <Flex justify="center" h="100%">
            <Box w="36%" h="50%">
              <Flex flexDirection="column" pt="22%" h="100%">
                <Heading fontSize="3rem" color="white">
                  GET INSPIRED
                  <br /> GO FURTHER IN LIFE
                </Heading>
                <Text color="white">Heres what to expect when you join us now.</Text>
                <Text p="9px" border="1px solid grey" color="white" w="60%" fontSize="14px" borderRadius="20px">
                  3 or 6 Months —{" "}
                  <Box as="span" fontStyle="italic" opacity="0.8">
                    Depends on the programs
                  </Box>
                </Text>
                <Button as="button" w="300px" p="30px" mt="2%">
                  Discover Our Membership
                </Button>
              </Flex>
              <Box h="50%" position="relative">
                <Flex flexDirection="column" justifyContent="space-between" h="100%">
                  <Flex alignItems="center" zIndex="2">
                    <Icon as={ArrowRightIcon} w="20px" h="auto" zIndex="2" color="white" />
                    <div className="e"></div>
                    <Text fontSize="30px" ml="2" zIndex="2" color="white">
                      Comfortable Gym
                    </Text>
                  </Flex>
                  <Flex alignItems="center" mt="4" zIndex="2">
                    <Icon as={ArrowRightIcon} w="20px" h="auto" zIndex="2" color="white" />
                    <div className="e"></div>
                    <Text fontSize="30px" ml="2" zIndex="2" color="white">
                      Professional Trainers
                    </Text>
                  </Flex>
                  <Flex alignItems="center" mt="4" zIndex="2">
                    <Icon as={ArrowRightIcon} w="20px" h="auto" zIndex="2" color="white" />
                    <div className="e"></div>
                    <Text fontSize="30px" ml="2" zIndex="2" color="white">
                      Community Atmosphere
                    </Text>
                  </Flex>
                </Flex>
              </Box>
            </Box>

            <Box w="64%" h="100%">
              <Flex flexDirection="column" justifyContent="center" h="100%">
                <Box w="80%" pl="50px">
                  <Carousel>
                    <Carousel.Item>
                      <Image w="100%" h="auto" borderRadius="25px" src="/images/membership.jpg" alt="First slide" />
                      <Carousel.Caption>
                        <Heading fontSize="40px" textAlign="left" fontWeight="600">
                          Coose Your Classes
                        </Heading>
                        <Text textAlign="left">Nulla vitae elit libero, a pharetra augue mollis interdum.</Text>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image w="100%" h="auto" borderRadius="25px" src="/images/flexmuscle.jpg" alt="Second slide" />
                      <Carousel.Caption>
                        <Heading fontSize="40px" textAlign="left" fontWeight="600">
                          Find Your Reason
                        </Heading>
                        <Text textAlign="left">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                      </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                      <Image w="100%" h="auto" borderRadius="25px" src="/images/membership.jpg" alt="Third slide" />
                      <Carousel.Caption>
                        <Heading fontSize="40px" textAlign="left" fontWeight="600">
                          Personal Training
                        </Heading>
                        <Text textAlign="left">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</Text>
                      </Carousel.Caption>
                    </Carousel.Item>
                  </Carousel>
                </Box>

                <Flex mt={4} pl="47px">
                  <Image borderRadius="25px" src="/images/membership.jpg" alt="membership" w="358px" h="auto" mr={4} />
                  <Image borderRadius="25px" src="/images/membership.jpg" alt="membership" w="315px" h="auto" />
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </>
    );
  }
}
