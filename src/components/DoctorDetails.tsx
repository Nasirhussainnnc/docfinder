
import { useParams, useNavigate } from "react-router-dom";
import { doctorsData } from "@/data/doctors";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, Hospital, MapPin, Stethoscope, User } from "lucide-react";

const DoctorDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const doctor = doctorsData.find(doc => doc.id === id);
  
  if (!doctor) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Doctor not found</h2>
        <Button onClick={() => navigate('/')} className="bg-medical-600">
          Back to Home
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <Button 
        variant="outline" 
        className="mb-6" 
        onClick={() => navigate('/')}
      >
        &larr; Back to Doctors
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center mb-6">
                <img 
                  src={doctor.photo} 
                  alt={doctor.name}
                  className="w-32 h-32 object-cover rounded-full border-4 border-medical-100 mb-4"
                />
                <h1 className="text-2xl font-bold text-gray-900">{doctor.name}</h1>
                <div className="flex items-center text-gray-600 mt-2">
                  <Stethoscope size={16} className="mr-1 text-medical-500" />
                  <span>{doctor.specialty}</span>
                </div>
                <div className="text-gray-600 mt-1">{doctor.qualifications}</div>
                
                <div className="mt-3 flex items-center">
                  <div className="flex items-center">
                    {Array(5).fill(0).map((_, i) => (
                      <svg 
                        key={i}
                        className={`w-5 h-5 ${i < Math.round(doctor.rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
                        fill="currentColor" 
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-gray-600">{doctor.rating} ({doctor.reviews})</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 text-medical-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Experience</div>
                    <div className="text-sm text-gray-600">{doctor.experience} years</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  <User className="w-5 h-5 text-medical-500 mr-2" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">Languages</div>
                    <div className="text-sm text-gray-600">{doctor.languages.join(", ")}</div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full bg-medical-600 hover:bg-medical-700">
                    Book Appointment
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="md:col-span-2">
          <Tabs defaultValue="about">
            <TabsList className="w-full mb-6">
              <TabsTrigger value="about" className="flex-1">About</TabsTrigger>
              <TabsTrigger value="clinics" className="flex-1">Clinics & Schedule</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">About {doctor.name}</h2>
                  <p className="text-gray-700 whitespace-pre-line">{doctor.bio}</p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="clinics" className="mt-0">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-xl font-semibold mb-4">Clinic Locations & Timings</h2>
                  
                  <div className="space-y-6">
                    {doctor.clinics.map((clinic) => (
                      <div key={clinic.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                        <h3 className="text-lg font-medium text-gray-900 mb-2">{clinic.name}</h3>
                        <div className="flex items-start mb-3">
                          <MapPin className="w-5 h-5 text-medical-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">
                            {clinic.address}, {clinic.city}
                          </span>
                        </div>
                        <div className="flex items-center mb-4">
                          <Hospital className="w-5 h-5 text-medical-500 mr-2" />
                          <span className="text-gray-700">{clinic.phone}</span>
                        </div>
                        
                        <h4 className="text-md font-medium text-gray-900 mb-2">Working Hours:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {clinic.timings.map((timing, index) => (
                            <div key={index} className="flex items-center p-2 bg-gray-50 rounded-md">
                              <Calendar className="w-4 h-4 text-medical-500 mr-2" />
                              <span className="text-gray-700 font-medium mr-1">{timing.day}:</span>
                              <span className="text-gray-600">{timing.hours}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
