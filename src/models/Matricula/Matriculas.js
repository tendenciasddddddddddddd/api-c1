import { Schema, model } from "mongoose";

const nivelSchema = new Schema(
    {
      fecha: {
        type: String,
        required: true,
      },
      fkestudiante: 
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },

      nombre : String,
    
      fknivel: 
      {
        type: Schema.Types.ObjectId,
        ref: "Nivel",
      },
      academico: 
      {
        type: Schema.Types.ObjectId,
        ref: "Academicos",
      },
      nmatricula : Number,
      folio : Number,
      curso : String,
      estado: String,
      typo: String,
      
      //--------------------------REFORMAR CALIFICACIONES
      calificaciones : [{
        docente : String,
        materia : String,
        sumaf: String,
        promediof : String,
        notas : [{
          quimestre: String,
          promedio : String,
          examen : String,
          ap11 : String, ap12 : String, ap13 : String, ap14 : String, ap15 : String,
          ap21 : String, ap22 : String, ap23 : String, ap24 : String, ap25 : String,
          ap31 : String, ap32 : String, ap33 : String, ap34 : String, ap35 : String,
        }]
      }],
     
      asistencias:[{
        fecha: String,
        materia: String,
        isAsiste : String,
      }]
    },
    {
      timestamps: true,
      versionKey: false
    }
  );
  
  export default model("Matriculas", nivelSchema);