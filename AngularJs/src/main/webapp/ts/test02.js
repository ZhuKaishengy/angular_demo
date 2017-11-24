"use strict";
/**
 * typescript中模块的概念:一个文件就是一个模块module
 * export向外暴露
 * import导入
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.str1 = "zks";
var str2 = "sjx";
function functi1() {
    console.log("func1");
}
exports.functi1 = functi1;
function func2() {
    console.log("func2");
}
var clazz1 = (function () {
    function clazz1() {
    }
    clazz1.prototype.show = function () {
        console.log("clazz1 show");
    };
    return clazz1;
}());
exports.clazz1 = clazz1;
var clazz2 = (function () {
    function clazz2() {
    }
    clazz2.prototype.show = function () {
        console.log("clazz2 show");
    };
    return clazz2;
}());
