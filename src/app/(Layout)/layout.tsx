import LayoutHeader from "@/app/(Layout)/components/LayoutHeader";
import { ReactNode } from "react";

type children = {
  children: ReactNode;
};

const Layout = ({ children }: children) => {
  return (
    <>
      <LayoutHeader />
      {children}
    </>
  );
};

export default Layout;
