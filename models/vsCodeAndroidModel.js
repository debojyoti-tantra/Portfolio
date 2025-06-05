import mongoose from "mongoose";

const vsCodeAndroidSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require:true },
    comment: { type: String, require: true }
}, { timestamps: true })

const VsCodeAndroidComment = mongoose.models.VsCodeAndroidComment || mongoose.model('VsCodeAndroidComment', vsCodeAndroidSchema)

export default VsCodeAndroidComment;