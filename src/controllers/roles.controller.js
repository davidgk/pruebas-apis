import Role from "../models/Role";


export const getRoles = async (req, res) => {
    const roles = await Role.find();
    res.json(roles)
}

export const createRoles =async  (req, res) => {
    const {name} = req.body;
    const newRole = new Role({name});
    const roleSaved = await newRole.save();
    res.status(201).json(roleSaved);
}


export const getRoleById = async (req, res) => {
    console.log('getRoleById')
    const role = await Role.findById(req.params.roleId)
    res.json(role)
}

export const updateRoles = async (req, res) => {
    const roleUpdated = await Role.findByIdAndUpdate(req.params.roleId, req.body, {
        new: true
    })
    res.status(200).json(roleUpdated)
}

export const deleteRoles = async (req, res) => {
    const role = await Role.findByIdAndDelete(req.params.roleId)
    res.json("Role deleted")
}
