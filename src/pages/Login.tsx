import { Button, Heading, HStack, Icon, Input, Link, Text, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackPerfilParamList } from "./routes";

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackPerfilParamList>;
}

export function Login({ navigation }: NavigationProps) {
  const [show, setShow] = useState(false);

  return (
    <VStack
      flex={1}
      space={10}
      paddingX={10}
      justifyContent="center"
    >
      <Heading fontSize="4xl" textAlign="center">
        Login
      </Heading>
      <VStack space={2} width="full">
        <Input
          // width={{ base: "75%", md: "25%" }}
          width="full"
          InputLeftElement={<Icon
            as={<MaterialIcons name="email" />}
            size={5} marginRight="2" color="muted.400"
          />}
          placeholder="E-mail"
          variant="underlined"
          type="text"
          keyboardType="email-address"
        />
        <Input
          // width={{ base: "75%", md: "25%" }}
          width="full"
          type={show ? "text" : "password"}
          InputLeftElement={<Icon
            as={<MaterialIcons name="lock" />}
            size={5} marginRight="2" color="muted.400"
          />}
          InputRightElement={<Icon
            as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />}
            size={5} mr="2" color="muted.400" onPress={() => setShow(!show)}
          />}
          placeholder="Senha"
          keyboardType="default"
          variant="underlined"
          secureTextEntry={show}
        />
        <Link
          _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }}
          alignSelf="flex-end"
          mt="1"
          onPress={() => {
            navigation.navigate("RecuperarSenha");
          }}
        >Esqueceu a senha?</Link>
      </VStack>
      <VStack space={2}>
        <Button
          width="full"
          variant="solid"
          colorScheme="emerald"
          onPress={() => {
            navigation.navigate("MenuPerfil");
          }}
        >Entrar</Button>
        <HStack mt="6" justifyContent="center">
          <Text
            fontSize="sm"
            color="coolGray.600" _dark={{
              color: "warmGray.200"
            }}
          >Novo aqui?</Text>
          <Link
            _text={{
              color: "indigo.500",
              fontWeight: "medium",
              fontSize: "sm"
            }}
            marginLeft="2"
            onPress={() => {
              navigation.navigate("NovoUsuario");
            }}
          >Crie um cadastro.</Link>
        </HStack>
      </VStack>
    </VStack>
  );
}
