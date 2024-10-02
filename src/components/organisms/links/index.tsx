import { useState, useEffect } from "react";
import RoundedLinkButton from "@/components/atoms/roundedLinkButton";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

const useTheme = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [isDarkMode]);

    const toggleTheme = () => setIsDarkMode(prevMode => !prevMode);

    return { isDarkMode, toggleTheme };
};

const ThemeToggleButton = ({ isDarkMode, toggleTheme }) => (
    <button 
        onClick={toggleTheme} 
        className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center justify-center"
    >
        {isDarkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
    </button>
);

export default function Links() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="flex flex-col items-center w-full mx-auto gap-6 p-6 text-sm">
            <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <RoundedLinkButton iconName="ri:linkedin-fill" link="https://www.linkedin.com/in/imsebarz/" />
            <RoundedLinkButton iconName="ri:github-fill" link="https://github.com/imsebarz" />
        </div>
    );
}

export function LinksMobile() {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <div className="flex gap-6 text-sm">
            <RoundedLinkButton iconName="ri:linkedin-fill" link="https://www.linkedin.com/in/imsebarz/" />
            <RoundedLinkButton iconName="ri:github-fill" link="https://github.com/imsebarz" />
            <ThemeToggleButton isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
    );
}