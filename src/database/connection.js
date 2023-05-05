var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',
        user : 'tabacaria',
        password : 'Vi@r.1851',
        database : 'schema_apiteste'
     }
});
module.exports = knex