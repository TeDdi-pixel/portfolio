export const stackPhotos = [
  { id: 0, alt: "scss_logo", path: "./scss_logo.webp", tooltip: "Scss" },
  {
    id: 1,
    alt: "tailwind_logo",
    path: "./tailwind_logo.webp",
    tooltip: "Tailwind css",
  },
  { id: 3, alt: "html_logo", path: "./html_logo.webp", tooltip: "Html" },
  { id: 4, alt: "css_logo", path: "./css_logo.webp", tooltip: "Css" },
  { id: 5, alt: "mui_logo", path: "./mui_logo.webp", tooltip: "Mui" },
  { id: 6, alt: "js_logo", path: "./js_logo.webp", tooltip: "JavaScript" },
  { id: 7, alt: "ts_logo", path: "./ts_logo.webp", tooltip: "TypeScript" },
  { id: 8, alt: "react_logo", path: "./react_logo.webp", tooltip: "React" },
  { id: 9, alt: "redux_logo", path: "./redux_logo.webp", tooltip: "Redux" },
  {
    id: 10,
    alt: "Firebase_logo",
    path: "./firebase_logo.webp",
    tooltip: "Firebase",
  },
  {
    id: 11,
    alt: "FSD_logo",
    path: "./FSD_logo.webp",
    tooltip: "Feature-sliced design",
  },
  {
    id: 12,
    alt: "figma_logo",
    path: "./figma_logo.webp",
    tooltip: "Figma",
  },
  {
    id: 13,
    alt: "Git_logo",
    path: "./git_logo.webp",
    tooltip: "Git",
  },
  {
    id: 14,
    alt: "Zustand_logo",
    path: "./zustand_logo.webp",
    tooltip: "Zustand",
  },
  {
    id: 15,
    alt: "framer-motion logo",
    path: "./framer-motion.webp",
    tooltip: "Framer-motion",
  },
  {
    id: 16,
    alt: "Github_logo",
    path: "./github_logo.webp",
    tooltip: "GitHub",
  },
];

export type Photo = {
  id: number;
  alt: string;
  path: string;
};

const flowerShopPhotos: Photo[] = [
  { id: 0, alt: "entrance_photo", path: "./flowerShop/1.webp" },
  { id: 1, alt: "top_rated_block", path: "./flowerShop/2.webp" },
  { id: 2, alt: "side_block", path: "./flowerShop/3.webp" },
  { id: 3, alt: "menu", path: "./flowerShop/4.webp" },
  { id: 4, alt: "FAQ", path: "./flowerShop/5.webp" },
  { id: 5, alt: "flowers_types", path: "./flowerShop/6.webp" },
  { id: 6, alt: "presets", path: "./flowerShop/7.webp" },
  { id: 7, alt: "generated_flowers", path: "./flowerShop/8.webp" },
  { id: 8, alt: "bouquet_form", path: "./flowerShop/9.webp" },
  { id: 9, alt: "cart", path: "./flowerShop/10.webp" },
  { id: 10, alt: "shared_catalog", path: "./flowerShop/11.webp" },
  { id: 11, alt: "admin_panel", path: "./flowerShop/12.webp" },
];

const lockKipperPhotos: Photo[] = [
  { id: 0, alt: "login_form", path: "./LockKipper/1.webp" },
  { id: 1, alt: "registration_form", path: "./LockKipper/2.webp" },
  { id: 2, alt: "home_page", path: "./LockKipper/3.webp" },
  { id: 3, alt: "new_folder_form", path: "./LockKipper/4.webp" },
  { id: 4, alt: "new_login_item_form", path: "./LockKipper/5.webp" },
  { id: 5, alt: "new_card_form", path: "./LockKipper/6.webp" },
  { id: 6, alt: "new_secure_note_form", path: "./LockKipper/7.webp" },
  { id: 7, alt: "home_page_with_filters", path: "./LockKipper/8.webp" },
  { id: 8, alt: "home_page_with_side_menu", path: "./LockKipper/9.webp" },
  { id: 9, alt: "my_account_page", path: "./LockKipper/10.webp" },
];

