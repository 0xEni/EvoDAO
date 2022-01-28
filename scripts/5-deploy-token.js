import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x99ebCf130c5FaB41Ae9099d33DBB0F107D8fbF08");

(async () => {
    try {
        const tokenModule = await app.deployTokenModule({
            name:"EvoDAO Governance Token",
            symbol:"4G63",
        });
        console.log("Successfully deployed token module address:", tokenModule.address,);
    } catch (error) {
        console.error("Failed to depoloy token module", error);
    }
})();