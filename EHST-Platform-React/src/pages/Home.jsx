import Navbar from "../components/layout/Navbar";

import Hero from "../components/sections/Hero";
import Strategy from "../components/sections/Strategy";
import ActionLines from "../components/sections/ActionLines";
import StrategicAxes from "../components/sections/StrategicAxes";
import Indicators from "../components/sections/Indicators";
import PowerBIDashboard from "../components/sections/PowerBIDashboard";
import Resources from "../components/sections/Resources";

function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <Strategy />

        <ActionLines />

        <StrategicAxes />

        <Indicators />

        <PowerBIDashboard />

        <Resources />
      </main>
    </>
  );
}

export default Home;