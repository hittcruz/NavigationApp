import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856D6',
};
export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
    // backgroundColor: 'red',
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 10,
  },
  botonGrandeText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  avatarContainer: {
    // backgroundColor: '#A5A5CD',
    alignItems: 'center',
    marginTop: 20,
  },
  menuContainer: {
    marginVertical: 30,
    marginHorizontal: 30,
    // alignItems: 'center',
  },
  menuBoton: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 10,
  },
  menuTexto: {
    fontSize: 20,
    right: -10,
  },
});
