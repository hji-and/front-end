import React from 'react';
import { ArrowRight } from 'lucide-react';

const Solutions: React.FC = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex justify-between items-end mb-16 border-b border-gray-200 pb-6">
            <h2 className="text-sm font-bold text-gray-800">Solutions</h2>
            <a href="#" className="text-xs font-medium text-gray-500 hover:text-black flex items-center gap-1">
                전체 솔루션 보기 <ArrowRight size={12}/>
            </a>
        </div>

        {/* Dr. Presso */}
        <div className="flex flex-col md:flex-row bg-gray-50 mb-20">
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <h3 className="text-5xl font-bold mb-6">Dr.Presso</h3>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              탁월한 안전성과 편의성을 자랑하는 두산로보틱스의 국내 1위 협동로봇이 만드는 프리미엄 커피를 경험해보세요.
            </p>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto bg-gray-200">
            <img src="https://picsum.photos/id/425/800/600" alt="Dr Presso" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Palletizing */}
        <div className="flex flex-col md:flex-row bg-gray-50">
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center order-1">
            <span className="inline-block px-3 py-1 bg-gray-200 rounded-full text-xs font-semibold text-gray-600 mb-4 w-fit">산업용</span>
            <h3 className="text-5xl font-bold mb-6">Palletizing</h3>
            <p className="text-gray-600 mb-8 max-w-md leading-relaxed">
              팔레타이징 솔루션은 물류 및 운송 과정에서 물건을 팔레트에 정렬하거나 적재하는 팔레타이징에 특화된 협동로봇으로 자동화된 팔레타이징 작업을 통해 생산성과 안전성을 극대화합니다.
            </p>
          </div>
          <div className="md:w-1/2 h-80 md:h-auto bg-gray-200 order-2">
            <img src="https://picsum.photos/id/808/800/600" alt="Palletizing" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6 bg-doosan-blue text-white p-12 md:p-16 flex flex-col md:flex-row items-center justify-between rounded-sm">
            <div className="md:w-1/2 mb-8 md:mb-0">
                <div className="w-12 h-1 bg-white mb-6"></div>
                <h3 className="text-xl md:text-2xl font-bold leading-relaxed">
                    두산로보틱스 교육 키트는 여러분이 인증된 협동로봇 엔지니어가 될 수 있는 기회를 제공합니다. 협동로봇을 직접 티칭하고 어떻게 작업자와 협업 할 수 있는지 이해할 수 있는 첫번째 단계입니다.
                </h3>
            </div>
            <div className="md:w-1/3">
                <img src="https://picsum.photos/id/445/400/200" alt="Education Kit" className="rounded shadow-lg" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;