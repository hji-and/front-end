import React from 'react';
import { Facebook, Youtube, Instagram, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { SOCIAL_POSTS } from '../constants';

const SocialMedia: React.FC = () => {
  return (
    <section className="bg-doosan-dark py-24 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <p className="text-sm font-medium text-gray-400 mb-2">Social Media</p>
          <h2 className="text-3xl font-bold text-white">
            두산로보틱스의 혁신적인 기술과<br />
            소식을 만나보세요.
          </h2>
           <div className="flex gap-4 mt-6 text-gray-400">
               <LinkedinIcon />
               <Youtube size={20} />
               <Instagram size={20} />
               <Facebook size={20} />
           </div>
        </div>

        {/* Scroll Container */}
        <div className="relative group">
            <div className="flex space-x-6 overflow-x-auto pb-8 hide-scrollbar snap-x">
            {SOCIAL_POSTS.map((post) => (
                <div key={post.id} className="min-w-[300px] bg-white rounded-lg overflow-hidden snap-start cursor-pointer hover:shadow-xl transition-shadow">
                    <div className="relative h-48 bg-gray-200">
                        <img src={post.image} alt="Social Content" className="w-full h-full object-cover" />
                        {post.platform === 'youtube' && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                                <Play fill="white" className="text-white w-12 h-12" />
                            </div>
                        )}
                        <div className="absolute top-4 right-4 bg-white p-1.5 rounded-full shadow-sm">
                             {post.platform === 'youtube' && <Youtube size={16} className="text-red-600" />}
                             {post.platform === 'facebook' && <Facebook size={16} className="text-blue-600" />}
                             {post.platform === 'instagram' && <Instagram size={16} className="text-pink-600" />}
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                             <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                                 <img src={`https://picsum.photos/id/${post.id + 50}/100/100`} className="w-full h-full object-cover"/>
                             </div>
                             <div className="text-xs">
                                 <p className="font-bold text-black">{post.user}</p>
                                 <p className="text-gray-500">@doosan...</p>
                             </div>
                        </div>
                        <p className="text-sm text-gray-700 line-clamp-3">
                            {post.description}
                        </p>
                    </div>
                </div>
            ))}
            </div>
            
            {/* Custom Nav Buttons for scroll visual cues */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-2 shadow-lg hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronLeft size={24} />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white rounded-full p-2 shadow-lg hidden md:block opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={24} />
            </button>
        </div>
      </div>
    </section>
  );
};

const LinkedinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
)

export default SocialMedia;