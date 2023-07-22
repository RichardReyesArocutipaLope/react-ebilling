export const getLogin = async (obj) => {
  const resp = await fetchSinToken("Seguridad/cSeguridad/Login", obj, "POST");
  return resp;
};

const baseUrl = "/api"

const fetchSinToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`;
  if (method === 'GET') {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      body: data
    })
  }
}
