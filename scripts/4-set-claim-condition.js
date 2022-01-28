import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0xdE5aB664d47558010ece69BfD6201DFb5c0F372f",
);

(async () => {
    try {
        const claimConditionFactory = bundleDrop.getClaimConditionFactory();
        //Specifiy conditions.
        claimConditionFactory.newClaimPhase({
            startTime: new Date(),
            maxQuantity: 100,
            maxQuantityPerTransaction: 1,
        });

        await bundleDrop.setClaimCondition(0, claimConditionFactory);
        console.log("Successfully set claim condition!");
    } catch (error) {
        console.error("Failed to set claim condition", error);
    }
})()