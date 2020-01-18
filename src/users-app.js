const User = require('./user');

const showUsers = async () => {
    let users = await User.all();
    console.log("Users ",users.data);
}

showUsers();