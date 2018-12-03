const express = require ('express')

const app = express()

app.get('/', (req, res) => {
    res.send({status: 'Running!'})
});

app.listen(3000, () => {
    console.log('\n>>\nApp listening on port 3000!\n>>\n');
});
