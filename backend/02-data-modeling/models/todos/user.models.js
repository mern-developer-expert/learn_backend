// Step 1: Bring in mongoose (the tool that talks to MongoDB)
import mongoose from "mongoose";

// Step 2: Create the "blueprint" (schema) for how a User should look in the database

// we use "new" keyword to create a schema and store it in a variable here i store it in "userSchema" and pass
// two objects inside it first for defining your fields and second to pass "timestamps" which adds createdAt &
// updatedAt automatically in your mongodb
const userSchema = new mongoose.Schema(
  {
    // here we are defining our variables for this models but rather then directly giving its type we can pass objects
    // in that objects you can pass validators, custom msg, type etc

    // username: String,

    // here i am not directly assigned type instead i pass objcts and apply validations for each fields which is a nice practice
    username: {
      type: String,
      required: true, // must write something
      lowercase: true, // automatically convert to small letters
      unique: true, // no two people can have same username
      trim: true, // remove extra spaces (good habit)
    },

    // NOTE:-> A common gotcha for beginners is that the unique option for schemas is not a validator. It's a convenient helper for building MongoDB unique indexes.

    password: {
      type: String,
      required: true,
      minlength: [8, "Password must be at least 8 characters long"],
      trim: true,
    },

    email: {
      type: String,
      required,
      unique,
      trim: true, // remove extra spaces (good habit)
      // Optional: You can add proper email checking later like this:
      // match: [/^\S+@\S+\.\S+$/, "Please write a correct email address"],
    },

    userIs: {
      type: Stringg,
      enum: {
        values: ["user", "admin"],
        message: "{VALUE} is not supported",
      },
    },

    // You can add more fields later, example:
    // fullName: { type: String },
    // isAdmin: { type: Boolean, default: false },
  },

  // Step 3: This magic line automatically adds two dates for every user
  // createdAt → when account was made
  // updatedAt → when account was last changed
  { timestamps },
);

// Step 4: Turn the blueprint into a real "model" we can use everywhere

// here export model to use in other folders in our project
// we pass 2 args in model i.e "User", userSchema respectively User-> it is the name of model it will be save in lowercase
// in mongodb with s afterwards like users, userSchema-> we pass this bcz based on userSchema which is defiend above
// it will create a model in database

// "User" → name of the collection in MongoDB becomes → "users" (small letter + s)

export const User = mongoose.model("User", userSchema);

// for more Validitations you can refer mongoose Validitations docs https://mongoosejs.com/docs/validation.html