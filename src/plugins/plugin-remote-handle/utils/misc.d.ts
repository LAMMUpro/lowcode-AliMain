/**
 * 合并两个对象数组，如果指定了 KEY，当存在 KEY 值相同的情况，将第一个对象数组里的对象替换
 * @param list1 待合并的第一个对象数组
 * @param list2 待合并的第二个对象数组
 * @param key 判断是否覆盖的对象 KEY
 * @param returns 合并后的对象数组
 */
export declare function mergeTwoObjectListByKey(list1: Array<Record<string, unknown>>, list2: Array<Record<string, unknown>>, key: string): Record<string, unknown>[];
export declare function generateClassName(name: string): string;
export declare function safeParse(input: any, fallbackValue?: any): any;
