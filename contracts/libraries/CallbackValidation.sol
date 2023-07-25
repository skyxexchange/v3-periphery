// SPDX-License-Identifier: GPL-2.0-or-later
pragma solidity =0.7.6;

import '@skyxexchange/v3-core/contracts/interfaces/ISkyXV3Pool.sol';
import './PoolAddress.sol';

/// @notice Provides validation for callbacks from SkyX V3 Pools
library CallbackValidation {
    /// @notice Returns the address of a valid SkyX V3 Pool
    /// @param poolDeployer The contract address of the SkyX V3 pool Deployer
    /// @param tokenA The contract address of either token0 or token1
    /// @param tokenB The contract address of the other token
    /// @param fee The fee collected upon every swap in the pool, denominated in hundredths of a bip
    /// @return pool The V3 pool contract address
    function verifyCallback(
        address poolDeployer,
        address tokenA,
        address tokenB,
        uint24 fee
    ) internal view returns (ISkyXV3Pool pool) {
        return verifyCallback(poolDeployer, PoolAddress.getPoolKey(tokenA, tokenB, fee));
    }

    /// @notice Returns the address of a valid SkyX V3 Pool
    /// @param poolDeployer The contract address of the SkyX V3 pool deployer
    /// @param poolKey The identifying key of the V3 pool
    /// @return pool The V3 pool contract address
    function verifyCallback(address poolDeployer, PoolAddress.PoolKey memory poolKey)
        internal
        view
        returns (ISkyXV3Pool pool)
    {
        pool = ISkyXV3Pool(PoolAddress.computeAddress(poolDeployer, poolKey));
        require(msg.sender == address(pool), "POOL");
    }
}
