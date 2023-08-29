import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  secondName: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6
  }
})

const UserModel = mongoose.model('User', userSchema);

export default UserModel;