/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestERC20Metadata } from "../TestERC20Metadata";

export class TestERC20Metadata__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    amountToMint: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides
  ): Promise<TestERC20Metadata> {
    return super.deploy(
      amountToMint,
      name,
      symbol,
      overrides || {}
    ) as Promise<TestERC20Metadata>;
  }
  getDeployTransaction(
    amountToMint: BigNumberish,
    name: string,
    symbol: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      amountToMint,
      name,
      symbol,
      overrides || {}
    );
  }
  attach(address: string): TestERC20Metadata {
    return super.attach(address) as TestERC20Metadata;
  }
  connect(signer: Signer): TestERC20Metadata__factory {
    return super.connect(signer) as TestERC20Metadata__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20Metadata {
    return new Contract(address, _abi, signerOrProvider) as TestERC20Metadata;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountToMint",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101406040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b506040516200156638038062001566833981810160405260608110156200005d57600080fd5b8151602083018051604051929492938301929190846401000000008211156200008557600080fd5b9083019060208201858111156200009b57600080fd5b8251640100000000811182820188101715620000b657600080fd5b82525081516020918201929091019080838360005b83811015620000e5578181015183820152602001620000cb565b50505050905090810190601f168015620001135780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200013757600080fd5b9083019060208201858111156200014d57600080fd5b82516401000000008111828201881017156200016857600080fd5b82525081516020918201929091019080838360005b83811015620001975781810151838201526020016200017d565b50505050905090810190601f168015620001c55780820380516001836020036101000a031916815260200191505b506040525050508180604051806040016040528060018152602001603160f81b815250848481600390805190602001906200020292919062000483565b5080516200021890600490602084019062000483565b50506005805460ff1916601217905550815160208084019190912082519183019190912060c082905260e08190527f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f62000271620002a5565b60a05262000281818484620002a9565b60805261010052506200029c9350339250869150506200030d565b5050506200052f565b4690565b6000838383620002b8620002a5565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b03168152602001955050505050506040516020818303038152906040528051906020012090509392505050565b6001600160a01b03821662000369576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b62000377600083836200041c565b62000393816002546200042160201b620008231790919060201c565b6002556001600160a01b03821660009081526020818152604090912054620003c69183906200082362000421821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b6000828201838110156200047c576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620004bb576000855562000506565b82601f10620004d657805160ff191683800117855562000506565b8280016001018555821562000506579182015b8281111562000506578251825591602001919060010190620004e9565b506200051492915062000518565b5090565b5b8082111562000514576000815560010162000519565b60805160a05160c05160e0516101005161012051610fed62000579600039806106b0525080610bc3525080610c05525080610be4525080610b6a525080610b9a5250610fed6000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806370a082311161008c578063a457c2d711610066578063a457c2d7146102a2578063a9059cbb146102ce578063d505accf146102fa578063dd62ed3e1461034d576100ea565b806370a082311461024e5780637ecebe001461027457806395d89b411461029a576100ea565b806323b872dd116100c857806323b872dd146101c6578063313ce567146101fc5780633644e5151461021a5780633950935114610222576100ea565b806306fdde03146100ef578063095ea7b31461016c57806318160ddd146101ac575b600080fd5b6100f761037b565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610131578181015183820152602001610119565b50505050905090810190601f16801561015e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101986004803603604081101561018257600080fd5b506001600160a01b038135169060200135610412565b604080519115158252519081900360200190f35b6101b461042f565b60408051918252519081900360200190f35b610198600480360360608110156101dc57600080fd5b506001600160a01b03813581169160208101359091169060400135610435565b6102046104bc565b6040805160ff9092168252519081900360200190f35b6101b46104c5565b6101986004803603604081101561023857600080fd5b506001600160a01b0381351690602001356104d4565b6101b46004803603602081101561026457600080fd5b50356001600160a01b0316610522565b6101b46004803603602081101561028a57600080fd5b50356001600160a01b031661053d565b6100f7610564565b610198600480360360408110156102b857600080fd5b506001600160a01b0381351690602001356105c5565b610198600480360360408110156102e457600080fd5b506001600160a01b03813516906020013561062d565b61034b600480360360e081101561031057600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610641565b005b6101b46004803603604081101561036357600080fd5b506001600160a01b03813581169160200135166107f8565b60038054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104075780601f106103dc57610100808354040283529160200191610407565b820191906000526020600020905b8154815290600101906020018083116103ea57829003601f168201915b505050505090505b90565b600061042661041f610884565b8484610888565b50600192915050565b60025490565b6000610442848484610974565b6104b28461044e610884565b6104ad85604051806060016040528060288152602001610f22602891396001600160a01b038a1660009081526001602052604081209061048c610884565b6001600160a01b031681526020810191909152604001600020549190610acf565b610888565b5060019392505050565b60055460ff1690565b60006104cf610b66565b905090565b60006104266104e1610884565b846104ad85600160006104f2610884565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610823565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b038116600090815260066020526040812061055e90610c30565b92915050565b60048054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156104075780601f106103dc57610100808354040283529160200191610407565b60006104266105d2610884565b846104ad85604051806060016040528060258152602001610f9360259139600160006105fc610884565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610acf565b600061042661063a610884565b8484610974565b83421115610696576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6001600160a01b03871660009081526006602052604081207f0000000000000000000000000000000000000000000000000000000000000000908990899089906106df90610c30565b8960405160200180878152602001866001600160a01b03168152602001856001600160a01b031681526020018481526020018381526020018281526020019650505050505050604051602081830303815290604052805190602001209050600061074882610c34565b9050600061075882878787610c80565b9050896001600160a01b0316816001600160a01b0316146107c0576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a1660009081526006602052604090206107e190610dfe565b6107ec8a8a8a610888565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60008282018381101561087d576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b0383166108cd5760405162461bcd60e51b8152600401808060200182810382526024815260200180610f6f6024913960400191505060405180910390fd5b6001600160a01b0382166109125760405162461bcd60e51b8152600401808060200182810382526022815260200180610e966022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b0383166109b95760405162461bcd60e51b8152600401808060200182810382526025815260200180610f4a6025913960400191505060405180910390fd5b6001600160a01b0382166109fe5760405162461bcd60e51b8152600401808060200182810382526023815260200180610e736023913960400191505060405180910390fd5b610a09838383610e07565b610a4681604051806060016040528060268152602001610eb8602691396001600160a01b0386166000908152602081905260409020549190610acf565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610a759082610823565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610b5e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610b23578181015183820152602001610b0b565b50505050905090810190601f168015610b505780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60007f0000000000000000000000000000000000000000000000000000000000000000610b91610e0c565b1415610bbe57507f000000000000000000000000000000000000000000000000000000000000000061040f565b610c297f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e10565b905061040f565b5490565b6000610c3e610b66565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610ce15760405162461bcd60e51b8152600401808060200182810382526022815260200180610ede6022913960400191505060405180910390fd5b8360ff16601b1480610cf657508360ff16601c145b610d315760405162461bcd60e51b8152600401808060200182810382526022815260200180610f006022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610d8d573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610df5576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b80546001019055565b505050565b4690565b6000838383610e1d610e0c565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b0316815260200195505050505050604051602081830303815290604052805190602001209050939250505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c756545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa264697066735822122070288c50e737bc7e73b94e6a106c9831db3c5e2802935c79ad21d61fb2d49a4264736f6c63430007060033";
