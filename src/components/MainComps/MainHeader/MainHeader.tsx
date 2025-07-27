import { Link } from "react-router-dom";



interface IMainHeaderProps{
    headerText:string,
    bgImg?:string,
}



export default function MainHeader({bgImg, headerText}:IMainHeaderProps){




    return(

        <header className={` h-[50vh] bg-center bg-no-repeat bg-cover  flex items-center justify-center text-white text-4xl`}
                style={{
                    backgroundImage: `linear-gradient(90deg, rgba(2,0,36,0.4) 0%, rgba(9,9,121,0.2) 100%), url(${bgImg})`,
                }}>
                    
         
                <div className="info flex w-1/2 mx-auto md:flex-row items-center justify-center text-center gap-2.5  rounded-xl">
                        <h1 className="text-4xl md:text-start ">{headerText} </h1>
                        /           
                        <Link to='/home' className="text-3xl text-slate-100">Home</Link>
                        
                </div>

                
                 
      
            
        </header> 
    )
}

