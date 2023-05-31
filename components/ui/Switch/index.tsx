
import React, { forwardRef } from 'react';
import * as Switch from '@radix-ui/react-switch';


export const Root = forwardRef<HTMLButtonElement, Switch.SwitchProps>((props, ref) => {
        const { checked, onChange, ...rest } = props;
        return (
                <Switch.Root
                ref={ref}
                className={
                    "bg-gray-500 data-[state=checked]:bg-blue-700 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                }
                {...rest}
            />

        );
});

Root.displayName = 'SwitchRoot'; // Add displayName property


export const Thumb = forwardRef<HTMLSpanElement, Switch.SwitchProps>((props, ref) => {
        const { checked, ...rest } = props;
        return (
                <Switch.Thumb
                ref={ref}
                className={
                    "data-[state=checked]:translate-x-5 pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                }
                {...rest}
            />
        );
});

Thumb.displayName = 'SwitchThumb'; // Add displayName property

