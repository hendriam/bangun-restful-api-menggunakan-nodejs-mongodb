exports.Index = async (req, res) => {
    console.log(`Hello World`);
    return res.status(200).send("Hello World!");
};
