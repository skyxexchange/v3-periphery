// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '../libraries/PoolAddress.sol';

contract PoolAddressTest {
    function POOL_INIT_CODE_HASH() external pure returns (bytes32) {
        return PoolAddress.POOL_INIT_CODE_HASH;
    }

    function computeAddress(
        address poolDeployer,
        address token0,
        address token1,
        uint24 fee
    ) external pure returns (address) {
        return PoolAddress.computeAddress(poolDeployer, PoolAddress.PoolKey({token0: token0, token1: token1, fee: fee}));
    }

    function getGasCostOfComputeAddress(
        address poolDeployer,
        address token0,
        address token1,
        uint24 fee
    ) external view returns (uint256) {
        uint256 gasBefore = gasleft();
        PoolAddress.computeAddress(poolDeployer, PoolAddress.PoolKey({token0: token0, token1: token1, fee: fee}));
        return gasBefore - gasleft();
    }
}