import type { ReactElement } from "react";

import "./Chip.css";

function Chip({
    type,
    name,
    text,
}: {
    type: "radio" | "checkbox";
    name: string;
    text: string;
}): ReactElement {
    return (
        <label className="chip">
            <input type={type} name={name} />
            <span>{text}</span>
        </label>
    );
}

function ChipsContainer({
    multiSelect = false,
    name,
    options,
    setSelectedOptions,
}: {
    multiSelect?: boolean;
    name: string;
    options: string[];
}): ReactElement {
    return (
        <div className="chips-container">
            {options.map((o) => (
                <Chip
                    type={multiSelect ? "checkbox" : "radio"}
                    name={name}
                    text={o}
                    key={o}
                />
            ))}
        </div>
    );
}

export { ChipsContainer };
