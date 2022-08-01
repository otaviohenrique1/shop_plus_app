import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, Heading, Input, Text, VStack } from "native-base";
import { RootStackPerfilParamList } from "./routes";

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackPerfilParamList>;
}

export function RecuperarSenha({ navigation }: NavigationProps) {
  return (
    <VStack
      flex={1}
      space={5}
      paddingX={10}
      paddingY={15}
    >
      <Heading fontSize="2xl" textAlign="center">
        Digite a nova senha
      </Heading>
      <Input
        width="full"
        placeholder="Nova senha"
        variant="underlined"
        type="text"
        keyboardType="default"
      />
      <Input
        width="full"
        placeholder="Confirmar senha"
        variant="underlined"
        type="text"
        keyboardType="default"
      />
      <Button
        width="full"
        variant="solid"
        colorScheme="emerald"
        onPress={() => {
          navigation.navigate("MenuPerfil");
        }}
      >Enviar link</Button>
    </VStack>
  );
}