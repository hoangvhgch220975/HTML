
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var players = []; // Array to store multiple players
function onYouTubeIframeAPIReady() {
    createPlayer('player1', 'UVMcjxW68Bc');
    createPlayer('player2', 'M7lc1UVf-VE');

    // Add more createPlayer calls for additional videos
}

function createPlayer(containerId, videoId) {
    players.push(new YT.Player(containerId, {
        height: '380',
        width: '640',
        videoId: videoId,
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    }));
}

function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000, event.target);
        done = true;
    }
}

function stopVideo(player) {
    player.stopVideo();
}

