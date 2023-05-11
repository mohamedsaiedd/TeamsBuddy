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
        max_tokens: 512,
        prompt: prompt,
    });

    res.send(completion.data.choices[0].text)

})

//server config

const port = 8000;
app.listen(port, () => {
    console.log(`server is listening to ${port}`);
})