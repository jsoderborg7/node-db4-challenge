exports.up = function(knex) {
  return knex.schema
    .createTable("recipe", tbl => {
      tbl.increments();
      tbl
        .string("recipe_name", 128)
        .unique()
        .notNullable()
    })
    .createTable("instructions", tbl => {
      tbl.increments();
      tbl
        .integer("step_number")
        .unsigned()
        .notNullable();
      tbl.string("step_description").notNullable();
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    })
    .createTable("recipe_ingredients", tbl => {
      tbl.increments();
      tbl
        .float("quantity", 2)
        .notNullable()
        .unsigned();
      tbl
        .integer("recipe_id")
        .references("id")
        .inTable("recipe")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
      tbl
        .integer("ingredient_id")
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("RESTRICT")
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .string("ingredient_name")
        .notNullable()
        .unique();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipe");
};
