/**
 * 用于路径坐标的类型，严格不能为空
 */
type argsType = string | number;

/**
 * 用于查询的参数的类型，不严格为空
 */
type selectType = argsType | null;

/**
 * 用于查询的对象类型参数,可以为空
 */
type selectObjectType = JSON | null;