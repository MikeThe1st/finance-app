import mongoose from 'mongoose'

const CompanySchema = new mongoose.Schema(
    {
        _id: { type: mongoose.Types.ObjectId },
        name: { type: String, required: true },
        type: {type: String},
        rating: {type: Number},
        availableDates: {
            date: {type: Date},
            reserved: {type: Boolean},
            description: {type: String}
        },
        pricePerH: {type: Number},
        contact: { 
            phone: {type: String},
            email: {type: String}
        },
        languages: [{type: String}],
        location: {
            country: {type: String},
            city: {type: String}
        },
        recomended: {type: Boolean}
    },
    { timestamps: true }
);

const Company = mongoose.model("Company", CompanySchema)
export default Company
