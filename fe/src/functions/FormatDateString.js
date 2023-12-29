function formatDateString(input) {
  let date = new Date(input);

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
  let year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
