import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HeroSection } from './components/HeroSection';
import { ImageGallery } from './components/ImageGallery';
import { ContentSection } from './components/ContentSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      
      <div className="flex-1">
        <Header />
        
        <main>
          <HeroSection />
          
          <ContentSection 
            title="MAKING THE UNUSUAL HAPPEN"
            subtitle="The more invisible the interface, the better."
            description="Working in the world of design has taught me to be passionate about innovation. I've had the honor of working with some truly outstanding teams."
          />
          
          <ImageGallery 
            images={[
              { url: "https://images.unsplash.com/photo-1633807422423-05410d114d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NDA0Mjg4M3ww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Architecture" },
              { url: "https://images.unsplash.com/photo-1575263977162-e5598ef5366a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwZG9vciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQwNDI4ODN8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Pink door" }
            ]}
            layout="horizontal"
          />

          <ContentSection 
            title="MAKING IT BEAUTIFUL THAT PEOPLE WANT TO USE"
            description="I believe that great design is not just about aesthetics, but about creating meaningful experiences that resonate with people."
            list={[
              "User Experience",
              "Interface Design",
              "Visual Design",
              "Brand Identity"
            ]}
          />

          <ContentSection 
            title="USING VISUAL DESIGN TO SOLVE PROBLEMS"
            description="Design thinking is at the core of everything I do. It's about understanding the problem before jumping to solutions."
          />

          <ImageGallery 
            images={[
              { url: "https://images.unsplash.com/photo-1723896816226-633d198b034b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBob2xkaW5nJTIwc2lnbnxlbnwxfHx8fDE3NjQwNDI4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Person with sign" }
            ]}
            layout="single"
          />

          <ImageGallery 
            images={[
              { url: "https://images.unsplash.com/photo-1597434429739-2574d7e06807?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGxhbmRzY2FwZSUyMG5hdHVyZXxlbnwxfHx8fDE3NjQwMjM4NTF8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Mountain landscape" },
              { url: "https://images.unsplash.com/photo-1695067439143-81a61a8c904a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5ZWxsb3clMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjQwNDI4NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Yellow building" }
            ]}
            layout="horizontal"
          />

          <ImageGallery 
            images={[
              { url: "https://images.unsplash.com/photo-1599780268914-0365646623f9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmljeWNsZSUyMHZpbnRhZ2V8ZW58MXx8fHwxNzY0MDQyODgzfDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Bicycle" }
            ]}
            layout="single"
          />

          <ImageGallery 
            images={[
              { url: "https://images.unsplash.com/photo-1618699589738-9e01381b37c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWQlMjBmbGFncyUyMG1pbmltYWx8ZW58MXx8fHwxNjQwNDI4NzN8MA&ixlib=rb-4.1.0&q=80&w=1080", alt: "Red flags" },
              { url: "https://images.unsplash.com/flagged/photo-1576697010739-6373b63f3204?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYXB0b3AlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2NDA0Mjg4NXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Workspace" }
            ]}
            layout="horizontal"
          />

          <ImageGallery 
            images={[
              { url: "https://images.unsplash.com/photo-1652439657905-4fce92306f61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBsYW5kc2NhcGUlMjBzYW5kfGVufDF8fHx8MTc2NDAzOTA2NXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "Desert landscape" },
              { url: "https://images.unsplash.com/photo-1750810908078-a4729905bf4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwc2t5bGluZSUyMHVyYmFufGVufDF8fHx8MTc2Mzk3NDk2MXww&ixlib=rb-4.1.0&q=80&w=1080", alt: "City skyline" }
            ]}
            layout="horizontal"
          />

          <ImageGallery 
            images={[
              { url: "https://images.unsplash.com/photo-1696357519719-985a9e8f2821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMGNvcnJpZG9yJTIwcGVyc3BlY3RpdmV8ZW58MXx8fHwxNzY0MDQyODg2fDA&ixlib=rb-4.1.0&q=80&w=1080", alt: "White corridor" }
            ]}
            layout="single"
          />

          <ContentSection 
            title="CREATIVE DESIGNER BASED IN NEW YORK"
            description="I'm always looking for new opportunities to collaborate and create meaningful experiences."
          />

          <Footer />
        </main>
      </div>
    </div>
  );
}
