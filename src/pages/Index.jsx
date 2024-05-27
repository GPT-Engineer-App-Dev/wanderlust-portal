import { Container, VStack, HStack, Box, Input, Button, Text, Image, Flex, Heading } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { DatePicker } from "chakra-ui-date-input";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8}>
        {/* Navigation Bar */}
        <HStack w="full" justifyContent="space-between" p={4} bg="blue.600" color="white">
          <Heading size="lg">TravelBooking</Heading>
          <HStack spacing={4}>
            <Button variant="link" color="white">Home</Button>
            <Button variant="link" color="white">Destinations</Button>
            <Button variant="link" color="white">Deals</Button>
            <Button variant="link" color="white">Contact</Button>
          </HStack>
        </HStack>

        {/* Search Bar */}
        <Box w="full" p={4} bg="gray.100" borderRadius="md" boxShadow="md">
          <VStack spacing={4}>
            <HStack w="full">
              <Input placeholder="Enter destination" size="lg" />
              <DatePicker placeholder="Select date" size="lg" />
              <Button leftIcon={<FaSearch />} colorScheme="blue" size="lg">Search</Button>
            </HStack>
          </VStack>
        </Box>

        {/* Featured Destinations */}
        <Box w="full">
          <Heading size="md" mb={4}>Featured Destinations</Heading>
          <Flex wrap="wrap" justifyContent="space-between">
            <Box w="30%" p={2} bg="white" borderRadius="md" boxShadow="md">
              <Image src="/images/destination1.jpg" alt="Destination 1" borderRadius="md" />
              <Text mt={2} fontWeight="bold">Destination 1</Text>
              <Text>Starting from $499</Text>
            </Box>
            <Box w="30%" p={2} bg="white" borderRadius="md" boxShadow="md">
              <Image src="/images/destination2.jpg" alt="Destination 2" borderRadius="md" />
              <Text mt={2} fontWeight="bold">Destination 2</Text>
              <Text>Starting from $599</Text>
            </Box>
            <Box w="30%" p={2} bg="white" borderRadius="md" boxShadow="md">
              <Image src="/images/destination3.jpg" alt="Destination 3" borderRadius="md" />
              <Text mt={2} fontWeight="bold">Destination 3</Text>
              <Text>Starting from $699</Text>
            </Box>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;