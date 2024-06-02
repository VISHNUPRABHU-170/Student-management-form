import { ButtonModel } from "../ax-button/ax-button.model";

export interface PopupModel {
    title: string,
    message: string,
    buttonConfig: ButtonModel
}