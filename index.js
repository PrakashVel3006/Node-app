const app = require('./src/app');
const connectDB = require('./src/db');
const PORT = 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Node js running in ${PORT}`)
    })
})

