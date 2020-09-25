const mongoose = require('mongoose');

mongoose
.connect('mongodb://localhost:27017/crudDB', {
useNewUrlParser:true,
useUnifiedTopology:true
})
.then(() => console.log('Connected to database'))
.catch(err => console.log('Refuse to connect..',err));

// (err) => {
//     if (!err)
//         console.log('MongoDB connection succeeded.');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });

module.exports = mongoose;