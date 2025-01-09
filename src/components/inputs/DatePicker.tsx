import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

export function DatePicker({ value, onChange }: { value?: Date; onChange: (date: Date) => void }) {
    const [date, setDate] = React.useState<Date | undefined>(value)
  
    React.useEffect(() => {
      if (date !== value) {
        onChange(date!)
      }
    }, [date, value, onChange])
  
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-[280px] justify-start text-left font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate)
              onChange(selectedDate!)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    )
  }
  