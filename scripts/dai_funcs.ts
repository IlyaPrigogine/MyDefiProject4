import {deployments, ethers, getNamedAccounts} from 'hardhat';
import {Greeter, MockToken} from "../typechain";
import {formatEther, parseEther} from "ethers/lib/utils";

const {execute, read} = deployments;

async function main() {

    const {owner} = await getNamedAccounts();

    const mockToken = await ethers.getContract<MockToken>('MockToken');

    console.log(`mock.totalSupply: ${formatEther(await mockToken.totalSupply())}`);
    console.log(`mock.name(): ${await mockToken.name()}`);
    console.log(`mock.symbol(): ${await mockToken.symbol()}`);
    console.log(`mock.balanceOf(owner): ${formatEther(await mockToken.balanceOf(owner))}`);

    await mockToken.burn(parseEther("1.23456789"));
    console.log(`mock.totalSupply: ${formatEther(await mockToken.totalSupply())}`);
    console.log(`mock.balanceOf(owner): ${formatEther(await mockToken.balanceOf(owner))}`);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
