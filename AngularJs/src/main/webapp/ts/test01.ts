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
/**
 * typescript中的析构表达式
 * 对返回的对象进行解析
 */
var stock = function(){
  return {
    name : "aisino",
    price : {
      price1:12,
      price2:10
    },
    no:"1001"
  }
}
var {name:myname,price:{price1:myprice1,price2:myprice2}} = stock();
console.log(`name=${myname}`);
console.log(`price=${myprice1}`);
console.log(`price=${myprice2}`);
/**
 * typescript中的析构表达式
 * 对返回的数组进行解析
 */
var array =[1,2,3,4];
var [a,b] = array;
console.log(a);
console.log(b);
var [,,a,b] = array;
console.log(a);
console.log(b);
var [a,b,...others] = array;
console.log(a);
console.log(b);
console.log(others);
/**
 * 例子
 */
var arr = function([a,,b,...others]){
  return{
    name:{
      name1:a,
      name2:b,
      names:others
    }
  }
}
var array1 = ["zks","rl","sjx","haha","xixi"];

function analyze(){
  var {name:{name1:n1,name2:n2,names:ns}} =  arr(array1);
  console.log(n1);
  console.log(n2);
  console.log(ns);
}
analyze();
/**
 * 使用箭头表达式声明匿名函数,消除this关键字的困扰
 */
var getName1 = function(name:string):void{
  this.name = name;
  console.log(this.name);
};
getName1("zks");
var getName2 = (name:string)=>{
   this.name = name;
  console.log(this.name);
};
getName2("zks");
/**
 * 循环总结
 * 1.foreach:直接遍历数组的元素结果
 * 2.for in：遍历元素key和属性，array1[i]遍历结果
 * 3.for of：直接遍历数组的元素结果，可暂停
 */
var array1 = ["a","b","c","d"] ;
array1.name="数组一";
array1.forEach((ele)=>alert(ele));
var forin = ()=>{
  for(var i in array1){
    alert(i);
//    alert(array1[i])
  }
}
forin();
var forof = ()=>{
  for(var i of array1){
    if(i === "c"){
      return;
    }
    alert(i);
  }
}
forof();
/**
 * typescript中的类
 */
class Animal{
  private age:number;
  public getAge():number{
    return this.age;
  }
  public constructor(age:number){
    this.age = age;
  }
  protected eat():void{
    console.log("i am eating");
  }
  public work():void{
    console.log("i am working")
  }
}

class ChinesePerson extends Animal{
  private creditCard:string;
  private name:string;
  public constructor (name:string ,age:number ,creditCard:string){
    super(age);
    this.name = name;
    this.creditCard = creditCard;
  }
  public pEat():void{
    super.eat();
    console.log(`人比动物吃的多`);
  }
  public createAnimal():Animal{
    return new Animal(this.getAge());
  }
  public getName():string{
    return this.name;
  }
  public getId():string{
    return this.creditCard;
  }
}
var person = new ChinesePerson("zks",18,"1001");
var animal_created = person.createAnimal();
var age1 = animal_created.getAge();
console.log(`${age1}`);
/**
 * typescript中的泛型
 */
var arrGeneric :Array<Animal>= [];
arrGeneric[0] = new Animal(10);
arrGeneric[1] = new ChinesePerson("zks",19,"1001");
arrGeneric[0].work();
/**
 * 接口的使用(1)
 */

interface Iperson{
  name:string;
  age:number
}
class IpersonImpl{
  name:string;
  age:number;
  constructor (p :Iperson){
    this.name = p.name;
    this.age = p.age;
    console.log(`${this.name},${this.age}`);
  }
}
var ipinpl = new IpersonImpl({
  name:"zks",
  age:18
});
/**
 * 接口的使用(2)
 */
interface Iperson2{
  name:string;
  age:number
  eat():void;
}
class IpersonImpl2 implements Iperson2 {
  name: string;
  age: number;
  eat(): void {
    console.log("haha");
  }
}
new IpersonImpl2().eat();