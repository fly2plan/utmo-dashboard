const prettify = (key) => {
  let prepend = "";
  if (/^IATA/.test(key)) {
    key = key.replace("IATA", "");
    prepend = "IATA"
  } else if (/^ICAO/.test(key)) {
    key = key.replace("ICAO", "");
    prepend = "ICAO"
  } else if (/^SORA/.test(key)) {
    key = key.replace("SORA", "");
    prepend = "SORA"
  }
  // Remove 4 letter aviation acronyms
  key = key.replace(/([A-Z]{4}$)/, "");
  // distinguish separate words by capital letters
  let splitKey = key.trim().match(/([A-Z]?[^A-Z]*)/g).slice(0, -1)
  splitKey[0] = splitKey[0].charAt(0).toUpperCase() + splitKey[0].slice(1);
  splitKey.unshift(prepend);
  return splitKey.join(" ").trim();
}

export default prettify