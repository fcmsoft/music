class TablaController {
  /** @ngInject */
  constructor(MusicaService, $log) {
    this.page = {page: 1};
    this.artists = {};
    this.console = $log;
    this.service = MusicaService;
    // create an array of pages number for pagination
    this.pages = [];

    // get first page
    this.fetch(this.page);
  }

  fetch() {
    this.service
      .getArtists(this.page.page)
      .then(response => {
        this.artists = response.data;
        this.console.log(this.artists);
        // populate array of pages
        for (let i = 1; i <= this.artists.total_pages; i++) {
          this.pages.push(
            {
              page: i
            }
          );
        }
      })
      .catch(error => {
        this.console.log(error);
      });
  }

  changePage() {
    this.console.log(this.page);
    this.fetch();
  }
}

export const tabla = {
  template: require('./tabla.html'),
  controller: TablaController
};
