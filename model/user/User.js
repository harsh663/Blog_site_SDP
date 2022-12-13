const mongoose = require('mongoose'); //import mongoose package

//create schema
const userSchema = new mongoose.Schema(
  {
    firstName: {
      required: [true, "First name is required"],
      type: String,
    },

    lastName: {
      required: [true, "Last name is required"],
      type: String,
    },

    profilePhoto: {
      type: String,
      // set default profile photo
      default:
        "https://www.kindpng.com/picc/m/620-6203229_whatsapp-profile-picture-icon-png-download-instagram-profile.png",
    },

    email: {
      type: String,
      required: [true, "Email is required!!"],
    },

    bio: {
      type: String,
    },

    password: {
      type: String,
      required: [true, "Hey buddy Password is required"],
    },

    postCount: {
      type: Number,
      default: 0,
    },

    isBlocked: {
      type: Boolean,
      default: false,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },

    role: {
      type: String,
      enum: ["Admin", "Guest", "Blogger"],
    },

    isFollowing: {
      type: Boolean,
      default: false,
    },

    isUnFollowing: {
      type: Boolean,
      default: false,
    },

    isAccountVerified:
     { 
        type: Boolean,
        default: false 
    },

    accountVerificationToken: String,
    accountVerificationTokenExpires: Date,

    // Data Association

    viewedBy: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId, //passing all userid who can view the post
          ref: "User", //write model name from user id push into the array 
        },
      ],
    },

    followers: {
      type: [
        {
            type: mongoose.Schema.Types.ObjectId,
            //this no real objects all this are virtual properties so we need to tell mongoose to populate them
          ref: "User",
        },
      ],
    },

    following: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      ],
    },

    passwordChangeAt: Date,
    passwordRessetToken: String,
    passwordResetExpires: Date,

    active: {
      type: Boolean,
      default: false,
    },
  },
  //provided property code to json 
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
    timestamps: true,
  }
);

//Compile schema into model
const User = mongoose.model("User", userSchema);

module.exports = User;
