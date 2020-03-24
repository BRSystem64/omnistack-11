const crypto = require('crypto');
const connection = require('../database/connection');


module.exports = {
    async create(require, response){
        const { name, email, whatsapp, city, uf } = require.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({
            id, name, email, whatsapp, city, uf
        });
    
        return response.json({id});
    },

    async all(require, response){
        return response.json( await connection('ongs').select('*'));
    }
};