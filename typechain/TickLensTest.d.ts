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

interface TickLensTestInterface extends ethers.utils.Interface {
  functions: {
    "getGasCostOfGetPopulatedTicksInWord(address,int16)": FunctionFragment;
    "getPopulatedTicksInWord(address,int16)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getGasCostOfGetPopulatedTicksInWord",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getPopulatedTicksInWord",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "getGasCostOfGetPopulatedTicksInWord",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPopulatedTicksInWord",
    data: BytesLike
  ): Result;

  events: {};
}

export class TickLensTest extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: TickLensTestInterface;

  functions: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getGasCostOfGetPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[]
      ] & {
        populatedTicks: ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[];
      }
    >;

    "getPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[]
      ] & {
        populatedTicks: ([number, BigNumber, BigNumber] & {
          tick: number;
          liquidityNet: BigNumber;
          liquidityGross: BigNumber;
        })[];
      }
    >;
  };

  getGasCostOfGetPopulatedTicksInWord(
    pool: string,
    tickBitmapIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getGasCostOfGetPopulatedTicksInWord(address,int16)"(
    pool: string,
    tickBitmapIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPopulatedTicksInWord(
    pool: string,
    tickBitmapIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([number, BigNumber, BigNumber] & {
      tick: number;
      liquidityNet: BigNumber;
      liquidityGross: BigNumber;
    })[]
  >;

  "getPopulatedTicksInWord(address,int16)"(
    pool: string,
    tickBitmapIndex: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    ([number, BigNumber, BigNumber] & {
      tick: number;
      liquidityNet: BigNumber;
      liquidityGross: BigNumber;
    })[]
  >;

  callStatic: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([number, BigNumber, BigNumber] & {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
      })[]
    >;

    "getPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      ([number, BigNumber, BigNumber] & {
        tick: number;
        liquidityNet: BigNumber;
        liquidityGross: BigNumber;
      })[]
    >;
  };

  filters: {};

  estimateGas: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getGasCostOfGetPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getGasCostOfGetPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getGasCostOfGetPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPopulatedTicksInWord(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPopulatedTicksInWord(address,int16)"(
      pool: string,
      tickBitmapIndex: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
