import dayjs from "dayjs";

function getFormattedDateFull(date) {
  const formattedDate = dayjs(date).format("DD-MMMM-YYYY");
  return formattedDate;
}

export { getFormattedDateFull };
