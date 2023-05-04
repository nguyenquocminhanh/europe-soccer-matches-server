const axios = require('axios');

exports.getOneTeamMatches = (req, res) => {
    const { teamId } = req.query;

    axios.get(`${process.env.API_URL}/teams/${teamId}/matches`, {
    headers: {
        'x-auth-token': process.env.API_KEY
    }
    }).then(response => {
        res.send(response.data)
    }).catch(error => {
        res.send(error.response.data);
    })
    
}