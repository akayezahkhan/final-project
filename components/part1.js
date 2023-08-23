import Part1_1 from "./part1.1";
import Part1_2 from "./part1.2";

function Part1() {
  return (
    <div className="flex flex-col md:flex-row bg-slate-100 bg-opacity-50 m-2 rounded-lg lg:h-96">
      <div className="md:w-1/2">
        <Part1_1 />
      </div>
      <div className="md:w-1/2">
        <Part1_2 />
      </div>
    </div>
  );
}

export default Part1;
