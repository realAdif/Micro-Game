const PROGRAMING_LANG = [
    "basic",
    "c",
    "csharp",
    "css",
    "dart",
    "html",
    "java",
    "javascript",
    "matlab",
    "nim",
    "objectivec",
    "perl",
    "php",
    "python",
    "r",
    "ruby",
    "rust",
    "scheme",
    "sql",
    "swift",
    "typescript",

  ];
  
  function randomWord() {
    return PROGRAMING_LANG[Math.floor(Math.random() * PROGRAMING_LANG.length)];
  }
  
  export { randomWord };