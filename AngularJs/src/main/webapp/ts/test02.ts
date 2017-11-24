/**
 * typescript中模块的概念:一个文件就是一个模块module
 * export向外暴露
 * import导入
 */

export var str1 = "zks";
var str2 = "sjx";
export function functi1(){
  console.log("func1");
}
function func2(){
  console.log("func2");
}
export class clazz1{
  name:string;
  age : number;
  public show():void {
    console.log("clazz1 show");
  }
}
class clazz2{
  name:string;
  age : number;
  public show():void {
    console.log("clazz2 show");
  }
}