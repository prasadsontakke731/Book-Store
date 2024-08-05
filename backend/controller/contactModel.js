import Message from "../model/contactModel.js"

export const contact = async (req, res) => {
    try {
        const { name, email, message } = req.body

        const createMessage = new Message({
            name: name,
            email: email,
            message: message
        })
        await createMessage.save()
        res.status(201).json({
            message: "Message Sent Successfully",
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" })
    }
}