//const chalk = require('chalk')
const fs = require('fs')
const chalk = require('chalk')

const getGoods = () => {

    const names = getJSON('names.json')
    const data = getJSON('data.json')

    const goods = (data.Value && names) 
      ? data.Value.Goods.map((item, i) => {
            const group_id = item.G
            return { 
                id: item.T,
                group: names[group_id].G,
                price_USD: item.C,
                rest: item.P,
                name: names[group_id].B[item.T].N
            }
        }) : []

    return goods

}

const getJSON = (filename) => {

    console.log(chalk.italic.green("Loading data..."))

    try {
        const dataBuffer = fs.readFileSync(filename)
        const dataJSON = dataBuffer.toString()
        const data = JSON.parse(dataJSON)
        
        console.log(chalk.italic.green("Data was load successful"))

        return data

    } catch(error) {
        console.log(chalk.italic.red("Error of loading data, [] was return"))
        console.log(error)

        return []
    }
}

module.exports = {
    getGoods
}