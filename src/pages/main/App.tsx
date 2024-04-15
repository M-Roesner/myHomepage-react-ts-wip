import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer.tsx";
import Header from "../../components/header/Header.tsx";

const App = () => {
  return (
    <>
      <Header />
      <div>
        {/* TODO: CONTENT DIV!!! */}
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  );
};

export default App;
