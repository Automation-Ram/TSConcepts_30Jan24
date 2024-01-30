let bill:any =23
let fbill=<number>bill+200
console.log(fbill)

let data:any="Hello Type script programming"
let testData=(data as string).length
console.log(testData)

let flag:any=true
if(flag as boolean)
{
    console.log("Hello TS")
}