// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from "../src/components/Header"
import ProducerPage from './Producer';
import ConsumerPage from './Consumer';
import App from './App'
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
const Ind = ()=>{
    return(
        <div>
            <Header/>
            <Outlet/>
        </div>
    )
}
const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <Ind/>,
        children :[
                {
                    path :"/",
                    element : <App/>
                },
                {
                    path : "/producer",
                    element : <ProducerPage producerContractAddress="0x1214D98066d9AcC563A6Bb897B8737D57548658f" producerAbi={[
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "units",
                                    "type": "uint256"
                                },
                                {
                                    "internalType": "address",
                                    "name": "_prosumer",
                                    "type": "address"
                                }
                            ],
                            "name": "consumeUnits",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "units",
                                    "type": "uint256"
                                }
                            ],
                            "name": "generateUnits",
                            "outputs": [],
                            "stateMutability": "nonpayable",
                            "type": "function"
                        },
                        {
                            "inputs": [
                                {
                                    "internalType": "address",
                                    "name": "_prosumer",
                                    "type": "address"
                                }
                            ],
                            "name": "showGeneratedUnits",
                            "outputs": [
                                {
                                    "internalType": "uint256",
                                    "name": "",
                                    "type": "uint256"
                                }
                            ],
                            "stateMutability": "view",
                            "type": "function"
                        }
                    ]} />
                }
                ,
                {
                    path : "/consumer",
                    element :<ConsumerPage consumerContractAddress="0xc7eC729Bc571f287E2266CD49553C024fFbf0362" consumerAbi={
                        [
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
                        ]
                        
                    } />
                }
            
        ]
    }
    
])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<RouterProvider router={appRouter}/>)

