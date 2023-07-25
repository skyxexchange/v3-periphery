/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { TestERC20PermitAllowed } from "../TestERC20PermitAllowed";

export class TestERC20PermitAllowed__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    amountToMint: BigNumberish,
    overrides?: Overrides
  ): Promise<TestERC20PermitAllowed> {
    return super.deploy(
      amountToMint,
      overrides || {}
    ) as Promise<TestERC20PermitAllowed>;
  }
  getDeployTransaction(
    amountToMint: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(amountToMint, overrides || {});
  }
  attach(address: string): TestERC20PermitAllowed {
    return super.attach(address) as TestERC20PermitAllowed;
  }
  connect(signer: Signer): TestERC20PermitAllowed__factory {
    return super.connect(signer) as TestERC20PermitAllowed__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestERC20PermitAllowed {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TestERC20PermitAllowed;
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
        name: "holder",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
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
        internalType: "bool",
        name: "allowed",
        type: "bool",
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
  "0x6101406040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610120523480156200003757600080fd5b50604051620015ab380380620015ab833981810160405260208110156200005d57600080fd5b5051604080518082018252600a808252690546573742045524332360b41b60208381018290528451808601865260018152603160f81b818301528551808701875293845283820192835285518087019096526004865263151154d560e21b9186019190915282518695859492939091620000da916003916200035a565b508051620000f09060049060208401906200035a565b50506005805460ff1916601217905550815160208084019190912082519183019190912060c082905260e08190527f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f620001496200017c565b60a0526200015981848462000180565b608052610100525062000174935033925084915050620001e4565b505062000406565b4690565b60008383836200018f6200017c565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b03168152602001955050505050506040516020818303038152906040528051906020012090509392505050565b6001600160a01b03821662000240576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6200024e60008383620002f3565b6200026a81600254620002f860201b620009661790919060201c565b6002556001600160a01b038216600090815260208181526040909120546200029d91839062000966620002f8821b17901c565b6001600160a01b0383166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b505050565b60008282018381101562000353576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620003925760008555620003dd565b82601f10620003ad57805160ff1916838001178555620003dd565b82800160010185558215620003dd579182015b82811115620003dd578251825591602001919060010190620003c0565b50620003eb929150620003ef565b5090565b5b80821115620003eb5760008155600101620003f0565b60805160a05160c05160e051610100516101205161115b62000450600039806107f3525080610d06525080610d48525080610d27525080610cad525080610cdd525061115b6000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610309578063a9059cbb14610335578063d505accf14610361578063dd62ed3e146103b2576100f5565b806370a08231146102595780637ecebe001461027f5780638fcbaf0c146102a557806395d89b4114610301576100f5565b806323b872dd116100d357806323b872dd146101d1578063313ce567146102075780633644e51514610225578063395093511461022d576100f5565b806306fdde03146100fa578063095ea7b31461017757806318160ddd146101b7575b600080fd5b6101026103e0565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561013c578181015183820152602001610124565b50505050905090810190601f1680156101695780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561018d57600080fd5b506001600160a01b038135169060200135610477565b604080519115158252519081900360200190f35b6101bf610494565b60408051918252519081900360200190f35b6101a3600480360360608110156101e757600080fd5b506001600160a01b0381358116916020810135909116906040013561049a565b61020f610521565b6040805160ff9092168252519081900360200190f35b6101bf61052a565b6101a36004803603604081101561024357600080fd5b506001600160a01b038135169060200135610539565b6101bf6004803603602081101561026f57600080fd5b50356001600160a01b0316610587565b6101bf6004803603602081101561029557600080fd5b50356001600160a01b03166105a2565b6102ff60048036036101008110156102bc57600080fd5b506001600160a01b038135811691602081013590911690604081013590606081013590608081013515159060ff60a0820135169060c08101359060e001356105c9565b005b6101026106a7565b6101a36004803603604081101561031f57600080fd5b506001600160a01b038135169060200135610708565b6101a36004803603604081101561034b57600080fd5b506001600160a01b038135169060200135610770565b6102ff600480360360e081101561037757600080fd5b506001600160a01b03813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c00135610784565b6101bf600480360360408110156103c857600080fd5b506001600160a01b038135811691602001351661093b565b60038054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561046c5780601f106104415761010080835404028352916020019161046c565b820191906000526020600020905b81548152906001019060200180831161044f57829003601f168201915b505050505090505b90565b600061048b6104846109c7565b84846109cb565b50600192915050565b60025490565b60006104a7848484610ab7565b610517846104b36109c7565b61051285604051806060016040528060288152602001611090602891396001600160a01b038a166000908152600160205260408120906104f16109c7565b6001600160a01b031681526020810191909152604001600020549190610c12565b6109cb565b5060019392505050565b60055460ff1690565b6000610534610ca9565b905090565b600061048b6105466109c7565b8461051285600160006105576109c7565b6001600160a01b03908116825260208083019390935260409182016000908120918c168152925290205490610966565b6001600160a01b031660009081526020819052604090205490565b6001600160a01b03811660009081526006602052604081206105c390610d73565b92915050565b85306001600160a01b0316637ecebe008a6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561061757600080fd5b505afa15801561062b573d6000803e3d6000fd5b505050506040513d602081101561064157600080fd5b50511461067f5760405162461bcd60e51b815260040180806020018281038252602b815260200180610fd9602b913960400191505060405180910390fd5b61069d888886610690576000610694565b6000195b88878787610784565b5050505050505050565b60048054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561046c5780601f106104415761010080835404028352916020019161046c565b600061048b6107156109c7565b8461051285604051806060016040528060258152602001611101602591396001600061073f6109c7565b6001600160a01b03908116825260208083019390935260409182016000908120918d16815292529020549190610c12565b600061048b61077d6109c7565b8484610ab7565b834211156107d9576040805162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e65000000604482015290519081900360640190fd5b6001600160a01b03871660009081526006602052604081207f00000000000000000000000000000000000000000000000000000000000000009089908990899061082290610d73565b8960405160200180878152602001866001600160a01b03168152602001856001600160a01b031681526020018481526020018381526020018281526020019650505050505050604051602081830303815290604052805190602001209050600061088b82610d77565b9050600061089b82878787610dc3565b9050896001600160a01b0316816001600160a01b031614610903576040805162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e61747572650000604482015290519081900360640190fd5b6001600160a01b038a16600090815260066020526040902061092490610f41565b61092f8a8a8a6109cb565b50505050505050505050565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6000828201838110156109c0576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b3390565b6001600160a01b038316610a105760405162461bcd60e51b81526004018080602001828103825260248152602001806110dd6024913960400191505060405180910390fd5b6001600160a01b038216610a555760405162461bcd60e51b81526004018080602001828103825260228152602001806110046022913960400191505060405180910390fd5b6001600160a01b03808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b6001600160a01b038316610afc5760405162461bcd60e51b81526004018080602001828103825260258152602001806110b86025913960400191505060405180910390fd5b6001600160a01b038216610b415760405162461bcd60e51b8152600401808060200182810382526023815260200180610fb66023913960400191505060405180910390fd5b610b4c838383610f4a565b610b8981604051806060016040528060268152602001611026602691396001600160a01b0386166000908152602081905260409020549190610c12565b6001600160a01b038085166000908152602081905260408082209390935590841681522054610bb89082610966565b6001600160a01b038084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b60008184841115610ca15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c66578181015183820152602001610c4e565b50505050905090810190601f168015610c935780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60007f0000000000000000000000000000000000000000000000000000000000000000610cd4610f4f565b1415610d0157507f0000000000000000000000000000000000000000000000000000000000000000610474565b610d6c7f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610f53565b9050610474565b5490565b6000610d81610ca9565b82604051602001808061190160f01b81525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115610e245760405162461bcd60e51b815260040180806020018281038252602281526020018061104c6022913960400191505060405180910390fd5b8360ff16601b1480610e3957508360ff16601c145b610e745760405162461bcd60e51b815260040180806020018281038252602281526020018061106e6022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610ed0573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116610f38576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b95945050505050565b80546001019055565b505050565b4690565b6000838383610f60610f4f565b3060405160200180868152602001858152602001848152602001838152602001826001600160a01b0316815260200195505050505050604051602081830303815290604052805190602001209050939250505056fe45524332303a207472616e7366657220746f20746865207a65726f20616464726573735465737445524332305065726d6974416c6c6f7765643a3a7065726d69743a2077726f6e67206e6f6e636545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c756545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220f5997c68f844c443448fcad4be66029306f64c9aaf8522f5769563dd44204b4f64736f6c63430007060033";
