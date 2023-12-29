function CheckPhoneNumberFormat(phoneNumber) {
  const re = /^(0)\d{9}$/;
  return re.test(phoneNumber);
}
export default CheckPhoneNumberFormat;
