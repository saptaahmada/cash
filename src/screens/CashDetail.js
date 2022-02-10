import React,{Component} from 'react';
import { Alert, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import { 
  View,
  Text,
  Box,
  Icon,
  MinusIcon,
  TextArea,
  Checkbox,
  Input,
  Select,
  Button
} from 'native-base';
import globalColors from './../utils/globalColors';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import moment from "moment";


var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class CashDetail extends Component {
  constructor(props) {
    super(props);
    // console.log(globalColors);
    this.state = {
        dialog_date : false,
        input_date : null,
    }
  }

  renderHeader() {
    return (
      <View style={{
        backgroundColor: globalColors.bg_primary, 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: 50}}>
        <Text style={{
          fontSize:22, 
          fontWeight: '700', 
          color: 'white'
          }}>
          Cash Detail
        </Text>
      </View>
    );
  }

  dialogDatePicker() {
    return (
      <>
        {this.state.dialog_date && (
          <DateTimePicker
            value={
              this.state.input_date
                ? moment(this.state.input_date, 'DD/MM/YYYY').toDate()
                : moment().toDate()
            }
            mode="date"
            display="default"
            onChange={(event, selectedDate) => {
              this.setState(
                {
                  input_date: moment(selectedDate).format('DD/MM/YYYY'),
                  dialog_date: false,
                },
                () => {
                },
              );
            }}
          />
        )}
        
      </>
    );
  }

  renderForm() {
    return (
        <View
            style={{
                margin:20
            }}
        >
            <Text>Date and Time</Text>
            <Input
                onPressIn={() => {
                    this.setState({
                        dialog_date: true,
                    });
                }}
                value={
                    this.state.input_date
                }
                placeholder='Date'
            />

            <Text>Ekspense Type</Text>
            <RNPickerSelect
                onValueChange={(value) => {
                    this.setState({ekspense: value});
                }}
                items={[
                    { label: 'Dinner', value: 'Dinner' },
                    { label: 'Hotel', value: 'Hotel' },
                    { label: 'Launch', value: 'Launch' },
                    { label: 'Other', value: 'Other' },
                ]}
            />

            
            <Text>Currency</Text>
            <RNPickerSelect
                onValueChange={(value) => {
                    this.setState({currency: value});
                }}
                items={[
                    { label: 'IDR', value: 'IDR' },
                    { label: 'USD', value: 'USD' },
                ]}
            />
            
            <Text>Cash Request</Text>
            <Input
                onChangeText={(text) => this.setState({nominal: text})}
                keyboardType='numeric'
                placeholder='Fill Reason'
            />

            <Text>Remark</Text>
            <TextArea
                onChangeText={(text) => this.setState({remark: text})}
            ></TextArea>

            <Button
                style={{
                    marginTop:20,
                    backgroundColor:globalColors.bg_primary
                }}
            >
                <Text style={{color:globalColors.bg_white}}>Continue To Select Transport</Text>
            </Button>
        </View>
    );
  }

  render() {
    // console.log(globalColors);
    return (
      <View
        style={{
          flex:1
        }}
      >
        {this.renderHeader()}
        {this.renderForm()}
        {this.dialogDatePicker()}
      </View>

    );
  }
}
