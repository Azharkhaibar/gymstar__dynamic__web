import React from "react";
import { DataTesti } from "../../data/datatesti";
import { Box, Flex, Heading, Text, Image, Card, CardBody } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class Testimonial extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      pauseOnHover: true,
    };

    return (
      <Box w="100%" h="100vh" bgColor="#151515">
        <Flex justify="center" flexDirection="column" alignItems="center" pt="6%" color="white">
          <Heading>MEMBERS' TESTIMONIALS</Heading>
          <Text>See what our members are saying about us.</Text>
        </Flex>
        <Flex justify="center" pt="3%">
          <Box w="80%" overflow="hidden">
            <Slider {...settings}>
              {DataTesti.map((testi, index) => (
                <Card key={index} align="start" boxShadow="md" bgColor="transparent" color="white" m="10px">
                  <CardBody>
                    <Text fontSize="25px" fontFamily="inherit">
                      {testi.desc}
                    </Text>
                  </CardBody>
                  <Box>
                    <Flex alignItems="center">
                      <Image src={testi.imgtesti} w="50px" h="50px" borderRadius="full" ml="5%" mb="6%" />
                      <Flex flexDirection="column" ml="3">
                        <Text fontSize="md" fontWeight="600">
                          {testi.name}
                          <Text fontSize="12px">{testi.job}</Text>
                        </Text>
                      </Flex>
                    </Flex>
                  </Box>
                </Card>
              ))}
            </Slider>
          </Box>
        </Flex>
      </Box>
    );
  }
}

