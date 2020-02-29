import { RESTDataSource } from 'apollo-datasource-rest';

export class ExoplanetsApi extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = 'https://api.arcsecond.io/exoplanets/';
    }

    public queryExoplanets(pagesAmount: number = 10): any {
        let pagesPromise = Array.from(Array(pagesAmount))
            .map((_, index) => this.get(`?page=${index + 1}`));
        return Promise.all(pagesPromise)
            .then((pages) => pages.flatMap(page => page.results));
    }
}