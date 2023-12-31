import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

  return (
    <VStack backgroundColor="white" borderRadius="xl">
      <Image borderRadius="xl" objectFit="cover" src={imageSrc} alt="image" />
      <VStack alignItems="flex-start" p={4}>
        {" "}
        <Heading
          as="h4"
          size="xs"
          alignContent="flex-start"
          color="black"
          noOfLines={1}
        >
          {title}
        </Heading>
        <Heading as="h3" size="xs" color="grey">
          {description}
        </Heading>
        <HStack color="black" fontWeight="semibold" fontSize="12px">
          <p>See more</p>
          <FontAwesomeIcon icon={faArrowRight} size="1x" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
