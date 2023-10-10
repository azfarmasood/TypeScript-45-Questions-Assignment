function album(artist, title, tracks) {
    return {
        artist: artist,
        title: title,
        tracks: tracks !== undefined ? tracks : "Not specified"
    };
}
var album1 = album("Artist 1", "Music Album 1");
var album2 = album("Artist 2", "Music Album 2");
var album3 = album("Artist 3", "Music Album 3");
album1.tracks = 12;
album2.tracks = 18;
album3.tracks = 26;
console.log(album1);
console.log(album2);
console.log(album3);
