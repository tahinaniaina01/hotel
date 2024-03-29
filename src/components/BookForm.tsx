import { Button } from "./ui/button";
import { DatePicker } from "./ui/DatePicker";
import DropDownSelect from "./ui/DropDownSelect";

export default function BookForm() {
  return (
    <div className="w-full lg:h-[75px]">
      <div className="relative container px-0 h-auto lg:h-[75px]">
        <form
          action=""
          className="lg:absolute relative lg:-top-1/2 lg:z-20 my-7 lg:mt-0 w-full bg-secondary flex flex-col lg:flex-row lg:h-[75px] lg:px-0 px-5 lg:mx-auto"
        >
          <DatePicker className="rounded-none" title="Check In" />
          <DatePicker className="rounded-none" title="Check Out" />
          <DropDownSelect
            title="number of adult"
            options={["1 Adult", "2 Adults", "3 Adults", "4 Adults"]}
          />
          <DropDownSelect
            title="number of kids"
            options={["No kids", "1 kid", "2 kids", "3 kids", "4 kids"]}
          />
          <Button variant={"accent"} className="h-full w-full font-bold">
            check now
          </Button>
        </form>
      </div>
    </div>
  );
}
