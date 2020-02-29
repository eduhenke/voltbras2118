const request = require('request')

export class Client {
    public graphQLrequest(query: any, variables?: any, url: string = 'http://localhost:8484/') {
        return new Promise((resolve, reject) => {
            request.post(url, {
                json: {
                    query,
                    variables
                }
            }, (error: any, res: any, body: any) => {
                if (error) { reject(error); }
                resolve(body);
            })
        })
    }
}