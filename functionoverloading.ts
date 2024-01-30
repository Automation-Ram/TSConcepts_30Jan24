function add(a:string, b:string):string;
function add(a:number, b:number):number;
function add(a:boolean, b:boolean):boolean;

function add(a:any,b:any):any {
    return a+b;
}

let s1=add('hello','world')
let s2=add(20,30)
let s3=add(true,false)

console.log(s1)
console.log(s2)
console.log(s3)
