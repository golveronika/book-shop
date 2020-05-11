//const chalk = require('chalk')
const fs = require('fs')
const chalk = require('chalk');

const getData = () => {

    console.log(chalk.italic.green("Loading data..."))

    try {
        const dataBuffer = fs.readFileSync('data.json')
        const dataJSON = dataBuffer.toString();
        const data = JSON.parse(dataJSON);
        
        console.log(chalk.italic.green("Data was load successful"))

        return data

    } catch(error) {
        console.log(chalk.italic.red("Error of loading data, [] was return"))
        console.log(error);

        return []
    }

}

module.exports = {
    getData
}