const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/testapp", { useNewUrlParser: true, useUnifiedTopology: true });