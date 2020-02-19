
exports.up = function(knex) {

    return knex.schema.createTable('cars', tbl => {
        tbl.increments();
        tbl.integer('VIN').notNullable();
        tbl.string('Name', 256).notNullable();
        tbl.string('Model', 256).notNullable();
        tbl.integer('Mileage');
        
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("cars");
};
