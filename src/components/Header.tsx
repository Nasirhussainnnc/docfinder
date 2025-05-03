
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onSearchChange: (value: string) => void;
}

const Header = ({ onSearchChange }: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-medical-700">
              <span className="text-medical-600">DOC</span> Finder
            </h1>
          </div>
          <div className="relative flex-1 max-w-md">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input 
                className="pl-10 pr-4 py-2 w-full" 
                placeholder="Search for doctors by name or specialty..."
                onChange={(e) => onSearchChange(e.target.value)}
              />
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Button variant="ghost" className="text-gray-600 hover:text-medical-600">Home</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-medical-600">Doctors</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-medical-600">About</Button>
            <Button variant="ghost" className="text-gray-600 hover:text-medical-600">Contact</Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
