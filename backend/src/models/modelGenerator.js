import fs from 'fs'
import path from 'path'


export default (app) => {
    const schema = JSON.parse(fs.readFileSync(path.join(__dirname, "../schema.json")))

    let models = {}
}