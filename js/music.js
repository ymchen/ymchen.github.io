const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: '听妈妈的话',
            artist: '周杰伦',
            url: 'music/听妈妈的话.wav',
        }
    ]
});


