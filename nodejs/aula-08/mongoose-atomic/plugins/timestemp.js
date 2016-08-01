'use strict';

function timestemp(schema, options) {
    schema.add({ created_at : { type : Date, default : Date.now() }});
    schema.add({ update_at : { type : Date, default : Date.now() }});
    
    function preUpdate(next) {
        console.log('pre update has calling');
        next();
    };
    schema.pre('update', preUpdate);
};

module.exports = timestemp;