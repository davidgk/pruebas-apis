import {Router} from "express";
import {createRoles, deleteRoles, getRoleById, getRoles, updateRoles} from "../controllers/roles.controller";

const roleRoutes = Router()

roleRoutes.get('/', getRoles)
roleRoutes.get('/:roleId', getRoleById)
roleRoutes.put('/:roleId', updateRoles)
roleRoutes.delete('/:roleId', deleteRoles)
roleRoutes.post('/', createRoles)

export default roleRoutes;
