import config from "./config/config";
import app from "./app";
import { exit } from "process";
import PDFCreator from "./pdfkit/pdfbuilder";
import { Mocked } from "./pdfkit/types/types";
import CreateLogger, { LoggerMessageType } from "./tools/Logger";

import cluster from "cluster";
import Prisma from "./tools/prisma";
const numCPUs = require('os').availableParallelism();

const Logger = CreateLogger("MASTER")

// DEBUG
const shit = async () => { 
    let pattern = await Prisma.paternoster.findMany({
        where: {
            ShopId: 25
        }
    })
    PDFCreator.generatePaternosterReport(pattern)
}



function main() {
    


    if(config.authorization.secret == "secret") {
        Logger("ERROR: JWT_SECRET is not set")
    }
    app.listen(config.port,(err) => {
        if(err) {
            Logger(err.message,LoggerMessageType.Error);
            exit();
        }
        Logger(`Server started at port ${config.port}`)
    })
}

if(cluster.isPrimary) {
    if(config.nodeEnv == "dev") {
        Logger("Started in DEV enviroment")
        main()
    }
    else {
        Logger("Started in PROD enviroment")
        Logger("Starting clusters...")
        for(let i=0;i<numCPUs/2;i++) {
            setTimeout(() => {
                let worker = cluster.fork();
                Logger("Starting worker #"+worker.id)
            },2000*i)
        }
        cluster.on('exit', (worker, code, signal) => {
            Logger(`worker ${worker.process.pid} died`,LoggerMessageType.Warning);
            let worker2 = cluster.fork();
            Logger("Starting worker #"+worker2.id)
        });
    }
}
if(cluster.isWorker) {
    if(config.nodeEnv == "dev") {
        Logger("Why I'm started at DEV?!",LoggerMessageType.Warning)
        exit()
    }
    else {
        main();
    }
}



