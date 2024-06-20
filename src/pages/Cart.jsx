import { Box, Text, VStack, Button } from "@chakra-ui/react";

const Cart = () => {
  // Sample cart items
  const cartItems = [
    { id: 1, name: "Smartphone", price: "$299", quantity: 1 },
    { id: 2, name: "Laptop", price: "$799", quantity: 1 },
  ];

  const total = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity, 0);

  return (
    <Box p={4}>
      <VStack spacing={4}>
        {cartItems.map((item) => (
          <Box key={item.id} borderWidth="1px" borderRadius="lg" p={4} width="100%">
            <Text fontWeight="bold">{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </Box>
        ))}
        <Text fontWeight="bold">Total: ${total.toFixed(2)}</Text>
        <Button colorScheme="teal">Checkout</Button>
      </VStack>
    </Box>
  );
};

export default Cart;