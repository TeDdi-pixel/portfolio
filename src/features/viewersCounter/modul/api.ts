import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../shared/firebase/config";

export const getCounter = async () => {
  const docRef = doc(db, "unique_users", "users");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) return docSnap.data().counter || 0;

  throw new Error("No such document!");
};

export const updateCounter = async (newCount: number) => {
  const docRef = doc(db, "unique_users", "users");

  await updateDoc(docRef, {
    counter: newCount,
  });
};
