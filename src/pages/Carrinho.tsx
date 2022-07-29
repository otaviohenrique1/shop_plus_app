import { Button, Heading, HStack, Icon, Input, Link, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export function Carrinho() {

  return (
    <VStack
      flex={1}
      space={10}
      paddingX={10}
      paddingY={15}
    >
      <Heading fontSize="4xl" textAlign="center">
        Carrinho
      </Heading>
    </VStack>
  );
}
