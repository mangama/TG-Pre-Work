function monitorCount(rows, columns) {
  if (rows < 0 || columns < 0) {
    return rows * columns;
  }
  return rows * columns;
}
 const numOfMonitors = monitorCount (5,4);
console.log(numOfMonitors);
