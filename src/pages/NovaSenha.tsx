import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Button, FormControl, Heading, Icon, Input, VStack } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackPerfilParamList } from "./routes";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useState } from "react";

interface CamposFormularioTypes {
  isInvalid: boolean;
  name: "senha" | "confirmar_senha";
  placeholder: string;
  inputLeftElement: JSX.Element;
  inputRightElement: JSX.Element;
  secureTextEntry: boolean;
  errors: string | undefined;
}

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
    alert(values.senha);

    // navigation.navigate("MenuPerfil");
  }

  const icone_cadeado = <Icon
    as={<MaterialIcons name="lock" />}
    size={5} marginRight="2" color="muted.400"
  />;

  const icone_exibe_senha1 = <Icon
    as={<MaterialIcons name={showSenha1 ? "visibility" : "visibility-off"} />}
    size={5} mr="2" color="muted.400" onPress={() => setShowSenha1(!showSenha1)}
  />;

  const icone_exibe_senha2 = <Icon
    as={<MaterialIcons name={showSenha2 ? "visibility" : "visibility-off"} />}
    size={5} mr="2" color="muted.400" onPress={() => setShowSenha2(!showSenha2)}
  />;

  const campos_formulario: CamposFormularioTypes[] = [
    {
      isInvalid: "senha" in errors,
      name: "senha",
      placeholder: "Nova senha",
      inputLeftElement: icone_cadeado,
      inputRightElement: icone_exibe_senha1,
      secureTextEntry: !showSenha1,
      errors: errors.senha?.message
    },
    {
      isInvalid: "confirmar_senha" in errors,
      name: "confirmar_senha",
      placeholder: "Confirmar senha",
      inputLeftElement: icone_cadeado,
      inputRightElement: icone_exibe_senha2,
      secureTextEntry: !showSenha2,
      errors: errors.confirmar_senha?.message
    },
  ];

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
      {campos_formulario.map((item, index) => (
        <FormControl
          isRequired
          isInvalid={item.isInvalid}
          key={index}
        >
          <Controller
            control={control}
            name={item.name}
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                width="full"
                placeholder={item.placeholder}
                variant="underlined"
                type="text"
                keyboardType="default"
                onBlur={onBlur}
                onChangeText={(val) => onChange(val)}
                value={value}
                InputLeftElement={item.inputLeftElement}
                InputRightElement={item.inputRightElement}
                secureTextEntry={item.secureTextEntry}
              />
            )}
          />
          <FormControl.ErrorMessage>
            {item.errors}
          </FormControl.ErrorMessage>
        </FormControl>
      ))}
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
    .required("Campo vazio")
    .min(8, "Minimo de 8 caracteres")
    .max(8, "Maximo de 32 caracteres"),
  confirmar_senha: yup
    .string()
    .required("Campo vazio")
    .min(8, "Minimo de 8 caracteres")
    .max(8, "Maximo de 32 caracteres")
    .test('passwords-match', "As senhas são diferentes", function (value) {
      return this.parent.senha === value
    }),
}).required();
