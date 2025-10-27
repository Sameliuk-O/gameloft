import type {FC} from "react";
import {ScrollDirection, type ScrollTypes} from "./type.ts";

/**
 * Carousel scroll button component
 * @param direction - scroll direction (left or right)
 * @param onClick - click processing function
 * @param disabled - is the button disabled
 */
const ScrollButton: FC<ScrollTypes> = ({
      direction,
      onClick,
      disabled = false,
  }) => {
    const isRight = direction === ScrollDirection.right;

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`absolute ${isRight ? "right-5" : "left-5"} top-1/2 -translate-y-1/2 z-10
        bg-gray-800/80 hover:bg-gray-700 text-white
        w-12 h-12 rounded-full flex items-center justify-center
        transition-all duration-300 hover:scale-110
        shadow-lg backdrop-blur-sm
        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer`}
            aria-label={isRight ? "Next" : "Previous"}
        >
            {isRight ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m9 18 6-6-6-6" />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="m15 18-6-6 6-6" />
                </svg>
            )}
        </button>
    );
};

export default ScrollButton;
