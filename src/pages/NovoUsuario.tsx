import { Button, CheckIcon, Heading, HStack, Icon, Input, Link, ScrollView, Select, Text, VStack } from "native-base";
import React, { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackPerfilParamList } from "./routes";
import { lista_estados_brasil } from "../utils/lista_estados";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

type NavigationProps = {
  navigation: NativeStackNavigationProp<RootStackPerfilParamList>;
}

export function NovoUsuario({ navigation }: NavigationProps) {
  const [show, setShow] = useState(false);
  const [service, setService] = useState("");

  return (
    <VStack flex={1}>
      <ScrollView flex={1}>
        <VStack
          flex={1}
          space={5}
          paddingX={10}
          paddingY={15}
        >
          <VStack space={2} width="full">
            <Input
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
              secureTextEntry
            />
            <Input
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
              placeholder="Confirmar senha"
              keyboardType="default"
              variant="underlined"
              secureTextEntry
            />
            <HStack space={2}>
              <Input
                flex={1}
                InputLeftElement={<Icon
                  as={<MaterialIcons name="phone" />}
                  size={5} marginRight="2" color="muted.400"
                />}
                placeholder="Telefone 1"
                variant="underlined"
                type="text"
                keyboardType="phone-pad"
              />
              <Input
                flex={1}
                InputLeftElement={<Icon
                  as={<MaterialIcons name="phone" />}
                  size={5} marginRight="2" color="muted.400"
                />}
                placeholder="Telefone 2 (Opcional)"
                variant="underlined"
                type="text"
                keyboardType="phone-pad"
              />
            </HStack>
            <Input
              width="full"
              InputLeftElement={<Icon
                as={<MaterialCommunityIcons name="id-card" />}
                size={5} marginRight="2" color="muted.400"
              />}
              placeholder="CPF/CNPJ"
              variant="underlined"
              type="text"
              keyboardType="numbers-and-punctuation"
            />
            <Input
              width="full"
              InputLeftElement={<Icon
                as={<MaterialCommunityIcons name="road" />}
                size={5} marginRight="2" color="muted.400"
              />}
              placeholder="Rua"
              variant="underlined"
              type="text"
              keyboardType="numbers-and-punctuation"
            />
            <HStack space={2}>
              <Input
                flex={1}
                InputLeftElement={<Icon
                  as={<Octicons name="number" />}
                  size={5} marginRight="2" color="muted.400"
                />}
                placeholder="Numero"
                variant="underlined"
                type="text"
                keyboardType="numbers-and-punctuation"
              />
              <Input
                flex={1}
                InputLeftElement={<Icon
                  as={<MaterialIcons name="house" />}
                  size={5} marginRight="2" color="muted.400"
                />}
                placeholder="Complemento"
                variant="underlined"
                type="text"
                keyboardType="default"
              />
            </HStack>
            <Input
              width="full"
              InputLeftElement={<Icon
                as={<MaterialCommunityIcons name="home-city" />}
                size={5} marginRight="2" color="muted.400"
              />}
              placeholder="Bairro"
              variant="underlined"
              type="text"
              keyboardType="default"
            />
            <Input
              width="full"
              InputLeftElement={<Icon
                as={<FontAwesome5 name="city" />}
                size={5} marginRight="2" color="muted.400"
              />}
              placeholder="Cidade"
              variant="underlined"
              type="text"
              keyboardType="default"
            />
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Estado"
              placeholder="Estado"
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size="5" />
              }}
              mt={1}
              onValueChange={itemValue => setService(itemValue)}
            >
              {lista_estados_brasil.map((item, index) => {
                return (
                  <Select.Item
                    key={index}
                    label={item.texto}
                    value={item.valor}
                  />
                );
              })}
            </Select>
            <Input
              width="full"
              InputLeftElement={<Icon
                as={<Ionicons name="md-flag-outline" />}
                size={5} marginRight="2" color="muted.400"
              />}
              placeholder="Pais"
              variant="underlined"
              type="text"
              keyboardType="default"
            />
          </VStack>
          <HStack space={2}>
            <Button
              flex={1}
              variant="solid"
              colorScheme="emerald"
              onPress={() => {
                navigation.navigate("MenuPerfil");
              }}
            >Salvar</Button>
            <Button
              flex={1}
              variant="solid"
              colorScheme="danger"
            >Limpar</Button>
          </HStack>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
