import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  getDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBEDDLGFryAA1TXFE0U9g2u-DMwXtg6BbI",
  authDomain: "vanlife-2ca9d.firebaseapp.com",
  projectId: "vanlife-2ca9d",
  storageBucket: "vanlife-2ca9d.appspot.com",
  messagingSenderId: "89767901087",
  appId: "1:89767901087:web:7ee9a8b9fb1c0f7e13afaa",
  measurementId: "G-H2CEFWDM8L",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const vansCollectionRef = collection(db, "vans");

export async function getVanDetail(id) {
  const docRef = doc(db, "vans", id);
  const vanSnapshot = await getDoc(docRef);
  return vanSnapshot.data();
}

export async function getVans() {
  const querySnapshot = await getDocs(vansCollectionRef);
  return getSnapshotDataArray(querySnapshot);
}

export async function getHostVanDetail(id) {
  return getVanDetail(id);
}

export async function getHostVans() {
  const q = query(vansCollectionRef, where("hostId", "==", 123));
  const querySnapshot = await getDocs(q);
  return getSnapshotDataArray(querySnapshot);
}

function getSnapshotDataArray(querySnapshot) {
  return querySnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
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
