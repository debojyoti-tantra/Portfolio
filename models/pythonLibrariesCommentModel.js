import mongoose from "mongoose";

const pythonLibrariesCommentSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require:true },
    comment: { type: String, require: true }
}, { timestamps: true })

const PythonLibrariesComment = mongoose.models.PythonLibrariesComment || mongoose.model('PythonLibrariesComment', pythonLibrariesCommentSchema);

export default PythonLibrariesComment;