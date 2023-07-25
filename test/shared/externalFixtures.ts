import {
  abi as POOLDEPLOYER_ABI,
  bytecode as POOLDEPLOYER_BYTECODE,
} from '@skyxexchange/v3-core/artifacts/contracts/SkyXV3PoolDeployer.sol/SkyXV3PoolDeployer.json'
import {
  abi as FACTORY_ABI,
  bytecode as FACTORY_BYTECODE,
} from '@skyxexchange/v3-core/artifacts/contracts/SkyXV3Factory.sol/SkyXV3Factory.json'
import { Fixture } from 'ethereum-waffle'
import { ethers, waffle } from 'hardhat'
import { ISkyXV3Factory, IWETH9, MockTimeSwapRouter } from '../../typechain'

import WETH9 from '../contracts/WETH9.json'
import { abi as FACTORY_V2_ABI, bytecode as FACTORY_V2_BYTECODE } from '@skyxexchange/v2-core/artifacts/contracts/SkyXV2Factory.sol/SkyXV2Factory.json'
import { Contract } from '@ethersproject/contracts'
import { constants } from 'ethers'

const wethFixture: Fixture<{ weth9: IWETH9 }> = async ([wallet]) => {
  const weth9 = (await waffle.deployContract(wallet, {
    bytecode: WETH9.bytecode,
    abi: WETH9.abi,
  })) as IWETH9
  
  return { weth9 }
}

export const v2FactoryFixture: Fixture<{ factory: Contract }> = async ([wallet]) => {
  const factory = await waffle.deployContract(
    wallet,
    {
      bytecode: FACTORY_V2_BYTECODE,
      abi: FACTORY_V2_ABI,
    },
    [constants.AddressZero]
  )

  return { factory }
}

const v3CorePoolDeployerFixture: Fixture<any> = async ([wallet]) => {
  return (await waffle.deployContract(wallet, {
    bytecode: POOLDEPLOYER_BYTECODE,
    abi: POOLDEPLOYER_ABI,
  }))
}

const v3CoreFactoryFixture: Fixture<ISkyXV3Factory> = async ([wallet], poolDeployerAddress: any) => {
  return (await waffle.deployContract(wallet, {
    bytecode: FACTORY_BYTECODE,
    abi: FACTORY_ABI,
  },
  [poolDeployerAddress]
  )) as ISkyXV3Factory
}

export const v3RouterFixture: Fixture<{
  weth9: IWETH9
  poolDeployer: any
  factory: ISkyXV3Factory
  router: MockTimeSwapRouter
}> = async ([wallet], provider) => {
  const { weth9 } = await wethFixture([wallet], provider)
  // console.log("weth9", weth9.address)
  const poolDeployer = await v3CorePoolDeployerFixture([wallet], provider)
  const factory = await v3CoreFactoryFixture([wallet], poolDeployer.address)
  await poolDeployer.setFactoryAddress(factory.address)
  // console.log("code", await factory.poolInitCodeHash())
  // console.log("factory", factory.address)

  const router = (await (await ethers.getContractFactory('MockTimeSwapRouter')).deploy(
    factory.address,
    weth9.address
  )) as MockTimeSwapRouter
  // console.log("nft", nft.address)
  // console.log("router", router.address)

  return { poolDeployer, factory, weth9, router }
}
