const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/sub', {
    useNewUrlParser: true
})
    .then(db => console.log('Db Is connected'))
    .catch(err => console.error(err));