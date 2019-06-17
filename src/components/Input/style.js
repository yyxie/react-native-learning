import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  textInputWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 0,
    paddingLeft: 5
  },
  textInputStyle: {
    padding: 0,
    fontSize: 14
  },
  flex: {
    flex: 1,
  },
  menuArrow: {
    width: 14,
    height: 14,
    resizeMode: 'contain',
  },
  autoCompleteListItemStyle: {
    paddingVertical: 9,
    paddingLeft: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: '#f4f4f4',
    backgroundColor: '#fff',
  },
  autoCompleteWrap: {
    position: 'absolute',
    left: 0,
    top: 32,
    right: 0,
    backgroundColor: '#fff',
  },
});
