const FormatPriceString = (price) => {
  if (price) {
    return (
      price
        .toLocaleString("en-US", {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        })
        .replace(/,/g, ".") + "đ"
    );
  }
  return price;
};
export default FormatPriceString;
