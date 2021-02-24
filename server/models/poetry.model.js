const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const poetrySchema = new Schema(
  {
    title: String,
    body: String,
    tags: {
      type: String,
      enum: ["Amor", "Naturaleza", "Religión", "Familia/Amistad", "Nostalgia", "Otros"],
    },
  },
  {
    timestamps: true,
  }
);

const Poetry = mongoose.model("Poetry", poetrySchema);

module.exports = Poetry;
