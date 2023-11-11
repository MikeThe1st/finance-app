import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema(
    {
        _id: { type: mongoose.Types.ObjectId },
        email: { type: String, required: true, unique: true, max: 60 },
        password: { type: String, required: true, min: 5 },
        name: { type: String, required: true },
        surname: { type: String, required: true },
        transactions: {
            _id: { type: mongoose.Types.ObjectId },
            company: { type: String },
            cost: { type: Number },
            date: { type: Date },
            description: { type: String }
        }
    },
    { timestamps: true }
)

const User = mongoose.model("User", UserSchema)
export default User
