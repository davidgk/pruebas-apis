export const signoff= async (req, res) => {
    res.json('signoff')
}

export const signin  = async (req, res) => {
    res.json('signin')
}

export const signup  = async (req, res) => {
    const {username , email, password, roles} = req.body

}
