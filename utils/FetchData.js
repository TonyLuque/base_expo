import { BASE_URL } from "@env";

async function getData({ query, headers }) {
  try {
  } catch (error) {}
}

async function postData({ urlPath, query, headers, body }) {
  try {
    console.log(`${BASE_URL}${urlPath}`);
    const data = await fetch(`${BASE_URL}${urlPath}`, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await data.json();

    if (!data.ok) throw Error(result);

    return result;
  } catch (error) {
    throw Error(error.message);
  }
}

async function putData({ query, headers, body }) {
  try {
  } catch (error) {}
}

async function deleteData({ query, headers, body }) {
  try {
  } catch (error) {}
}

module.exports = {
  getData,
  postData,
  putData,
  deleteData,
};
