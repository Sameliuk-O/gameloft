export enum ScrollDirection {
    left = "left",
    right = "right",
}

export type ScrollTypes = {
    direction: ScrollDirection;
    onClick: () => void;
    disabled?: boolean;
};
