const FormatPriceString = (price) => {
  return (
    price
      .toLocaleString("en-US", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      .replace(/,/g, ".") + "đ"
  );
};
export default FormatPriceString;
