
import { Clock, MapPin, Stethoscope } from "lucide-react";
import { Doctor } from "@/data/doctors";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const navigate = useNavigate();

  return (
    <Card className="doctor-card overflow-hidden border rounded-lg bg-white">
      <div className="p-4">
        <div className="flex flex-col md:flex-row items-start gap-4">
          <div className="flex-shrink-0">
            <img 
              src={doctor.photo} 
              alt={doctor.name}
              className="w-24 h-24 object-cover rounded-full border-2 border-medical-100"
            />
          </div>
          <div className="flex-grow">
            <h3 className="text-xl font-semibold text-gray-900">{doctor.name}</h3>
            <div className="flex items-center text-gray-600 mt-1">
              <Stethoscope size={16} className="mr-1 text-medical-500" />
              <span>{doctor.specialty}</span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <MapPin size={16} className="mr-1 text-medical-500" />
              <span>{doctor.clinics.length > 0 ? doctor.clinics[0].city : "N/A"}</span>
            </div>
            <div className="flex items-center text-gray-600 mt-1">
              <Clock size={16} className="mr-1 text-medical-500" />
              <span>{doctor.experience} years experience</span>
            </div>
            
            <div className="mt-2 flex items-center">
              <div className="flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="ml-1 text-gray-600 text-sm">{doctor.rating} ({doctor.reviews})</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-3">
          <p className="text-gray-600 text-sm line-clamp-2">{doctor.bio}</p>
        </div>
        
        <div className="flex justify-end mt-4">
          <Button 
            onClick={() => navigate(`/doctor/${doctor.id}`)} 
            className="bg-medical-600 hover:bg-medical-700 text-white"
          >
            View Profile
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
