import React from 'react';
import { UserIcon, BoxIcon, ShopIcon, WalletIcon, CheckCircleIcon } from './Icons';

interface SolutionCard {
  id: string;
  category: string;
  categoryIcon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

const solutions: SolutionCard[] = [
  {
    id: '1',
    category: '人',
    categoryIcon: UserIcon,
    title: '客户数字化',
    description: '全客户数字化 沉淀客户\n管好上下游端 协同提升',
    features: ['客户档案', '客户分层', '上游管理', '用户营销']
  },
  {
    id: '2',
    category: '货',
    categoryIcon: BoxIcon,
    title: '管理数字化',
    description: '进销存一体化 轻松管货\n分拣配送中心 效率提升',
    features: ['商品管理', '采购管理', '仓储管理', '分拣配送']
  },
  {
    id: '3',
    category: '场',
    categoryIcon: ShopIcon,
    title: '经营数字化',
    description: '兼顾批发零售 全面经营\n电商平台订单 内外整合',
    features: ['订货商城', '零售商城', '外部电商', '订单管理']
  },
  {
    id: '4',
    category: '财',
    categoryIcon: WalletIcon,
    title: '财务数字化',
    description: '业务资金往来 账务清晰\n财务数据统计 风险控制',
    features: ['应收账款', '应付账款', '资金统计', '员工绩效']
  },
];

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-slate-800 tracking-tight mb-4">
            新一代数字供应链SAAS解决方案
          </h2>
          <p className="text-xl sm:text-2xl text-slate-600 font-light mb-10">
            人、货、场、财四位一体化数字化管理，让生意更好做
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="#contact"
              className="px-10 py-3 bg-brand-red text-white text-lg rounded shadow hover:bg-brand-dark transition-colors"
            >
              获取演示
            </a>
            <a
              href="#contact"
              className="px-10 py-3 bg-white text-brand-red border border-brand-red text-lg rounded hover:bg-red-50 transition-colors"
            >
              联系专家
            </a>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((item) => (
            <div key={item.id} className="bg-white rounded p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center group">
              
              {/* Card Header: Icon + Title */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center text-white font-bold text-sm">
                  {item.category}
                </div>
                <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              </div>
              
              {/* Description */}
              <p className="text-slate-500 mb-6 text-sm leading-6 whitespace-pre-line">
                {item.description}
              </p>

              {/* Divider */}
              <div className="w-full border-t-2 border-dashed border-red-200 mb-6"></div>

              {/* Hot Features Label */}
              <div className="text-slate-500 mb-4 text-sm font-light">热门功能</div>

              {/* Features List */}
              <ul className="space-y-3 mb-8 w-full">
                {item.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center justify-center text-slate-700 font-medium">
                    <CheckCircleIcon className="w-4 h-4 text-brand-red mr-2" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* Card Button */}
              <div className="mt-auto w-full">
                 <a 
                   href="#contact"
                   className="block w-full py-2.5 bg-brand-red text-white rounded text-sm hover:bg-brand-dark transition-colors"
                 >
                   立即免费试用
                 </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};