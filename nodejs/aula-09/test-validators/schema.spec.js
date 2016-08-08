'use strict';

const User = require('./schema');
const expect = require('chai').expect;

describe('User validate', () => {
    
    after(done => {
        console.log('Executa ação depois dos testes');
        done();
    });
    
    before(done => {
        console.log('Executa ação antes dos testes');
        done();
    });
    
    describe('virtual give a full name concatend', () => {
        
        it('expect full have a first and last name', done => {
            let u = new User();
            
            u.name.first = 'Lucas';
            u.name.last = 'Boeing Scarduelli'
            expect(u.name.full).to.be.eq(u.name.first + ' ' + u.name.last);
            done(); // Quando a operaçõa é assincrona necessita do 'done'
        });
        
    });
    
    describe('age of users', () => {
        
        it('only aceept 18 or more years', () => {
            let u = new User();
            
            u.age = 24;
            expect(u.validateSync()).to.be.undefined;            
        });
        
        it('with less year of 18', () => {
            let u = new User();
            
            u.age = 2;
            const validate = u.validateSync();
            expect(validate.message).to.be.eq('User validation failed');
            expect(validate.erros).to.be.exists;
        });
        
    });
    
    describe('email of users', () => {
        
        it('only lower case save in mongo', () => {
            let u = new User({ age : 20, email : 'LUCAS@scarduelli.com'});
            expect(u.email).to.be.equal('lucas@scarduelli.com');
        });
        
    });
    
});