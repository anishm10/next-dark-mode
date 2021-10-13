import { useTheme } from "next-themes";

const Navbar=()=>{
    const {theme,setTheme}=useTheme();
    
  
    return(
      <div className='flex justify-between p-3 bg-light-secondary dark:bg-dark-secondary text-dark-primary dark:text-light-primary'>
        <div className='font-bold my-auto text-lg'>
          Next Dark Mode
        </div>
        <div>
          <button onClick={()=>setTheme(theme=='light'?'dark':'light')} className='border-2 border-dark-primary dark:border-light-primary rounded-lg p-2'>
            Switch to {theme=='light'?'Dark Mode':'Light Mode'}
          </button>
        </div>
      </div>
    )
  }

  export default Navbar;