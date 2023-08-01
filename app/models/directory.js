import { Schema, model, models } from "mongoose";

const directory = new Schema(
  {
    name: {
      type: String,
      require: [true, "isRequire"],
    },
    username: {
      type: String,
      require: [true, "isRequire"],
    },
    description: {
      type: String,
      require: [true, "isRequire"],
    },
    image: {
      type: String,
      require: [true, "isRequire"],
    },
    skills: {
      type: Object,
      require: [true, "isRequire"],
    },
    proyects: {
      type: Array,
      require: [true, "isRequire"],
    },
    icons: {
      type: Array,
      require: [true, "isRequire"],
    },
    bange: {
      type: Array,
      require: [true, "isRequire"],
    },
  },
  {
    timestamps: true,
  }
);
export default models.Directory || model("Directory", directory);
