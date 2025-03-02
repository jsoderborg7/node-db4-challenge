const db = require('../data/db-config');

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions
}

function getRecipes() {
  return db('recipes')
}

function getShoppingList(recipe_id) {
  return db('ingredients')
}

function getInstructions(recipe_id) {
  return db('instructions')
}