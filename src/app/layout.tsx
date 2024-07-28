import { ReactNode } from "react";
import "./globals.css";
import { Poppins } from "next/font/google";
type children = {
  children: ReactNode;
};
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
const Layout = ({ children }: children) => {
  return (
    <html>
      <body className={poppins.className}>{children}</body>
    </html>
  );
};

export default Layout;
