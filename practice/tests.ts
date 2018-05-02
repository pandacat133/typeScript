class Test {
    publishDate;

    constructor() {
        this.publishDate = 2016;
        setInterval(() => {
            console.log(this.publishDate);
        }, 1000);
    }
}

let test: Test = new Test();

function PublicationMessage(year: number): string {
    return 'Date published: ' + year;
}

let publishFunc: (someYear: number, someMessage: string) => string;

publishFunc =  PublicationMessage;

publishFunc = function (num: number) {
    let string: string = '';
    return string;
};

publishFunc = (num) => '';

let message: string = publishFunc(2016, 'a message here');