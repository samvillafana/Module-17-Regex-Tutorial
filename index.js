function createUser(name, age, city) {
    // Create an user object and map the function arguments to a key in the object.
    const user = {
        name: name,
        age: age,
        city: city
    }

    // Return two inner functions.
    return {
        introduceSelf: function() {

            // Instead of using the `this` keyword, we use the object we created in the outer function's scope.
            return console.log(`Hi my name is ${user.name} and I am currently ${user.age} years old!`)
        },

        location: function() {
            return console.log(`${user.name} is located in ${user.city}`)
        }
    }
}

// Create a user without using the `new` keyword different from how we do it with classes.
const userOne = createUser('Sam', 40, 'New York')

// Call the two methods attached to our `createUser` function to see if the user object is logging the correct values.
userOne.introduceSelf()
userOne.location()