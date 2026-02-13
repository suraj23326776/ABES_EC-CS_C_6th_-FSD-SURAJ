import fs from fs / promises;
export const readJosonFile = async (path) => {
    try {
        const data = await fs.readFile(path, "utf-8");
        const jsonData = JSON.parse(data);
        console.log(jsonData);
    } catch (error) {
        console.log("unable to read json");
    }
}
console.log(readJosonFile("student.json"));