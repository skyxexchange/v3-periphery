import { abi as POOL_ABI } from '@skyxexchange/v3-core/artifacts/contracts/SkyXV3Pool.sol/SkyXV3Pool.json'
import { Contract, Wallet } from 'ethers'
import { ISkyXV3Pool } from '../../typechain'

export default function poolAtAddress(address: string, wallet: Wallet): ISkyXV3Pool {
  return new Contract(address, POOL_ABI, wallet) as ISkyXV3Pool
}
