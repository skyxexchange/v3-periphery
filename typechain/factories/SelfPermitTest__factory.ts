/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SelfPermitTest } from "../SelfPermitTest";

export class SelfPermitTest__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SelfPermitTest> {
    return super.deploy(overrides || {}) as Promise<SelfPermitTest>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SelfPermitTest {
    return super.attach(address) as SelfPermitTest;
  }
  connect(signer: Signer): SelfPermitTest__factory {
    return super.connect(signer) as SelfPermitTest__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SelfPermitTest {
    return new Contract(address, _abi, signerOrProvider) as SelfPermitTest;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermitAllowed",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermitAllowedIfNecessary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "selfPermitIfNecessary",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506103c8806100206000396000f3fe60806040526004361061003f5760003560e01c80634659a49414610044578063a4a78f0c1461008d578063c2e3140a146100d4578063f3995c671461011b575b600080fd5b61008b600480360360c081101561005a57600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610162565b005b61008b600480360360c08110156100a357600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a001356101fc565b61008b600480360360c08110156100ea57600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610295565b61008b600480360360c081101561013157600080fd5b506001600160a01b038135169060208101359060408101359060ff6060820135169060808101359060a00135610320565b604080516323f2ebc360e21b815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e4810183905290516001600160a01b03881691638fcbaf0c9161010480830192600092919082900301818387803b1580156101dc57600080fd5b505af11580156101f0573d6000803e3d6000fd5b50505050505050505050565b60408051636eb1769f60e11b81523360048201523060248201529051600019916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b15801561024d57600080fd5b505afa158015610261573d6000803e3d6000fd5b505050506040513d602081101561027757600080fd5b5051101561028d5761028d868686868686610162565b505050505050565b60408051636eb1769f60e11b8152336004820152306024820152905186916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b1580156102e457600080fd5b505afa1580156102f8573d6000803e3d6000fd5b505050506040513d602081101561030e57600080fd5b5051101561028d5761028d8686868686865b6040805163d505accf60e01b8152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c4810183905290516001600160a01b0388169163d505accf9160e480830192600092919082900301818387803b1580156101dc57600080fdfea264697066735822122006a2472deab9a281d800d606eb1e1ffadf43316b9f571e32b520119886e25ab264736f6c63430007060033";