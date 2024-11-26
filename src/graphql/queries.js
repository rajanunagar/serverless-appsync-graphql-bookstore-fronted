/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBookById = /* GraphQL */ `
  query GetBookById($bookId: ID!) {
    getBookById(bookId: $bookId) {
      bookId
      title
      description
      imageUrl
      author
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks($limit: Int!, $nextToken: String) {
    listBooks(limit: $limit, nextToken: $nextToken) {
      books {
        bookId
        title
        description
        imageUrl
        author
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const myOrders = /* GraphQL */ `
  query MyOrders($limit: Int!, $nextToken: String) {
    myOrders(limit: $limit, nextToken: $nextToken) {
      orderItems {
        userId
        orderId
        quantity
        __typename
      }
      nextToken
      __typename
    }
  }
`;
