const FormatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getUTCFullYear();
  const monthNum = date.getUTCMonth() + 1;
  const dayNum = date.getUTCDate();

  const month = monthNum < 10 ? `0${monthNum}` : monthNum;
  const day = dayNum < 10 ? `0${dayNum}` : dayNum;

  return `${year}.${month}.${day}`;
};

export default FormatDate;
