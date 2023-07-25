import { Fixture } from 'ethereum-waffle'
import { ethers } from 'hardhat'
import { v3RouterFixture } from './externalFixtures'
import { constants } from 'ethers'
import {
  IWETH9,
  MockTimeNonfungiblePositionManager,
  MockTimeSwapRouter,
  NonfungibleTokenPositionDescriptor,
  TestERC20Permit,
  ISkyXV3Factory,
} from '../../typechain'
import web3 from "web3"

const completeFixture: Fixture<{
  weth9: IWETH9
  poolDeployer: any
  factory: ISkyXV3Factory
  router: MockTimeSwapRouter
  nft: MockTimeNonfungiblePositionManager
  nftDescriptor: NonfungibleTokenPositionDescriptor
  tokens: [TestERC20Permit, TestERC20Permit, TestERC20Permit]
}> = async ([wallet], provider) => {
  const { weth9, poolDeployer, factory, router } = await v3RouterFixture([wallet], provider)

  const tokenFactory = await ethers.getContractFactory('TestERC20Permit')
  const tokens: [TestERC20Permit, TestERC20Permit, TestERC20Permit] = [
    (await tokenFactory.deploy(constants.MaxUint256.div(2))) as TestERC20Permit, // do not use maxu256 to avoid overflowing
    (await tokenFactory.deploy(constants.MaxUint256.div(2))) as TestERC20Permit,
    (await tokenFactory.deploy(constants.MaxUint256.div(2))) as TestERC20Permit,
  ]

  const nftDescriptorLibraryFactory = await ethers.getContractFactory('NFTDescriptor')
  const nftDescriptorLibrary = await nftDescriptorLibraryFactory.deploy()
  const positionDescriptorFactory = await ethers.getContractFactory('NonfungibleTokenPositionDescriptor', {
    libraries: {
      NFTDescriptor: nftDescriptorLibrary.address,
    },
  })
  // const ethSymbolBytes = web3.utils.asciiToHex("ETH")
  // console.log("ethSymbolBytes", ethSymbolBytes)
  const nftDescriptor = (await positionDescriptorFactory.deploy(
    weth9.address,
    // 'ETH' as a bytes32 string
    '0x4554480000000000000000000000000000000000000000000000000000000000'
  )) as NonfungibleTokenPositionDescriptor

  const positionManagerFactory = await ethers.getContractFactory('MockTimeNonfungiblePositionManager')
  const nft = (await positionManagerFactory.deploy(
    factory.address,
    weth9.address,
    nftDescriptor.address
  )) as MockTimeNonfungiblePositionManager

  tokens.sort((a, b) => (a.address.toLowerCase() < b.address.toLowerCase() ? -1 : 1))

  return {
    weth9,
    poolDeployer,
    factory,
    router,
    tokens,
    nft,
    nftDescriptor,
  }
}

export default completeFixture
