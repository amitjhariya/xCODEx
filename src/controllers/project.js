import Project from "./../models/projects.js";

// Create a new project
export const createProject = async (req, res) => {
  try {
    const project = new Project({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      status: req.body.status,
      priority: req.body.priority,
      assignedTo: req.body.assignedTo,
      createdBy: req.user._id,
    });
    await project.save();
    res.status(201).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all projects
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json({ success: true, projects });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a project by ID
export const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a project by ID
export const updateProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    project.title = req.body.title || project.title;
    project.description = req.body.description || project.description;
    project.startDate = req.body.startDate || project.startDate;
    project.endDate = req.body.endDate || project.endDate;
    project.status = req.body.status || project.status;
    project.priority = req.body.priority || project.priority;
    project.assignedTo = req.body.assignedTo || project.assignedTo;
    project.updatedBy = req.user._id;
    await project.save();
    res.status(200).json({ success: true, project });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a project by ID
export const deleteProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }
    await project.remove();
    res.status(200).json({ success: true, message: "Project deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
