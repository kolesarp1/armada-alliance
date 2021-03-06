const fs = require('fs/promises')
const fm = require('front-matter')
const path = require('path')
const replaceVariables = require('./replaceVariables')

const getDataForPage = async (filePath) => {

    const contentPath = __dirname + '/../../content'

    const dirPath = path.join(contentPath)

    let string = await fs.readFile(
        path.join(
            dirPath,
            filePath
        )
        , 'utf-8')

    string = replaceVariables(string)

    return fm(string).attributes
}

module.exports = getDataForPage