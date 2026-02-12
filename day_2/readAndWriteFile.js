import fs from 'fs';

const appendFileSync = (path, data) => {
  try {
    fs.appendFileSync(file, data);
    console.log("Data has been appended successfully.");
  } catch (error) {
    console.log("unable to append file");
  }
};
appendFileSync(
  "./example.txt",
  "This data has been appended through sync fun of fs",
);


export const writeFileSync = (path, data) => {
    try {
        fs.writeFileSync(path, data);
        console.log("successful")
    } catch (error) {
        4
        console.log("unable to write data");
    }     
}
//writeFileSync("./emample.txt", "This is sample text");


export const readFileSync = (path) => {
    try {
        const data=fs.readFileSync(path,' utf-8');
        console.log(data,"successful")
    } catch (error) {
        console.log("unable to write data");
    }     
}
//writeFileSync("./emample.txt", "This is sample text");