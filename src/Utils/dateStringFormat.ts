export const dateStringFormat = (isoString: string) => {
  var date = new Date(isoString);
  return date.toLocaleDateString() + " at " + date.toLocaleTimeString();
};
