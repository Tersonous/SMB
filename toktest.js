

// SMBT1 PROTOTYPE

async function main() {
    console.log('Run test: SMBT1');

    
  }

  main()
  .catch(err => {
    console.error(err);
  })
  .then(() => process.exit());


// Propriétaite initial du token
let initialOwnerTokenAccount;
const solanaWeb3 = require('@solana/web3.js');
const { Console } = require('console');
console.log(solanaWeb3);
const connection = new solanaWeb3.Connection('https://devnet.solana.com');
const accountOfToken = new solanaWeb3.Account();



class Token {
    //SMBT1 attributs
    TokenDecimals = 9;
    TokenSupply = 10000000000;

    

    // Le constructeur du token a besoin du compte propriétaire.
    constructor(authAccount) {
        

    }
    

   
    

}

class TokenNFT {
    //ERC 721
}

// initialisation SMT1
SMBT1 = new Token(initialOwnerTokenAccount);




