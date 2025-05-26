"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config/config"));
const app_1 = __importDefault(require("./app"));
const process_1 = require("process");
const pdfbuilder_1 = __importDefault(require("./pdfkit/pdfbuilder"));
const Logger_1 = __importStar(require("./tools/Logger"));
const cluster_1 = __importDefault(require("cluster"));
const prisma_1 = __importDefault(require("./tools/prisma"));
const numCPUs = require('os').availableParallelism();
const Logger = (0, Logger_1.default)("MASTER");
// DEBUG
const shit = async () => {
    let pattern = await prisma_1.default.paternoster.findMany({
        where: {
            ShopId: 25
        }
    });
    pdfbuilder_1.default.generatePaternosterReport(pattern);
};
function main() {
    if (config_1.default.authorization.secret == "secret") {
        Logger("ERROR: JWT_SECRET is not set");
    }
    app_1.default.listen(config_1.default.port, (err) => {
        if (err) {
            Logger(err.message, Logger_1.LoggerMessageType.Error);
            (0, process_1.exit)();
        }
        Logger(`Server started at port ${config_1.default.port}`);
    });
}
if (cluster_1.default.isPrimary) {
    if (config_1.default.nodeEnv == "dev") {
        Logger("Started in DEV enviroment");
        main();
    }
    else {
        Logger("Started in PROD enviroment");
        Logger("Starting clusters...");
        for (let i = 0; i < numCPUs / 2; i++) {
            setTimeout(() => {
                let worker = cluster_1.default.fork();
                Logger("Starting worker #" + worker.id);
            }, 2000 * i);
        }
        cluster_1.default.on('exit', (worker, code, signal) => {
            Logger(`worker ${worker.process.pid} died`, Logger_1.LoggerMessageType.Warning);
            let worker2 = cluster_1.default.fork();
            Logger("Starting worker #" + worker2.id);
        });
    }
}
if (cluster_1.default.isWorker) {
    if (config_1.default.nodeEnv == "dev") {
        Logger("Why I'm started at DEV?!", Logger_1.LoggerMessageType.Warning);
        (0, process_1.exit)();
    }
    else {
        main();
    }
}
