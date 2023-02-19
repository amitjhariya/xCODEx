import { Router } from "express";
import {getProjects,getProjectById,createProject,deleteProjectById,updateProjectById,} from './../controllers/project.js'
const router = Router()



// Get all projects
router.get('/', getProjects);

// Get a project by ID
router.get('/:id', getProjectById);

// Create a new project
router.post('/', createProject);

// Update a project by ID
router.put('/:id', updateProjectById);

// Delete a project by ID
router.delete('/:id', deleteProjectById);



export default router