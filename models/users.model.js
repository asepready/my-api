const mongoose = require('mongoose');

const ModelSchema = mongoose.Schema(
  {
    login: { type: String, required: false, maxLength: 60 },
    pass: { type: String, required: false, maxLength: 255 },
    nickname: { type: String, index: true, required: false, maxLength: 50 },
    email: { type: String, required: false, maxLength: 100 },
    registered: { type: Date, default: Date.now },
    activation_key: { type: String, required: false, maxLength: 255 },
    status: { type: Number, required: false, maxLength: 11 },
    display_name: { type: String, index: true, required: false, maxLength: 250 },
  },
  {
    timestamps: true,
  }
);

// Virtual
ModelSchema.virtual('name').get(function () {
  return this.nickname + ', ' + this.display_name;
});

// Virtual
ModelSchema.virtual('url').get(function () {
  return '/user/' + this._id;
});

const NameCollection = 'users';
module.exports = mongoose.model('users', ModelSchema, NameCollection);
