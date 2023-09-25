export async function getVanDetail(id) {
  return await getVansOrThrowError(`/api/vans/${id}`);
}

export async function getVans() {
  return await getVansOrThrowError("/api/vans");
}

export async function getHostVanDetail(id) {
  return await getVansOrThrowError(`/api/host/vans/${id}`);
}

export async function getHostVans() {
  return await getVansOrThrowError("/api/host/vans");
}

async function getVansOrThrowError(url) {
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
