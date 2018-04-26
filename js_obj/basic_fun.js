/**
 * 返回一个继承自原型对象p的属性的新对象
 * @param p 原型对象
 */
function inherit(p) {
    if (p == null) throw TypeError();//p不能是null
    if (Object.create) return Object.create(p);//存在Object.create()直接使用
    var t = typeof p;//否则退化使用其他方法
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {}//空构造函数
    f.prototype = p;//原型为p
    return new f();
}