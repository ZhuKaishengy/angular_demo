"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
/**
 * typescript多行字符串
 */
var a = "aaabbbccc";
var b = "aaa" + "bbb" + "ccc";
var c = "aaa\n         bbb\n         ccc";
/**
 * 多行字符串模板
 */
var myname = "zks";
var getName = function () {
    return myname;
};
console.log("<div>\n                  <span>" + myname + "</span>\n                  <span>" + getName() + "</span>\n             </div>");
/**
 * 自动拆分字符串
 */
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
;
var Myname = "zks";
var getAge = function () {
    return 19;
};
(_a = ["hello i am ", " i am ", " year's old!"], _a.raw = ["hello i am ", " i am ", " year's old!"], test(_a, Myname, getAge()));
/**
 * 类型和类型检查
 */
var a1 = "";
var a2 = "";
a2 = 0;
var a3 = 9;
var a4 = true;
function test1() {
    return 0;
}
/**
 * typescript中的类
 */
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var p = new Person();
p.id = "1001";
p.age = 12;
p.name = "sjx";
console.log(p);
/**
 * typescript中方法的默认值,可选参数
 * 注意：默认值参数、可选参数不可声明在普通参数之前
 */
function testMethod(name, age, id) {
    if (id === void 0) { id = "9999"; }
    console.log(name);
    if (age == undefined) {
        alert("age \u4E0D\u5B58\u5728");
    }
    console.log(age);
    console.log(id);
}
testMethod("zks", 18, "1001");
testMethod("zks", 18);
testMethod("sjx");
/**
 * string[] args与 ...
 * typescript中的可变参数列表:第一种
 */
function func1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (ele) {
        alert(ele);
    });
}
func1("a", "b", "c");
func1("d");
/**
 * typescript中的可变参数：第二种
 */
function func2(a, b, c) {
    alert(a);
    alert(b);
    alert(c);
}
func2("zks", "123");
var args = ["zks", 1, 2, 3, 4];
func2.apply(void 0, args);
/**
 * typescript的generator函数：用来在程序中暂停方法
 */
function testGenerator() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                alert("dosomething!!!");
                return [4 /*yield*/];
            case 1:
                _a.sent();
                alert("dootherthings!!!");
                return [2 /*return*/];
        }
    });
}
var tg = testGenerator();
tg.next();
/**
 * generator 函数应用
 */
function generate() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 2];
                return [4 /*yield*/, Math.random() * 100];
            case 1:
                _a.sent();
                return [3 /*break*/, 0];
            case 2: return [2 /*return*/];
        }
    });
}
var num = generate();
var price = 100;
while (price > 15) {
    console.log("num:" + price);
    price = num.next().value;
}
console.log("\u53D6\u51FA num\uFF1A" + price);
/**
 * typescript中的析构表达式
 * 对返回的对象进行解析
 */
var stock = function () {
    return {
        name: "aisino",
        price: {
            price1: 12,
            price2: 10
        },
        no: "1001"
    };
};
var _b = stock(), myname = _b.name, _c = _b.price, myprice1 = _c.price1, myprice2 = _c.price2;
console.log("name=" + myname);
console.log("price=" + myprice1);
console.log("price=" + myprice2);
/**
 * typescript中的析构表达式
 * 对返回的数组进行解析
 */
var array = [1, 2, 3, 4];
var a = array[0], b = array[1];
console.log(a);
console.log(b);
var a = array[2], b = array[3];
console.log(a);
console.log(b);
var a = array[0], b = array[1], others = array.slice(2);
console.log(a);
console.log(b);
console.log(others);
/**
 * 例子
 */
var arr = function (_a) {
    var a = _a[0], b = _a[2], others = _a.slice(3);
    return {
        name: {
            name1: a,
            name2: b,
            names: others
        }
    };
};
var array1 = ["zks", "rl", "sjx", "haha", "xixi"];
function analyze() {
    var _a = arr(array1).name, n1 = _a.name1, n2 = _a.name2, ns = _a.names;
    console.log(n1);
    console.log(n2);
    console.log(ns);
}
analyze();
/**
 * 使用箭头表达式声明匿名函数,消除this关键字的困扰
 */
var getName1 = function (name) {
    this.name = name;
    console.log(this.name);
};
getName1("zks");
var getName2 = function (name) {
    _this.name = name;
    console.log(_this.name);
};
getName2("zks");
/**
 * 循环总结
 * 1.foreach:直接遍历数组的元素结果
 * 2.for in：遍历元素key和属性，array1[i]遍历结果
 * 3.for of：直接遍历数组的元素结果，可暂停
 */
var array1 = ["a", "b", "c", "d"];
array1.name = "数组一";
array1.forEach(function (ele) { return alert(ele); });
var forin = function () {
    for (var i in array1) {
        alert(i);
        //    alert(array1[i])
    }
};
forin();
var forof = function () {
    for (var _i = 0, array1_1 = array1; _i < array1_1.length; _i++) {
        var i = array1_1[_i];
        if (i === "c") {
            return;
        }
        alert(i);
    }
};
forof();
/**
 * typescript中的类
 */
var Animal = (function () {
    function Animal(age) {
        this.age = age;
    }
    Animal.prototype.getAge = function () {
        return this.age;
    };
    Animal.prototype.eat = function () {
        console.log("i am eating");
    };
    Animal.prototype.work = function () {
        console.log("i am working");
    };
    return Animal;
}());
var ChinesePerson = (function (_super) {
    __extends(ChinesePerson, _super);
    function ChinesePerson(name, age, creditCard) {
        var _this = _super.call(this, age) || this;
        _this.name = name;
        _this.creditCard = creditCard;
        return _this;
    }
    ChinesePerson.prototype.pEat = function () {
        _super.prototype.eat.call(this);
        console.log("\u4EBA\u6BD4\u52A8\u7269\u5403\u7684\u591A");
    };
    ChinesePerson.prototype.createAnimal = function () {
        return new Animal(this.getAge());
    };
    ChinesePerson.prototype.getName = function () {
        return this.name;
    };
    ChinesePerson.prototype.getId = function () {
        return this.creditCard;
    };
    return ChinesePerson;
}(Animal));
var person = new ChinesePerson("zks", 18, "1001");
var animal_created = person.createAnimal();
var age1 = animal_created.getAge();
console.log("" + age1);
/**
 * typescript中的泛型
 */
var arrGeneric = [];
arrGeneric[0] = new Animal(10);
arrGeneric[1] = new ChinesePerson("zks", 19, "1001");
arrGeneric[0].work();
var IpersonImpl = (function () {
    function IpersonImpl(p) {
        this.name = p.name;
        this.age = p.age;
        console.log(this.name + "," + this.age);
    }
    return IpersonImpl;
}());
var ipinpl = new IpersonImpl({
    name: "zks",
    age: 18
});
var IpersonImpl2 = (function () {
    function IpersonImpl2() {
    }
    IpersonImpl2.prototype.eat = function () {
        console.log("haha");
    };
    return IpersonImpl2;
}());
new IpersonImpl2().eat();
var _a;
