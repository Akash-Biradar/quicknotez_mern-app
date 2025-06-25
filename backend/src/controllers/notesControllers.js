import Note from "../models/notesModel.js";

export async function getAllNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 }); // -1 will sort in desc. order (newest first)
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllNotes controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
} 

export const getNoteById = async (req, res) => {
  try {
    const onenote = await Note.findById(req.params.id);
    if (!onenote) {
      return res.status(404).json({ message: "Note not found" })
    }
    return res.status(200).json(onenote)
  } catch (error) {
    console.error("error in getOneNotes controller");
    return res.status(500).json({ message: "internal server error" });
  }
}

export const createNotes = async (req, res) => {
  try {
    const { title, content } = req.body
    console.log(title, content);
    const note = new Note({ title, content })
    const savedNote = await note.save();
    return res.status(201).json(savedNote)

  } catch (error) {
    console.error("error in createNotes controller");
    return res.status(500).json({ message: "internal server error" });
  }
}


export const updateNotes = async (req, res) => {
  try {
    const { title, content } = req.body
    const updatedNote = await Note.findByIdAndUpdate(req.params.id, { title, content }, { new: true });
    if (!updateNotes) {
      return res.status(404).json({ message: "Note not found" })
    }
    return res.status(201).json(updateNotes)

  } catch (error) {
    console.log("error in updateNotes controller");
    return res.status(500).json({ message: "internal server error" });
  }
}



export async function deleteNotes(req, res) {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote) return res.status(404).json({ message: "Note not found" });
    res.status(200).json({ message: "Note deleted successfully!" });
  } catch (error) {
    console.error("Error in deleteNote controller", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
