import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, FormControl, Heading, Input, VStack } from "native-base";
import { RootStackPerfilParamList } from "./routes";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackPerfilParamList>;
}

export function RecuperarSenha({ navigation }: NavigationProps) {
  const { handleSubmit, formState: { errors }, control } = useForm({
    resolver: yupResolver(schemaValidacao),
    defaultValues: { email: "" }
  });

  function onSubmit(values: FieldValues) {
    console.log(values.email);
    
    navigation.navigate("MenuPerfil");
  }

  return (
    <VStack
      flex={1}
      space={5}
      paddingX={10}
      paddingY={15}
    >
      <Heading fontSize="2xl" textAlign="center">
        Digite o email para enviar {"\n"} o link de recuperação da senha
      </Heading>
      <FormControl
        isRequired
        isInvalid={"email" in errors}
      >
        {/* <FormControl.Label>E-mail</FormControl.Label> */}
        <Controller
          control={control}
          name="email"
          rules={{ required: "Campo vazio" }}
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              width="full"
              placeholder="E-mail"
              variant="underlined"
              type="text"
              keyboardType="email-address"
              onBlur={onBlur}
              onChangeText={(val) => onChange(val)}
              value={value}
            />
          )}
        />
        <FormControl.ErrorMessage>
          {errors.email?.message}
        </FormControl.ErrorMessage>
      </FormControl>
      <Button
        width="full"
        variant="solid"
        colorScheme="emerald"
        onPress={handleSubmit(onSubmit)}
      >Enviar link</Button>
    </VStack>
  );
}

const schemaValidacao = yup.object({
  email: yup
    .string()
    .required("Campo vazio")
    .email("Email inválido"),
}).required();
