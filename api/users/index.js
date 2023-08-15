import Supabase from '../index'


 async function Login(email,password) {
  let { data, error } = await Supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  return "loggedin";
}




 async function SignUp(email,password) {
let { data, error } = await Supabase.auth.signUp({
    email: email,
    password: password,
  })

 }
// thid party login

// let { data, error } = await Supabase.auth.signInWithOAuth({
//     provider: 'google'
//   })

// getuser

async function GetUser() {
  const {data: { user }} = await Supabase.auth.getUser();

  return user
}



async function signUpMagicLink(email){
  let { data, error } = await supabase.auth.api.inviteUserByEmail(email)
  return 'signed up successfully'
}


//recover password
async function RecoverPassword(){
  let { data, error } = await Supabase.auth.resetPasswordForEmail(email)
}


//user logout

async function Logout() {
  let { error } = await Supabase.auth.signOut();
  return "logged out";
}


export default{
    SignUp,
    Login,
    GetUser,
    Logout,
    RecoverPassword,
    signUpMagicLink
}
