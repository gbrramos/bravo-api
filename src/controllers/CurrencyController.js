module.exports = {
    get: (req, res) => {
        let request = req.query;

        res.send(request);
    }
}