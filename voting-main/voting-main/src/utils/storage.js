
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key,value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (e) {
      throw e;
  }
}




export const getData = async (item) => {
    try {
      const value = await AsyncStorage.getItem(item);
      return value;
    } catch(e) {
        throw e;
    }
}