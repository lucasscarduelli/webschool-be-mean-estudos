'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = function(email) {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};

const EmailSchema = new Schema({
    email : {
        type : String,
        trim : true,
        unique : true,
        required : 'Email é obrigatório!',
        validate : [validateEmail, 'Preencha com um email válido']
    }
});

const Email = mongoose.model('Email', EmailSchema);
const email = new Email({email : 'lucas@scarduelli.com'});

console.log(email.validateSync());