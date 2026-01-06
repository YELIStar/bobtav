import React from 'react';
import type { ReactNode } from "react";

interface CounterButtonProps {
    count: number;
    onIncrement: () => void;
    onDecrement: () => void;
    children?: ReactNode;
}

const CounterButton: React.FC<CounterButtonProps> = React.memo<CounterButtonProps>(({
    count,
    onIncrement,
    onDecrement,
    children,
}) => {
    const renderedChildren = React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, {
                key: index,
                // className: 'backgroud-color'
            });
        }
        return child;
    });
    return (
        <div className="flex gap-2 items-center">
            {renderedChildren}
            <span>当前计数：{count}</span>
            <button onClick={onIncrement}>+1</button>
            <button onClick={onDecrement}>-1</button>
        </div>
    );
});

export default CounterButton;