const flatify = require("../src");

describe('flatify test', () => {
    test("Normal Object", ()=>{
        const normalObj = {
            hello: "hi",
            how: {
                are: "you?",
            },
            im: {
                fine: {
                    thank: "you"
                }
            }
        }

        const flatified = flatify.flatify(normalObj);
        expect(flatified).toStrictEqual({
            hello: 'hi',
            "how.are": "you?",
            "im.fine.thank": "you",
        });
    })


    test("object with array", ()=>{
        const obj = {
            hello: 'hi',
            ask: [
                {
                    how: {
                        are: 'you?',
                        old: {
                            are: 'you?',
                        }
                    }
                },
                {
                    what: {
                        isyour: 'name?',
                        is: {
                            your: 'name?',
                        }
                    }
                }
            ]
        }

        const flatified = flatify.flatify(obj);

        expect(flatified).toStrictEqual({
            hello: 'hi',
            ask: [
                {
                    "how.are": "you?",
                    "how.old.are": "you?",
                },
                {
                    "what.isyour":"name?",
                    "what.is.your": "name?",
                }
            ],
        });
    })
});
