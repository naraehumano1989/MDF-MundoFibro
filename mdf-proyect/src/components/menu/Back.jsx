import { ChevronUpIcon } from "@heroicons/react/24/solid";
function Back() {
  return (
    <div className="ml-[85%] mr-[0px] w-[10%] flex content-center p-2">
      <p className="bg-[#C4AB84] hover:text-[#C4AB84] hover:border hover:border-[#C4AB84] text-white font-bold text-[20px] hover:bg-[#F5F5F5] rounded text-center">
        <a href="#">
          {" "}
          <ChevronUpIcon className="w-12 h-12" />{" "}
        </a>
      </p>
    </div>
  );
}
export default Back;
