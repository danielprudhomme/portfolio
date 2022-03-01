function dateToString(date) {
  const dateObj = new Date(date);
  const month = ('00'+dateObj.getMonth()).slice(-2);
  const year = dateObj.getFullYear();
  return `${month}/${year}`;
}

function StartEndDate(startDate, endDate = null) {
  let dates = dateToString(startDate);
  if (endDate) {
    dates += ` - ${dateToString(endDate)}`;
  }
  return dates;
}

export default StartEndDate;