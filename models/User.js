import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    nickname: String,
    tel: String,
    line: String,
    team: String,
    position: String,
    bankName: String,
    bankNumber: String,
    statusFlag: { type: String, default: 'A' },
    createdBy: mongoose.Types.ObjectId,
    updatedBy: mongoose.Types.ObjectId
}, { timestamps: true, versionKey: false })

module.exports = mongoose.models.User || mongoose.model('User', UserSchema)