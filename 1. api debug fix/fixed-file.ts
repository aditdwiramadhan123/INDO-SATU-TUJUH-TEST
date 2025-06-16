app.get("/user/:id", async (req, res) => {
  const id = req.params.id;

  try {
    const user = await db.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});
