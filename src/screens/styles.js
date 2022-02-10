const React = require('react-native');
const {Platform} = React;
import globalColors from '../utils/globalColors';

export default {
    
    body:{
        flex:1,
        backgroundColor:'#7DC1D3'
    },
    logoContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    logo: {
        width: 175,
        height: 175,
        margin:20
    },
    text: {
        color: "#D8D8D8",
        bottom: 6,
        marginTop: 5
    },
    footer: {
        flex:1, 
        flexDirection:'row', 
        justifyContent:"space-between", 
        alignItems:'flex-end', 
        padding: 20 
    },
    shadow: {
        ...Platform.select({
          ios: {
            shadowOffset: {height: 1},
            shadowColor: 'grey',
            shadowOpacity: 0.5,
          },
          android: {
            elevation: 3,
          },
        }),
        backgroundColor:globalColors.bg_white,
      },
};
