import config from "./config/config";
import app from "./app";
import { exit } from "process";
import Telegram from "./telegramModule/telegramApp";
import PDFCreator from "./pdfkit/pdfbuilder";
import { Mocked } from "./pdfkit/types/types";
import CreateLogger from "./tools/Logger";

import cluster from "cluster";
import Prisma from "./tools/prisma";
const numCPUs = require('os').cpus().length;

// DEBUG
const shit = async () => { 
    let pattern = await Prisma.paternoster.findMany({
        where: {
            ShopId: 25
        }
    })
    PDFCreator.generatePaternosterReport(pattern)
}

shit();
const Logger = cluster.isPrimary ? CreateLogger("MASTER") : CreateLogger(`FORK#${cluster.worker?.id}`)

var TelegramBot = Telegram;

if(config.authorization.secret == "secret") {
    Logger("ERROR: JWT_SECRET is not set")
}
app.listen(config.port,(err) => {
    Logger(`Server started at port ${config.port}`)
})
