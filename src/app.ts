import { AppInventoryRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";


async function main(){

    const serverOptions = {
        port: 3000,
        routes: AppInventoryRoutes.routes,
    }

    
    // CREAR UN SERVIDOR
    const appInventory = new Server( serverOptions );
    // const appCrm = new Server( serverOptions );
    appInventory.start();
    // appCrm.start();

}

main();
