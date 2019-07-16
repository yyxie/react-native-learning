import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  listItem: {
    width: '100%',
    paddingVertical: 20,
    marginBottom: 5,
    backgroundColor: '#FFAB67',
    color: '#fff'
  },
  listText: {
    color: '#fff'
  },
  frontIcon: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  searchBar: {
    height: 28,
    borderBottomWidth: 1,
    borderColor: '#eee',
    borderStyle: 'solid',
    marginBottom: 5,
  }
});