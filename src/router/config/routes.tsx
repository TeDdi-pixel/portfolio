import { LazyMotion, domAnimation } from "framer-motion";
import { lazy } from "react";

// Ленивая загрузка страницы
const HomePage = lazy(() => import("../../pages/homePage"));

export const routes = [
  {
    id: 0,
    path: "/",
    element: (
      // LazyMotion для ленивой загрузки анимаций, используем стандартный движок
      <LazyMotion features={domAnimation}>
        <HomePage />
      </LazyMotion>
    ),
  },
  // Можно добавить другие страницы по аналогии
];