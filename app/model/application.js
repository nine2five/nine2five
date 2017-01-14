'use strict';

import pg from 'pg';

function query(client) {

  return client.query(
    `CREATE TABLE IF NOT EXISTS
    applications(
      id SERIAL PRIMARY KEY,
      FOREIGN KEY(user_id) REFERENCES users(id),
      FOREIGN KEY(status_id) REFERENCES statuses(id),
      company VARCHAR(255),
      position VARCHAR(255),
      date_applied DATE,
      FOREIGN KEY(contact_id) REFERENCES contacts(id),
      link_posting TEXT,
      last_communication DATE,
      interview_date DATE,
      additional_info TEXT,
      FOREIGN KEY(offer_id) REFERENCES offers(id)
    )`
  );
}

export default query;
