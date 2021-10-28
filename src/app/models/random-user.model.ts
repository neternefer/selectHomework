
export class RandomUser {
    public get results(): RandomUserResponse[] {
        return this._results;
    }
    public set results(value: RandomUserResponse[]) {
        this._results = value;
    }
    constructor(
         private _results: RandomUserResponse[]
    ) {}
    
}

interface RandomUserResponse {
    name: {
        first: string,
        last: string
    },
    dob: {
        age: number
        },
    email: string,
    gender: string


        
        
}