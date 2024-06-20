import { Box, SimpleGrid, Image, Text, Button, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const sampleProducts = [
  { id: 1, name: "Smartphone", price: "$299", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$799", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
];

const ProductList = () => (
  <Box p={4}>
    <SimpleGrid columns={[1, 2, 3]} spacing={10}>
      {sampleProducts.map((product) => (
        <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Image src={product.image} alt={product.name} />
          <VStack p={4}>
            <Text fontWeight="bold">{product.name}</Text>
            <Text>{product.price}</Text>
            <Button as={Link} to={`/product/${product.id}`} colorScheme="teal">
              View Details
            </Button>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  </Box>
);

export default ProductList;