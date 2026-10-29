import About from "./About";
import Expertise from "./Expertise";
import Work from "./Work";
import Experience from "./Experience";


function RightContent() {
  return (
    <main className="right-content">
      <About />
      <Experience />
      <Work />
      <Expertise />
    </main>
  );
}

export default RightContent;
