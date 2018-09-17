module.exports = {
    actions: [
        {
            name: ["init", "i"],
            description: "Init something",
            params: [
                {
                    name: ["name", "n"],
                    type: { type: "string", isArray: false },
                },
                {
                    name: ["workdir", "wd"],
                    type: { type: "string", isArray: false },
                }
            ],
            run: (options) => {
                console.log("yeah", options);
            }
        }
    ]
};