var playlist = {
  Kartell : '5am',
  Kanye West : 'Golddigger'
}

function updatePlaylist (playlist, artistName, songTitle) {
  playlist[ artistName ]= songTitle
  return playlist
}

function removeFromPlaylist (playlist, artistName){
  delete playlist[artistName]
  return playlist
}
