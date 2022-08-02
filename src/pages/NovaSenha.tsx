import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, FormControl, Heading, Icon, Input, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackPerfilParamList } from "./routes";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackPerfilParamList>;
}

export function NovaSenha({ navigation }: NavigationProps) {
  const [showSenha1, setShowSenha1] = useState(false);
  const [showSenha2, setShowSenha2] = useState(false);

  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schemaValidacao),
    defaultValues: { senha: "", confirmar_senha: "" }
  });

  function onSubmit(values: FieldValues) {
    console.log(values.email);

    // navigation.navigate("MenuPerfil");
  }

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
      <FormControl
        isRequired
        isInvalid={"senha" in errors}
      >
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              width="full"
              placeholder="Nova senha"
              variant="underlined"
              type="text"
              keyboardType="default"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val)}
              value={value}
              InputLeftElement={<Icon
                as={<MaterialIcons name="lock" />}
                size={5} marginRight="2" color="muted.400"
              />}
              InputRightElement={<Icon
                as={<MaterialIcons name={showSenha1 ? "visibility" : "visibility-off"} />}
                size={5} mr="2" color="muted.400" onPress={() => setShowSenha1(!showSenha1)}
              />}
              secureTextEntry={!showSenha1}
            />
          )}
        />
        <FormControl.ErrorMessage>
          {errors.senha?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <FormControl
        isRequired
        isInvalid={"confirmar_senha" in errors}
      >
        <Controller
          control={control}
          name="confirmar_senha"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              width="full"
              placeholder="Confirmar senha"
              variant="underlined"
              type="text"
              keyboardType="default"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val)}
              value={value}
              InputLeftElement={<Icon
                as={<MaterialIcons name="lock" />}
                size={5} marginRight="2" color="muted.400"
              />}
              InputRightElement={<Icon
                as={<MaterialIcons name={showSenha2 ? "visibility" : "visibility-off"} />}
                size={5} mr="2" color="muted.400" onPress={() => setShowSenha2(!showSenha2)}
              />}
              secureTextEntry={!showSenha2}
            />
          )}
        />
        <FormControl.ErrorMessage>
          {errors.confirmar_senha?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button
        width="full"
        variant="solid"
        colorScheme="emerald"
        onPress={handleSubmit(onSubmit)}
      >Salvar</Button>
    </VStack>
  );
}

const schemaValidacao = yup.object({
  senha: yup
    .string()
    .required("Campo vazio"),
  confirmar_senha: yup
    .string()
    .required("Campo vazio")
    .test('passwords-match', "As senhas são diferentes", function (value) {
      return this.parent.senha === value
    }),
}).required();
