import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    no_of_employees: { type: Number },
    address: { type: String, required: true },
    description: { type: String },
    location: { type: String, required: true },
    website: { type: String },
    logo: { type: String },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

export const company = mongoose.model("Company", companySchema);
