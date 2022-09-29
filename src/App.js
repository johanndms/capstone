import { Routes, Route } from "react-router";
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Signin from "./routes/signin/signin.component";

const Shop = () => {
   return <h1>I'm the shop page</h1>;
};
const Hats = () => {
   return <h1>I'm the hat's page</h1>;
};

const App = () => {
   return (
      <Routes>
         <Route path="/" element={<Navigation />}>
            <Route index element={<Home />} />
            <Route path="shop" element={<Shop />} />
            <Route path="hats" element={<Hats />} />
            <Route path="signin" element={<Signin />} />
         </Route>
      </Routes>
   );
};

export default App;
