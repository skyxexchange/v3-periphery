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
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SkyXInterfaceMulticallInterface extends ethers.utils.Interface {
  functions: {
    "getCurrentBlockTimestamp()": FunctionFragment;
    "getEthBalance(address)": FunctionFragment;
    "multicall(tuple[])": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getCurrentBlockTimestamp",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getEthBalance",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "multicall",
    values: [{ target: string; gasLimit: BigNumberish; callData: BytesLike }[]]
  ): string;

  decodeFunctionResult(
    functionFragment: "getCurrentBlockTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getEthBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "multicall", data: BytesLike): Result;

  events: {};
}

export class SkyXInterfaceMulticall extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SkyXInterfaceMulticallInterface;

  functions: {
    getCurrentBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    "getCurrentBlockTimestamp()"(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { balance: BigNumber }>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "multicall(tuple[])"(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

  "getCurrentBlockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

  getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

  "getEthBalance(address)"(
    addr: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  multicall(
    calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "multicall(tuple[])"(
    calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        ([boolean, BigNumber, string] & {
          success: boolean;
          gasUsed: BigNumber;
          returnData: string;
        })[]
      ] & {
        blockNumber: BigNumber;
        returnData: ([boolean, BigNumber, string] & {
          success: boolean;
          gasUsed: BigNumber;
          returnData: string;
        })[];
      }
    >;

    "multicall(tuple[])"(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        ([boolean, BigNumber, string] & {
          success: boolean;
          gasUsed: BigNumber;
          returnData: string;
        })[]
      ] & {
        blockNumber: BigNumber;
        returnData: ([boolean, BigNumber, string] & {
          success: boolean;
          gasUsed: BigNumber;
          returnData: string;
        })[];
      }
    >;
  };

  filters: {};

  estimateGas: {
    getCurrentBlockTimestamp(overrides?: CallOverrides): Promise<BigNumber>;

    "getCurrentBlockTimestamp()"(overrides?: CallOverrides): Promise<BigNumber>;

    getEthBalance(addr: string, overrides?: CallOverrides): Promise<BigNumber>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "multicall(tuple[])"(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getCurrentBlockTimestamp(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCurrentBlockTimestamp()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getEthBalance(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getEthBalance(address)"(
      addr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    multicall(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "multicall(tuple[])"(
      calls: { target: string; gasLimit: BigNumberish; callData: BytesLike }[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
