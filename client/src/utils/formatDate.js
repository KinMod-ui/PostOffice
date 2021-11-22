function formatDate(date) {
  var d = new Date(date);
  return d.toLocaleString();
  // return new Intl.DateTimeFormat().format(new Date(date));
}

export default formatDate;