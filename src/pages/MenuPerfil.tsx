import { Button, Heading, HStack, Icon, Input, Link, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackPerfilParamList } from "./routes";

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackPerfilParamList>;
}

export function MenuPerfil({ navigation }: NavigationProps) {

  return (
    <VStack
      flex={1}
      space={2}
      paddingX={10}
      paddingY={15}
      justifyContent="center"
    >
      <Button
        width="full"
        onPress={() => {
          navigation.navigate("RecuperarSenha")
        }}
      >RecuperarSenha</Button>
      <Button
        width="full"
        onPress={() => {
          navigation.navigate("NovoUsuario")
        }}
      >NovoUsuario</Button>
      <Button
        width="full"
        onPress={() => {
          navigation.navigate("Favoritos")
        }}
      >Favoritos</Button>
      <Button
        width="full"
        onPress={() => {
          navigation.navigate("Historico")
        }}
      >Historico</Button>
      <Button
        width="full"
        onPress={() => {
          navigation.navigate("DadosUsuario")
        }}
      >DadosUsuario</Button>
      <Button
        width="full"
        onPress={() => {
          navigation.navigate("EdicaoUsuario")
        }}
      >EdicaoUsuario</Button>
      <Button
        width="full"
        variant="solid"
        colorScheme="danger"
        onPress={() => {
          navigation.navigate("Login");
        }}
      >Sair</Button>
    </VStack>
  );
}
