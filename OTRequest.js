 'use strict';
  import React, {
   Component
} from 'react';
 import {
   AppRegistry,
   StyleSheet,
   View,
   Text,
   TextInput,
   ListView,
   DeviceEventEmitter,
   KeyboardAvoidingView,
   DatePickerIOS,
   Modal,
   TouchableOpacity,
   Image
 }                             from 'react-native';
 import Beacons                from 'react-native-beacons-manager';
 import BluetoothState         from 'react-native-bluetooth-state';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Icon,Button,Container,Header,Content,Left,Right} from 'native-base';


export default class OTRequest extends React.Component {

constructor(props) {
    super(props);
    this.state = { 
        chosenDate: new Date(),
        modalDate: false,
        modalTime: false,
    };

    this.setDate = this.setDate.bind(this);

  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }
  openDate() {
    this.setState({modalDate:true});
  }
  closeDate() {
    this.setState({modalDate:false});
  }
  openTime() {
    this.setState({modalTime:true});
  }
  closeTime() {
    this.setState({modalTime:false});
  }

static navigationOptions = {
        title: 'OTRequest',
        headerLeft: null,
        tabBarLabel:'OTRequest',
        drawerIcon: ({tintColor}) => {
            return (
                <MaterialIcons
                name="alarm-on"
                size={24}
                style={{color: tintColor}}>
                </MaterialIcons>
                );
        }
    };

    render() {
        return (
        <Container>

            <Header>
                <Left>
                    <Icon name="ios-menu" onPress={() =>
                        this.props.navigation.navigate('DrawerOpen')}/>
                </Left>
            </Header>

            <Content ContentContainerStyle={{
                flex:1,
                alignItems: 'center',
                justifyContent: 'center',
             }}>



             <Modal
              state={styles.modal}
              visible={this.state.modalDate}
              animationType={'slide'}
              onRequestClose={() => this.closeModal()}
              transparent={'true'}
             >
             
              <View style={styles.Container1}>
                <Header>
                <Left>
                   <TouchableOpacity onPress = {() => this.closeDate()}>
                    <Text>
                        Cancle
                    </Text>
                   </TouchableOpacity>
                </Left>
                <Right>
                    <TouchableOpacity onPress = {() => this.closeDate()}>
                    <Text>
                        Confirm
                    </Text>
                   </TouchableOpacity>
                </Right>
                </Header>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                    mode ='date'
                    />
                </View>
             </Modal>


             <Modal
              state={styles.modal}
              visible={this.state.modalTime}
              animationType={'slide'}
              onRequestClose={() => this.closeTime()}
              transparent={'true'}
             >
             
              <View style={styles.Container1}>
                <Header>
                <Left>
                   <TouchableOpacity onPress = {() => this.closeTime()}>
                    <Text>
                        Cancle
                    </Text>
                   </TouchableOpacity>
                </Left>
                <Right>
                    <TouchableOpacity onPress = {() => this.closeTime()}>
                    <Text>
                        Confirm
                    </Text>
                   </TouchableOpacity>
                </Right>
                </Header>
                <DatePickerIOS
                    date={this.state.chosenDate}
                    onDateChange={this.setDate}
                    mode ='time'
                    />
                </View>
             </Modal>



                    <View style={styles.formContainer}>
                            
                            <Text style={styles.hdetail}>Date</Text>
                            <View style={styles.formDate}>

                            
                            <Text style={styles.Text}>
                                Date
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.chosenDate}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholderTextColor={'#e6e6ff'}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                enablesReturnKeyAutomatically={true}
                            />
                            <Icon name="calendar" style={styles.icon} onPress={() => this.openDate()}/>
                            </View>

                            <Text style={styles.hdetail}>Time</Text>
                            <View style={styles.formDate}>
                            
                            <Text style={styles.Text}>
                                From
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.chosenDate}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholderTextColor={'#e6e6ff'}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                enablesReturnKeyAutomatically={true}
                            />
                            <Icon name="clock" style={styles.icon} onPress={() => this.openTime()}/>
                            </View>

                            <View style={styles.formDate}>
                            <Text style={styles.Text}>
                                To
                            </Text>

                            <TextInput
                                style={styles.input}
                                placeholder={this.state.chosenDate}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholderTextColor={'#e6e6ff'}
                                returnKeyType={'next'}
                                onSubmitEditing={() => this.passwordInput.focus()}
                                enablesReturnKeyAutomatically={true}
                            />
                            <Icon name="clock" style={styles.icon} onPress={() => this.openTime()}/>
                            </View>
                            <Text style={styles.hdetail}>Comment</Text>
                            <TextInput
                                style={styles.comment}
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                placeholder={"Comment"}
                                placeholderTextColor={' rgb(59, 43, 43)'}
                                returnKeyType={'go'}
                                ref={(input) => this.passwordInput = input}
                            />
                    

                            <TouchableOpacity style={[styles.button,{backgroundColor: '#D95E54'}]} >
                                <Text style={styles.textBtn}>
                                  SEND
                                </Text>
                                
                            </TouchableOpacity>
                    </View>

            </Content>
       </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //backgroundColor: 'rgba(175, 214, 240,1.0)',
    },
    button: {
        paddingVertical: 10,
        marginVertical: 5,

    },
    textBtn: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',

    },
    Container1: {
        flex: 1,
        marginTop:320,
        marginBottom:20,
        backgroundColor: 'white',
    },
    Container2: {
        flex: 1,
        //backgroundColor: 'rgba(175, 214, 240,1.0)',
    },
   btleConnectionStatus: {
     fontSize: 20,
     paddingTop: 20
   },
   headline: {
     fontSize: 20,
     paddingTop: 20
   },
   row: {
     padding: 8,
     paddingBottom: 16
   },
   input: {
        height: 40,
        width:200,
        backgroundColor: 'rgb(240, 245, 245)',
        marginBottom: 10,
        color: '    rgb(92, 138, 138)',
        paddingHorizontal: 10
    },
    icon: {
        marginBottom: 10,
        paddingHorizontal: 10
    },
    Text: {
     fontSize: 11,
     padding:10,
     width:50
   },
   formContainer: {
        padding: 20,
        marginBottom:100,
    },
    formDate: {
        flexDirection:'row',
    },
    modal: {
        alignItems:'center',
        justifyContent:'center',
    },
    img1:{
    width:90,
    height:90,
    },
    s1: {
    margin : 10,
  padding:15,
  backgroundColor:'rgb(147, 108, 108)',
  flexDirection:'row',
  },
  db:{
    flex:1
  },
  db2:{
    flex:2
  },
  detail:{
    textAlign:'right',
    color:'white',
    fontSize:13,
  },
  hdetail:{
    textAlign:'left',
    fontSize: 15,
    color: '#000',
    fontWeight: '700',
    marginBottom: 10
  },
  comment: {
        height: 200,
        backgroundColor: 'rgb(240, 245, 245)',
        marginBottom: 10,
        color: '  rgb(59, 43, 43)',
        paddingHorizontal: 10
    },
});

 AppRegistry.registerComponent(
   'reactNativeBeaconExample',
   () => reactNativeBeaconExample
);