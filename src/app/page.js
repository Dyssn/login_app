import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div>
      <head>
           <title>Login Page</title>
           <link rel="icon" href="/faviicon.ico" />
      </head>

      <main className="flex flex-col items-center justify w-full flex-1 px-20 text-center">

         <div className="bd-white">  
            {/*sign in section */}
            <div><p>Sign in Section</p></div>

            {/*sign up section */}
            <div><p>Sign up Section</p></div>

          </div> 
      </main>
      
     
    </div>
  )
}
