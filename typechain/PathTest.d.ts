/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface PathTestInterface extends ethers.utils.Interface {
  functions: {
    "decodeFirstPool(bytes)": FunctionFragment;
    "getFirstPool(bytes)": FunctionFragment;
    "getGasCostOfDecodeFirstPool(bytes)": FunctionFragment;
    "hasMultiplePools(bytes)": FunctionFragment;
    "skipToken(bytes)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "decodeFirstPool",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getFirstPool",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getGasCostOfDecodeFirstPool",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasMultiplePools",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "skipToken",
    values: [BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "decodeFirstPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getFirstPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGasCostOfDecodeFirstPool",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasMultiplePools",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "skipToken", data: BytesLike): Result;

  events: {};
}

export class PathTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: PathTestInterface;

  functions: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & { tokenA: string; tokenB: string; fee: number }
    >;

    "decodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & { tokenA: string; tokenB: string; fee: number }
    >;

    getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "getFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfDecodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "hasMultiplePools(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    skipToken(path: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "skipToken(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  decodeFirstPool(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & { tokenA: string; tokenB: string; fee: number }
  >;

  "decodeFirstPool(bytes)"(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<
    [string, string, number] & { tokenA: string; tokenB: string; fee: number }
  >;

  getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<string>;

  "getFirstPool(bytes)"(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  getGasCostOfDecodeFirstPool(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfDecodeFirstPool(bytes)"(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  hasMultiplePools(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "hasMultiplePools(bytes)"(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  skipToken(path: BytesLike, overrides?: CallOverrides): Promise<string>;

  "skipToken(bytes)"(
    path: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & { tokenA: string; tokenB: string; fee: number }
    >;

    "decodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<
      [string, string, number] & { tokenA: string; tokenB: string; fee: number }
    >;

    getFirstPool(path: BytesLike, overrides?: CallOverrides): Promise<string>;

    "getFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfDecodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "hasMultiplePools(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    skipToken(path: BytesLike, overrides?: CallOverrides): Promise<string>;

    "skipToken(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;
  };

  filters: {};

  estimateGas: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "decodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfDecodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "hasMultiplePools(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    skipToken(path: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "skipToken(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    decodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "decodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGasCostOfDecodeFirstPool(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfDecodeFirstPool(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasMultiplePools(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "hasMultiplePools(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    skipToken(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "skipToken(bytes)"(
      path: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
