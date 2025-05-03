
import Header from "@/components/Header";
import DoctorDetails from "@/components/DoctorDetails";

const DoctorProfile = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearchChange={() => {}} />
      <DoctorDetails />
      
      <footer className="bg-white border-t mt-12">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>&copy; {new Date().getFullYear()} DOC Finder: Health care - Doctor Directory</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DoctorProfile;
