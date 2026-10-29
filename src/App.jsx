import CursorGlow from "./components/CursorGlow";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import MainLayout from "./layout/MainLayout";
import Contact from "./layout/Contact";

function App() {
  return (
    <>
      <CursorGlow />

      <Hero>
        <TechStack />
      </Hero>

      {/* POST-HERO LAYOUT */}
      <MainLayout />
      <Contact />
    </>
  );
}

export default App;
