const mongoose = require('mongoose');
// const slug = require('mongoose-slug-generator');

//Initialize
//mongoose.plugin(slug);

const ModelSchema = mongoose.Schema(
  {
    post: { type: Schema.ObjectId, ref: 'post', required: true },
    user: { type: Schema.ObjectId, ref: 'user', required: true },
    comment: { type: Text, required: false },
  },
  {
    timestamps: true,
  }
);

const NameCollection = 'comments';
module.exports = mongoose.model('comments', ModelSchema, NameCollection);
