import Snackbar from 'react-native-snackbar';
import {Keyboard} from 'react-native';


function hexToDec(hex: any) {
    return parseInt(hex, 16);
}

const SendEth = async (amt: any, address: any) => {
    console.log("send eth called");

    // converting amount to hex string
    const val_int = parseInt(amt);
    const hexVal = val_int.toString(16);
    console.log(hexVal);

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
            "method":"eth_call",
            "params":
                [{
                    "from": "0x9F45C08F39f8289BF3A29170918F7F81f6D0Fbb0",
                    "to": address,
                    "gas": "0x221b262dd8000",
                    "gasPrice": "0x221b262dd8000",
                    "value": `0x${hexVal}`,
                    "data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
                },"latest"
                ],"id":1
             }),
            },
      );
      // response from server
      const json = await response.json();
      console.log(json);

    //Snackbar display conditions
      if (json.error){
        Snackbar.show({
          text: json.error.message,
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'black',
          numberOfLines: 5
        })
      }else{
        Snackbar.show({
          text: "Success",
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'black',
          numberOfLines: 5
        })
      };

      Keyboard.dismiss();
      
    } catch (error) {

      console.log("not catch",error);
      Snackbar.show({
        text: "error",
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: 'black',
      })
    }
};

export default SendEth;
