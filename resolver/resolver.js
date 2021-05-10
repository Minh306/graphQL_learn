const { books, authors } = require("../data/static");

const resolvers = {
  // Query
  Query: {
    books: () => books,
    book: (parent, args) => books.find((book) => book.id === parseInt(args.id)), // args.id khi truyền qua graphql bị chuyển định dạng là String
    authors: () => authors,
    author: (parent, args) =>
      authors.find((author) => author.id === parseInt(args.id)),
  },
  Book: {
    author: (parent, args) => {
      //   console.log(parent); parent: kết quả query đầu tiêu
      return authors.find((author) => author.id === parseInt(parent.authorId)); // tìm kiếm có điều kiện
    },
  },
  Author: {
    books: (parent, args) => {
      //   console.log(parent)
      return books.filter((book) => book.authorId === parseInt(parent.id)); // lọc có điều kiện
    },
  },
  // Mutation
  Mutation: {
    createAuthor: (parent, args) => args,
    createBook: (parent, args) => args,
  },
};

module.exports = resolvers;
