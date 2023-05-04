const axios = require('axios');

exports.getOnePlayerInfo = (req, res) => {
    const { playerId } = req.query;

    axios.get(`${process.env.API_URL}/persons/${playerId}`, {
    headers: {
        'x-auth-token': process.env.API_KEY
    }
    }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send(error.response.data);
    })
    
}