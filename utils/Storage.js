import * as SecureStore from "expo-secure-store";

const keyWord = { on: "on", token: "token" };

const GetOnBoarding = async () => {
  try {
    return await SecureStore.getItemAsync(keyWord.on);
  } catch (e) {
    console.log(e);
  }
};

const SetOnBoarding = async () => {
  try {
    await SecureStore.setItemAsync(keyWord.on, "true");
  } catch (e) {
    console.log(e);
  }
};

const RemoveOnBoarding = async () => {
  try {
    await SecureStore.deleteItemAsync(keyWord.on);
  } catch (e) {
    console.log(e);
  }
};

const GetOnToken = async () => {
  try {
    return await SecureStore.getItemAsync(keyWord.token);
  } catch (e) {
    console.log(e);
  }
};

const SetOnToken = async (token) => {
  try {
    await SecureStore.setItemAsync(keyWord.token, token);
  } catch (e) {
    console.log(e);
  }
};

const RemoveOnToken = async () => {
  try {
    await SecureStore.deleteItemAsync(keyWord.token);
  } catch (e) {
    console.log(e);
  }
};

export default {
  GetOnBoarding,
  SetOnBoarding,
  RemoveOnBoarding,
  GetOnToken,
  SetOnToken,
  RemoveOnToken,
};
