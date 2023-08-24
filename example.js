function getName(name) {
    return name;
}

const user = {
    getNameVar: getName,
};

console.log(user.getNameVar('John'));
