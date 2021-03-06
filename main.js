const s = 'hello world';
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 4).toUpperCase());
console.log(s.split('')); // splits every letter and returns it as an array

const message = 'PA341K7DHK Confirmed. Kshs. 250.00 paid to Roadside Hardware on 2/1/2022 at 2:05PM. New M-PESA balance is Kshs. 0'

const transactionid = message.substring(0,10); //displays transaction id

console.log(transactionid);

const subject = 'AI, arts, music, Biology';
console.log(subject.split(',')); //returns array of the comma separated items

//Arrays
const fruits = ['Mangoes', 'pineapples','others', 24 ];
console.log(fruits); // displays fruits array
console.log(fruits[1]); //displays what is at index 1
fruits [0] = 'Bananas' //adds item at index 0 
fruits.push('Strawberry'); //adds items at the end
fruits.unshift('Kiwi'); // add item at the beginning of the array
fruits.pop(); //remove the last item in the array 
console.log(Array.isArray(fruits)); // check if fruits is an array
console.log(fruits.indexOf('Bananas')); // to get the index of kiwi
console.log(fruits);

// object literals
const person = {
firstName: 'John',
lastName: 'Doe',
age: 30,
hobbies: ['music', 'movies', 'sports'],
address: {
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
 }

}
person.email ='john@email.com' //adding an item on the object
console.log(person);
console.log(person.address.city); //outputs boston


//array with each value being an object

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    }, 

    {
        id: 2,
        text: 'Meeting with Boss',
        isCompleted: true
    }, 
    {
        id: 3,
        text: 'Dentist Appointment',
        isCompleted: false
    }, 

];

console.log(todos[1].text); // this will print out meeting with boss

//converting to JSON
const todojson = JSON.stringify(todos);
console.log(todojson);
