const express = require("express");
const cors = require("cors");
const db = require("./app/models");

const app = express();

// untuk mereducer middlewere cors
const corsOptions = {
    origin: "*"
}

// register cors midleware
app.use(cors(corsOptions));
app.use(express.json());

// konek ke database


db.mongoose.connect(db.url)
.then(()=> console.log("Database berhasil terkoneksi"))
.catch((err)=> console.log(`Gagal Konek => ${err.message}`))

//membuat route
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server berjalan pada PORT ${PORT}`));