import { signIn, getProviders, getSession } from "next-auth/react"
import { FcGoogle } from 'react-icons/fc'

export default function IndexPage({providers}) {
  return (
    <div className="flex min-h-screen">

    
    <div className="flex flex-row w-full">

      
      <div className='hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
        <div className="flex items-center justify-start space-x-3">
          <span className="bg-black rounded-full w-8 h-8"></span>
          <a href="#" className="font-medium text-xl">Thene</a>
        </div>
        <div className='space-y-5'>
          <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">
            A social network
          </h1>
          <p className="text-lg">
            Create & Share. <br />
            Responsibly. <br />
          </p>
          
        </div>
        <p className="font-medium">© 2022 Thene Inc.</p>
      </div>

      
      <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
        <div className="flex lg:hidden justify-between items-center w-full py-4">
          <div className="flex items-center justify-start space-x-3">
            <span className="bg-black rounded-full w-6 h-6"></span>
            <a href="#" className="font-medium text-lg">Brand</a>
          </div>
          <div className="flex items-center space-x-2">
            <span>Not a member? </span>
            <a href="#" className="underline font-medium text-[#070eff]">
              Sign up now
            </a>
          </div>
        </div>
        
        <div className="flex flex-1 flex-col  justify-center space-y-5 max-w-md">
          <div className="flex flex-col space-y-2 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Sign in to account</h2>
            <p className="text-md md:text-xl">log in to share your mind!</p>
          </div>
          <div className="flex flex-col max-w-md space-y-5">
            {/* <input type="text" placeholder="Username"
              className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
            <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Confirm
              with email</button>
            <div className="flex justify-center items-center">
              <span className="w-full border border-black"></span>
              <span className="px-4">Or</span>
              <span className="w-full border border-black"></span>
            </div> */}
            {Object.values(providers).map((provider) => (
                <div 
                  key={provider.name}
                  className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
                >
                  <button className="flex justify-center items-center" onClick={() => signIn(provider.id)}>
                    <FcGoogle className="mr-2" fontSize={30} /> <span>Sign in with {provider.name}</span> 
                  </button>
                </div>
              ))}
            {/* <button 
              onClick={e => {
                e.preventDefault()
                signIn()
              } }
              className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black relative"
            >
              
              <span className="absolute left-4">
                <FcGoogle fontSize={30} />
                </span>
                <span>Sign in with Google</span>
            </button> */}
          </div>
        </div>

        

      </div>
    </div>

  </div>
  )
}


export async function getServerSideProps(context) {

  const {req, res} = context
  const session = await getSession({req})
  const providers = await getProviders()

  if (res && session) {
    res.statusCode = 302
    res.setHeader('Location', '/feed')
    return {
      props: {
        session,
        providers
      }
    }
  }


  return {
    props: { providers },
  }
}