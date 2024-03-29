import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { HTMLAttributes, useState } from "react";

interface DatePickerProps extends HTMLAttributes<"div"> {
  title?: string;
}

export function DatePicker({ title, ...props }: DatePickerProps) {
  const [date, setDate] = useState<Date>();

  return (
    <Popover {...props}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full flex justify-between h-full text-left font-bold text-sm lg:text-xl",
            !date && "text-muted-foreground"
          )}
        >
          {date ? format(date, "PPP") : <span>{title || "Pick a date"}</span>}
          <CalendarIcon className="mr-2 h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
