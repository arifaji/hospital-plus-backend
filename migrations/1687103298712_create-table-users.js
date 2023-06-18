/* eslint-disable camelcase */

exports.up = (pgm) => {
  pgm.createTable('users', {
    id: {
      type: 'VARCHAR(50)',
      primaryKey: true,
    },
    email: {
      type: 'VARCHAR(100)',
      unique: true,
      notNull: true,
    },
    password: {
      type: 'TEXT',
      notNull: true,
    },
    fullname: {
      type: 'TEXT',
      notNull: true,
    },
    created_date: {
      type: 'TIMESTAMP',
      notNull: false,
    },
    modified_date: {
      type: 'TIMESTAMP',
      notNull: false,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable('users');
};
