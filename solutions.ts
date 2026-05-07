type FilterNumberFunciton =( arr: number[])=> number[];

const filterEvenNumbers :FilterNumberFunciton=(arr)=>{
    const newArr=arr.filter((num:number)=> num%2===0);
    return newArr;
}

const reverseString =(str: string) : string=>{
   const reverse=str.split("").reverse().join("");
   return reverse;
}

type StringOrNumber = string | number;

const checkType=(input : StringOrNumber): string=>{
    if(typeof input ==="string")
        return "String"
    else
        return "Number"
}

const getProperty = <T> (Obj: T, key : keyof T)=>{
    return Obj[key];
}


interface Book{
    title:string;
    author:string;
    publishedYear:number;
}

const toggleReadStatus =(book : Book) :( Book & {isRead:true})=>{
    return {
        ...book,
        isRead:true
    }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;
  constructor(name: string, age: number, grade: string) {
    super(name,age);
    this.grade = grade;
  }
  getDetails(){
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`
  }
}

const getIntersection=(arr1: number[], arr2: number[]) :number[]=>{
    const arr= arr1.filter((item:number)=>{
        if(arr2.includes(item)) return item
    });
    return arr;
}