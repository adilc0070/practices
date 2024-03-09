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

"Find employees whose names start with 'J' and are aged below 30."
db.employee.find({ name: /^J/i,age:{$lte:30} })
[
  {
    _id: 1,
    name: 'John',
    age: 25,
    gender: 'Male',
    city: 'New York',
    salary: 50000,
    department: 'IT'
  },
  {
    _id: 8,
    name: 'Jessica',
    age: 26,
    gender: 'Female',
    city: 'Seattle',
    salary: 58000,
    department: 'Finance'
  }
]
"Find the department with the highest average salary."
db.employee.aggregate([{$group:{_id:"$department",'salary(avg)':{$avg:"$salary"}}},{$sort:{"salary(avg)":-1}},{$limit:1}])
[ { _id: 'Marketing', 'salary(avg)': 76083.33333333333 } ]

"Retrieve the names of employees who are older than 35 and earn more than 75000."
db.employee.find({age:{$gte:35},salary:{$gte:75000}},{name:1})
[
  { _id: 7, name: 'David' },
  { _id: 19, name: 'Ethan' },
  { _id: 31, name: 'Benjamin' },
  { _id: 35, name: 'Carter' },
  { _id: 39, name: 'Jayden' },
  { _id: 41, name: 'Gabriel' },
  { _id: 43, name: 'Jack' },
  { _id: 49, name: 'Isaac' }
]

"Find the average age of employees in each department."
db.employee.aggregate([{$group:{_id:"$department",avgAge:{$avg:"$age"}}}])
[
  { _id: 'Finance', avgAge: 29.666666666666668 },
  { _id: 'Marketing', avgAge: 36.5 },
  { _id: 'IT', avgAge: 32.61538461538461 },
  { _id: 'HR', avgAge: 29.23076923076923 }
]

"Calculate the total salary expenditure for each city."
db.employee.aggregate([{$group:{_id:"$city",total:{$sum:"$salary"}}}])
[
  { _id: 'Riverside', total: 83000 },
  { _id: 'Tulsa', total: 77000 },
  { _id: 'Raleigh', total: 67000 },
  { _id: 'Long Beach', total: 74000 },
  { _id: 'Pittsburgh', total: 74000 },
  { _id: 'Washington D.C.', total: 67000 },
  { _id: 'Seattle', total: 58000 },
  { _id: 'Dallas', total: 70000 },
  { _id: 'Indianapolis', total: 73000 },
  { _id: 'Salt Lake City', total: 74000 },
  { _id: 'Nashville', total: 71000 },
  { _id: 'New Orleans', total: 69000 },
  { _id: 'Kansas City', total: 147000 },
  { _id: 'Minneapolis', total: 73000 },
  { _id: 'Portland', total: 69000 },
  { _id: 'Oklahoma City', total: 71000 },
  { _id: 'Bakersfield', total: 84000 },
  { _id: 'Phoenix', total: 72000 },
  { _id: 'St. Louis', total: 70000 },
  { _id: 'Fresno', total: 73000 }
  { _id: 'Tampa', total: 72000 },
  { _id: 'Charlotte', total: 62000 },
  { _id: 'Denver', total: 59000 },
  { _id: 'Milwaukee', total: 76000 },
  { _id: 'Virginia Beach', total: 75000 },
  { _id: 'Oakland', total: 76000 },
  { _id: 'Arlington', total: 78000 },
  { _id: 'Philadelphia', total: 68000 },
  { _id: 'San Antonio', total: 76000 },
  { _id: 'Detroit', total: 65000 },
  { _id: 'Las Vegas', total: 63000 },
  { _id: 'New York', total: 50000 },
  { _id: 'Memphis', total: 68000 },
  { _id: 'Louisville', total: 72000 },
  { _id: 'Tucson', total: 79000 },
  { _id: 'Atlanta', total: 142000 },
  { _id: 'Houston', total: 55000 },
  { _id: 'San Diego', total: 61000 },
  { _id: 'Los Angeles', total: 60000 },
  { _id: 'Orlando', total: 64000 }
  { _id: 'Austin', total: 74000 },
  { _id: 'Miami', total: 80000 },
  { _id: 'San Francisco', total: 75000 },
  { _id: 'Columbus', total: 75000 },
  { _id: 'Albuquerque', total: 78000 },
  { _id: 'Sacramento', total: 80000 },
  { _id: 'Boston', total: 65000 },
  { _id: 'Chicago', total: 70000 }
]
"Retrieve the names of employees sorted alphabetically."
db.employee.find({},{name:1}).sort({name:1})
[
  { _id: 11, name: 'Alex' },
  { _id: 2, name: 'Alice' },
  { _id: 13, name: 'Andrew' },
  { _id: 46, name: 'Aria' },
  { _id: 22, name: 'Ava' },
  { _id: 28, name: 'Avery' },
  { _id: 31, name: 'Benjamin' },
  { _id: 3, name: 'Bob' },
  { _id: 35, name: 'Carter' },
  { _id: 16, name: 'Chloe' },
  { _id: 47, name: 'Connor' },
  { _id: 23, name: 'Daniel' },
  { _id: 7, name: 'David' },
  { _id: 36, name: 'Ella' },
  { _id: 4, name: 'Emily' },
  { _id: 10, name: 'Emma' },
  { _id: 19, name: 'Ethan' },
  { _id: 48, name: 'Evelyn' },
  { _id: 41, name: 'Gabriel' },
  { _id: 24, name: 'Grace' }
  { _id: 38, name: 'Hannah' },
  { _id: 26, name: 'Harper' },
  { _id: 33, name: 'Henry' },
  { _id: 49, name: 'Isaac' },
  { _id: 20, name: 'Isabella' },
  { _id: 43, name: 'Jack' },
  { _id: 27, name: 'Jackson' },
  { _id: 21, name: 'James' },
  { _id: 39, name: 'Jayden' },
  { _id: 8, name: 'Jessica' },
  { _id: 1, name: 'John' },
  { _id: 9, name: 'Kevin' },
  { _id: 40, name: 'Leah' },
  { _id: 30, name: 'Lily' },
  { _id: 25, name: 'Logan' },
  { _id: 29, name: 'Lucas' },
  { _id: 45, name: 'Luke' },
  { _id: 44, name: 'Madison' },
  { _id: 18, name: 'Mia' },
  { _id: 5, name: 'Michael' }
  { _id: 34, name: 'Nora' },
  { _id: 12, name: 'Olivia' },
  { _id: 17, name: 'Ryan' },
  { _id: 6, name: 'Sarah' },
  { _id: 50, name: 'Scarlett' },
  { _id: 42, name: 'Sofia' },
  { _id: 14, name: 'Sophia' },
  { _id: 15, name: 'William' },
  { _id: 37, name: 'Wyatt' },
  { _id: 32, name: 'Zoe' }
]


