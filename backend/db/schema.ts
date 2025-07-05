// Drizzle ORM schema placeholder

import { pgTable, serial, text } from 'drizzle-orm/pg-core';

export const interviews = pgTable('interviews', {
  id: serial('id').primaryKey(),
  question: text('question'),
  answer: text('answer'),
});
