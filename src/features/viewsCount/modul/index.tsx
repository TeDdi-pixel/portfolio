import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../shared/firebase/config";
import { v4 as uuidv4 } from "uuid";

export const ViewsCount = () => {
  const [viewsCount, setViewsCount] = useState(0);

  // Получение текущего значения счетчика из базы данных
  const getCountData = async () => {
    try {
      const docRef = doc(db, "unique_users", "users");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const currentCount = docSnap.data().usersCount || 0;
        setViewsCount(currentCount);
        return currentCount;
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error getting document:", error);
    }
  };

  // Функция для увеличения счетчика
  const incrementViewsCount = async (newCount: number) => {
    try {
      const docRef = doc(db, "unique_users", "users");

      await updateDoc(docRef, {
        usersCount: newCount,
      });

      setViewsCount(newCount);
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  // Проверка, установлен ли идентификатор пользователя в localStorage
  const checkUniqueUser = () => {
    const storedUserId = localStorage.getItem("userId");
    return !!storedUserId;
  };

  // Обновление счетчика, если новый пользователь
  const updateUsersCount = async () => {
    try {
      const oldViewsCount = await getCountData();

      const userExists = checkUniqueUser();
      if (userExists) return;

      const storedUserId = uuidv4();
      localStorage.setItem("userId", storedUserId);

      const newViewsCount = oldViewsCount + 1;
      await incrementViewsCount(newViewsCount);
    } catch (error) {
      console.error("Error in updatingUsersCount:", error);
    }
  };

  useEffect(() => {
    updateUsersCount(); // Вызываем при монтировании компонента
  }, []); // Вызываем только один раз при монтировании компонента

  return <div className="absolute -z-1000 text-[0px]">{viewsCount}</div>;
};

export default ViewsCount;
