const imgCounter = (db) => (req, res) => {
  const { id } = req.body
  // increment the user's entries
  db("users")
    .where("id", "=", id)
    .increment("entries", 1)
    .returning("entries")
    .then((entries) => res.json(entries[0]))
    .catch((e) => res.status(400).json("Unable to increment the entries :("))
}
export default { imgCounter }
