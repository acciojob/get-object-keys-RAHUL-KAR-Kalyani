//your JS code here. If required.
// Step 1: Create the student object with a name property
const student = {
    name: 'John Doe'
};

// Step 2: Add a getKeys method to Object.prototype
Object.prototype.getKeys = function() {
    // Use Object.keys() to get the keys of the object
    return Object.keys(this);
};

// Step 3: Use the getKeys method on the student object
console.log(student.getKeys()); // Output: ["name"]
