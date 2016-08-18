'use strict';

module.exports = (value) => {
    
    // Validação base
    let validated = require('./isEmpty')(value);
    if (validated) return false;
    
    // Validação se é Number
    validated = require('./isNumber')(value);
    if (validated) {
        // Validação se é maior que 0
        if (value > 0) {
            return true;
        } else {
            return false;
        }
    } 
    
    return false;
};