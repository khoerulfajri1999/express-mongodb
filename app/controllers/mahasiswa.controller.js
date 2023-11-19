const db = require("../models");
const Mahasiswa = db.mahasiswa;

//membuat data mahasiswa
exports.create = (req, res) => {

    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    Mahasiswa.create(req.body)
        .then(()=> res.send({message: "Data berhasil disimpan"}))
        .catch(err=> res.status(500).send({message: err.message}));
}

//menampilkan data mahasiswa
exports.findAll = (req, res) => {

    Mahasiswa.find()
        .then(data=> res.send(data))
        .catch(err=> res.status(500).send({message: err.message}));
}

//menampilkan 1 data mahasiswa
exports.show = (req, res) => {

    const id = req.params.id;

    Mahasiswa.findById(id)
        .then(data=> res.send(data))
        .catch(err=> res.status(500).send({message: err.message}));
}

//mengupdate data mahasiswa
exports.update = (req, res) => {

    const id = req.params.id;

    req.body.tanggal_lahir = new Date(req.body.tanggal_lahir)

    Mahasiswa.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data=> {
            if(!data) {
                res.status(404).send({message: "Tidak dapat mengupdate data"})
            } res.send({message: "Data berhasil diupdate"})
        })
        .catch(err=> res.status(500).send({message: err.message}));
}

//menghapus data mahasiswa
exports.delete = (req, res) => {

    const id = req.params.id;

    Mahasiswa.findByIdAndDelete(id)
        .then(data=> {
            if(!data) {
                res.status(404).send({message: "Tidak dapat menghapus data"})
            } res.send({message: "Data berhasil dihapus"})
        })
        .catch(err=> res.status(500).send({message: err.message}));

}