const axios = require('axios');

exports.getAllMatches = (req, res) => {
    const { leagueCode, showAllMatch } = req.query;
   
    if (showAllMatch === 'false') {
      axios.get(`https://api.football-data.org/v4/competitions/${leagueCode}/matches?status=SCHEDULED,IN_PLAY`, {
        headers: {
          'x-auth-token': process.env.API_KEY
        }
      }).then(response => {
          res.send(response.data)
      }).catch(error => {
          res.send(error.response.data);
      })
    } else {
      axios.get(`${process.env.API_URL}/competitions/${leagueCode}/matches`, {
        headers: {
          'x-auth-token': process.env.API_KEY
        }
      }).then(response => {
          res.send(response.data)
      }).catch(error => {
          res.send(error.response.data);
      })
    }
}