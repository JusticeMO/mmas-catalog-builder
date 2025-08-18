import { Badge } from "@/components/ui/badge";

export const TrademarksSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4 animate-fade-in">
          Registered Trademarks
        </h2>
        
        <div className="flex flex-col lg:flex-row justify-center items-center space-y-8 lg:space-y-0 lg:space-x-16 mt-12">
          {/* SFIDA Trademark */}
          <div className="animate-slide-in" style={{ animationDelay: "200ms" }}>
            <div className="text-center">
              <Badge variant="outline" className="text-lg px-6 py-2 mb-4 border-primary text-primary">
                SFIDA TRADEMARK
              </Badge>
              <div className="space-y-2">
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-2 h-2 bg-primary rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Central Count */}
          <div className="text-center animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="text-6xl lg:text-8xl font-bold text-primary mb-2">
              26+
            </div>
            <p className="text-lg text-muted-foreground font-medium">
              Years of Excellence
            </p>
          </div>

          {/* A1 Trademark */}
          <div className="animate-slide-in" style={{ animationDelay: "600ms" }}>
            <div className="text-center">
              <Badge variant="outline" className="text-lg px-6 py-2 mb-4 border-primary text-primary">
                #A1 TRADEMARK
              </Badge>
              <div className="space-y-2">
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <div key={star} className="w-2 h-2 bg-primary rounded-full"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "800ms" }}>
          <p className="text-muted-foreground leading-relaxed">
            MMAS International Ltd has been a trusted name in the hardware industry for over 26 years. 
            Our registered trademarks SFIDA and #A1 represent our commitment to quality, innovation, 
            and customer satisfaction in every product we manufacture and distribute.
          </p>
        </div>
      </div>
    </section>
  );
};