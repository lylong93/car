import { user } from './schemas';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userModel = mongoose.model('user', new Schema(user))

export default userModel
