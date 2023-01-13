import { HomePageContainer } from "@/container/home-page-container";
import { HomepageContextProvider } from "@/container/home-page-container/use-homepage";

function HomePage() {
  return (
    <HomepageContextProvider>
      <HomePageContainer />
    </HomepageContextProvider>
  );
}

export default HomePage;
