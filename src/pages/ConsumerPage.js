// ConsumerPage.js

import React from 'react';
import ConsumerContract from '../components/ConsumerContract';
import './styles/ProducerPage.css'; 

const ConsumerPage = () => {
    const contractAddress = "0xfd5BcA3451459F5950b19B4d2bA2433de40E5b08";
    const contractABI = [
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "units",
                    "type": "uint256"
                },
                {
                    "internalType": "address payable",
                    "name": "_prosumer",
                    "type": "address"
                }
            ],
            "name": "consumeUnits",
            "outputs": [],
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_producerContract",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "inputs": [],
            "name": "producerContract",
            "outputs": [
                {
                    "internalType": "contract Producer",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ];  

    return (
        <div className="consumer-page-container">
            <h1 className="page-title">Consumer Page</h1>
            <div className="contract-container">
                <h2 className="section-title">Smart Contract Interaction</h2>
                <div className="input-container"> {/* Add container for inputs */}
                    <ConsumerContract contractAddress={contractAddress} contractABI={contractABI} />
                </div>
            </div>
        </div>
    );
};

export default ConsumerPage;
