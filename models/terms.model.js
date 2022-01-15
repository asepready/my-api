const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');

//Initialize
mongoose.plugin(slug);

const TermSchema = mongoose.Schema(
  {
    name: String,
    slug: { type: String, slug: 'name' },
    term_grup: Number,
  },
  {
    timestamps: true,
  }
);

const collectionName = 'note';
module.exports = mongoose.model('Note', NoteSchema, collectionName);
