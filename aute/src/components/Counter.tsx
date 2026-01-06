import React from "react";
import CounterButton from "./CounterButton";

const Counter: React.FC = () => {
    const [count, setCount] = React.useState<number>(0);
    const increamentButton = React.useRef < HTMLButtonElement >(null);

    const handleIncrement: () => void = () => {
        setCount(count + 1);
        if (increamentButton.current) {
            increamentButton.current.focus();
        }
    }
    const handleDecrement: () => void = () => setCount(prev => prev - 1);

    return (
        <>
            <CounterButton
                count={count}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                >
                <span className="text-red-500">计数器：</span>
                <em>（支持多元素/组件嵌套）</em>
            </CounterButton>
            <button ref={increamentButton} onClick={handleIncrement}>自动聚焦</button>
        </>
    );
};

export default Counter;
