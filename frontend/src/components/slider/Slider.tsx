import { useState, type ChangeEvent, type ReactElement } from "react";

import "./Slider.css";

function getProgress(value: number, min: number, max: number): number {
    return ((value - min) / (max - min)) * 100;
}

function Slider({
    min = 0,
    max = 100,
    step = 1,
    defaultValue = 0,
    onChange,
}: {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: number;
    onChange?: (value: number) => void;
}): ReactElement {
    const [value, setValue] = useState(defaultValue);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const v = parseInt(e.currentTarget.value);
        onChange?.(v);
        setValue(v);
    };

    return (
        <input
            className="slider"
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={handleChange}
            style={{
                backgroundImage:
                    "linear-gradient(to right, var(--color-accent) " +
                    getProgress(value, min, max) +
                    "%, var(--color-neutral) " +
                    getProgress(value, min, max) +
                    "%)",
            }}
        />
    );
}

export { Slider };
