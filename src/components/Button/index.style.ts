import { StyleSheet } from 'react-native';

const primary = StyleSheet.create({
  commonWrap: {
    width: '100%',
    height: 42,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonText: {
    color: '#fff',
    fontSize: 17,
  },
  primaryWrap: {
    backgroundColor: '#4698ee',
    borderColor: '#4698ee',
  },
  primaryText: {
  },
  dangerWrap: {
    backgroundColor: '#ff4d4f',
    borderColor: '#ff4d4f',
  },
  dangerText: {
    color: '#fff'
  },
  disabled: {
    color: '#FFFFFF',
    backgroundColor: '#f5f5f5',
    borderColor: '#d9d9d9',
  }
});

const ghost = StyleSheet.create({
  commonWrap: {
    width: '100%',
    height: 42,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  commonText: {
    color: '#4698ee',
    fontSize: 17,
  },
  primaryWrap: {
    backgroundColor: '#F4F5F8',
  },
  primaryText: {
  },
  dangerWrap: {
    backgroundColor: '#F4F5F8',
  },
  dangerText: {
    color: '#F63623'
  },
  disabled: {
    color: '#FFFFFF',
    backgroundColor: '#f5f5f5',
    borderColor: '#d9d9d9',
  }
});

export default {
  primary,
  ghost
};
