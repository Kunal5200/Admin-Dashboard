import React, { useEffect, useState } from "react";
import Header from "./header";
import Sidebar from "./sidebar";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const [show, setShow] = useState(true);
  const router = useRouter();
  useEffect(() => {
    if (router.pathname === "/") {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [router.pathname]);
  return (
    <div>
      {show && <Header />}
      {show && <Sidebar />}
      {children}
    </div>
  );
};

export default Layout;
