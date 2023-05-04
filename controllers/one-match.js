const axios = require('axios');

exports.getOneMatch = (req, res) => {
    const { matchId } = req.query;

    axios.get(`${process.env.API_URL}/matches/${matchId}`, {
    headers: {
        'x-auth-token': process.env.API_KEY
    }
    }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send(error.response.data);
    })
    
}