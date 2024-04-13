const url = "https://661a03c6125e9bb9f29b2c25.mockapi.io/api/v1/albums";

async function appInit() {
  const res = await fetch(url);
  const payload = await res.json();
  console.log(payload);
}
appInit();
