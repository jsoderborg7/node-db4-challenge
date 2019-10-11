
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {step_number: 1, step_description: "Place bread in toaster and set to desired toastiness.", recipe_id: 1},
        {step_number: 2, step_description: "When bread is toasted, spread a generous amount of butter on top.", recipe_id: 1},
        {step_number: 3, step_description: "Try not to eat entire bag of bread in one sitting.", recipe_id: 1},
        {step_number: 1, step_description: "Put water in a kettle or pot and leave to boil.", recipe_id: 2},
        {step_number: 2, step_description: "Place teabag of your choice in mug.", recipe_id: 2},
        {step_number: 3, step_description: "When water is boiling, pour into mug over teabag. Let sit for 5 minutes.", recipe_id: 2},
        {step_number: 4, step_description: "Try not to scald entire mouth with the first sip.", recipe_id: 2}
      ]);
    });
};
