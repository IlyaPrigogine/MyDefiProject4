import {DeployFunction} from 'hardhat-deploy/types';
import {parseEther} from "ethers/lib/utils";
import {initialSupply} from "../helpers/constants";


const func: DeployFunction = async function ({deployments, getNamedAccounts, network, getChainId}) {
    const {deploy} = deployments;
    const {owner} = await getNamedAccounts();

    console.log('chainId:', await getChainId());

    // await deploy('Greeter', {
    //     from: owner,
    //     args: ['new greeting'],
    //     log: true,
    // });

    await deploy('MockToken', {
        from: owner,
        args: [parseEther(initialSupply)],
        log: true,
    })

};
export default func;
func.tags = ['Greeter'];
