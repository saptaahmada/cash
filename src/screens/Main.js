import React,{Component} from 'react';
import { Alert, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { 
  View,
  Text,
  Box,
  Icon,
  MinusIcon,
  TextArea,
  Checkbox,
  Button
} from 'native-base';
import globalColors from './../utils/globalColors';
import globalInfo from './../utils/globalInfo';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

export default class Main extends Component {
  constructor(props) {
    super(props);
    // console.log(globalColors);
    this
  }

  async refreshData() {
    const activity_type = await AsyncStorage.getItem('activity_type');
    const reason = await AsyncStorage.getItem('reason');
    const destination = await AsyncStorage.getItem('destination');
    const date_from = await AsyncStorage.getItem('date_from');
    const date_to = await AsyncStorage.getItem('date_to');
    const time_from = await AsyncStorage.getItem('time_from');
    const time_to = await AsyncStorage.getItem('time_to');
    if(activity_type != null) {
      this.setState({
        activity_type : activity_type,
        reason : reason,
        destination : destination,
        date_from : date_from,
        date_to : date_to,
        time_from : time_from,
        time_to : time_to,
      })
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
          Cash Request
        </Text>
      </View>
    );
  }

  renderCashHeader() {
    return (
      <View>
        <View 
          style={{
            width: width-20,
            height: 150,
            backgroundColor:globalColors.bg_primary,
            marginLeft:10,
            marginTop:10,
            borderRadius:10,
            padding:15
          }}
        >
          <View
            style={{
              flexDirection:'row'
            }}
          >
            <Text
              style={{
                fontSize:30,
                color:globalColors.bg_white,
                paddingTop:10,
                flex:1,
              }}
            >
              Meeting
            </Text>
            <TouchableOpacity
              onPress={() => {
                // this.setState({loading:false}, () => {
                  this.props.navigation.navigate('CashEdit', {
                    screen: 'CashEdit',
                    // onGoBack: () => this.refreshData(),
                  });
                // });
              }}
            >
              <Text
                style={{
                  color:globalColors.bg_white,
                  width:50
                }}
              >
                Edit
              </Text>
            </TouchableOpacity>
          </View>
          
          <Text
            style={{
              fontSize:22,
              color:globalColors.bg_white,
              paddingTop:10
            }}
          >
            Surabaya
          </Text>
          <View
            style={{
              flexDirection:'row'
            }}
          >
            
            <Text
              style={{
                color:globalColors.bg_white,
                fontSize:15,
                width:50
              }}
            >
              Date
            </Text>

            
            <Text
              style={{
                color:globalColors.bg_white,
                fontSize:15,
              }}
            >
              24 June 2020 
            </Text>
            
          </View>
          
          <View
            style={{
              flexDirection:'row'
            }}
          >
            
            <Text
              style={{
                color:globalColors.bg_white,
                fontSize:15,
                width:50
              }}
            >
              To
            </Text>

            
            <Text
              style={{
                color:globalColors.bg_white,
                fontSize:15,
              }}
            >
              25 June 2020 
            </Text>
            
          </View>

        </View>

      </View>

    );
  }

  renderCashDetail() {
    return (
      <View
        style={{
        }}
      >

        <View
          style={{
            flexDirection:'row',
            margin:10,
            marginTop:20
          }}
        >
          <Text
            style={{
              flex:1,
              color:globalColors.bg_dark,
              fontSize:20,
            }}
          >
            CASH DETAIL
          </Text>

          <TouchableOpacity
            onPress={() => {
              // this.setState({loading:false}, () => {
                this.props.navigation.navigate('CashDetail', {
                  screen: 'CashDetail',
                });
              // });
            }}
          >
            <Text
              style={{
                color:globalColors.bg_green,
                fontSize:20,
                marginRight:10
              }}
            >
              Add Cash
            </Text>

          </TouchableOpacity>

        </View>

        {this.rowItemDetail()}

      </View>

    );
  }

  rowItemDetail() {
    return (
      <View
        style={{
          flexDirection:'row',
        }}
      >
        <View
          style={{
            borderWidth:1,
            borderRadius:10,
            width:width-20,
            marginLeft:10,
            borderColor: globalColors.bg_gray,
            flexDirection:'row'
          }}
        >
          <Image 
            source={{src:require('./../../img/test.png')}} 
            style={{
              height:50, 
              width:50,
            }}
          />
          <View
            style={{
              flex:1
            }}
          >
            <Text
              style={{
                fontWeight:'bold'
              }}
            >
              Dinner, 24 June 2020
            </Text>
            
            <Text
              style={{

              }}
            >
              IDR 20.000.000
            </Text>

          </View>
          <View 
            style={{
              width:30,
              height:30,
              alignSelf:'center',
              alignItems: 'center',
              borderRadius:100,
              paddingTop:3,
              backgroundColor:globalColors.bg_red,
            }} 
          >
            <MinusIcon size="4" color={globalColors.bg_white} />

          </View>

        </View>
      </View>
    );
  }

  renderTotalCash() {
    return (
      <View
        style={{
          flexDirection:'row'
        }}
      >
        <Text style={{fontWeight:'bold', fontSize:20, margin:10, marginTop:20, flex:1}}>Total Cash</Text>
        <Text style={{fontSize:20, margin:10, marginTop:20}}>40.000.000 IDR</Text>
        {/* <Text style={{fontStyle:20, margin:10, flex:1}}>Test</Text> */}
      </View>
    );
  }

  renderAttachFile() {
    return (
      <View
        style={{
        }}
      >

        <View
          style={{
            flexDirection:'row',
            margin:10,
            marginTop:20
          }}
        >
          <Text
            style={{
              flex:1,
              color:globalColors.bg_dark,
              fontSize:20,
              fontWeight:'bold'
            }}
          >
            Attach File
          </Text>

          <TouchableOpacity
            
          >
            <Text
              style={{
                color:globalColors.bg_green,
                fontSize:20,
                marginRight:10
              }}
            >
              Add File
            </Text>

          </TouchableOpacity>

        </View>

        {this.renderListFile()}
        {this.renderAttachForm()}

      </View>

    );
  }

  renderListFile() {
    return (
      <View
        style={{
          marginLeft:15,
          marginRight:15
        }}
      >
        <View
          style={{
            flexDirection:'row'
          }}
        >
          <Text
            style={{
              flex:1,
              color:globalColors.bg_primary,
            }}
          >
            Nota.jpg
          </Text>
          
          
          <View 
            style={{
              width:30,
              height:30,
              alignSelf:'center',
              alignItems: 'center',
              borderRadius:100,
              paddingTop:3,
              backgroundColor:globalColors.bg_red,
            }} 
          >
            <MinusIcon size="4" color={globalColors.bg_white} />

          </View>
        </View>
      </View>
    );
  }

  renderAttachForm() {
    return (
      <View
        style={{
          margin:10
        }}
      >
        <TextArea
          placeholder='Keterangan'
        >

        </TextArea>

        <Checkbox
          style={{marginTop:10}}
        >
          <Text
          style={{marginTop:10}}>Agreement</Text>
        </Checkbox>

        <View
          style={{
            marginTop:20,
            flexDirection:'row'
          }}
        >
          <Button
            style={{
              flex:1,
              backgroundColor:globalColors.bg_primary
            }}
          >
            <Text style={{color:globalColors.bg_white}}>Submit</Text>
          </Button>
          <Button
            style={{
              flex:1,
              backgroundColor:globalColors.bg_red
            }}
          >
            <Text style={{color:globalColors.bg_white}}>Cancel</Text>
          </Button>

        </View>
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
        {this.renderCashHeader()}
        {this.renderCashDetail()}
        {this.renderTotalCash()}
        {this.renderAttachFile()}
        
        
      </View>

        // <Container style={{backgroundColor: 'white'}}>
        //     <Header style={{backgroundColor: globalColors.bg_green_ttl, justifyContent: 'center', alignItems: 'center'}} androidStatusBarColor={globalColors.bg_green_ttl} iosBarStyle={'light-content'}>
        //     <Title style={{fontSize:24, fontWeight: '700', color: 'white'}}>{'About'}</Title>
        //     </Header>
        //     <Content>

        //         <View>
        //         <View
        //             style={{
        //             flexDirection: 'row',
        //             backgroundColor: `${globalColors.bg_green_ttl}1A`,
        //             paddingHorizontal: 16,
        //             paddingVertical: 8,
        //             alignItems: 'center',
        //             justifyContent:'center'
        //             }}>

        //         </View>
        //         </View>
                
        //     </Content>

        // </Container>
    );
  }
}
