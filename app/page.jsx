import Aholi from "./aholi";
import Axborot from "./axborot";
import Biznes from "./biznes";
import Galereya from "./galereya";
import HomePage from "./home";
import Murojat from "./murojat";
import Savollar from "./savollar";

export default function Home() {
  return (
    <div className="scroll-smooth snap-y snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <HomePage />
      <Biznes />
      <Aholi />
      <Galereya />
      <Axborot />
      <Savollar />
      <Murojat />
    </div>
  );
}
