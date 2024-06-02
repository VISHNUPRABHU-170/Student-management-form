import { AxMatColors } from "../ax-constants/ax-mat-colors";

export interface ButtonModel {
    text: string,
    type: string,
    buttonType?: AxButtonType;
    color?: AxMatColors;
    className?: string;
    isDisabled?: boolean;
}

export enum AxButtonType {
    BASIC = "BASIC",
    RAISED = "RAISED",
    STROKED = "STROKED",
    FLAT = "FLAT"
}