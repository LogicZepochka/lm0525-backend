import { version } from "../../package.json";
import ApiAnswer from "../response/apiResponse";

interface APIDataInfo {
    version: string,
}

const SystemController = new class SystemController {

    async ApiManifest(req: any, res: any) {
        const result: APIDataInfo = {
            version: version
        }

        return res.status(200).json(
            new ApiAnswer(200).SetContent(result)
        )
    }

}

export default SystemController;