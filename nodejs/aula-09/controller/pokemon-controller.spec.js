'use strict';

const expect = require('chai').expect;
const ctrl = require('./pokemon-controller');

describe('Controller of Pokemons', () => {

    const pokemon = {
        name : 'Luketamon',
        description : 'The biggest pokemon of the world!',
        type : 'Fire',
        attack : 85,
        defense : 85,
        height : 1.80
    };
    
    after(done => {
        let Model = require('./pokemon-schema');
        Model.remove();
        done();
    });
    
    describe('create a new pokemon', () => {
        it('expect a new pokemon has create', done => {
            ctrl.create(pokemon, (err, data) => {
                expect(err).to.not.exists;
                expect(data._id).to.exist;
                expect(data.height).to.be.eq(1.8);
                expect(data.defense).to.be.eq(85);
                expect(data.attack).to.be.eq(85);
                expect(data.type).to.be.eq('Fire');
                expect(data.description).to.be.eq('The biggest pokemon of the world!');
                expect(data.name).to.be.eq('Luketamon');
                done();
            });
        });
    });
    
    describe('find all pokemons', () => {
        it('expect get all pokemon in db', done => {
            ctrl.retrieve({}, (err,data) => {
                expect(err).to.not.exists;
                expect(data).to.be.an('array');
                expect(data).to.have.length.above(1);
                done();
            });
        });
    });
    
});