module.exports = {
  "assembly": {
    ".code": [
      {
        "begin": 28,
        "end": 221,
        "name": "PUSH",
        "value": "80"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "PUSH",
        "value": "40"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "MSTORE"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "CALLVALUE"
      },
      {
        "begin": 8,
        "end": 17,
        "name": "DUP1"
      },
      {
        "begin": 5,
        "end": 7,
        "name": "ISZERO"
      },
      {
        "begin": 5,
        "end": 7,
        "name": "PUSH [tag]",
        "value": "1"
      },
      {
        "begin": 5,
        "end": 7,
        "name": "JUMPI"
      },
      {
        "begin": 30,
        "end": 31,
        "name": "PUSH",
        "value": "0"
      },
      {
        "begin": 27,
        "end": 28,
        "name": "DUP1"
      },
      {
        "begin": 20,
        "end": 32,
        "name": "REVERT"
      },
      {
        "begin": 5,
        "end": 7,
        "name": "tag",
        "value": "1"
      },
      {
        "begin": 5,
        "end": 7,
        "name": "JUMPDEST"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "POP"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "PUSH #[$]",
        "value": "0000000000000000000000000000000000000000000000000000000000000000"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "DUP1"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "PUSH [$]",
        "value": "0000000000000000000000000000000000000000000000000000000000000000"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "PUSH",
        "value": "0"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "CODECOPY"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "PUSH",
        "value": "0"
      },
      {
        "begin": 28,
        "end": 221,
        "name": "RETURN"
      }
    ],
    ".data": {
      "0": {
        ".auxdata": "a165627a7a72305820f9455f6908c8724eafaccaa2ecd2021b39550c9acab640510f1c0e50891fec890029",
        ".code": [
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "80"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "40"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "MSTORE"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "4"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "CALLDATASIZE"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "LT"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPI"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "FFFFFFFF"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "100000000000000000000000000000000000000000000000000000000"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "CALLDATALOAD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DIV"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "AND"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "42CE1488"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "EQ"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPI"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "REVERT"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "tag",
            "value": "2"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "JUMPDEST"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "CALLVALUE"
          },
          {
            "begin": 8,
            "end": 17,
            "name": "DUP1"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "ISZERO"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "PUSH [tag]",
            "value": "3"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "JUMPI"
          },
          {
            "begin": 30,
            "end": 31,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 27,
            "end": 28,
            "name": "DUP1"
          },
          {
            "begin": 20,
            "end": 32,
            "name": "REVERT"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "tag",
            "value": "3"
          },
          {
            "begin": 5,
            "end": 7,
            "name": "JUMPDEST"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "PUSH",
            "value": "40"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "MLOAD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "PUSH",
            "value": "20"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "PUSH",
            "value": "4"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "CALLDATALOAD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP3"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "ADD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "CALLDATALOAD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "PUSH",
            "value": "1F"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP2"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "ADD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DIV"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "MUL"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP6"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "ADD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "ADD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP6"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "MSTORE"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "MSTORE"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "PUSH [tag]",
            "value": "4"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "CALLDATASIZE"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP3"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP4"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "PUSH",
            "value": "24"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP4"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP3"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "ADD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP2"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP2"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "ADD"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP4"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP3"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP1"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP3"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "DUP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "CALLDATACOPY"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP8"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "PUSH [tag]",
            "value": "5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "SWAP7"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "JUMP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "tag",
            "value": "4"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "JUMPDEST"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "STOP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "tag",
            "value": "5"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "JUMPDEST"
          },
          {
            "begin": 181,
            "end": 191,
            "name": "CALLER"
          },
          {
            "begin": 168,
            "end": 180,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "SWAP1"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "DUP2"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "MSTORE"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "PUSH",
            "value": "20"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "DUP2"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "DUP2"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "MSTORE"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "PUSH",
            "value": "40"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "DUP3"
          },
          {
            "begin": 168,
            "end": 192,
            "name": "KECCAK256"
          },
          {
            "begin": 27,
            "end": 37,
            "name": "DUP1"
          },
          {
            "begin": 27,
            "end": 37,
            "name": "SLOAD"
          },
          {
            "begin": 39,
            "end": 40,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": 23,
            "end": 41,
            "name": "DUP2"
          },
          {
            "begin": 23,
            "end": 41,
            "name": "ADD"
          },
          {
            "begin": 45,
            "end": 68,
            "name": "DUP1"
          },
          {
            "begin": 45,
            "end": 68,
            "name": "DUP4"
          },
          {
            "begin": 45,
            "end": 68,
            "name": "SSTORE"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP2"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "DUP5"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "MSTORE"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP3"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "DUP3"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP1"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "KECCAK256"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "DUP5"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "MLOAD"
          },
          {
            "begin": 23,
            "end": 41,
            "name": "SWAP2"
          },
          {
            "begin": 23,
            "end": 41,
            "name": "SWAP4"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "PUSH [tag]",
            "value": "8"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP4"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP2"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "ADD"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP2"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP1"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "DUP6"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "ADD"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "SWAP1"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "PUSH [tag]",
            "value": "9"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "JUMP",
            "value": "[in]"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "tag",
            "value": "8"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "JUMPDEST"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "POP"
          },
          {
            "begin": 168,
            "end": 210,
            "name": "POP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "POP"
          },
          {
            "begin": 115,
            "end": 218,
            "name": "JUMP",
            "value": "[out]"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "9"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SLOAD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "AND"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ISZERO"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "100"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "MUL"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SUB"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "AND"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DIV"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "MSTORE"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "20"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "KECCAK256"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "1F"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "20"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DIV"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "1F"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "LT"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "11"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPI"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "MLOAD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "FF"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "NOT"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "AND"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP4"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "OR"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP6"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SSTORE"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "13"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMP"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "11"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP6"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SSTORE"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ISZERO"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "13"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPI"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "12"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "GT"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ISZERO"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "13"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPI"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "MLOAD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SSTORE"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "20"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "12"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMP"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "13"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "14"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP2"
          },
          {
            "begin": -1,
            "end": -1,
            "name": "POP"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "15"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMP",
            "value": "[in]"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "14"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "POP"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMP",
            "value": "[out]"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "15"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "16"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "17"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP3"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "GT"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ISZERO"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "14"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPI"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "0"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "DUP2"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SSTORE"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH",
            "value": "1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "ADD"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "PUSH [tag]",
            "value": "17"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMP"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "tag",
            "value": "16"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMPDEST"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "SWAP1"
          },
          {
            "begin": 28,
            "end": 221,
            "name": "JUMP",
            "value": "[out]"
          }
        ]
      }
    }
  },
  "bytecode": "608060405234801561001057600080fd5b5061019f806100206000396000f3006080604052600436106100405763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342ce14888114610045575b600080fd5b34801561005157600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261009e9436949293602493928401919081908401838280828437509497506100a09650505050505050565b005b33600090815260208181526040822080546001810180835591845292829020845191936100d393910191908501906100d8565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011957805160ff1916838001178555610146565b82800160010185558215610146579182015b8281111561014657825182559160200191906001019061012b565b50610152929150610156565b5090565b61017091905b80821115610152576000815560010161015c565b905600a165627a7a72305820f9455f6908c8724eafaccaa2ecd2021b39550c9acab640510f1c0e50891fec890029",
  "functionHashes": {
    "upload(string)": "42ce1488"
  },
  "gasEstimates": {
    "creation": [
      129,
      83000
    ],
    "external": {
      "upload(string)": null
    },
    "internal": {}
  },
  "interface": "[{\"constant\":false,\"inputs\":[{\"name\":\"certificate\",\"type\":\"string\"}],\"name\":\"upload\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]",
  "metadata": "{\"compiler\":{\"version\":\"0.4.25+commit.59dbf8f1\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"constant\":false,\"inputs\":[{\"name\":\"certificate\",\"type\":\"string\"}],\"name\":\"upload\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"methods\":{}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"\":\"Certificate\"},\"evmVersion\":\"byzantium\",\"libraries\":{},\"optimizer\":{\"enabled\":true,\"runs\":200},\"remappings\":[]},\"sources\":{\"\":{\"keccak256\":\"0x3513782de66f8dead4c9b5557bf5586b609eab9f4d5a4bd5b28104545e63bbdc\",\"urls\":[\"bzzr://bda1a5e47098de285fda777d12f2e5af883dc8de119e61c1a3948be452dbf892\"]}},\"version\":1}",
  "opcodes": "PUSH1 0x80 PUSH1 0x40 MSTORE CALLVALUE DUP1 ISZERO PUSH2 0x10 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH2 0x19F DUP1 PUSH2 0x20 PUSH1 0x0 CODECOPY PUSH1 0x0 RETURN STOP PUSH1 0x80 PUSH1 0x40 MSTORE PUSH1 0x4 CALLDATASIZE LT PUSH2 0x40 JUMPI PUSH4 0xFFFFFFFF PUSH29 0x100000000000000000000000000000000000000000000000000000000 PUSH1 0x0 CALLDATALOAD DIV AND PUSH4 0x42CE1488 DUP2 EQ PUSH2 0x45 JUMPI JUMPDEST PUSH1 0x0 DUP1 REVERT JUMPDEST CALLVALUE DUP1 ISZERO PUSH2 0x51 JUMPI PUSH1 0x0 DUP1 REVERT JUMPDEST POP PUSH1 0x40 DUP1 MLOAD PUSH1 0x20 PUSH1 0x4 DUP1 CALLDATALOAD DUP1 DUP3 ADD CALLDATALOAD PUSH1 0x1F DUP2 ADD DUP5 SWAP1 DIV DUP5 MUL DUP6 ADD DUP5 ADD SWAP1 SWAP6 MSTORE DUP5 DUP5 MSTORE PUSH2 0x9E SWAP5 CALLDATASIZE SWAP5 SWAP3 SWAP4 PUSH1 0x24 SWAP4 SWAP3 DUP5 ADD SWAP2 SWAP1 DUP2 SWAP1 DUP5 ADD DUP4 DUP3 DUP1 DUP3 DUP5 CALLDATACOPY POP SWAP5 SWAP8 POP PUSH2 0xA0 SWAP7 POP POP POP POP POP POP POP JUMP JUMPDEST STOP JUMPDEST CALLER PUSH1 0x0 SWAP1 DUP2 MSTORE PUSH1 0x20 DUP2 DUP2 MSTORE PUSH1 0x40 DUP3 KECCAK256 DUP1 SLOAD PUSH1 0x1 DUP2 ADD DUP1 DUP4 SSTORE SWAP2 DUP5 MSTORE SWAP3 DUP3 SWAP1 KECCAK256 DUP5 MLOAD SWAP2 SWAP4 PUSH2 0xD3 SWAP4 SWAP2 ADD SWAP2 SWAP1 DUP6 ADD SWAP1 PUSH2 0xD8 JUMP JUMPDEST POP POP POP JUMP JUMPDEST DUP3 DUP1 SLOAD PUSH1 0x1 DUP2 PUSH1 0x1 AND ISZERO PUSH2 0x100 MUL SUB AND PUSH1 0x2 SWAP1 DIV SWAP1 PUSH1 0x0 MSTORE PUSH1 0x20 PUSH1 0x0 KECCAK256 SWAP1 PUSH1 0x1F ADD PUSH1 0x20 SWAP1 DIV DUP2 ADD SWAP3 DUP3 PUSH1 0x1F LT PUSH2 0x119 JUMPI DUP1 MLOAD PUSH1 0xFF NOT AND DUP4 DUP1 ADD OR DUP6 SSTORE PUSH2 0x146 JUMP JUMPDEST DUP3 DUP1 ADD PUSH1 0x1 ADD DUP6 SSTORE DUP3 ISZERO PUSH2 0x146 JUMPI SWAP2 DUP3 ADD JUMPDEST DUP3 DUP2 GT ISZERO PUSH2 0x146 JUMPI DUP3 MLOAD DUP3 SSTORE SWAP2 PUSH1 0x20 ADD SWAP2 SWAP1 PUSH1 0x1 ADD SWAP1 PUSH2 0x12B JUMP JUMPDEST POP PUSH2 0x152 SWAP3 SWAP2 POP PUSH2 0x156 JUMP JUMPDEST POP SWAP1 JUMP JUMPDEST PUSH2 0x170 SWAP2 SWAP1 JUMPDEST DUP1 DUP3 GT ISZERO PUSH2 0x152 JUMPI PUSH1 0x0 DUP2 SSTORE PUSH1 0x1 ADD PUSH2 0x15C JUMP JUMPDEST SWAP1 JUMP STOP LOG1 PUSH6 0x627A7A723058 KECCAK256 0xf9 GASLIMIT 0x5f PUSH10 0x8C8724EAFACCAA2ECD2 MUL SHL CODECOPY SSTORE 0xc SWAP11 0xca 0xb6 BLOCKHASH MLOAD 0xf SHR 0xe POP DUP10 0x1f 0xec DUP10 STOP 0x29 ",
  "runtimeBytecode": "6080604052600436106100405763ffffffff7c010000000000000000000000000000000000000000000000000000000060003504166342ce14888114610045575b600080fd5b34801561005157600080fd5b506040805160206004803580820135601f810184900484028501840190955284845261009e9436949293602493928401919081908401838280828437509497506100a09650505050505050565b005b33600090815260208181526040822080546001810180835591845292829020845191936100d393910191908501906100d8565b505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061011957805160ff1916838001178555610146565b82800160010185558215610146579182015b8281111561014657825182559160200191906001019061012b565b50610152929150610156565b5090565b61017091905b80821115610152576000815560010161015c565b905600a165627a7a72305820f9455f6908c8724eafaccaa2ecd2021b39550c9acab640510f1c0e50891fec890029",
  "srcmap": "28:193:0:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;28:193:0;;;;;;;",
  "srcmapRuntime": "28:193:0:-;;;;;;;;;;;;;;;;;;;;;;;115:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;115:103:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;115:103:0;;-1:-1:-1;115:103:0;;-1:-1:-1;;;;;;;115:103:0;;;;181:10;168:12;:24;;;;;;;;;;27:10:-1;;39:1;23:18;;45:23;;;168:42:0;;;;;;;;;23:18:-1;;168:42:0;;;;;;;;;;:::i;:::-;;;115:103;:::o;28:193::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;-1:-1:-1;28:193:0;;;-1:-1:-1;28:193:0;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;:::o"
}

