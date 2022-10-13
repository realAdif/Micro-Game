const { AuthenticationError } = require('apollo-server-express');
const {User} = require('../models');
const {signToken} = require('../utils/auth');

const resolvers ={
    Query:{
        users: async()=>{
            return User.find()
        },
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
              return user;
            }  
            throw new AuthenticationError('Not logged in');
        },

    },

    Mutation:{
        addUser: async(parent, {username, email, password}) => {
            const user = await User.create({username,email,password});
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, {email,password}) =>{
            const user = await User.findOne({email}); 

            if(!user){
                throw new AuthenticationError("No User with this email address");
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw){
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },
        removeUser: async (parent,{userId}) =>{
            return User.findOneAndDelete({_id: userId});
        }
    }
};

module.exports = resolvers;
