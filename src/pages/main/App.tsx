import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// Components
import Footer from "../../components/custom/navigation/footerNavigation/footer.tsx";
import Header from "../../components/custom/navigation/mainNavigation/Header.tsx";

// Style
import { StyledApp } from "./styledApp.ts";

// Helper functions
import { ScrollToAnchor } from "../../routes/routeUtils/ScrollToAnchor.tsx";
import { ScrollToTop } from "../../routes/routeUtils/ScrollToTop.tsx";
import { MetaManager } from "../../routes/routeUtils/MetaManager.tsx";

const App = () => {
  ScrollToAnchor(); // Handles scroll position to an anchor tag.
  ScrollToTop(); // Scrolls to the top of the page on route change, unless URL parameters are present.
  MetaManager(); // Manages dynamic updates of meta tags in the head based on current route.
  return (
    <>
      <Header />
      <StyledApp>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Outlet />
        </Suspense>
      </StyledApp>
      <Footer />
    </>
  );
};

export default App;
