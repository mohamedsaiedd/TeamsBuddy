const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

//   server setup

const app = express();
app.use(bodyParser.json());
app.use(cors());

// create endpoint
app.post('/buddy', async (req, res) => {

    const { prompt } = req.body;

    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        max_tokens: 200,
        temperature: 1,
        prompt: prompt,
    });


    res.send(completion?.data?.choices[0]?.text)

})

//server config

const port = 8000;
app.listen(port, function (err) {
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", port);
})
app.on('death', function (worker) {
    app.listen(8000);
});