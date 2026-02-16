import mongoose from "mongoose";

// Blueprint (schema) for Todo items
const todoSchema = new mongoose.Schema(
  {
    // What is the actual task / note
    content: {
      type: String,
      required: true, // must write something here
      trim: true, // removes extra spaces from start & end (good habit)
    },

    // Is this task finished or not?
    complete: {
      type: Boolean,
      default: false, // new todos are not completed by default
    },

    // Which user created this todo?
    createdBy: {
      type: mongoose.Schema.Types.ObjectId, // this stores user's ID
      //   always pass the ref name the variable you have given in model like here in user model it is like this mongoose.model("User", userSchema); so we copy & paste User
      ref: "User", // connect to the "User" model
      required: true, // very important – every todo must have an owner
    },

    // List of small sub-tasks (optional – can be empty)
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodos", // connect to SubTodo model
      },
    ],
    // Note: we wrote "subTodos" (small 's') – it's better to be consistent
  },

  // Automatically add createdAt and updatedAt fields
  { timestamps: true },
);

// Create the real model we can use in the app
export const Todo = mongoose.model("Todo", todoSchema);
