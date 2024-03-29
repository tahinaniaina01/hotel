import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DropDownSelectProps = {
  title: string;
  options: string[];
};

export default function DropDownSelect({
  title,
  options,
}: DropDownSelectProps) {
  return (
    <Select>
      <SelectTrigger className="w-full h-full">
        <SelectValue placeholder={title} />
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option}
            value={option}
            className="font-bold text-xl text-muted-foreground"
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
