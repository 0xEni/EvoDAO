import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";
import { Description } from "@ethersproject/properties";

const bundleDrop = sdk.getBundleDropModule(
    "0xdE5aB664d47558010ece69BfD6201DFb5c0F372f",
);

(async () => {
    try {
        await bundleDrop.createBatch([
            {
                name: "Evo9",
                description: "This NFT will give you access to EvoDAO",
                image: readFileSync("scripts/assets/evo.jpg"),

        },
    ]);
    console.log("Successfully created a new NFT in the drop");
    } catch (error) {
        console.error("failed to create the new NFT", error);
    }
})()