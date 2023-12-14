/// <reference types="react" />
import type { GetDefaultToken } from '../../theme/internal';
/** Component only token. Which will handle additional calculation of alias token */
export interface ComponentToken {
    zIndexPopup: number;
}
export declare const prepareComponentToken: GetDefaultToken<'BackTop'>;
declare const _default: (prefixCls: string, rootCls?: string) => readonly [(node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, string];
export default _default;
