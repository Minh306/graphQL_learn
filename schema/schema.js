const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type Book {
        id: ID
        name: String
        genre: String
        author: Author
    }
    
    type Author {
        id: ID!
        name: String
        age: Int
        books: [Book]
    }

    # ROOT TYPE
    type Query {
        books: [Book]
        book (id: ID): Book
        authors: [Author]
        author (id: ID!): Author
    }
    # "!" Bắt buộc phải có trường thông tin đó nếu muốn thực hiện chức năng đó 
    type Mutation {
        createAuthor(id: ID!, name: String , age: Int): Author 
        createBook(id: ID!, name: String, genre: String, authorId: ID!): Book
    }
`;

module.exports = typeDefs;
