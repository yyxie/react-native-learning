import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inlineFromLayoutWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  inlineFormLabel: {
    display: 'flex',
    justifyContent: 'center',
    height: 38,
    marginRight: 5,
  },
  inlineFormLabelTxt: {
    fontSize: 15,
  },
  inlineFormComponentWrap: {
    flex: 1,
  },
  formComponent: {
    display: 'flex',
    justifyContent: 'center',
    height: 38,
    width: '100%',
  },
  verticalFromLayoutWrap: {
    marginTop: 18,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  verticalFormLabel: {
    display: 'flex',
    justifyContent: 'center',
    height: 38,
    marginRight: 5,
  },
  verticalFormLabelTxt: {
    fontSize: 15,
  },
  verticalFormComponent: {
    // paddingVertical: 5,
  },
  verticalFormComponentWrap: {
  },
  help: {
    color: 'red',
    textAlign: 'left',
    width: '100%',
    lineHeight: 38,
  }
});
