import Snackbar from 'react-native-snackbar';
import {Keyboard} from 'react-native';


function hexToDec(hex: any) {
    return parseInt(hex, 16);
  }

const GetBalance = async (selected: any, setBalance: any) => {

    console.log("get balance called");
    if (selected !== null){
      try {
        const response = await fetch(
          'https://goerli.infura.io/v3/509e481e017e4ec1959e7b37e1935932',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              "jsonrpc":"2.0",
              "method":"eth_getBalance",
              "params": [selected, "latest"],
              "id":1
            }),
          },
        );
        const json = await response.json();
        let bal = hexToDec(parseInt(json.result));
        setBalance(bal.toString());
        Keyboard.dismiss();

      } catch (error) {
      console.log(error);
      }

    } else{
      Snackbar.show({
        text: "Select Account",
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor: 'black',
        numberOfLines: 5
      })
    }
  };

  export default GetBalance;