export function getBooksQuery(query = "") {
  return `
  query searchBooks {
    books(query: "${query}") {
      id
      title
      description
      authors
      link
      image
    }
  }
  `;
}
