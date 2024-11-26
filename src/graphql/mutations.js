/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = /* GraphQL */ `
  mutation CreateBook($newBook: BookInput) {
    createBook(newBook: $newBook) {
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
export const createOrder = /* GraphQL */ `
  mutation CreateOrder($newOrder: OrderInput) {
    createOrder(newOrder: $newOrder) {
      userId
      orderId
      book {
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
      quantity
      __typename
    }
  }
`;
