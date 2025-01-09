import { ReactNode } from "react";
import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import {
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../../components/ui/select";
import { Checkbox } from "../../components/ui/checkbox";
import { Button } from "../../components/ui/button";
import { Textarea } from "../ui/textarea";

interface SelectOption {
    id?: string | number;
    label: string;
    value: string;
}

// Props that are common to all field types
interface BaseFieldProps<T extends FieldValues> {
    form: UseFormReturn<T>;
    name: Path<T>;
    label: string;
    placeholder?: string;
    disabled?: boolean;
}

interface InputFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
    type: "text" | "number" | "multiline" | "textarea" | "password";
    rows?: number;
}

interface SelectFieldProps<T extends FieldValues> extends BaseFieldProps<T> {
    type: "select";
    options: SelectOption[];
    isMulti?: boolean;
}

type FieldProps<T extends FieldValues> = InputFieldProps<T> | SelectFieldProps<T>;

export function CustomFormField<T extends FieldValues>({
    form,
    name,
    label,
    placeholder,
    disabled,
    ...props
}: FieldProps<T>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const renderFieldContent = (field: any): ReactNode => {
        if (props.type === "select") {
            if (props.isMulti) {
                // Custom Multi-Select Logic
                return (
                    <div className="relative">
                        <Button
                            className="w-full"
                            variant="outline"
                            type="button"
                            onClick={() => {
                                const dropdown = document.getElementById(`${name}-dropdown`);
                                if (dropdown) {
                                    dropdown.style.display =
                                        dropdown.style.display === "block" ? "none" : "block";
                                }
                            }}
                            disabled={disabled}
                        >
                            {field.value?.length
                                ? props.options
                                    .filter((opt) => field.value.includes(opt.value))
                                    .map((opt) => opt.label)
                                    .join(", ")
                                : placeholder || "Select options"}
                        </Button>
                        <div
                            id={`${name}-dropdown`}
                            className="absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg"
                            style={{ display: "none" }}
                        >
                            <div className="p-2 space-y-2">
                                {props.options.map((option) => (
                                    <div key={option.value || option.id} className="flex items-center space-x-2">
                                        <Checkbox
                                            checked={field.value?.includes(option.value)}
                                            onCheckedChange={(checked) => {
                                                const newValues = [...(field.value || [])];
                                                if (checked) {
                                                    newValues.push(option.value);
                                                } else {
                                                    const index = newValues.indexOf(option.value);
                                                    if (index > -1) {
                                                        newValues.splice(index, 1);
                                                    }
                                                }
                                                field.onChange(newValues);
                                            }}
                                            disabled={disabled}
                                        />
                                        <span>{option.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="p-2 border-t">
                                <Button
                                    className="w-full"
                                    variant="default"
                                    type="button"
                                    onClick={() => {
                                        const dropdown = document.getElementById(`${name}-dropdown`);
                                        if (dropdown) dropdown.style.display = "none";
                                    }}
                                >
                                    Done
                                </Button>
                            </div>
                        </div>
                    </div>
                );
            }

            // Single-Select Logic
            return (
                <Select
                    onValueChange={field.onChange}
                    value={field.value}
                    disabled={disabled}
                >
                    <SelectTrigger>
                        <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                    <SelectContent>
                        {props.options.map((option) => (
                            <SelectItem key={option.id || option.value} value={option.value}>
                                {option.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            );
        }

        if (props.type === "textarea") {
            return (
                <Textarea
                    placeholder={placeholder}
                    disabled={disabled}
                    rows={props.rows || 3}
                    {...field}
                />
            );
        }
        // Input Logic
        return (
            <Input
                type={props.type}
                placeholder={placeholder}
                disabled={disabled}
                {...field}
            />
        );
    };

    return (
        <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{label}</FormLabel>
                    <FormControl>{renderFieldContent(field)}</FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
