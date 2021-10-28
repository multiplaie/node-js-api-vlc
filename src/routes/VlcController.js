const express = require('express');
const router = express.Router();
const VLC = require('node-vlc-json');

const player = new VLC({httpPort: '8080', httpPassword: 'pwd'});




router.get('/play', (req, res) => {
    player.play('/home/ubuntu/ambiance.mp3', function() {
        player.status(function(res) {
          console.log(res.state);
        });
      });
});


module.exports = router;