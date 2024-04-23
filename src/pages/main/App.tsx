import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer.tsx";
import Header from "../../components/header/Header.tsx";

const App = () => {
  return (
    <>
      <Header />
      <main>
        {/* TODO: Style content DIV!!! */}
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default App;
