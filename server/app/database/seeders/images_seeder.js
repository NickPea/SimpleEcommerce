
export function seed(knex) {
  return knex('images').del() // Deletes ALL existing entries
    .then(function () {
      return knex('images').insert([
        { url_path: '/images/electro.jpg', product_id: 1 },
        { url_path: '/images/groovy.jpg', product_id: 2 },
        { url_path: '/images/patio.png', product_id: 3 },
        { url_path: '/images/skate.png', product_id: 4 },
        { url_path: '/images/traffic.jpg', product_id: 5 },
        { url_path: '/images/weekend.png', product_id: 6 }
      ]);
    });
};
