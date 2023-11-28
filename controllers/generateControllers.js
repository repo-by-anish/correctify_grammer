const generateText = require("../Api/generate")


const getText = async (req, res) => {
    try {
        const { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: "Please Enter some text" });
        }

        const promptString = `Rewrite the following sentence and fix any grammar issues.\n\n${text}`;
        const result = await generateText(promptString);
        if (result) {
            return res.status(200).json(result);
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = getText;