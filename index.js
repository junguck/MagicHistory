import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";


const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const path = "./data.json";
const date = moment().subtract(5, 'd').format();



const makecommit = (n) => {
    if (n === 0) {
        simpleGit().push();
        return;
    }
    const x = randomInt(0, 54);
    const y = randomInt(0, 6);
    const date = moment().subtract(1, 'd').add(x, 'w').add(y, 'd').format();
    const data = {
    date : date,
}
console.log(date);
jsonfile.writeFile(path,data,() => {
simpleGit().add([path]).commit(date,{'--date' : date},makecommit.bind(this,n-1)).push();
});
}

makecommit(500);




