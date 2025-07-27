
import { LinkAsButton } from "./components/MicroComps/LinkAsButton/LinkAsButton";


export default function NotFound() {
  return (
      <main className="grid h-screen place-items-center  px-6 pt-24 sm:pt-32 lg:px-8 shiny-stars-bg">
          <div className="text-center z-[1003]">
            <p className="text-base font-semibold ">{'404'}</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance  sm:text-7xl">{'Page not found'}</h1>
            <p className="mt-6 text-lg font-medium text-pretty  sm:text-xl/8">{'Sorry, we couldn’t find the page you’re looking for.'}</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <LinkAsButton BtnText="Home" link="/home"/>
            </div>
          </div>
      </main>
  )
}