"Find the department with the highest number of male employees."
 db.employee.aggregate([{$group:{_id:{dep:"$department",genr:"$gender"},count:{$sum:1}}},{$match:{"_id.genr":"Male"}},{$sort:{count:-1}},{$limit:1}])
[ { _id: { dep: 'IT', genr: 'Male' }, count: 13 } ]

"Calculate the median salary of employees."

Find the top 5 highest-paid employees.
db.employee.find().sort({salary:-1}).limit(5)
[
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
    _id: 47,
    name: 'Connor',
    age: 34,
    gender: 'Male',
    city: 'Riverside',
    salary: 83000,
    department: 'Marketing'
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
    _id: 43,
    name: 'Jack',
    age: 36,
    gender: 'Male',
    city: 'Kansas City',
    salary: 81000,
    department: 'Marketing'
  },
  {
    _id: 7,
    name: 'David',
    age: 40,
    gender: 'Male',
    city: 'Miami',
    salary: 80000,
    department: 'Marketing'
  }
]

"Determine the distribution of employees' ages (e.g., number of employees in each age group: 20-30, 30-40, etc.)."
db.employee.aggregate([{$project: {ageGroup: {$concat: [{ $toString: { $subtract: [{ $mod: ["$age", 10] }, "$age"] } },"-",{ $toString: { $add: [{ $subtract: [{ $mod: ["$age", 10] }, "$age"] }, 9] } }]}}},{$group: {_id: "$ageGroup",count: { $sum: 1 }}},{ $sort: { "_id": 1 } }])
[
  { _id: '-20--11', count: 15 },
  { _id: '-30--21', count: 34 },
  { _id: '-40--31', count: 1 }
]

"Calculate the standard deviation of salaries."

"Find the department with the highest total salary expenditure."

" Retrieve the names of employees who have the same salary. "
db.employee.aggregate([  { $group: { _id: "$salary", names: { $push: "$name" } } }])
[
  { _id: 58000, names: [ 'Jessica' ] },
  { _id: 83000, names: [ 'Connor' ] },
  { _id: 82000, names: [ 'Luke' ] },
  { _id: 84000, names: [ 'Isaac' ] },
  { _id: 55000, names: [ 'Emily' ] },
  { _id: 70000, names: [ 'Bob', 'Kevin', 'Nora' ] },
  { _id: 67000, names: [ 'Emma', 'Avery' ] },
  { _id: 69000, names: [ 'Ryan', 'Zoe' ] },
  { _id: 50000, names: [ 'John' ] },
  { _id: 75000, names: [ 'Michael', 'Benjamin', 'Madison' ] },
  { _id: 81000, names: [ 'Jack' ] },
  { _id: 74000, names: [ 'William', 'Jackson', 'Henry', 'Sofia' ] },
  { _id: 64000, names: [ 'Ava' ] },
  { _id: 78000, names: [ 'Wyatt', 'Scarlett' ] },
  { _id: 77000, names: [ 'Evelyn' ] },
  { _id: 65000, names: [ 'Sarah', 'Grace' ] },
  { _id: 72000, names: [ 'Alex', 'Logan', 'Hannah' ] },
  { _id: 63000, names: [ 'Isabella' ] },
  { _id: 80000, names: [ 'David', 'Gabriel' ] },
  { _id: 79000, names: [ 'Jayden' ] }
  { _id: 73000, names: [ 'Daniel', 'Lucas', 'Leah' ] },
  { _id: 60000, names: [ 'Alice', 'Sophia' ] },
  { _id: 62000, names: [ 'Mia' ] },
  { _id: 59000, names: [ 'Olivia' ] },
  { _id: 68000, names: [ 'Andrew', 'Lily' ] },
  { _id: 76000, names: [ 'Ethan', 'Carter', 'Aria' ] },
  { _id: 66000, names: [ 'Harper' ] },
  { _id: 61000, names: [ 'Chloe' ] },
  { _id: 71000, names: [ 'James', 'Ella' ] }
]
Find the department with the highest average age of employees.

Calculate the difference in average salary between male and female employees.
Find the employees with the highest and lowest salaries in each department.
Determine the 25th percentile salary of employees.
