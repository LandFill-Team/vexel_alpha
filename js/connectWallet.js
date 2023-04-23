//1- connect metamask
let account;
const connectMetamask = async () => {
    if(window.ethereum !== "undefined") {
        const accounts = await ethereum.request({method: "eth_requestAccounts"});
        account = accounts[0];
        document.getElementById("accountArea").innerHTML = account;
    }
}

//2- connect to smart contract
const connectContract = async () => {
    const ABI = [
                    {
                        "inputs": [
                            {
                              "internalType": "address",
                              "name": "_token",
                              "type": "address"
                            }
                          ],
                          "stateMutability": "nonpayable",
                          "type": "constructor"
                        },
                        {
                          "anonymous": false,
                          "inputs": [
                            {
                              "indexed": false,
                              "internalType": "string",
                              "name": "vexel",
                              "type": "string"
                            },
                            {
                              "indexed": false,
                              "internalType": "address",
                              "name": "to",
                              "type": "address"
                            },
                            {
                              "indexed": false,
                              "internalType": "uint256",
                              "name": "amount",
                              "type": "uint256"
                            }
                          ],
                          "name": "createdVexel",
                          "type": "event"
                        },
                        {
                          "inputs": [
                            {
                              "internalType": "string",
                              "name": "vexel",
                              "type": "string"
                            }
                          ],
                          "name": "cashOutVexel",
                          "outputs": [
                            {
                              "internalType": "bool",
                              "name": "",
                              "type": "bool"
                            }
                          ],
                          "stateMutability": "nonpayable",
                          "type": "function"
                        },
                        {
                          "inputs": [
                            {
                              "internalType": "uint256",
                              "name": "_amount",
                              "type": "uint256"
                            },
                            {
                              "internalType": "address",
                              "name": "_to",
                              "type": "address"
                            }
                          ],
                          "name": "createVexel",
                          "outputs": [
                            {
                              "internalType": "string",
                              "name": "",
                              "type": "string"
                            }
                          ],
                          "stateMutability": "nonpayable",
                          "type": "function"
                        },
                        {
                          "inputs": [],
                          "name": "future",
                          "outputs": [
                            {
                              "internalType": "string",
                              "name": "",
                              "type": "string"
                            }
                          ],
                          "stateMutability": "view",
                          "type": "function"
                        }
                      ]
    const Address = "0x6cA5bD3B954C817d60c12aD03Da96F5E6715fb00";
    window.web3 = await new Web3(window.ethereum);
    window.contract = await new window.web3.eth.Contract( ABI, Address); 
    document.getElementById("contractArea").innerHTML = "Connected to smart-contract";
}


const CreateVexel = async () => {
    const amount_tokens = document.getElementById("inputAmount").value;
    const to = document.getElementById("inputTo").value;

    await window.contract.methods.createVexel(amount_tokens, to).send({ from: account });

    const evik = await contract.getPastEvents("createdVexel", {fromBlock:8306600, toBlock:"latest"}, (err, events) => { vex = (events[events.length - 1].returnValues.vexel), to_vex = (events[events.length - 1].returnValues.to), am = (events[events.length - 1].returnValues.amount)})

    document.getElementById("vexel").innerHTML = "Your Vexel: " + vex;
    document.getElementById("to").innerHTML = "For: " + to_vex;
    document.getElementById("amountSum").innerHTML = "For the amount: " + am + " tokens";

}

const CashVexel = async () => {

    const userVexel = document.getElementById("UserVexel").value;
    await window.contract.methods.cashOutVexel(userVexel).send({ from: account }); 
}
