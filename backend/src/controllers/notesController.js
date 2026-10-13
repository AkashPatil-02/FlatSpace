export function getAllNotes(req,res){
    res.send("notes. yes.")
}

export function createNote(req,res){
    res.status(201).json({message:"note created"})
}

export function updateNote(req,res){
    res.status(200).json({message:"note created"})
}

export function deleteNote(req,res){
    res.status(200).json({message:"note created"})
}