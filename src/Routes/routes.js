import { Home, Browse, Details, Streams, Profile } from "../Views/index";

const routes = [
  { name: "home", path: "/", component: Home },
  { name: "browse", path: "/browse", component: Browse },
  { name: "details", path: "/details", exact: true, component: Details },
  { name: "streams", path: "/streams", component: Streams },
  { name: "profile", path: "/profile", component: Profile },
];

export default routes;
