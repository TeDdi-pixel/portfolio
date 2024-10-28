import { LazyMotion } from "framer-motion";
import HomePage from "./pages/homePage";
const loadFeatures = () => import("./features.js").then((res) => res.default);
const App = () => {
  return (
    <LazyMotion features={loadFeatures}>
      <HomePage />
    </LazyMotion>
  );
};

export default App;
