import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  formLayoutWrap: {
    marginTop: 16,
    paddingVertical: 16,
  },
  // 横向的
  inlineFromLayoutWrap: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  inlineFormLabel: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 5,
    height: 22
  },
  inlineFormLabelTxt: {
    fontSize: 16,
  },
  inlineFormComponentWrap: {
    flex: 1,
    alignItems: 'flex-end',
  },
  // 横向的

  // 纵向的
  verticalFromLayoutWrap: {
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#eee',
  },
  verticalFormLabel: {
    display: 'flex',
    justifyContent: 'center',
    marginRight: 5,
    marginBottom: 17,
    height: 24
  },
  verticalFormLabelTxt: {
    fontSize: 18,
  },
  verticalFormComponent: {
    // paddingVertical: 5,
  },
  verticalFormComponentWrap: {
  },
  // 纵向的
  help: {
    color: 'red',
    textAlign: 'left',
    width: '100%',
    lineHeight: 38,
  }
});
