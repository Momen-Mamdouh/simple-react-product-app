import{ useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function ErrorModal({errMessgae, errName}:{errMessgae:string, errName:string}) {
  const dialogRef = useRef<HTMLDialogElement>(null);


  useEffect(()=>{
    if(errMessgae){
         dialogRef.current?.showModal();;
    }
    else{
        dialogRef.current?.close();
    }
  },[errMessgae])


  const closeDialog = () => {
    dialogRef.current?.close();
  };

  return (
    <>


      <dialog  ref={dialogRef} className="fixed w-full h-full inset-0 z-[1000] flex items-center justify-center bg-transparent p-0">
        <div  className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm pointer-events-auto " onClick={closeDialog}/>

        <div tabIndex={0} className="relative z-[1002] mx-auto mt-20 -translate-y-1/2 rounded-lg bg-white p-6 shadow-xl sm:w-fit sm:max-w-lg shiny-stars-bg text-white pointer-events-auto">


          <div className="errorMessage sm:flex sm:items-start ">
            <div className="errorHeader mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
                className="size-6 text-red-600"
              >
                <path
                  d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            
            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left ">
              <h3 className="text-base font-semibold ">
                    {errName} 
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                 {errMessgae}
                </p>
              </div>
            </div>
          </div>

          <div className="errorBtns mt-5 sm:mt-4 sm:flex sm:flex-row-reverse justify-center gap-5">
            <button
              type="button"
              onClick={closeDialog}
              className=" z-[1003] inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white hover:bg-red-500 sm:ml-3 sm:w-auto"
            >
              <Link to={'home'} >Close</Link>
            </button>
            <button
              type="button"
              onClick={closeDialog}
              className="mt-3  z-[1003] inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            >
              <Link to={'home'} >Home</Link>
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
}
