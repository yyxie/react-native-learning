import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  menuItem: {
    backgroundColor: '#fff',
    paddingLeft: 10,
    height: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  menuIcon: {
    width: 20,
    height: 20,
    resizeMode: 'cover',
    marginRight: 10,
  },
  menuContent: {
    flex: 1,
    height: 56,
    fontSize: 28,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingRight: 10,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderStyle: 'solid'
  },
  noBottomBorder: {
    borderBottomWidth: 0,
  },
  outBtn: {
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 41,
    lineHeight: 41,
    fontSize: 14,
    marginTop: 40,
    textAlign: 'center',
    color: '#484848'
  },
  blueTxt: {
    color: '#008CFF',
  },
  menuArrow: {
    width: 10,
    height: 10,
    resizeMode: 'contain',
  }
});
