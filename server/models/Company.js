import mongoose from 'mongoose'

// const CompanySchema = new mongoose.Schema(
//     {
//         _id: { type: mongoose.Types.ObjectId },
//         name: { type: String, required: true },
//         name: { type: String },
//         type: {type: String},
//         rating: {type: Number},
//         // availableDates: {
//         //     date: {type: Date},
//         //     reserved: {type: Boolean},
//         //     description: {type: String}
//         // },
//         description: {type: String},
//         // dates: { type: [Boolean], default: [] },
//         price: {type: Number},
//         contact: { 
//             phone: {type: String},
//             email: {type: String}
//         },
//         location: {
//             country: {type: String},
//             city: {type: String}
//         },
//         recommended: {type: Boolean},
//     },
//     { timestamps: true }
// );

const CompanySchema = new mongoose.Schema(
    {
      _id: { type: mongoose.Types.ObjectId },
      name: { type: String, required: true },
      type: { type: String },
      rating: { type: Number },
      recommended: { type: Boolean },
      description: { type: String },
      price: { type: Number },
      dates: { type: [Boolean] },
    },
    { timestamps: true }
  )

const Company = mongoose.model("Company", CompanySchema)
export default Company
