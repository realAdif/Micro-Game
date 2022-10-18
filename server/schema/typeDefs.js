const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User{
        _id: ID!
        username: String
        email: String
        password: String
        aboutMe: String
        post: [String]
        score: Int
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]
        user: User
    }

    type Mutation{
        addUser(username: String!, email: String!, password: String! post: String): Auth
        addPost(post: String! ) : User
        addScore(score: Int!): User
        addAboutme(aboutMe: String!): User
        login(email: String!, password: String!): Auth
        removeUser(userId: ID!): Auth
    }

`;

module.exports = typeDefs;