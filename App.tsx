import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import GetBalance from './getBalance';
import SendEth from './sendEthereum';


function App() {
  // Input address.
  const [address, setAdress] = useState("0x90c2cE77EdE1717ED544053e2925673260021a94");
  // Input amount.
  const [amount, setAmount] = useState("");
  // Account Balance.
  const [balance, setBalance] = useState("");
  // Drop down menu item selection.
  const [selected, setSelected] = useState(null);

  // Drop down menu items
  const data = [
    {key: '1', value: "0x9F45C08F39f8289BF3A29170918F7F81f6D0Fbb0"},
    {key: '2', value: "0x90c2cE77EdE1717ED544053e2925673260021a94"}
  ]

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Send Ethereum</Text>
      <TextInput
        style={styles.input}
        placeholder='Enter Address'
        value={address}
        onChangeText={setAdress}
      />
      <TextInput
        style={styles.input}
        placeholder='Enter ETH Amount'
        value={amount}
        keyboardType={"number-pad"}
        onChangeText={setAmount}
      />
      <SelectList
        setSelected={(val: any) => setSelected(val)}
        data= {data}
        save='value'
        onSelect={() => console.log(selected)}
        search={false}
        placeholder={"Select Account To Get Balance"}
      />
      <View style={{margin: 10}}></View>
      <Button
        color={"#2196f3"}
        title='Get Balance'
        onPress={() => GetBalance(selected, setBalance)}
      />
      <View style={{margin: 5}}></View>
      <Button
        title='Send'
        color={"#2196f3"}
        onPress={() => SendEth(amount, address)}
      />
      {balance === "" ? 
        null 
        : 
        <View style={styles.balance_view}>
          <Text style={styles.balance}>Balance in Wei</Text>
          <Text style={styles.balance}>{balance}</Text>
        </View>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding: 20,
    justifyContent: 'center',
    flex: 1
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30
  },
  input:{
    borderColor: "#2196f3",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10
  },
  balance_view:{
    marginTop: 20 
  },
  balance:{
    fontSize: 20,
    textAlign: 'center'
  }
});

export default App;
