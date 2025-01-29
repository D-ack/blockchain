// app.js
window.addEventListener('load', function () {
    if (typeof window.ethereum !== 'undefined') {
      console.log('MetaMask is installed');
      const web3 = new Web3(window.ethereum);
      const connectButton = document.getElementById('connect-wallet');
      const walletInfo = document.getElementById('wallet-info');
      const walletAddressElem = document.getElementById('wallet-address');
      const walletBalanceElem = document.getElementById('wallet-balance');
  
      // Handle wallet connection
      connectButton.addEventListener('click', async () => {
        try {
          // Request account access
          const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
          const userAddress = accounts[0];
          
          // Get the Ethereum balance
          const balanceWei = await web3.eth.getBalance(userAddress);
          const balanceEth = web3.utils.fromWei(balanceWei, 'ether');
  
          // Update UI
          walletAddressElem.textContent = userAddress;
          walletBalanceElem.textContent = balanceEth;
  
          // Show wallet info and hide the button
          walletInfo.classList.remove('hidden');
          connectButton.style.display = 'none';
  
        } catch (error) {
          console.error('Error connecting to MetaMask:', error);
        }
      });
    } else {
      alert('MetaMask is not installed. Please install it to interact with the Ethereum blockchain.');
    }
  });
  