module.exports = mongoose => {
    const schema = mongoose.Schema ({
        nama_lengkap : String,
        jenis_kelamin : String,
        tanggal_lahir : Date,
        tempat_lahir : String,
        alamat : String
    },{
        timestamps : true
    }
    );

    schema.method("toJSON", function(){
        const {__v, _id, ...Object} = this.toObject();
        Object.id = _id;

        return Object;
    })
    return mongoose.model("mahasiswa", schema);
}