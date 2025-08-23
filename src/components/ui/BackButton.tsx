import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Button
      variant="ghost"
      onClick={handleBack}
      className="mb-6 text-muted-foreground hover:text-foreground"
    >
      <ChevronLeft className="w-4 h-4 mr-2" />
      Back
    </Button>
  );
};

export default BackButton;