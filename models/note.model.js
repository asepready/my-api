const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');

//Initialize
//mongoose.plugin(slug);

const ModelSchema = mongoose.Schema(
  {
    title: String,
    content: String,
    //slug: { type: String, slug: 'title' },
  },
  {
    timestamps: true,
  }
);

const NameCollection = 'note';
module.exports = mongoose.model('note', ModelSchema, NameCollection);
