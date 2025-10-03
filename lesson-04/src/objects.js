const myObject = {};

myObject.name = 'Yaryna';
myObject.age = 29;
myObject.address = {
    city: 'Lviv',
    street: 'Lypy'
};
myObject.hobbies = ['board games', 'reading', 'gym'];
myObject.displayInfo = function() {
    console.log('Name: ' + this.name);
    console.log('Age: ' + this.age);
    console.log('Address: ' + this.address.city);
    console.log('Hobbies: ' + this.hobbies.join(', '));
};

myObject.displayInfo();

