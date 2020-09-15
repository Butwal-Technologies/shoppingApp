import AsyncStorage from '@react-native-community/async-storage';

export const _storeData = async (key, value) => {
  try {
    const jsonValue = JSON.stringify(value);
    console.log("I STORED");
    console.log(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (error) {
    console.log(error);
  }
};

export const _retrieveData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
  return;
};

export const _mergeData = async (key, data) => {
  try {
    const jsonValue = await AsyncStorage.mergeItem(key, JSON.stringify(data));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (error) {
    console.log(error);
  }
};
