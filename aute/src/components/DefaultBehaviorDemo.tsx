import React from "react";

const DefaultBehaviorDemo: React.FC = () => {
    // 未阻止默认行为：点击a标签会跳转到百度（浏览器默认动作）
    const handleLinkClick1 = (e: React.MouseEvent<HTMLAnchorElement>) => {
        console.log("点击了链接1（未阻止默认行为）");
    };

    // 阻止默认行为：点击a标签只打印日志，不跳转（取消默认动作）
    const handleLinkClick2 = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault(); // 核心：阻止默认行为
        console.log("点击了链接2（已阻止默认行为）");
    };

    return (
        <>
            <h3>未阻止默认行为（点击跳转）：</h3>
            <a href="https://www.baidu.com" onClick={handleLinkClick1}>
                跳转到百度
            </a>

            <h3 className="mt-4">阻止默认行为（仅打印日志）：</h3>
            <a href="https://www.baidu.com" onClick={handleLinkClick2}>
                不跳转，只打印日志
            </a>
        </>
    );
};

export default DefaultBehaviorDemo;