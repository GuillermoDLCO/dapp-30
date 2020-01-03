var contractABI = [];
var contractAddress = '0x854022a0ec272eED1DBED33419C46f6CCBd2655d';
var web3 = new Web3('http://localhost:9545');
var simpleSmartContract = new web3.eth.Contract(contractABI, contractAddress);

console.log(simpleSmartContract);

web3.eth.getAccounts().then(console.log);

