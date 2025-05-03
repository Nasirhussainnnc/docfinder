
import { specialties } from "@/data/doctors";
import { Button } from "@/components/ui/button";

interface SpecialtyFilterProps {
  selectedSpecialty: string | null;
  onSelectSpecialty: (specialty: string | null) => void;
}

const SpecialtyFilter = ({ selectedSpecialty, onSelectSpecialty }: SpecialtyFilterProps) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">Specialties</h3>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => onSelectSpecialty(null)}
          variant={selectedSpecialty === null ? "default" : "outline"}
          size="sm"
          className={selectedSpecialty === null ? "bg-medical-600" : ""}
        >
          All
        </Button>
        {specialties.map((specialty) => (
          <Button
            key={specialty}
            onClick={() => onSelectSpecialty(specialty)}
            variant={selectedSpecialty === specialty ? "default" : "outline"}
            size="sm"
            className={selectedSpecialty === specialty ? "bg-medical-600" : ""}
          >
            {specialty}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SpecialtyFilter;
