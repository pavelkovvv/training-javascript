function getName(name) {
    return name;
}

let user = {
    getName: getName(),
};

user.getName('John');
