import { Schema } from 'mongoose';
import User from 'interfaces/User';

const UserSchema = new Schema<User>({
  githubHandle: String,
  email: String,
  projects: [{type:String}],
});

export default UserSchema;