import { forwardRef } from "react";

export type ToggleProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>((props, ref) => {
  return (
    <div className="group relative inline-flex w-11 shrink-0 cursor-pointer rounded-full bg-neutral-200 p-0.5 inset-ring inset-ring-neutral-900/5 outline-neutral-950 outline-offset-2 transition-colors duration-200 ease-in-out has-checked:bg-neutral-950 has-focus-visible:outline-2 dark:bg-white/5 dark:inset-ring-white/10 dark:outline-neutral-500 dark:has-checked:bg-neutral-500">
      <span className="aspect-square w-1/2 rounded-full bg-white shadow-xs ring-1 ring-neutral-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-full dark:ring-white/10" />
      <input
        ref={ref}
        type="checkbox"
        className="absolute inset-0 size-full appearance-none focus:outline-hidden"
        {...props}
      />
    </div>
  );
});

Toggle.displayName = "Toggle";
