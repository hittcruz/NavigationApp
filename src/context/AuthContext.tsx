import {createContext, useReducer} from 'react';
import {authReducer} from './AuthReducer';

//Definir como luce, que informacion tendre aqui
export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

//Estado inicial

export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

//usaremos para decirle a react como luce y q expone el context
export interface AuthContextProps {
  authState: AuthState;
  singIn: () => void;
  logOut: () => void;
  changeFavoriteIcon: (iconName: string) => void;
  changeUsername: (username: string) => void;
}
//Crear el contexto
export const AuthContext = createContext({} as AuthContextProps);

//Component proveedor del estado
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);
  const singIn = () => {
    dispatch({type: 'singIn'});
  };
  const logOut = () => {
    dispatch({type: 'logout'});
  };
  const changeFavoriteIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };
  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username});
  };
  return (
    <AuthContext.Provider
      value={{
        authState,
        singIn,
        logOut,
        changeFavoriteIcon,
        changeUsername,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
