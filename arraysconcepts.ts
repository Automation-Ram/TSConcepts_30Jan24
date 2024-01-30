let names:string[]=["tom","peter","Ram"]
console.log(names[0])

let empl:Array<string | number>=["Ram",12]
let nam:(string | boolean)[]=["ram",true]

for(let i=0;i<empl.length;i++)
{
    console.log(empl[i])
}
