const axios = require('axios');

exports.getOnePlayerMatches = (req, res) => {
    const { playerId } = req.query;

    axios.get(`${process.env.API_URL}/persons/${playerId}/matches`, {
    headers: {
        'x-auth-token': process.env.API_KEY
    }
    }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send(error.response.data);
    })
    
}