export const sortArray = (field) => {
  return (x, y) => {
    if (x[field]?.toLowerCase() < y[field]?.toLowerCase()) {
      return -1
    } else if (x[field]?.toLowerCase() > y[field]?.toLowerCase()) {
      return 1
    }
    return 0
  }
}