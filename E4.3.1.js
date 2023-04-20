const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: 18,
    position: 'developer',
};

function example (user){
    for (let key in user){
        console.log(user[key])
}
}
example(user);