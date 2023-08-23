import Part1 from "./part1";
import Part2 from "./part2";

function Bodypart() {
  return (
    <div className="flex flex-col lg:flex-row border-2 border-slate-100 border-opacity-50 mx-2">
      <div className="lg:w-2/3">
        <Part1 />
      </div>
      <div className="lg:w-1/3">
        <Part2 />
      </div>
    </div>
  );
}

export default Bodypart;
