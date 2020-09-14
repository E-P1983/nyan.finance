/* Index.js */
/* Inside this file you will import your other helper files */

// Import each file using the * notation
// This will import automatically every function exported by these files
import * as Contracts from './Contracts.js';
import * as Web3 from './Web3.js';
import * as Formatter from './Formatter.js';
import * as Balances from './Balances.js';
import * as Supply from './Supply.js';
import * as Accounts from './Accounts.js';

// Export again
export {
    Contracts,
    Web3,
    Formatter,
    Balances,
    Supply,
    Accounts
};
