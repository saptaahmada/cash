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

export default class CashEdit extends Component {
  constructor(props) {
    super(props);
    // console.log(globalColors);
    this.state = {
        dialog_date : false,
        dialog_time : false,
        input_date : null,
        date_type : 0,
        input_date_0 : null,
        input_date_1 : null,
        input_date_2 : null,
        input_date_3 : null,
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
          Cash Header
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
                    if(this.state.date_type == 0) {
                        this.setState({
                            input_date_0 : moment(selectedDate).format('DD/MM/YYYY'),
                        })
                    } else if(this.state.date_type == 1) {
                        this.setState({
                            input_date_1 : moment(selectedDate).format('DD/MM/YYYY'),
                        })
                    }
                    
                //   this.getListHistory();
                },
              );
            }}
          />
        )}
        
      </>
    );
  }

  dialogTimePicker() {
    return (
      <>
        {this.state.dialog_time && (
          <DateTimePicker
            value={moment().toDate()}
            mode="time"
            display="default"
            onChange={(event, selectedDate) => {
              this.setState(
                {
                  input_date: moment(selectedDate).format('HH:MM'),
                  dialog_time: false,
                },
                () => {
                    if(this.state.date_type == 2) {
                        this.setState({
                            input_date_2 : moment(selectedDate).format('HH:MM'),
                        })
                    } else if(this.state.date_type == 3) {
                        this.setState({
                            input_date_3 : moment(selectedDate).format('HH:MM'),
                        })
                    }
                    
                //   this.getListHistory();
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
            <Text>Active Type</Text>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Meeting', value: 'Meeting' },
                    { label: 'Survey', value: 'Survey' },
                    { label: 'Other', value: 'Other' },
                ]}
            />
            
            <Text>Reason</Text>
            <Input
                placeholder='Fill Reason'
            />
            
            <Text>Destination</Text>
            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: 'Surabaya', value: 'Surabaya' },
                    { label: 'Jakarta', value: 'Jakarta' },
                    { label: 'Bali', value: 'Bali' },
                ]}
            />
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <View
                    style={{
                        flex:1
                    }}
                >
                    <Text>Date and Time</Text>
                    <Input
                        onPressIn={() => {
                            this.setState({
                                dialog_date: true,
                                date_type : 0,
                            });
                        }}
                        value={
                            this.state.input_date_0
                        }
                        placeholder='Date'
                    />

                </View>
                <View
                    style={{
                        height:80,
                        marginLeft:5,
                        marginRight:5,
                        justifyContent:'center', 
                        alignItems:'center'
                    }}
                >
                    <Text>To</Text>

                </View>
                <View
                    style={{
                        flex:1
                    }}
                >
                    <Text></Text>
                    <Input
                        onPressIn={() => {
                            this.setState({
                                dialog_date: true,
                                date_type : 1,
                            });
                        }}
                        value={
                            this.state.input_date_1
                        }
                        placeholder='Date'
                    />

                </View>
            </View>
            <View
                style={{
                    flexDirection:'row'
                }}
            >
                <View
                    style={{
                        flex:1
                    }}
                >
                    <Input
                        onPressIn={() => {
                            this.setState({
                                dialog_time: true,
                                date_type : 2,
                            });
                        }}
                        value={
                            this.state.input_date_2
                        }
                        placeholder='Time'
                    />

                </View>
                <View
                    style={{
                        marginLeft:5,
                        marginRight:5,
                        justifyContent:'center', 
                        alignItems:'center'
                    }}
                >
                    <Text>To</Text>

                </View>
                <View
                    style={{
                        flex:1
                    }}
                >
                    <Input
                        onPressIn={() => {
                            this.setState({
                                dialog_time: true,
                                date_type : 3,
                            });
                        }}
                        value={
                            this.state.input_date_3
                        }
                        placeholder='Time'
                    />

                </View>
            </View>
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
        {this.dialogTimePicker()}
      </View>

    );
  }
}
