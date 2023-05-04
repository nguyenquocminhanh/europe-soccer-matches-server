const axios = require('axios');

exports.getOneCompetition = (req, res) => {
    const { competitionId } = req.query;

    axios.get(`${process.env.API_URL}/competitions/${competitionId}/teams`, {
    headers: {
        'x-auth-token': process.env.API_KEY
    }
    }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send(error.response.data);
    })
    
}