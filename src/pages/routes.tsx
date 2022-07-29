import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon, IconButton } from 'native-base';
import { Carrinho } from './Carrinho';
import { EdicaoUsuario } from './EdicaoUsuario';
import { Favoritos } from './Favoritos';
import { Historico } from './Historico';
import { Home } from './Home';
import { Login } from './Login';
import { MenuPerfil } from './MenuPerfil';
import { NovoUsuario } from './NovoUsuario';
import { Perfil } from './Perfil';
import { MaterialIcons } from "@expo/vector-icons";
import { RecuperarSenha } from './RecuperarSenha';
import { DadosUsuario } from './DadosUsuario';

export type RootBottomTabParamList = {
  Home: undefined;
  Carrinho: undefined;
  Perfil: undefined;
}

export function AppTabRoutes() {
  const Tab = createBottomTabNavigator<RootBottomTabParamList>();

  return (
    <Tab.Navigator
      initialRouteName="Perfil"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: () => (<Icon
            as={<MaterialIcons name="home" />}
            size={8} marginRight="2" color="muted.400"
          />),
          headerShown: false
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          tabBarIcon: () => (<Icon
            as={<MaterialIcons name="shopping-cart" />}
            size={8} marginRight="2" color="muted.400"
          />),
          headerStyle: {
            justifyContent: "space-between",
            alignItems: "center",
          },
          headerRight: (props) => (<IconButton
            icon={<Icon
              as={<MaterialIcons name="check" />}
              size={8} marginRight="2" color="muted.400"
            />}
          />)
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarIcon: () => (<Icon
            as={<MaterialIcons name="person" />}
            size={10} marginRight="2" color="muted.400"
          />),
          headerShown: false
        }}
      />
    </Tab.Navigator>
  );
}

export type RootStackPerfilParamList = {
  Login: undefined;
  RecuperarSenha: undefined;
  NovoUsuario: undefined;
  MenuPerfil: undefined;
  Favoritos: undefined;
  Historico: undefined;
  DadosUsuario: undefined;
  EdicaoUsuario: undefined;
}

export function AppStackRoutesPerfil() {
  const Stack = createStackNavigator<RootStackPerfilParamList>();

  return (
    <Stack.Navigator initialRouteName="MenuPerfil">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RecuperarSenha"
        component={RecuperarSenha}
        options={{ title: "Recuperar senha" }}
      />
      <Stack.Screen
        name="NovoUsuario"
        component={NovoUsuario}
        options={{ title: "Novo usuário" }}
      />
      <Stack.Screen
        name="DadosUsuario"
        component={DadosUsuario}
        options={{ title: "Dados" }}
      />
      <Stack.Screen
        name="EdicaoUsuario"
        component={EdicaoUsuario}
        options={{ title: "Edição" }}
      />
      <Stack.Screen
        name="MenuPerfil"
        component={MenuPerfil}
        options={{ title: "Menu" }}
      />
      <Stack.Screen
        name="Historico"
        component={Historico}
        options={{ title: "Histórico" }}
      />
      <Stack.Screen
        name="Favoritos"
        component={Favoritos}
        options={{ title: "Favoritos" }}
      />
    </Stack.Navigator>
  );
}