const chicoryStudioPhotos: Photo[] = [
  { id: 0, alt: "login_form", path: "./ChicoryStudio/1.webp" },
  { id: 1, alt: "login_form", path: "./ChicoryStudio/2.webp" },
  { id: 2, alt: "home_page_dark", path: "./ChicoryStudio/3.webp" },
  { id: 3, alt: "home_page_light", path: "./ChicoryStudio/4.webp" },
  { id: 4, alt: "anime_page_dark", path: "./ChicoryStudio/5.webp" },
  { id: 5, alt: "anime_page_light", path: "./ChicoryStudio/6.webp" },
  { id: 6, alt: "anime_poster", path: "./ChicoryStudio/7.webp" },
];

const globePhotos: Photo[] = [
  { id: 0, alt: "login_form", path: "./Globe/1.webp" },
  { id: 1, alt: "login_form", path: "./Globe/2.webp" },
  { id: 2, alt: "home_page_dark", path: "./Globe/3.webp" },
  { id: 3, alt: "home_page_light", path: "./Globe/4.webp" },
  { id: 4, alt: "anime_page_dark", path: "./Globe/5.webp" },
  { id: 5, alt: "anime_page_light", path: "./Globe/6.webp" },
  { id: 6, alt: "anime_poster", path: "./Globe/7.webp" },
  { id: 7, alt: "anime_page_light", path: "./Globe/8.webp" },
  { id: 8, alt: "anime_poster", path: "./Globe/9.webp" },
];
const galleryPhotos: Photo[] = [
  { id: 0, alt: "images", path: "./Gallery/1.webp" },
  { id: 1, alt: "images", path: "./Gallery/2.webp" },
  { id: 2, alt: "fansy_box", path: "./Gallery/3.webp" },
  { id: 3, alt: "images", path: "./Gallery/4.webp" },
  { id: 4, alt: "fansy_box", path: "./Gallery/5.webp" },
];

export const projects = [
  {
    id: 0,
    name: "LockKipper",
    url: "https://lockkipper.vercel.app/",
    description: `LockKipper is a password manager that allows users to store and 
            manage their passwords. It supports managing various types of items such as 
            logins, cards, and secure notes. While developing, I focused on implementing 
            the user interfaces and core functionalities to ensure seamless item management 
            and user experience.`,
    photos: lockKipperPhotos,
    github: "https://github.com/TeDdi-pixel/lockkipper.git",
  },
  {
    id: 1,
    name: "FlowerShop",
    url: "https://flower-shop-theta.vercel.app/",
    description: `FlowerShop is a graduation project integrated with AI. Developed
            with using React, TypeScript, Redux, Firebase and AdenAI API within
            the Feature-Sliced design architecture. In this project I focused on
            creating the user interface and enabling core functionalities for
            ordering flowers.`,
    photos: flowerShopPhotos,
    github: "https://github.com/TeDdi-pixel/flowerShop.git",
  },
  {
    id: 2,
    name: "Chicory Studio",
    url: "https://chicory-studio-project-hc88.vercel.app/",
    description: `
          Chicory Studio is а team project that provides an ability to search the 
          most popular anime in different categories by using anime search API.
          My role included developing the homepage, anime pages, and user 
          registration page. The project involved collaborative development and code reviews
    `,
    photos: chicoryStudioPhotos,
    github: "https://github.com/Naezdnizu-shvabr/chicory-studio.git",
  },
  {
    id: 3,
    name: "Globe",
    url: "https://globe-s2zv.vercel.app/flights",
    description: `The Globe project aims to develop a travel website interface with 
          features such as user registration, profile customization (including 
          image handling), and bank card creation.`,
    photos: globePhotos,
    github: "https://github.com/TeDdi-pixel/globe.git",
  },
  {
    id: 4,
    name: "Gallery",
    url: "https://gallery-app-virid.vercel.app/",
    description: `The Gallery project focused on improving skills in API integration,
          creating a gallery for displaying and searching images by keywords.`,
    photos: galleryPhotos,
    github: "https://github.com/TeDdi-pixel/gallery-app.git",
  },
];
