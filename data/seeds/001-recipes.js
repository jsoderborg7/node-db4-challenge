
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {recipe_name: 'Toast'},
        {recipe_name: 'Tea'},
      ]);
    });
};
