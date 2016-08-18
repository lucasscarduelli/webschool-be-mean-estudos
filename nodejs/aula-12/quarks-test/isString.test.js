'use strict';

const describes = [
    { 
        type : true, 
        message : 'é String', 
        values : ['Lucas', '1', '', ' ', 'true']
    },{ 
        type : false, 
        message : 'não é String', 
        values : [1, null, undefined, true, {}, ()=>{} ]
    }
];

require('./testModule')('isString', describes);