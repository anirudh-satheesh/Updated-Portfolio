import { useEffect, useState } from "react";
import WindowWrapper from "#hoc/WindowWrapper.jsx";
import { techStack } from "#constants";
import { Check, Flag } from "lucide-react";
import WindowControls from "#components/WindowControls.jsx";

const Terminal = () => {
    const [renderTime, setRenderTime] = useState(null);

    // measure render time on mount
    useEffect(() => {
        const start = performance.now();
        requestAnimationFrame(() => {
            const end = performance.now();
            setRenderTime(Math.round(end - start));
        });
    }, []);

    const totalStacks = techStack.length;
    const loadedStacks = totalStacks; // currently all loaded
    const percentLoaded = Math.round((loadedStacks / totalStacks) * 100);

    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold text-[#00A154]">@anirudh $ </span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-center">
                            <Check className="check" size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, i) => (
                                    <li key={i}>
                                        {item}
                                        {i < items.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} />
                        {loadedStacks} of {totalStacks} stacks loaded successfully ({percentLoaded}%)
                    </p>

                    <p className="text-[#00A154]">
                        <Flag size={15} fill="#00A154" />
                        Render time: {renderTime !== null ? `${renderTime}ms` : "…"}
                    </p>
                </div>
            </div>
        </>
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
