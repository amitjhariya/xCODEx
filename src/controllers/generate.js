// GenerateCode



export const GenerateCode = async (req, res) => {
    try {
     
      res.status(201).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};