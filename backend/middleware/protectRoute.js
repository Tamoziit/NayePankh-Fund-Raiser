const protectRoute = (req, res, next) => {
    const {user} = req.session;

    if(!user) {
        return res.status(401).json({
            status: "fail",
            message: "Unauthorized"
        })
    }

    req.user = user;

    next();
}

export default protectRoute;