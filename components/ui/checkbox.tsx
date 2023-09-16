"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    className={cn(
      "peer h-5 w-5 shrink-0 border border-black ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-white data-[state=checked]:text-orange-600",
      className
    )}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn("flex items-center justify-center text-current")}
    >
      <Check className="h-4 w-4" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

interface Props {
  category: string;
  quantity: number;
  checked?: boolean;
  onChange?: (isChecked: boolean) => void;
}

export const CheckboxWithText: React.FC<Props> = ({
  category,
  quantity,
  checked,
  onChange,
}) => {
  const id = React.useId();

  const handleCheckboxChange = () => {
    if (onChange) {
      onChange(!checked); // Toggle the checked state and call the onChange callback
    }
  };
  return (
    <div className="items-top flex space-x-7">
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleCheckboxChange}
      />
      <div className="justify-between w-9/12 flex gap-2 leading-none">
        <label
          htmlFor={id}
          className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {category}
        </label>
        <label
          htmlFor={id}
          className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {"( "}
          {quantity}
          {" )"}
        </label>
      </div>
    </div>
  );
};

export { Checkbox };
