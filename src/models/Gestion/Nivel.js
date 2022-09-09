import { Schema, model } from "mongoose";

const nivelSchema = new Schema(
    {
      nombre: {
        type: String,
        required: true,
      },
      estado: {
        type: String,
        default:1
      },
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Nivel", nivelSchema);