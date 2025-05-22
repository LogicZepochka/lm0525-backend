import config from "./config/config";
import app from "./app";
import { exit } from "process";
import Telegram from "./telegramModule/telegramApp";
import PDFCreator from "./pdfkit/pdfbuilder";
import { Mocked } from "./pdfkit/types/types";

const TelegramBot = Telegram;

if(config.authorization.secret == "secret") {
    console.error("ERROR: JWT_SECRET is not set")
}

app.listen(config.port,(err) => {
    console.log(`[SERVER] Server started at port ${config.port}`)
})

console.log("DEBUG TESTS")
