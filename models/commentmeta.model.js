const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');

//Initialize
//mongoose.plugin(slug);

const Schema = mongoose.Schema(
  {
    title: String,
    content: String,
    //slug: { type: String, slug: 'title' },
  },
  {
    timestamps: true,
  }
);

const Collection = 'commentmeta';
module.exports = mongoose.model('Commentmeta', Schema, Collection);
