const express = require('express');
const router = express.Router();
const VLC = require('node-vlc-json');
const player = new VLC({httpPort: '8080', httpPassword: 'pwd'});

router.get('/play', (req, res) => {

    player.play(req.query.path, function() {
        player.status(function(res) {
          console.log(res.state);
        });
    });

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ "status": "play" }));
});

module.exports = router;