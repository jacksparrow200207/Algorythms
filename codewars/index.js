// let obj1 = {
//   firstName: "Zuhriddin",
//   fullName: function() {
//     return `${obj1.firstName}`
//   }
// }

// let obj2 = obj1;
// // obj1 = null;

// console.log(obj2.fullName());

let data = [
  {id:1, name: "Zuhriddin", surname: "Bahriddinov", year: 2002, age: 21 },
  {id:2, name: "Akobir", surname: "Ziyodullayev", year: 2000, age: 22 },
  {id:3, name: "Umar", surname: "Forsiy", year: 2002, age: 21 },
];

const getFilter=()=>{
  let res=data.filter((value)=>value.year!=2002)
  return data=res
}
// getFilter()
// console.log(getFilter());

const getSorted=()=>{
  let str=data.sort((a,b)=>a.name.localeCompare(b.name))
  return data= str
}

// getSorted()

// console.log(getSorted());
let nex={name:"Asilbek",surname:"Asilbekov",year:2002,age:21}
const getCreate=(obj,par)=>{
  let crt=[...obj,{id:obj.length+1,...par}]
  return crt
}

// console.log(getCreate(data,nex));


let users = [
  {id: 1, firstName: 'akobir', lastName: 'Ziyodullayev', year: 2000},
  {id: 2, firstName: 'Luqmon', lastName: 'Melikov', year: 2001},
  {id: 3, firstName: 'Akbar', lastName: 'Malikov', year: 2000},
  {id: 4, firstName: 'Ikrom', lastName: 'Samiyev', year: 2002},
  {id: 5, firstName: 'Begzod', lastName: 'Nuriddinov', year: 2000},
  {id: 6, firstName: 'Dadaxon', lastName: 'Mexrojov', year: 2001},
];


const getUpdate = data => {
  let res = users.map (
    value =>
    value.id === data.id
    ? {
      ...value,
      [data.firstName]: data.fistNameValue,
      [data.lastName]: data.lastNameValue,
    }
    : value
    );
    return users = res;
  };
  console.log(getUpdate ({
    id: 1,
    firstName: 'firstName',
    lastName: 'lastName',
    fistNameValue: 'Adiba',
    lastNameValue: 'Ziyodullayeva',
  })
);