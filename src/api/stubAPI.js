class StubAPI {
    constructor() {
        this.favoriteMovies = [], this.watchList = [];
    }

    add(movie) {
        this.favoriteMovies.push(movie), this.watchList.push(movie);
    }

    getAll() {
        return this.favoriteMovies, this.watchList;
    }
}

export default new StubAPI();