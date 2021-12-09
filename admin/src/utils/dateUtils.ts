import dayjs from "dayjs";

const day = (date: string) => {
  return dayjs(date).format("YYYY-MM-DD");
};

export { day };
