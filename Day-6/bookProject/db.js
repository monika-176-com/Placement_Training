const mongoose = require("mongoose");
mongoose.connect(
    "mongodb://127.0.0.1:27017/library_db"
)
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log(error);
});
