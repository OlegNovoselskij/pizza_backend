import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    login: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

const Admin = mongoose.models.Admin || mongoose.model("Admin", adminSchema);

export default Admin;
