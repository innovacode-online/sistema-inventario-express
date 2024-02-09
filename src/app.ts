import { AppInventoryRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import { envs } from "./config";
import { MongoDatabase } from "./data/mongodb";


async function main(){

    const serverOptions = {
        port: envs.PORT,
        routes: AppInventoryRoutes.routes,
    }


    await MongoDatabase.connect({
        dbName: envs.MONGO_DB_NAME,
        mongoUrl: envs.MONGO_URL,
    })


    // CREAR UN SERVIDOR
    const appInventory = new Server( serverOptions );
    // const appCrm = new Server( serverOptions );
    appInventory.start();
    // appCrm.start();

}

main();
