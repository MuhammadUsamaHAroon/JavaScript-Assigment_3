// ARRAY
// Question no.1

var array=[]

array.push("Bilal")
console.log(array)

array.push("Izhan")
console.log(array)

array.push("Shakeel")
console.log(array)

array.push("Safdar")
console.log(array)

array.push("Ahmed")
console.log(array)

// Question no.3

var array=[]
array.push("My Name is Usama")
console.log(array)

// Question no.4

var array=[]

array.push(1)
console.log(array)

array.push(2)
console.log(array)

array.push(3)
console.log(array)

array.push(4)
console.log(array)

array.push(5)
console.log(array)

array.push(6)
console.log(array)

array.push(7)
console.log(array)

array.push(8)
console.log(array)

array.push(9)
console.log(array)

array.push(10)
console.log(array)

// Question no.5

var array=[]

array.push(true)
console.log(array)

array.push(false)
console.log(array)

// Question no.6

var array=[]
array.push("Usama was born in ", 25, "November", 2001, "this is a", true, "line")
console.log(array)

// Question no.7

var array=[]

array.push("Ufone")
console.log(array)

array.push("Telenor")
console.log(array)

array.push("Zong")
console.log(array)

array.push("Warid")
console.log(array)

array.push("Jazz")
console.log(array)

// Question no.8

var array=[]
array.push("SSC")
array.push("HSC")
array.push("BCS")
array.push("BS")
array.push("BCOM")
array.push("MS")
array.push("M.Phil")
array.push("PhD")
console.log(array)

// Question no.9

var array=[]

array.push("Avengers : Age of Ultron")
console.log(array)

array.push("Spectre")
console.log(array)

array.push("Jurassic World")
console.log(array)

array.push("Inside Out")
console.log(array)

// Question no.10

var array=["Audi", "Volvo", "Ford", "Lamborghini"]
console.log(array)
array[0]="Audi"
array[5]="Lamborghini"
console.log(array)

console.log("First index of the array : ",array.indexOf("Audi"))
var newarray=array.slice(0,1)

console.log("Car at first index of the array : ",newarray)
console.log("Last index of the array : ", array.indexOf("Lamborghini"))

var arraynew=array.slice(3,4)
console.log("Car at last index of the array : ",arraynew)

// Question No.11
var students_name=["Zaid", "Aftab", "Bilal"]

var students_score=["Score of Zaid is "+300, "Score of Aftab is "+350, "Score of Bilal is "+450 ]
var percentage_of_zaid=300*100/500
var percentage_of_aftab=350*100/500
var percentage_of_bilal=450*100/500
var zaid_score_and_percentage=["Score of Zaid is ",300,"."+"Percentage :",percentage_of_zaid,"%",]
console.log(zaid_score_and_percentage)

var aftab_score_and_percentage=["Score of Aftab is ",350,"."+"Percentage :",percentage_of_aftab,"%"]
console.log(aftab_score_and_percentage)

var bilal_score_and_percentage=["Score of Bilal is ",450,"."+"Percentage :",percentage_of_bilal,"%"]
console.log(bilal_score_and_percentage)

// Question no.12

var color=[]
console.log(color)

// part(a)
var user=prompt("add to the beginning & add that color to the beginning")

color.unshift(user)

console.log(color) 
// part(b)
var user1=prompt("add to the end & add that color to the end")
color.push(user1)
console.log(color)
// part(c)
var user2=prompt("Add two more color to the beginning")
color.unshift(user2)
console.log(color)
// part(d)
color.shift(user)
console.log(color)
// part(e)
color.pop(user1)
console.log(color)

// Question no.13

let score_of_students=[320, 230, 480, 120]
console.log(score_of_students)

score_of_students.sort()
console.log(score_of_students)

// Question no.14

let fruits=["Strawberry", "Apple", "Orange", "Banana"]
console.log(fruits)

fruits.sort()
console.log(fruits)

// Question no.15
var cities=["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"]
console.log(cities)

cities_copy=cities.slice(2,4)
console.log(cities_copy)

// Question no.16

var arr=["This","is","my","cat"]
console.log(arr)

var string=arr.toString()
console.log(string)


// Question no.17

var devices=["Keyboard", "Mouse", "Printer", "Monitor"]
console.log(devices)

devices.shift()
console.log(devices)
devices.shift()
console.log(devices)
devices.shift()
console.log(devices)

// Question no.18

var objects=["Keyboard", "Mouse", "Printer", "Monitor"]
console.log(objects)

objects.pop()
console.log(objects)
objects.pop()
console.log(objects)
objects.pop()
console.log(objects)

// Question no.20

var arrays=[
    ["Hello World"], [1, 2, 3, 4, 5], [true, false]
]
console.log(arrays)

// Question  no.21

var matrix=[
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
]
console.log(matrix)


