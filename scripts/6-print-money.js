import {ethers} from "ethers";
import sdk from "./1-initialize-sdk.js";

// ERC-20 contract address
const tokenModule = sdk.getTokenModule(
    "0x49058d7e21483ED177f6df4483D3Cf0c97985CF1",
);

(async () => {
    try {
        //Max supply
        const amount = 1_000_000;
        //Use util function from "ethers" to conver the amount
        //to have 18 decimals(standard for erc20 tokens).
        const amountWith18Decimals = ethers.utils.parseUnits(amount.toString(), 18);
        // Interact with deployed ERC-20 contract and mint tokens!
        await tokenModule.mint(amountWith18Decimals);
        const totalSupply = await tokenModule.totalSupply();

        //Print out how many of our tokens are out ther now
        console.log("There now is", ethers.utils.formatUnits(totalSupply, 18), "4G63 in circulation",);
    } catch (error) {
        console.error("Failed to print money", error);
    }
})();