import jsw from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        let token = req.headers("Authorization");
        if (!token) {
            return res.status(403).json("You are not authorized");
        }
        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }
        const verified = jwt.verify(token, process.env.SECRET_KEY);
        req.user = verified;
        next();
    }
    catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
}