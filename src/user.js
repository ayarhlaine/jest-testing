const axios = require('axios');
class User {
    static async all(){
        let result = axios.get('http://localhost:3000/users');
        return result;
    }
}
module.exports = User;