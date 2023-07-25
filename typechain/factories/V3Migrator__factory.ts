/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { V3Migrator } from "../V3Migrator";

export class V3Migrator__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _factory: string,
    _WETH9: string,
    _nonfungiblePositionManager: string,
    overrides?: Overrides
  ): Promise<V3Migrator> {
    return super.deploy(
      _factory,
      _WETH9,
      _nonfungiblePositionManager,
      overrides || {}
    ) as Promise<V3Migrator>;
  }
  getDeployTransaction(
    _factory: string,
    _WETH9: string,
    _nonfungiblePositionManager: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      _factory,
      _WETH9,
      _nonfungiblePositionManager,
      overrides || {}
    );
  }
  attach(address: string): V3Migrator {
    return super.attach(address) as V3Migrator;
  }
  connect(signer: Signer): V3Migrator__factory {
    return super.connect(signer) as V3Migrator__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): V3Migrator {
    return new Contract(address, _abi, signerOrProvider) as V3Migrator;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_factory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_WETH9",
        type: "address",
      },
      {
        internalType: "address",
        name: "_nonfungiblePositionManager",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "WETH9",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token0",
        type: "address",
      },
      {
        internalType: "address",
        name: "token1",
        type: "address",
      },
      {
        internalType: "uint24",
        name: "fee",
        type: "uint24",
      },
      {
        internalType: "uint160",
        name: "sqrtPriceX96",
        type: "uint160",
      },
    ],
    name: "createAndInitializePoolIfNecessary",
    outputs: [
      {
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "pair",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "liquidityToMigrate",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "percentageToMigrate",
            type: "uint8",
          },
          {
            internalType: "address",
            name: "token0",
            type: "address",
          },
          {
            internalType: "address",
            name: "token1",
            type: "address",
          },
          {
            internalType: "uint24",
            name: "fee",
            type: "uint24",
          },
          {
            internalType: "int24",
            name: "tickLower",
            type: "int24",
          },
          {
            internalType: "int24",
            name: "tickUpper",
            type: "int24",
          },
          {
            internalType: "uint256",
            name: "amount0Min",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount1Min",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "recipient",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "refundAsETH",
            type: "bool",
          },
        ],
        internalType: "struct IV3Migrator.MigrateParams",
        name: "params",
        type: "tuple",
      },
    ],
    name: "migrate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "multicall",
    outputs: [
      {
        internalType: "bytes[]",
        name: "results",
        type: "bytes[]",
      },
    ],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "nonfungiblePositionManager",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "poolDeployer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001b1338038062001b13833981016040819052620000359162000106565b6001600160601b0319606084811b821660805283901b1660a0526040805163188c824d60e11b81529051849184916001600160a01b03841691633119049a916004808301926020929190829003018186803b1580156200009457600080fd5b505afa158015620000a9573d6000803e3d6000fd5b505050506040513d6020811015620000c057600080fd5b50516001600160601b0319606091821b811660c05293901b90921660e052506200014f92505050565b80516001600160a01b03811681146200010157600080fd5b919050565b6000806000606084860312156200011b578283fd5b6200012684620000e9565b92506200013660208501620000e9565b91506200014660408501620000e9565b90509250925092565b60805160601c60a05160601c60c05160601c60e05160601c61194c620001c7600039806107b75280610a825280610abc5280610ae65280610c8f5250806104fc52508060b052806105ba5280610cdb5280610d325280610e0d5280610e6452508061022852806102ef528061086a525061194c6000f3fe6080604052600436106100a05760003560e01c8063ac9650d811610064578063ac9650d814610176578063b44a272214610196578063c2e3140a146101ab578063c45a0155146101be578063d44f2bf2146101d3578063f3995c67146101f3576100f8565b806313ead562146100fd5780633119049a146101265780634659a4941461013b5780634aa4a4fc1461014e578063a4a78f0c14610163576100f8565b366100f857336001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146100f65760405162461bcd60e51b81526004016100ed9061176c565b60405180910390fd5b005b600080fd5b61011061010b366004611369565b610206565b60405161011d9190611693565b60405180910390f35b34801561013257600080fd5b506101106104fa565b6100f66101493660046113c2565b61051e565b34801561015a57600080fd5b506101106105b8565b6100f66101713660046113c2565b6105dc565b61018961018436600461141b565b610675565b60405161011d91906116cb565b3480156101a257600080fd5b506101106107b5565b6100f66101b93660046113c2565b6107d9565b3480156101ca57600080fd5b50610110610868565b3480156101df57600080fd5b506100f66101ee36600461157a565b61088c565b6100f66102013660046113c2565b610ef8565b6000836001600160a01b0316856001600160a01b03161061022657600080fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316631698ee828686866040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018262ffffff168152602001935050505060206040518083038186803b1580156102b157600080fd5b505afa1580156102c5573d6000803e3d6000fd5b505050506040513d60208110156102db57600080fd5b505190506001600160a01b038116610411577f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a16712958686866040518463ffffffff1660e01b815260040180846001600160a01b03168152602001836001600160a01b031681526020018262ffffff1681526020019350505050602060405180830381600087803b15801561037a57600080fd5b505af115801561038e573d6000803e3d6000fd5b505050506040513d60208110156103a457600080fd5b50516040805163f637731d60e01b81526001600160a01b03858116600483015291519293509083169163f637731d9160248082019260009290919082900301818387803b1580156103f457600080fd5b505af1158015610408573d6000803e3d6000fd5b505050506104f2565b6000816001600160a01b0316633850c7bd6040518163ffffffff1660e01b815260040160e06040518083038186803b15801561044c57600080fd5b505afa158015610460573d6000803e3d6000fd5b505050506040513d60e081101561047657600080fd5b505190506001600160a01b0381166104f057816001600160a01b031663f637731d846040518263ffffffff1660e01b815260040180826001600160a01b03168152602001915050600060405180830381600087803b1580156104d757600080fd5b505af11580156104eb573d6000803e3d6000fd5b505050505b505b949350505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b604080516323f2ebc360e21b815233600482015230602482015260448101879052606481018690526001608482015260ff851660a482015260c4810184905260e4810183905290516001600160a01b03881691638fcbaf0c9161010480830192600092919082900301818387803b15801561059857600080fd5b505af11580156105ac573d6000803e3d6000fd5b50505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60408051636eb1769f60e11b81523360048201523060248201529051600019916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b15801561062d57600080fd5b505afa158015610641573d6000803e3d6000fd5b505050506040513d602081101561065757600080fd5b5051101561066d5761066d86868686868661051e565b505050505050565b60608167ffffffffffffffff8111801561068e57600080fd5b506040519080825280602002602001820160405280156106c257816020015b60608152602001906001900390816106ad5790505b50905060005b828110156107ae57600080308686858181106106e057fe5b90506020028101906106f29190611874565b604051610700929190611683565b600060405180830381855af49150503d806000811461073b576040519150601f19603f3d011682016040523d82523d6000602084013e610740565b606091505b50915091508161078c5760448151101561075957600080fd5b6004810190508080602001905181019061077391906114e3565b60405162461bcd60e51b81526004016100ed919061172b565b8084848151811061079957fe5b602090810291909101015250506001016106c8565b5092915050565b7f000000000000000000000000000000000000000000000000000000000000000081565b60408051636eb1769f60e11b8152336004820152306024820152905186916001600160a01b0389169163dd62ed3e91604480820192602092909190829003018186803b15801561082857600080fd5b505afa15801561083c573d6000803e3d6000fd5b505050506040513d602081101561085257600080fd5b5051101561066d5761066d868686868686610ef8565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061089e6060830160408401611620565b60ff16116108be5760405162461bcd60e51b81526004016100ed9061173e565b60646108d06060830160408401611620565b60ff1611156108f15760405162461bcd60e51b81526004016100ed9061178f565b6108fe6020820182611346565b6001600160a01b03166323b872dd3361091a6020850185611346565b84602001356040518463ffffffff1660e01b815260040161093d939291906116a7565b602060405180830381600087803b15801561095757600080fd5b505af115801561096b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061098f91906114a6565b506000806109a06020840184611346565b6001600160a01b03166389afcb44306040518263ffffffff1660e01b81526004016109cb9190611693565b6040805180830381600087803b1580156109e457600080fd5b505af11580156109f8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a1c91906115fd565b909250905060006064610a42610a386060870160408801611620565b859060ff16610f6a565b81610a4957fe5b04905060006064610a63610a386060880160408901611620565b81610a6a57fe5b049050610aa7610a806080870160608801611346565b7f000000000000000000000000000000000000000000000000000000000000000084610f94565b610ae1610aba60a0870160808801611346565b7f000000000000000000000000000000000000000000000000000000000000000083610f94565b6000807f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663883164566040518061016001604052808a6060016020810190610b329190611346565b6001600160a01b03168152602001610b5060a08c0160808d01611346565b6001600160a01b03168152602001610b6e60c08c0160a08d01611592565b62ffffff168152602001610b8860e08c0160c08d016114c2565b60020b8152602001610ba16101008c0160e08d016114c2565b60020b815260208101889052604081018790526101008b013560608201526101208b0135608082015260a001610bdf6101608c016101408d01611346565b6001600160a01b031681526020018a61016001358152506040518263ffffffff1660e01b8152600401610c1291906117bd565b608060405180830381600087803b158015610c2c57600080fd5b505af1158015610c40573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c6491906115ac565b93509350505085821015610dc45783821015610cb557610cb5610c8d6080890160608a01611346565b7f00000000000000000000000000000000000000000000000000000000000000006000610f94565b818603610cca6101a089016101808a0161148a565b8015610d1657506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610d0b60808a0160608b01611346565b6001600160a01b0316145b15610da857604051632e1a7d4d60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d90610d6790849060040161186b565b600060405180830381600087803b158015610d8157600080fd5b505af1158015610d95573d6000803e3d6000fd5b50505050610da333826110e2565b610dc2565b610dc2610dbb60808a0160608b01611346565b33836111d6565b505b84811015610eef5782811015610de757610de7610c8d60a0890160808a01611346565b808503610dfc6101a089016101808a0161148a565b8015610e4857506001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016610e3d60a08a0160808b01611346565b6001600160a01b0316145b15610eda57604051632e1a7d4d60e01b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690632e1a7d4d90610e9990849060040161186b565b600060405180830381600087803b158015610eb357600080fd5b505af1158015610ec7573d6000803e3d6000fd5b50505050610ed533826110e2565b610eed565b610eed610dbb60a08a0160808b01611346565b505b50505050505050565b6040805163d505accf60e01b8152336004820152306024820152604481018790526064810186905260ff8516608482015260a4810184905260c4810183905290516001600160a01b0388169163d505accf9160e480830192600092919082900301818387803b15801561059857600080fd5b6000821580610f8557505081810281838281610f8257fe5b04145b610f8e57600080fd5b92915050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663095ea7b360e01b1781529251825160009485949389169392918291908083835b602083106110105780518252601f199092019160209182019101610ff1565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114611072576040519150601f19603f3d011682016040523d82523d6000602084013e611077565b606091505b50915091508180156110a55750805115806110a557508080602001905160208110156110a257600080fd5b50515b6110db576040805162461bcd60e51b8152602060048201526002602482015261534160f01b604482015290519081900360640190fd5b5050505050565b604080516000808252602082019092526001600160a01b0384169083906040518082805190602001908083835b6020831061112e5780518252601f19909201916020918201910161110f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611190576040519150601f19603f3d011682016040523d82523d6000602084013e611195565b606091505b50509050806111d1576040805162461bcd60e51b815260206004820152600360248201526222aa2360e91b604482015290519081900360640190fd5b505050565b604080516001600160a01b038481166024830152604480830185905283518084039091018152606490920183526020820180516001600160e01b031663a9059cbb60e01b1781529251825160009485949389169392918291908083835b602083106112525780518252601f199092019160209182019101611233565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d80600081146112b4576040519150601f19603f3d011682016040523d82523d6000602084013e6112b9565b606091505b50915091508180156112e75750805115806112e757508080602001905160208110156112e457600080fd5b50515b6110db576040805162461bcd60e51b81526020600482015260026024820152612a2360f11b604482015290519081900360640190fd5b803562ffffff8116811461133057600080fd5b919050565b803560ff8116811461133057600080fd5b600060208284031215611357578081fd5b8135611362816118f0565b9392505050565b6000806000806080858703121561137e578283fd5b8435611389816118f0565b93506020850135611399816118f0565b92506113a76040860161131d565b915060608501356113b7816118f0565b939692955090935050565b60008060008060008060c087890312156113da578182fd5b86356113e5816118f0565b9550602087013594506040870135935061140160608801611335565b92506080870135915060a087013590509295509295509295565b6000806020838503121561142d578182fd5b823567ffffffffffffffff80821115611444578384fd5b818501915085601f830112611457578384fd5b813581811115611465578485fd5b8660208083028501011115611478578485fd5b60209290920196919550909350505050565b60006020828403121561149b578081fd5b813561136281611908565b6000602082840312156114b7578081fd5b815161136281611908565b6000602082840312156114d3578081fd5b81358060020b8114611362578182fd5b6000602082840312156114f4578081fd5b815167ffffffffffffffff8082111561150b578283fd5b818401915084601f83011261151e578283fd5b81518181111561152a57fe5b604051601f8201601f19168101602001838111828210171561154857fe5b60405281815283820160200187101561155f578485fd5b6115708260208301602087016118c0565b9695505050505050565b60006101a0828403121561158c578081fd5b50919050565b6000602082840312156115a3578081fd5b6113628261131d565b600080600080608085870312156115c1578384fd5b8451935060208501516fffffffffffffffffffffffffffffffff811681146115e7578384fd5b6040860151606090960151949790965092505050565b6000806040838503121561160f578182fd5b505080516020909101519092909150565b600060208284031215611631578081fd5b61136282611335565b6001600160a01b03169052565b6000815180845261165f8160208601602086016118c0565b601f01601f19169290920160200192915050565b60020b9052565b62ffffff169052565b6000828483379101908152919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6000602080830181845280855180835260408601915060408482028701019250838701855b8281101561171e57603f1988860301845261170c858351611647565b945092850192908501906001016116f0565b5092979650505050505050565b6000602082526113626020830184611647565b60208082526014908201527314195c98d95b9d1859d9481d1bdbc81cdb585b1b60621b604082015260600190565b6020808252600990820152684e6f7420574554483960b81b604082015260600190565b60208082526014908201527350657263656e7461676520746f6f206c6172676560601b604082015260600190565b6000610160820190506117d182845161163a565b60208301516117e3602084018261163a565b5060408301516117f6604084018261167a565b5060608301516118096060840182611673565b50608083015161181c6080840182611673565b5060a083015160a083015260c083015160c083015260e083015160e08301526101008084015181840152506101208084015161185a8285018261163a565b505061014092830151919092015290565b90815260200190565b6000808335601e1984360301811261188a578283fd5b83018035915067ffffffffffffffff8211156118a4578283fd5b6020019150368190038213156118b957600080fd5b9250929050565b60005b838110156118db5781810151838201526020016118c3565b838111156118ea576000848401525b50505050565b6001600160a01b038116811461190557600080fd5b50565b801515811461190557600080fdfea26469706673582212208f6fd56947831c883d1e6d02e222c9a6c51c2a35c2fea62942e79ad91789e87364736f6c63430007060033";