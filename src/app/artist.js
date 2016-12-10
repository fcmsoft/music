class ArtistController {
  /** @ngInject */
  constructor(MusicaService, $log, $stateParams) {
    MusicaService
      .getArtist($stateParams.id)
      .then(response => {
        this.artist = response.data.dataset[0];
        $log.log(response.data);
      })
      .catch(error => {
        $log.log(error);
      });
  }
}

export const artistDetail = {
  bindings: {
    artist: '<'
  },
  template: require('./detail.html'),
  controller: ArtistController
};
