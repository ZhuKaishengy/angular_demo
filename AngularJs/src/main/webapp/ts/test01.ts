/**
 * typescript多行字符串
 */
var a = "aaabbbccc";
var b = "aaa"+"bbb"+"ccc";
var c = `aaa
         bbb
         ccc`;
/**
 * 多行字符串模板
 */
var myname = "zks";
var getName = function () {
  return myname;
}
console.log(`<div>
                  <span>${myname}</span>
                  <span>${getName()}</span>
             </div>`);
/**
 * 自动拆分字符串
 */
function test(template:any , name:string ,age:number):void{
  console.log(template);
  console.log(name);
  console.log(age);
};
var Myname:string ="zks";
var getAge = function():number{
  return 19;
};
test`hello i am ${Myname} i am ${getAge()} year's old!`;
/**
 * 类型和类型检查
 */
var a1:string = "";
var a2:any = "";
a2 = 0; 
var a3:number =9;
var a4:boolean=true;
function test1():number{
  return 0;
} 
/**
 * typescript中的类
 */
class Person{
  id:string;
  name:string;
  age:number
}
var p:Person = new Person();
p.id="1001";
p.age=12;
p.name="sjx";
console.log(p);
/**
 * typescript中方法的默认值,可选参数
 * 注意：默认值参数、可选参数不可声明在普通参数之前
 */
function testMethod(name:string , age?:number , id:string="9999"):void{
  console.log(name);
  if(age == undefined){
    alert(`age 不存在`);
  }
  console.log(age);
  console.log(id);
}
testMethod("zks",18,"1001");
testMethod("zks",18);
testMethod("sjx");
/**
 * string[] args与 ...
 * typescript中的可变参数列表:第一种
 */
function func1(...args:any[]):void{
  args.forEach(function(ele){
    alert(ele);
  })
}
 func1("a","b","c");
 func1("d");
/**
 * typescript中的可变参数：第二种
 */
function func2(a?:any ,b?:any ,c?:any):void{
  alert(a);
  alert(b);
  alert(c);
}
func2("zks","123");
var args = ["zks",1,2,3,4];
func2(...args);
/**
 * typescript的generator函数：用来在程序中暂停方法
 */
function* testGenerator(){
  alert("dosomething!!!");
  yield;
  alert("dootherthings!!!");
}
var tg = testGenerator();
tg.next();
/**
 * generator 函数应用
 */
function* generate(){
  while(true){
    yield Math.random()*100;
  }
}
var num = generate();
var price=100;
while(price > 15){
  console.log(`num:${price}`);
  price = num.next().value;
}
console.log(`取出 num：${price}`);