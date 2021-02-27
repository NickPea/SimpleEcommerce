
export function seed(knex) {
  return knex('categories').del() // Deletes ALL existing entries
    .then(function () {
      return knex('categories').insert([
        { id: 1, name: 'road' },
        { id: 2, name: 'bmx' },
        { id: 3, name: 'mountain' },
        { id: 4, name: 'kids' },
        { id: 5, name: 'commute' },

      ])
    })
    .then(function () {
      return knex('categories_products').insert([
        { category_id: 1, product_id: 1 },
        { category_id: 3, product_id: 2 },
        { category_id: 4, product_id: 3 },
        { category_id: 5, product_id: 4 },
        { category_id: 5, product_id: 5 },
        { category_id: 3, product_id: 6 },
      ])
    })
};
