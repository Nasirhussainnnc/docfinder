
import { useState } from "react";
import Header from "@/components/Header";
import DoctorCard from "@/components/DoctorCard";
import SpecialtyFilter from "@/components/SpecialtyFilter";
import { doctorsData } from "@/data/doctors";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  
  const filteredDoctors = doctorsData.filter(doctor => {
    // Filter by search term
    const matchesSearch = searchTerm === "" || 
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
      
    // Filter by specialty
    const matchesSpecialty = selectedSpecialty === null || doctor.specialty === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchChange={setSearchTerm} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <SpecialtyFilter 
                selectedSpecialty={selectedSpecialty}
                onSelectSpecialty={setSelectedSpecialty}
              />
            </div>
          </aside>
          
          <main className="flex-grow">
            <h2 className="text-2xl font-bold mb-6">Our Doctors</h2>
            
            {filteredDoctors.length === 0 ? (
              <div className="text-center py-8 bg-white rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900 mb-2">No doctors found</h3>
                <p className="text-gray-600">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6">
                {filteredDoctors.map(doctor => (
                  <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
      
      <footer className="bg-white border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} DOC Finder: Health care - Doctor Directory</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
