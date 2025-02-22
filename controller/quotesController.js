import User from '../models/quotesModel.js';

function Quotes(req, res) {
    const { quotes, author, published, title } = req.body;
    
    if (!quotes || !author || !published || !title) {
        return res.status(400).send('Please fill out all fields.');
    }

    User.create({ quotes, author, published, title })
        .then(() => res.status(200).send('Quotes Successfully created.'))
        .catch(error => res.status(500).send('Error while creating User: ' + error.message));
}

async function getQuotes(req, res) {
    try {
        const quotes = await User.find();
        if (quotes.length > 0) {
            return res.status(200).json(quotes);
        } else {
            return res.status(404).json({ message: 'No quotes found' });
        }
    } catch (error) {
        console.error("Error:", error);
        return res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
}

const quotesController = {Quotes, getQuotes}
export default quotesController;
