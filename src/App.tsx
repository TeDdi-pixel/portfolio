import { LazyMotion } from "framer-motion";
import HomePage from "./pages/homePage";
import FollowerContainer from "./features/cursorFollower/ui/FollowerContainer.js";
const loadFeatures = () => import("./features.js").then((res) => res.default);

const App = () => {
  return (
    <LazyMotion features={loadFeatures}>
      <FollowerContainer>
        <HomePage />
      </FollowerContainer>
    </LazyMotion>
  );
};

export default App;
