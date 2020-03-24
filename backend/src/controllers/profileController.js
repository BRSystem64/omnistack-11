const connection = require('../database/connection');

module.exports = {
    async find(request, response){
        const ong_id = await request.headers.authorization;
        
        const {page} = request.query;

        const incidents = await connection('incidents').limit(5).offset((page-1) * 5).where('ong_id', ong_id).select('*');

        return response.json(incidents);
    }
}