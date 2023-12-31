/// <reference types="react" />
import type { SharedComponentToken, SharedInputToken } from '../../input/style';
import type { FullToken, GetDefaultToken } from '../../theme/internal';
import type { GenStyleFn } from 'antd/es/theme/util/genComponentStyleHook';
export interface ComponentToken {
    /**
     * @desc 页码选项背景色
     * @descEN Background color of Pagination item
     */
    itemBg: string;
    /**
     * @desc 页码尺寸
     * @descEN Size of Pagination item
     */
    itemSize: number;
    /**
     * @desc 页码激活态背景色
     * @descEN Background color of active Pagination item
     */
    itemActiveBg: string;
    /**
     * @desc 小号页码尺寸
     * @descEN Size of small Pagination item
     */
    itemSizeSM: number;
    /**
     * @desc 页码链接背景色
     * @descEN Background color of Pagination item link
     */
    itemLinkBg: string;
    /**
     * @desc 页码激活态禁用状态背景色
     * @descEN Background color of disabled active Pagination item
     */
    itemActiveBgDisabled: string;
    /**
     * @desc 页码激活态禁用状态文字颜色
     * @descEN Text color of disabled active Pagination item
     */
    itemActiveColorDisabled: string;
    /**
     * @desc 输入框背景色
     * @descEN Background color of input
     */
    itemInputBg: string;
    /**
     * @desc 每页展示数量选择器 top
     * @descEN Top of Pagination size changer
     */
    miniOptionsSizeChangerTop: number;
}
export interface PaginationToken extends FullToken<'Pagination'>, SharedComponentToken, SharedInputToken {
    inputOutlineOffset: number;
    paginationMiniOptionsMarginInlineStart: number | string;
    paginationMiniQuickJumperInputWidth: number | string;
    paginationItemPaddingInline: number | string;
    paginationEllipsisLetterSpacing: number | string;
    paginationEllipsisTextIndent: string;
    paginationSlashMarginInlineStart: number;
    paginationSlashMarginInlineEnd: number;
}
export declare const prepareComponentToken: GetDefaultToken<'Pagination'>;
export declare const prepareToken: (token: Parameters<GenStyleFn<'Pagination'>>[0]) => PaginationToken;
declare const _default: (prefixCls: string, rootCls?: string) => readonly [(node: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>) => import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>, string];
export default _default;
