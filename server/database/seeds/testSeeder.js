
export function seed(knex) {
  return knex('test').del() // Deletes ALL existing entries
    .then(function () {
      return knex('test').insert([
        {id: 1, message: '-- Test: OK --'},
     
      ]);
    });
};
