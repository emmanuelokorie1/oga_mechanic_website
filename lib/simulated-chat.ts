
export const getSimulatedResponse = (message: string) => {
  const lowerMsg = message.toLowerCase();

  if (lowerMsg.includes("mechanic") || lowerMsg.includes("repair") || lowerMsg.includes("fix")) {
    return "To find a reliable mechanic near you, please visit our [Find Mechanic](/find-mechanic) page. We have a network of verified experts ready to help!";
  }
  
  if (lowerMsg.includes("buy") && lowerMsg.includes("car")) {
    return "Looking for a new ride? Check out our [Car Sales](/buy-car) section for verified vehicles at great prices.";
  }

  if (lowerMsg.includes("sell") && lowerMsg.includes("car")) {
    return "Ready to sell your car? We can help you get the best deal. Visit [Sell Car](/sell-car) to get started.";
  }

  if (lowerMsg.includes("gas") || lowerMsg.includes("fuel")) {
    return "Running low on gas? We offer gas delivery services. Check out our [Gas Supply](/gas) page for more info.";
  }
  
  if (lowerMsg.includes("ride") || lowerMsg.includes("taxi") || lowerMsg.includes("book")) {
    return "Need a ride? You can book a ride directly through our platform. Visit [Ride Booking](/ride) to schedule one.";
  }
  
  if (lowerMsg.includes("tech") || lowerMsg.includes("support") || lowerMsg.includes("help")) {
    return "For technical support, you can contact us at support@ogamechanic.org or call our helpline.";
  }

  return "Welcome to Oga Mechanic! I can help you find a mechanic, buy/sell cars, book rides, or get gas. How can I assist you today?";
};
