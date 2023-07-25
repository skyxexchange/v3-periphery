// SPDX-License-Identifier: UNLICENSED
pragma solidity =0.7.6;

import '../libraries/CallbackValidation.sol';

contract TestCallbackValidation {
    function verifyCallback(
        address poolDeployer,
        address tokenA,
        address tokenB,
        uint24 fee
    ) external view returns (ISkyXV3Pool pool) {
        return CallbackValidation.verifyCallback(poolDeployer, tokenA, tokenB, fee);
    }
}
