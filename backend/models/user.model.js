import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["recruiter", "jobseeker"],
      required: true,
    },
    profile: {
      bio: { type: String },
      skills: [
        {
          type: String,
        },
      ],
      profilePhoto: { type: String, default: "" },
      resume: { type: String },
      resumeOriginalName: { type: String },
      company: { type: mongoose.Schema.Types.ObjectId, ref: "company" },
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
