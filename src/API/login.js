export async function login({ username, password }) {
  const promise = new Promise((resolve) =>
    setTimeout(() => {
      resolve(`Logged in as ${username} (${password})`);
    }, 2000)
  );
  const response = await promise;
  return response;
}
