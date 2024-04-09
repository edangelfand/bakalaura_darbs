import React, {useState} from 'react'
import {ethers} from 'ethers';

const Payment = () => {
    let [account, setAccount] = useState(null);
    let [balance, setbalance] = useState(null);
    let [errorMsg, setErrorMsg] = useState(null);

    const connetWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({method: 'eth_requestAccounts'}).then(
                result => {
                    changedAccount(result[0]);
                }
            )
        } else {
            setErrorMsg('Lūdzu, lejupielādējiet MetaMask')
        }
    }

    const changedAccount = (newAccount) => {
        setAccount(newAccount);
        getbalance(newAccount.toString());
    }

    const getbalance = (address) => {
        window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']}).then(balance => {
            setbalance(ethers.formatEther(balance));
        })
    }


    window.ethereum.on('accountsChanged', changedAccount);


    return(
        <div className="payment-checkout">
            <button onClick={connetWallet}>Pievienot maku</button>
            <div className="account">
                <h3>Konts: {account}</h3>
            </div>
            <div className="balance">
                <h3>Pieejama bilance: {balance}</h3>
            </div>
            {errorMsg}
        </div>
    )
}

export default Payment;













// const connetWallet = () => { // Функция connetWallet для подключения кошелька
//     if (window.ethereum) { // Проверка наличия window.ethereum
//         window.ethereum.request({method: 'eth_requestAccounts'}).then(
//             result => {
//                 changedAccount(result[0]); // Если кошелек доступен, вызываем функцию changedAccount с первым аккаунтом из результата
//             }
//         )
//     } else {
//         setErrorMsg('Lūdzu, lejupielādējiet MetaMask'); // Если кошелек недоступен, устанавливаем сообщение об ошибке
//     }
// }

// const changedAccount = (newAccount) => { // Функция changedAccount для обновления состояния account
//     setAccount(newAccount); // Установка нового аккаунта в состояние account
//     getbalance(newAccount.toString()); // Вызов функции getbalance для получения баланса аккаунта
// }

// const getbalance = (address) => { // Функция getbalance для получения баланса аккаунта
//     window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']}).then(balance => {
//         setbalance(ethers.formatEther(balance)); // Установка баланса аккаунта в состояние balance после форматирования с помощью ethers.formatEther
//     })
// }

// window.ethereum.on('accountsChanged', changedAccount); // Отслеживание изменений аккаунтов и вызов функции changedAccount

// return (
//     <div className="payment-checkout"> // Рендеринг разметки компонента
//         <button onClick={connetWallet}>Pievienot maku</button> // Кнопка для подключения кошелька
//         <div className="account"> // Раздел для отображения аккаунта
//             <h3>Konts: {account}</h3> // Отображение аккаунта
//         </div>
//         <div className="balance"> // Раздел для отображения баланса
//             <h3>Pieejama bilance: {balance}</h3> // Отображение баланса
//         </div>
//         {errorMsg} // Отображение сообщения об ошибке
//     </div>
// );
// }

// export default Payment; // Экспорт компонента Payment для его использования в других частях приложения