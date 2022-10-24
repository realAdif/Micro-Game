const PROGRAMING_LANG = [
    "afghanistan",
    "america",
    "australia",
    "austria",
    "azerbaijan",
    "brazil",
    "canada",
    "china",
    "colombia",
    "cuba",
    "denmark",
    "egypt",
    "fiji",
    "finland",
    "france",
    "germany",
    "greece",
    "iceland",
    "india",
    "indonesia",
    "ireland",
    "israel",
    "italy",
    "japan",
    "mexico",
    "nepal",
    "netherlands",
    "philippines",
    "singapore",
    "sweden",
    "syria",
    "thailand",
    "ukraine",
  ];
  
  function randomWord() {
    return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  }
  
  export { randomWord };