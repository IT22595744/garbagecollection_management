import {View,Text, Button,TouchableOpacity,StyleSheet, Image} from 'react-native';
import {signOut,onAuthStateChanged} from 'firebase/auth';
import auth from "../Services/firebaseAuth";

export default function DashboardScreen({navigation}){

    const handlelogout=()=>{
         signOut(auth)
         .then(()=>{
          navigation.navigate('Login')
         })
        // onAuthStateChanged(auth,(user)=>{
        //   if(user){
        //     console.log('LoggedIn')
        //     console.log(user)
        //   }else {
        //     console.log('Logged out')
        //   }
        // })
    }
    const handleQRScanner = () => {
      navigation.navigate('QRScanner');
  };
    return(
        //justify
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text style={{marginVertical:10}}>Welcome to dashboard</Text>
       <TouchableOpacity style={styles.button} onPress={handlelogout}>
       <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.profileButton}  onPress={handleQRScanner}>
        <Image source={require('../assets/images/QRScanner.png')} style={styles.image}/>
      </TouchableOpacity>
    </View>
    )
}

const styles = StyleSheet.create({
    button: {
    width: '30%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  profileButton: {
    borderRadius: 8, // More rounded corners
    paddingHorizontal: 10, // Additional padding if needed
},
image: {
  width: 50,  // Adjust size as needed
  height: 50, // Adjust size as needed
  resizeMode: 'contain',
},
})