export async function fetchGithubUsers() {
  const urlApi = "https://api.github.com/users";
  try {
    const response = await fetch(urlApi);
    if (!response.ok) throw new Error("Error fetching data");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("error", err.message);
  }
}
