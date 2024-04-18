// import { Suspense, lazy } from "react";
// import { Navigate, useRoutes } from "react-router-dom";
// // import AuthLayout from "../layouts/auth";
// // import { DEFAULT_PATH } from "../config";
// import LoadingScreen from "../components/LoadingScreen";

// const Loadable = (Component) => (props) => {
//   return (
//     <Suspense fallback={<LoadingScreen />}>
//       <Component {...props} />
//     </Suspense>
//   );
// };

// export default function Router() {
//   return useRoutes([
//     {
//       path: "/",
//       element: <Home />,
//       children: [
//         { path: "home", element: <LoginPage /> },
//       ],
//     }
//   ]);
// }

// const Home = Loadable(
//   lazy(() => import("../components/"))
// );
