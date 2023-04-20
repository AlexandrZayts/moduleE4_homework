
const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

function example (string, user){
    let result = false
     if (string in user){
        result = true
    }
    return result;
}
example("asdasd", user);
