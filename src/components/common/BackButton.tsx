
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const BackButton = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleGoBack}
      className="flex items-center text-white hover:text-dental-light transition-colors"
    >
      <ArrowLeft className="mr-1 h-4 w-4" />
      Volver
    </Button>
  );
};

export default BackButton;
