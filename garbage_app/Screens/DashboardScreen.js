import {View,Text, Button,TouchableOpacity,StyleSheet} from 'react-native';
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
    return(
        //justify
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
       <Text style={{marginVertical:10}}>Welcome to dashboard</Text>
       <TouchableOpacity style={styles.button} onPress={handlelogout}>
       <Text style={styles.buttonText}>Logout</Text>
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
})