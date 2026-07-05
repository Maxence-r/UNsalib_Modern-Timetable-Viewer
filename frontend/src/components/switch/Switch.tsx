import type { ReactElement } from "react";

import "./Switch.css";

function Switch({
    className,
    id,
    isChecked,
    setIsChecked,
    animationDisabled = false,
}: {
    className?: string;
    id?: string;
    isChecked: boolean;
    setIsChecked: (isChecked: boolean) => void;
    animationDisabled?: boolean;
}): ReactElement {
    return (
        <label
            className={
                "switch" +
                (animationDisabled ? "" : " animate") +
                (className ? ` ${className}` : "")
            }
            id={id}
        >
            <input
                className="switch-input"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
            />
            <span className="switch-slider" />
        </label>
    );
}

// function SwitchView({
//     title,
//     description,
//     className,
//     id,
//     onCheck,
//     onUncheck,
// }: {
//     title: string;
//     description: string;
//     className: string;
//     id: string;
//     onCheck: () => void;
//     onUncheck: () => void;
// }): ReactElement {
//     return (
//         <div className={`switch-view ${className}`} id={id}>
//             <div className="switch-view-text">
//                 <span className="switch-view-title">{title}</span>
//                 {description ? (
//                     <span className="switch-view-desc">{description}</span>
//                 ) : (
//                     <></>
//                 )}
//             </div>
//             <Switch onCheck={onCheck} onUncheck={onUncheck}></Switch>
//         </div>
//     );
// }

// SwitchView.defaultProps = {
//     title: "",
//     description: "",
//     className: "",
//     id: "",
//     onCheck: () => {},
//     onUncheck: () => {},
// };

export { Switch };
