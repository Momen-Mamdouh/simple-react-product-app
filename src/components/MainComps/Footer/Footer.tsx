import { Link } from "react-router-dom";
import AppLogo from "/logo.png";
import SocialList from "@/components/MicroComps/SocialList/SocialList";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Footer() {
  return (
    <footer className=" text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo and Description */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <Avatar className="w-10 h-10">
              <AvatarImage src={AppLogo} />
              <AvatarFallback>Logo</AvatarFallback>
            </Avatar>
            <span className="font-bold text-xl">Products App</span>
          </div>
          <p className="text-sm text-white mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti consequuntur sapiente nulla, quo aut molestiae?
          </p>
          <SocialList listClasses="flex gap-3 mt-2" />
        </div>

        {/* Pages */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Pages</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/portfolio.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Portfolios</a></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/services.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/portfolio.html" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Works</a></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Career</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Terms & Conditions</a></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Privacy Policy</a></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Cookies</a></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Careers</a></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Community</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-600 transition">Help Center</Link></li>
            <li><Link to="/" className="hover:text-blue-600 transition">Forum</Link></li>
            <li><Link to="/" className="hover:text-blue-600 transition">Webinars</Link></li>
            <li><a href="https://my-portfolio-mpa-ts.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">Professionals</a></li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-10 text-center text-sm text-white">
        © {new Date().getFullYear()} Products App. All rights reserved.
      </div>
    </footer>
  );
}
