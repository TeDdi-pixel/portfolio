import { v4 as uuidv4 } from "uuid";

export const isUniqueUser = (): boolean => !!localStorage.getItem("userId");

export const setUniqueUser = () => {
  const storedUserId = uuidv4();
  localStorage.setItem("userId", storedUserId);
};
