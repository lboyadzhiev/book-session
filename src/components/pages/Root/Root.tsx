import { Outlet } from "react-router-dom";
import MainHeader from "../../MainHeader/MainHeader";

export default function Root() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}
