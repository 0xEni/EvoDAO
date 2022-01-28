import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x99ebCf130c5FaB41Ae9099d33DBB0F107D8fbF08");
const address = "0x3300Ad9940e8d3b72bdE0D17fD681c7286932cA6";


(async () => {
    try {
        const bundleDropModule = await app.deployBundleDropModule({
            name: "EvoDAO Membership",
            description: "A DAO for fans of the Mitsubishi Evolution Cars.",
            image: readFileSync("scripts/assets/evo.jpg"),
            primarySaleRecipientAddress: ethers.constants.AddressZero,
        });

        console.log("Successfully deployed bundleDrop module, address:", bundleDropModule.address,);
        console.log("bundleDrop metadata:", await bundleDropModule.getMetadata(),);
    } catch (error) {
        console.log("failed to deploy bundleDrop module", error);
    }
}) ()