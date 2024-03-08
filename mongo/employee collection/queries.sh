"Find all employees whose salary is greater than 70000."
db.users.find({salary:{$gte:70000}})
[
  {
    _id: 3,
    name: 'Bob',
    age: 35,
    gender: 'Male',
    city: 'Chicago',
    salary: 70000,
    department: 'Marketing'
  },
  {
    _id: 5,
    name: 'Michael',
    age: 32,
    gender: 'Male',
    city: 'San Francisco',
    salary: 75000,
    department: 'IT'
  },
  {
    _id: 7,
    name: 'David',
    age: 40,
    gender: 'Male',
    city: 'Miami',
    salary: 80000,
    department: 'Marketing'
  },
  {
    _id: 9,
    name: 'Kevin',
    age: 33,
    gender: 'Male',
    city: 'Dallas',
    salary: 70000,
    department: 'IT'
  },
  {
    _id: 11,
    name: 'Alex',
    age: 38,
    gender: 'Male',
    city: 'Phoenix',
    salary: 72000,
    department: 'Marketing'
  },
  {
    _id: 15,
    name: 'William',
    age: 39,
    gender: 'Male',
    city: 'Austin',
    salary: 74000,
    department: 'Marketing'
  },
  {
    _id: 19,
    name: 'Ethan',
    age: 37,
    gender: 'Male',
    city: 'San Antonio',
    salary: 76000,
    department: 'Marketing'
  },
  {
    _id: 21,
    name: 'James',
    age: 33,
    gender: 'Male',
    city: 'Nashville',
    salary: 71000,
    department: 'IT'
  },
  {
    _id: 23,
    name: 'Daniel',
    age: 35,
    gender: 'Male',
    city: 'Minneapolis',
    salary: 73000,
    department: 'Marketing'
  },
  {
    _id: 25,
    name: 'Logan',
    age: 34,
    gender: 'Male',
    city: 'Tampa',
    salary: 72000,
    department: 'IT'
  },
  {
    _id: 27,
    name: 'Jackson',
    age: 36,
    gender: 'Male',
    city: 'Salt Lake City',
    salary: 74000,
    department: 'Marketing'
  },
  {
    _id: 29,
    name: 'Lucas',
    age: 32,
    gender: 'Male',
    city: 'Indianapolis',
    salary: 73000,
    department: 'IT'
  },
  {
    _id: 31,
    name: 'Benjamin',
    age: 35,
    gender: 'Male',
    city: 'Columbus',
    salary: 75000,
    department: 'Marketing'
  },
  {
    _id: 33,
    name: 'Henry',
    age: 28,
    gender: 'Male',
    city: 'Pittsburgh',
    salary: 74000,
    department: 'IT'
  },
  {
    _id: 34,
    name: 'Nora',
    age: 33,
    gender: 'Female',
    city: 'St. Louis',
    salary: 70000,
    department: 'HR'
  },
  {
    _id: 35,
    name: 'Carter',
    age: 36,
    gender: 'Male',
    city: 'Milwaukee',
    salary: 76000,
    department: 'Marketing'
  },
  {
    _id: 36,
    name: 'Ella',
    age: 29,
    gender: 'Female',
    city: 'Oklahoma City',
    salary: 71000,
    department: 'Finance'
  },
  {
    _id: 37,
    name: 'Wyatt',
    age: 34,
    gender: 'Male',
    city: 'Albuquerque',
    salary: 78000,
    department: 'IT'
  },
  {
    _id: 38,
    name: 'Hannah',
    age: 31,
    gender: 'Female',
    city: 'Louisville',
    salary: 72000,
    department: 'HR'
  },
  {
    _id: 39,
    name: 'Jayden',
    age: 37,
    gender: 'Male',
    city: 'Tucson',
    salary: 79000,
    department: 'Marketing'
  }
  {
    _id: 40,
    name: 'Leah',
    age: 30,
    gender: 'Female',
    city: 'Fresno',
    salary: 73000,
    department: 'Finance'
  },
  {
    _id: 41,
    name: 'Gabriel',
    age: 35,
    gender: 'Male',
    city: 'Sacramento',
    salary: 80000,
    department: 'IT'
  },
  {
    _id: 42,
    name: 'Sofia',
    age: 29,
    gender: 'Female',
    city: 'Long Beach',
    salary: 74000,
    department: 'HR'
  },
  {
    _id: 43,
    name: 'Jack',
    age: 36,
    gender: 'Male',
    city: 'Kansas City',
    salary: 81000,
    department: 'Marketing'
  },
  {
    _id: 44,
    name: 'Madison',
    age: 31,
    gender: 'Female',
    city: 'Virginia Beach',
    salary: 75000,
    department: 'Finance'
  },
  {
    _id: 45,
    name: 'Luke',
    age: 33,
    gender: 'Male',
    city: 'Atlanta',
    salary: 82000,
    department: 'IT'
  },
  {
    _id: 46,
    name: 'Aria',
    age: 28,
    gender: 'Female',
    city: 'Oakland',
    salary: 76000,
    department: 'HR'
  },
  {
    _id: 47,
    name: 'Connor',
    age: 34,
    gender: 'Male',
    city: 'Riverside',
    salary: 83000,
    department: 'Marketing'
  },
  {
    _id: 48,
    name: 'Evelyn',
    age: 30,
    gender: 'Female',
    city: 'Tulsa',
    salary: 77000,
    department: 'Finance'
  },
  {
    _id: 49,
    name: 'Isaac',
    age: 35,
    gender: 'Male',
    city: 'Bakersfield',
    salary: 84000,
    department: 'IT'
  },
  {
    _id: 50,
    name: 'Scarlett',
    age: 29,
    gender: 'Female',
    city: 'Arlington',
    salary: 78000,
    department: 'HR'
  }
]

"Retrieve the count of employees in each department."
db.employee.aggregate([{$group:{_id:"$department",count:{$sum:1}}}])
[
  { _id: 'IT', count: 13 },
  { _id: 'HR', count: 13 },
  { _id: 'Finance', count: 12 },
  { _id: 'Marketing', count: 12 }
]

"Calculate the average salary of male and female employees separately."
db.employee.aggregate([{$group:{_id:"$gender",avg:{$avg:"$salary"}}}])
[
  { _id: 'Male', AverageSalary: 74360 },
  { _id: 'Female', AverageSalary: 67000 }
]
"Find the youngest employee."
db.employee.find().sort({age:1}).limit(1)
[
  {
    _id: 1,
    name: 'John',
    age: 25,
    gender: 'Male',
    city: 'New York',
    salary: 50000,
    department: 'IT'
  }
]

'Find the cities where the total salary expenditure is the highest.'
db.employee.aggregate([{$group:{_id:"$city",totalSalary:{$sum:'$salary'}}},{$sort:{totalSalary:-1}},{$limit:1}])
[ { _id: 'Kansas City', totalSalary: 147000 } ]

"Retrieve the names of female employees who work in the IT department."
db.employee.find({department:"IT",gender:"Female"})
"no datas"

"Calculate the difference between the highest and lowest salaries."
db.employee.aggregate([{$group:{_id:null,max:{$max:"$salary"},min:{$min:"$salary"}}},{$project:{deffrence:{$subtract:["$max","$min"]},_id:0}}])
[ { deffrence: 34000 } ]

Find employees whose names start with 'J' and are aged below 30.
Find the department with the highest average salary.
Retrieve the names of employees who are older than 35 and earn more than 75000.
Find the average age of employees in each department.
Calculate the total salary expenditure for each city.
Retrieve the names of employees sorted alphabetically.
Find the department with the highest number of male employees.
Calculate the median salary of employees.
