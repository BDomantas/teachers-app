export function buildPaginationData(page:number = 0 , size:number = 20) {
  return {
    limit: size,
    offset: page * size,
  };
}

export function hasNextPage(currentPage, totalPages): boolean {
  return currentPage + 1 < totalPages;
}
