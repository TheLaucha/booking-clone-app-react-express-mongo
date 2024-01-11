import mongoose from "mongoose"
const { Schema } = mongoose

const RoomSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true } // habilita la opción de agregar automáticamente campos de registro de tiempo (createdAt y updatedAt))
)

export default mongoose.model("Room", RoomSchema)

// roomNumbers es un campo que es un arreglo de objetos. Cada elemento en este arreglo contiene información sobre una habitación. Por lo tanto, esta estructura permite almacenar múltiples habitaciones, donde cada habitación tiene sus propias características.

// Cada elemento en el arreglo roomNumbers es un objeto con dos propiedades:

// number que es de tipo Number, lo que indica el número de la habitación.
// unavailableDates que es un arreglo de fechas (Date). Esto se utiliza para registrar las fechas en las que la habitación no está disponible, como cuando está reservada.
// Entonces, el campo roomNumbers te permite mantener un registro de múltiples habitaciones, donde cada habitación se representa como un objeto en el arreglo, y cada objeto contiene su número de habitación y una lista de fechas en las que no está disponible.
