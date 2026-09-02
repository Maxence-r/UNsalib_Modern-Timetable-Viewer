import { cloneElement, type ReactNode } from "react";

import "./Card.css";

function CardHeader({
    text,
    icon,
}: {
    text: string;
    icon?: React.JSX.Element;
}): React.JSX.Element {
    return (
        <div className="header">
            <h3>{text}</h3>
            {icon && cloneElement(icon, { size: 16, strokeWidth: 2.25 })}
        </div>
    );
}

function CardContent({ children }: { children: ReactNode }): React.JSX.Element {
    return <div className="content">{children}</div>;
}

function CardActions({ children }: { children: ReactNode }): React.JSX.Element {
    return <div className="actions">{children}</div>;
}

function Card({
    className,
    id,
    children,
    highlighted = false,
    secondary = false,
    isLoading = false,
}: {
    className?: string;
    id?: string;
    children: ReactNode;
    highlighted?: boolean;
    secondary?: boolean;
    isLoading?: boolean;
}): React.JSX.Element {
    let classes = "card";
    classes += secondary ? " secondary" : "";
    classes += highlighted ? " highlighted" : "";
    classes += className ? ` ${className}` : "";

    return (
        <div className={classes} id={id}>
            {children}
            {isLoading && <div className="loader" />}
        </div>
    );
}

export { CardHeader, CardContent, CardActions, Card };
