const fetch = require('node-fetch')

module.exports = {
    getQuote: async () => {
        let response = await fetch('https://zenquotes.io/api/random')
        return await response.json()
    }
}