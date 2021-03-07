
export function seed(knex) {
  return knex('table_name').del() // Deletes ALL existing entries
    .then(function () {
      return knex('table_name').insert([
        { colName: 'rowValue1', colName: 'rowValue1' },
        { colName: 'rowValue1', colName: 'rowValue1' },
        { colName: 'rowValue1', colName: 'rowValue1' },

      ])
    });
};
