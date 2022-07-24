import { Buffer } from "buffer";
import Storage from "../utils/Storage";

function decode(jwt) {
  try {
    const parts = jwt
      .split(".")
      .map((part) =>
        Buffer.from(
          part.replace(/-/g, "+").replace(/_/g, "/"),
          "base64"
        ).toString()
      );
    return JSON.parse(parts[1]);
  } catch (error) {
    throw new Error("Error get token payload");
  }
}

async function expirationDate(setToken) {
  try {
    const token = await Storage.GetOnToken();
    if (token) {
      const payload = decode(token);

      const today = Date.now();
      const expDate = payload.exp * 1000;
      console.log("hoy:", today, "exp:", expDate);
      if (expDate < today) {
        Storage.RemoveOnToken();
        setToken(false);
        return null;
      }
      return payload;
    }
  } catch (error) {
    throw new Error("Error verifying expiration token payload");
  }
}

module.exports = { decode, expirationDate };
