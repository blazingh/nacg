import { Label } from "./label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";

interface SelectionWithOptionsProps {
  options: { label: string; value: any }[];
  value: string;
  label: string;
  selectLabel?: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export function SelectionWithOptions({
  label,
  options,
  value,
  placeholder,
  selectLabel,
  onChange,
}: SelectionWithOptionsProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label className="">{label}</Label>
      <Select onValueChange={(val) => onChange(val)} value={value}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {selectLabel && <SelectLabel>{selectLabel}</SelectLabel>}
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
