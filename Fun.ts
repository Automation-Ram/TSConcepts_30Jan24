class Person{
    firstName:string
    age:number

    constructor(firstName:string,age:number)
    {
        this.firstName=firstName;
        this.age=age;
    }
    display =()=>console.log(this.firstName+' '+this.age)
    
}
let part=new Person("Tome",50)
part.display
