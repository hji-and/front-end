import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="ml-80 bg-white">
      <div className="grid grid-cols-2 min-h-[600px]">
        {/* Text Side */}
        <div className="bg-gray-50 p-16 flex flex-col justify-center">
          <div className="max-w-md">
            <h2 className="text-4xl mb-6">
              Creative work that<br />
              makes a difference
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              I'm a creative designer passionate about crafting beautiful and functional experiences. 
              My work focuses on solving complex problems through simple, elegant solutions.
            </p>
            <button className="bg-[#00d9c0] text-black px-8 py-3 hover:opacity-90 transition-opacity">
              View Projects
            </button>
          </div>
        </div>

        {/* Image Side */}
        <div className="relative overflow-hidden">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1736005819976-b80bd7710b63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjB3aGl0ZXxlbnwxfHx8fDE3NjQwNDI4ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Fashion model"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
