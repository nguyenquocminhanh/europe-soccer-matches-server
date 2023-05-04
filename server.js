require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const allMatchRoutes = require('./routes/all-match');
const oneMatchRoutes = require('./routes/one-match');
const oneTeamInfoRoutes = require('./routes/one-team-info');
const oneTeamMatchesRoutes = require('./routes/one-team-matches');
const oneCompetitionRoutes = require('./routes/one-competition');
const onePlayerMatchesRoutes = require('./routes/one-player-matches');
const onePlayerInfoRoutes = require('./routes/one-player-info');

app.use(cors());
app.use('/all-match', allMatchRoutes);
app.use('/one-match', oneMatchRoutes);
app.use('/one-team-info', oneTeamInfoRoutes);
app.use('/one-team-matches', oneTeamMatchesRoutes);
app.use('/one-competition', oneCompetitionRoutes);
app.use('/one-player-matches', onePlayerMatchesRoutes);
app.use('/one-player-info', onePlayerInfoRoutes);

const port = 3001;

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
