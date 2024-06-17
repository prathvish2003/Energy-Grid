import React, { useEffect, useState } from 'react';
import Web3 from 'web3';
import './stylesPages/Consumer.css';

const Consumer = ({ consumerContractAddress, consumerAbi }) => {
  const [prosumerAddress, setProsumerAddress] = useState('0xProsumerAddress');
  const [units, setUnits] = useState('');
  const [reward, setReward] = useState(0);
  const [consumerAddress, setConsumerAddress] = useState('');
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    const fetchAccounts = async () => {
      if (window.ethereum) {
        try {
          const web3 = new Web3(window.ethereum);
          const accs = await web3.eth.getAccounts();
          setAccounts(accs.filter((acc) => acc !== prosumerAddress)); // Exclude prosumer address
        } catch (error) {
          console.error('Error fetching accounts:', error);
        }
      }
    };

    fetchAccounts();
  }, [prosumerAddress]);



  const handleConsumerChange = (event) => {
    setConsumerAddress(event.target.value);
  };

  const handleConsumeUnits = async (event) => {
    event.preventDefault();
    const web3 = new Web3(window.ethereum);
    const consumerContract = new web3.eth.Contract(consumerAbi, consumerContractAddress);

    try {
      

      await consumerContract.methods.consumeUnits(units, prosumerAddress).send({
        from: consumerAddress || accounts[0], // Use selected consumer address or default to the first account
        value: (units * 100000000000000000) + 50000000000000000,
      });
      console.log(reward);
      console.log('Units consumed successfully!');
    } catch (error) {
      console.error('Error consuming units:', error);
    }
  };

  return (
    <div className='consumerContainer'>
      <h2>Consumer</h2>
      <form onSubmit={handleConsumeUnits}>
        <input
          type='text'
          value={prosumerAddress}
          onChange={(e) => setProsumerAddress(e.target.value)}
          placeholder='Enter prosumer address'
          required
        />
        <br />
        <input
          type='number'
          value={units}
          onChange={(e) => setUnits(e.target.value)}
          placeholder='Enter units to consume'
          required
        />
        <br />
        <br />
        
        <br />
        <select value={consumerAddress} onChange={handleConsumerChange}>
          {accounts.map((acc) => (
            <option key={acc} value={acc}>
              {acc}
            </option>
          ))}
        </select>
        <br />
        <button type='submit'>Consume Units</button>
      </form>
    </div>
  );
};

export default Consumer;
