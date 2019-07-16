import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  inlineFromLayoutWrap: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'flex-start',
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
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E1E1E1',
    borderRadius: 5,
  },
  verticalFromLayoutWrap: {
    marginTop: 18,
    paddingHorizontal: 5,
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