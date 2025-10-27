/**
 * Scrolling directions list
 */
export enum ScrollDirection {
    left = "left",
    right = "right",
}

/**
 * ScrollButton component prop type
 */
export type ScrollTypes = {
    direction: ScrollDirection;
    onClick: () => void;
    disabled?: boolean;
};
