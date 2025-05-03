import * as fs from "node:fs/promises"; 
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

export function readMovies() {
  return fs.readFile('movies.txt', { encoding: 'utf-8'});
  }
//   const filename = fileURLToPath(import.meta.url);
//   const dirname = path.dirname(filename);
//   const filePath = path.join(dirname, 'movies.txt'); // path.join(import.meta.dirname, "movies.txt"); // v20.11.0

  // return fs.readFile(filePath, { encoding: 'utf-8' });
// }
// -----------------------------------------------------------------------------
// const fs = require('node:fs/promises');

// function readMovies(){
//   return fs.readFile('movies.txt', { encoding: 'utf-8'});
// }
// //export for index
// module.exports = {
//   readMovies
// };