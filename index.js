const app = require('express')()
const { getQuote } = require('./getquote')
const random = require('./randomstuff')

app.set('view engine', 'ejs')

app.get('/', async (req, res) => {
    res.render('index', {
        quote: (await getQuote())[0],
        appeal: random.getAppeal(),
        appealColor: random.getColor(),
        gradient: random.getColor()
    })
})

app.get('*', (req, res) => {
    res.redirect('/')
})

app.listen(80, () => {
    console.log('Web server is up ✅')
})

module.exports = app