const { TextServiceClient } = require("@google-ai/generativelanguage");
const { GoogleAuth, LoginTicket } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = "AIzaSyAm_-7O2gbVi2sZ-X9GBkhEd2YOgYhkw3c";

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});



const generateText = async (text) => {
  try {
    const res = await client.generateText({
      model: MODEL_NAME,
      temperature: 0.4,
      candidateCount: 4,
      top_k: 40,
      top_p: 0.95,
      max_output_tokens: 1024,
      prompt: {
        text: text,
      },
    })
    return res[0]?.candidates[0]?.output
  } catch (error) {
    console.log(error);
  }
}

module.exports = generateText;