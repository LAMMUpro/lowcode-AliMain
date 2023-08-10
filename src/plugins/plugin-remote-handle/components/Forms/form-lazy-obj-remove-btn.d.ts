/// <reference types="react" />
export interface RemoveBtnProps {
    onClick?: (propertyKey: string) => void;
    propertyKey: string;
}
export declare function RemoveBtn(props: RemoveBtnProps): JSX.Element;
export declare namespace RemoveBtn {
    var isFieldComponent: boolean;
}
