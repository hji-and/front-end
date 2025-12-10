import React from 'react';
import { Facebook, Youtube, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0f1012] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
            <div>
              <h4 className="font-bold mb-6 text-sm">제품 & 솔루션</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white">헤리티지</a></li>
                <li><a href="#" className="hover:text-white">제품</a></li>
                <li><a href="#" className="hover:text-white">솔루션</a></li>
                <li><a href="#" className="hover:text-white">소프트웨어</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm">교육 & 서비스</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white">교육</a></li>
                <li><a href="#" className="hover:text-white">다운로드 센터</a></li>
                <li><a href="#" className="hover:text-white">서비스 센터</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm">투자정보</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white">IR 자료실</a></li>
                <li><a href="#" className="hover:text-white">거버넌스</a></li>
                <li><a href="#" className="hover:text-white">뉴스 & 이벤트</a></li>
                <li><a href="#" className="hover:text-white">공고/공시</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6 text-sm">회사소개</h4>
              <ul className="space-y-3 text-xs text-gray-400">
                <li><a href="#" className="hover:text-white">기업정보</a></li>
                <li><a href="#" className="hover:text-white">지속가능경영</a></li>
                <li><a href="#" className="hover:text-white">뉴스 & 이벤트</a></li>
                <li><a href="#" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-10 md:mt-0 flex flex-col items-end">
             <div className="mb-6 relative w-48">
                <button className="w-full bg-[#1a1b1e] border border-gray-700 rounded px-4 py-2 text-xs flex justify-between items-center text-gray-300">
                    Related Sites
                    <ArrowUp size={12} className="rotate-180"/>
                </button>
             </div>
             <div className="text-right text-xs text-gray-400 space-y-2">
                 <p><a href="#" className="hover:text-white font-bold text-white">커리어 두산</a></p>
                 <p><a href="#" className="hover:text-white">법적고지</a></p>
                 <p><a href="#" className="hover:text-white">이용약관</a></p>
                 <p><a href="#" className="hover:text-white font-bold text-white">개인정보처리방침</a></p>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <h1 className="text-2xl font-bold tracking-tighter mr-4">DOOSAN</h1>
            <span className="text-xs text-gray-500">© 2025 두산로보틱스(주).</span>
          </div>
          
          <div className="flex space-x-4">
             <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={18} /></a>
             <a href="#" className="text-gray-400 hover:text-white"><Youtube size={18} /></a>
             <a href="#" className="text-gray-400 hover:text-white"><Instagram size={18} /></a>
             <a href="#" className="text-gray-400 hover:text-white"><Facebook size={18} /></a>
          </div>
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-40">
        <button className="bg-blue-600 text-white p-3 rounded shadow-lg hover:bg-blue-700 transition-colors">
            <ArrowUp size={20} onClick={scrollToTop} />
        </button>
      </div>
    </footer>
  );
};

export default Footer;