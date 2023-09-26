export async function getVanDetail(id) {
  return await getVansByUrl(`/api/vans/${id}`);
}

export async function getVans() {
  return await getVansByUrl("/api/vans");
}

export async function getHostVanDetail(id) {
  return await getVansByUrl(`/api/host/vans/${id}`);
}

export async function getHostVans() {
  return await getVansByUrl("/api/host/vans");
}

async function getVansByUrl(url) {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("An error occured while trying to download vans.");
  const data = await response.json();
  return data.vans;
}

export async function loginUser(creds) {
  const res = await fetch("/api/login", {
    method: "post",
    body: JSON.stringify(creds),
  });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message,
      statusText: res.statusText,
      status: res.status,
    };
  }

  return data;
}
