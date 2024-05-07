import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/footer/footer.tsx";
import Header from "../../components/header/Header.tsx";
import { StyledApp } from "./styledApp.ts";
import ScrollToAnchor from "../../routes/ScrollToAnchor.tsx";

const App = () => {
  ScrollToAnchor(); // Handles scroll position to an anchor tag.
  return (
    <>
      <Header />
      <StyledApp>
        {/* TODO: Style content DIV!!! */}
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </StyledApp>
      <Footer />
    </>
  );
};

export default App;
