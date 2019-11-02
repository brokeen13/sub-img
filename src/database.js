const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://brokeen:teresa09@subdb-n0d2l.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
    .then(db => console.log('Db Is connected'))
    .catch(err => console.error(err));