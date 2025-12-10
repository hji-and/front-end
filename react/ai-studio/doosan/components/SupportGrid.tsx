import React from 'react';
import { Headphones, MapPin, BookOpen, UserPlus } from 'lucide-react';

const SupportGrid: React.FC = () => {
  const items = [
    { title: '구매 문의', desc: '로봇 도입을 고민하고 계신가요? 전문가에게 1:1 상담을 받아보세요.', icon: <UserPlus className="text-blue-500 w-12 h-12" /> },
    { title: '가까운 대리점 찾기', desc: '고객님에게 가장 가까운 대리점을 안내해 드립니다.', icon: <MapPin className="text-blue-500 w-12 h-12" /> },
    { title: '두산 로봇 교육', desc: '단계별 온/오프라인 교육으로 로봇 운용 능력을 향상시켜보세요.', icon: <BookOpen className="text-blue-500 w-12 h-12" /> },
    { title: 'A/S 신청', desc: '로봇 전문가가 365일 고객님의 A/S를 지원합니다.', icon: <Headphones className="text-blue-500 w-12 h-12" /> },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-10 rounded-lg flex items-center justify-between hover:shadow-lg transition-shadow cursor-pointer">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-500 max-w-xs">{item.desc}</p>
              </div>
              <div className="bg-white p-4 rounded-full shadow-sm">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportGrid;