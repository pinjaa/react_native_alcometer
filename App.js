import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, ScrollView, Alert, Switch, Pressable} from 'react-native';
import NumericInput from 'react-native-numeric-input';
import { RadioButton } from 'react-native-paper';
import { useState } from 'react';
import Styles from './styles/Styles.js';


export default function App() {
  const [radioval, setRadioval] = useState('male');
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0);
  const [hours, setHours] = useState(0);
  const [result, setResult] = useState(0);
  const [isOn, setIsOn] = useState(false);

  const colorTheme = isOn ? Styles.darkTheme : Styles.lightTheme;
  const darkThemeText = isOn ? Styles.darkText : Styles.text;
  const resultColor = result < 0.5 ? Styles.result : result > 0.5 && result < 1.5 ? Styles.resultYellow : Styles.resultRed;

  function calculate() {
    if(weight <= 0) {
      Alert.alert("Incorrect weight!")
    } else {
      let grams = bottles * 0.33 * 8 * 4.5;
      let burning = weight / 10;
      let gramsLeft = grams - burning * hours;
      let res;

      if(radioval == 'male') {
        res = gramsLeft / (weight * 0.7);
      } else {
        res = gramsLeft / (weight * 0.6);
      }
      
      if(res < 0) {
        res = 0;
      }
      setResult(res)
    }
  }

  return (
    <ScrollView style={colorTheme}>
    <View style={[Styles.container, colorTheme]}>
      <Switch 
      thumbColor = '#61c9a8'
      trackColor={{false:'gray', true:'black'}}
      value={isOn}
      onValueChange={newValue => setIsOn(newValue)}/>
      <Text style={[Styles.title, darkThemeText]}>Alcometer</Text>
      <Text style={[Styles.label, darkThemeText]}>Weight</Text>
      <TextInput 
      keyboardType='number-pad' 
        value={weight} 
        style={[Styles.textInput]}
        onChangeText = {setWeight}
      />
      <Text style={[Styles.label, darkThemeText]}>Bottles</Text>
      <View style={Styles.numericInput}>
        <NumericInput 
          totalWidth={210} 
          totalHeight={70} 
          rounded  
          minValue={0} 
          onChange={value => setBottles(value)} 
          value={bottles}
        />
      </View>
      <Text style={[Styles.label, darkThemeText]}>Hours</Text>
      <View style={Styles.numericInput}>
        <NumericInput 
          totalWidth={210} 
          totalHeight={70} 
          rounded  
          minValue={0} 
          onChange={value => setHours(value)} 
          value={hours} 
        />
      </View>
      
      <RadioButton.Group 
        onValueChange={newValue => setRadioval(newValue)} 
        value={radioval}
      >
        <View style={Styles.radioStyle}>
          <RadioButton value='male'/>
          <Text style={[Styles.radioText,darkThemeText]}>Male</Text>
        </View>
        <View style={Styles.radioStyle}>
          <RadioButton value='female'/>
          <Text style={[Styles.radioText,darkThemeText]}>Female</Text>
        </View>
      </RadioButton.Group>
      <Text style={[Styles.result, resultColor]}>{result.toFixed(2)}</Text>
      <Pressable style={Styles.button} onPress={calculate}>
      <Text style={Styles.buttontext}>CALCULATE</Text>
      </Pressable>
      
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}


