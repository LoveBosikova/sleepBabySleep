class User {
    constructor(userName, value) {
        this.userName = userName;
        this.value = value;
    }
    setCookie = (name, value) => {
        document.cookie = `${name} = ${value}`;
    };
}

const currentUser = new User;