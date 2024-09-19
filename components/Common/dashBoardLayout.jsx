import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import DashBoardLeftbar from "./dashBoardLeftbar";
import DashBoardTopBar from "./dashBoardTopBar";

const DashBoardLayout = ({ children, session }) => {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Check for token on client side
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);

    if (!storedToken) {
      router.push("/login");
    }
  }, [router]);

  return (
    <main className="bg-color">
      <DashBoardTopBar />
      <section className="sidebar_sec">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-2 p-0">
              <DashBoardLeftbar />
            </div>
            <div className="col-lg-10 col-md-10">
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default DashBoardLayout;
