'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Home() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement query handling
    console.log('Query submitted:', query);
  };

  const handleExampleClick = (example: string) => {
    setQuery(example);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-[#222] text-white w-full py-[18px] flex justify-between items-center">
        <span className="ml-10 text-lg font-medium">
          SKT Enterprise 상품/서비스 AI Assistant
        </span>
        <span className="mr-10">AI Work Portal</span>
      </header>

      {/* Hero Section */}
      <div className="max-w-[800px] mx-auto mt-12 bg-white rounded-xl shadow-lg p-10 text-center">
        <h1 className="text-[2em] mb-1">
          SKT Enterprise 상품/서비스 AI Assistant
        </h1>
        <div className="text-[#4285f4] text-xs mb-6 text-right">
          Enterprise사업부 Solution사업지원팀
        </div>
        
        <div className="text-left mb-12 text-sm leading-6">
          <ul className="pl-[18px]">
            <li>담당조직에서 제공한 문서를 참조해서 답변을 생성합니다.</li>
            <li>제공된 문서와 관련이 없는 질문에 대해서는 답변을 생성하지 못할 수 있습니다.</li>
            <li className="text-red-600 font-semibold">
              Assistant가 틀린 답변을 할 수 있으니 반드시 근거 문서 내용을 확인 바랍니다.<br />
              (문서의 내용만으로 충분하지 않다면 담당조직에 확인 바랍니다.)
            </li>
            <li>
              문제점이나 질문은 AI Work Portal <a href="#" className="text-[#4285f4] underline">"무엇이든 물어보세요"</a> 게시판에 등록해 주세요.
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="mb-12 flex">
          <Input
            type="text"
            placeholder="질문을 입력해 주세요."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-[70%] p-[18px] border border-gray-300 rounded-l-lg text-base focus:outline-none"
          />
          <Button
            type="submit"
            className="p-[18px] px-[22px] bg-[#4285f4] text-white rounded-r-lg text-lg hover:bg-[#3367d6]"
          >
            검색
          </Button>
        </form>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => handleExampleClick("무선 사물인터넷 상품은 뭐가 있어?")}
            className="px-4 py-3 border border-gray-200 rounded-lg hover:border-[#4285f4] hover:text-[#4285f4] transition-colors text-sm bg-sky-50 hover:bg-sky-100"
          >
            무선 사물인터넷 상품은 뭐가 있어?
          </button>
          <button
            onClick={() => handleExampleClick("방송시스템을 클라우드 기반으로 하려면 뭘 해야돼?")}
            className="px-4 py-3 border border-gray-200 rounded-lg hover:border-[#4285f4] hover:text-[#4285f4] transition-colors text-sm bg-sky-50 hover:bg-sky-100"
          >
            방송시스템을 클라우드 기반으로 하려면 뭘 해야돼?
          </button>
          <button
            onClick={() => handleExampleClick("기업에서 IPTV를 보려면 어떻게 해야돼?")}
            className="px-4 py-3 border border-gray-200 rounded-lg hover:border-[#4285f4] hover:text-[#4285f4] transition-colors text-sm bg-sky-50 hover:bg-sky-100"
          >
            기업에서 IPTV를 보려면 어떻게 해야돼?
          </button>
        </div>
      </div>
    </div>
  );
}
