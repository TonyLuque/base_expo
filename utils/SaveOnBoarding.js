import { useContext } from "react";
import Context from "./Context";
import Storage from "./Storage";

export const SaveOnBoarding = () => {
  const { setOn } = useContext(Context);

  const saveWithout = async () => {
    setOn(true);
  };

  const saveWith = async () => {
    await Storage.SetOnBoarding();
    setOn(true);
  };

  const remove = async () => {
    await Storage.RemoveOnBoarding();
    setOn(false);
  };

  return { saveWithout, saveWith, remove };
};
