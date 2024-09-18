import React from "react";
import { useRouter } from "next/router";
import DashBoardLayout from "../../components/Common/dashBoardLayout";
import Layout from "../../components/Common/layout";
import CommonToastContainer from "../../components/Common/ToastContainer";



export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return (
    <>
      <CommonToastContainer />

      {isDashboardPage ? (
        <DashBoardLayout>
          <Component {...pageProps} />
        </DashBoardLayout>
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}
