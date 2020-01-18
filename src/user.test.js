const User = require('./user');
const axios = require('axios');

jest.mock('axios');
describe('User > Mock Method 1', () => {
    it('should fetch all users', () => {
        let users = [ { id: 1,
            first_name: 'Ayar',
            last_name: 'Hlaine',
            email: 'ayarhlaine.dev@gmail.com' } ];
        let response = { data: users };
        axios.get.mockResolvedValue(Promise.resolve(response));
        let subject = User;
        return subject.all().then(users => {
            expect(users).toEqual(response);
        })
    });
});

describe('User > Mock Method 2', () => {
    it('should fetch all users', () => {
        let users = [ { id: 1,
            first_name: 'Ayar',
            last_name: 'Hlaine',
            email: 'ayarhlaine.dev@gmail.com' } ];
        User.all = jest.fn().mockReturnValue(Promise.resolve(users));
        return User.all().then(res => expect(res).toEqual(users));
    });
});

describe('User > Mock Method 3', () => {
    it('should fetch all users', () => {
        let users = [ { id: 1,
            first_name: 'Ayar',
            last_name: 'Hlaine',
            email: 'ayarhlaine.dev@gmail.com' } ];
        let response = { data: users };
        axios.get.mockImplementation(Promise.resolve(response));
        return User.all().then(res => expect(res).toEqual(users));
    });
});