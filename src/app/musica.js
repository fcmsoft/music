/** @ngInject */
function MusicaService($http) {
  const apiKey = 'B6AZEYFXKFIR4N1R';

  this.getArtists = function (page) {
    return $http.get(`https://freemusicarchive.org/api/get/artists.json?api_key=${apiKey}&page=${page}`);
  };

  this.getArtist = function (id) {
    return $http.get(`https://freemusicarchive.org/api/get/artists.json?api_key=${apiKey}&artist_id=${id}`);
  };
}

export const musica = MusicaService;
