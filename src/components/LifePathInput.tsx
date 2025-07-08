import React, { useState } from 'react';
import { Calendar, ArrowLeft, Compass } from 'lucide-react';

interface LifePathInputProps {
  onCalculate: (birthdate: string) => void;
  onBack: () => void;
}

export function LifePathInput({ onCalculate, onBack }: LifePathInputProps) {
  const [birthdate, setBirthdate] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (birthdate.trim()) {
      setIsLoading(true);
      await onCalculate(birthdate.trim());
      setIsLoading(false);
    }
  };

  const formatDate = (value: string) => {
    // Remove any non-digit characters
    const digits = value.replace(/\D/g, '');
    
    // Format as DD/MM/YYYY
    if (digits.length <= 2) {
      return digits;
    } else if (digits.length <= 4) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    } else {
      return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatDate(e.target.value);
    setBirthdate(formatted);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="group flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>ফিরে যান</span>
      </button>

      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-purple-400/50">
            <Calendar className="w-12 h-12 text-purple-400" />
          </div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent mb-4">
            লাইফ পাথ গণনা
          </h1>
          <p className="text-xl text-slate-300 leading-relaxed font-light">
            আপনার জন্ম তারিখ দিয়ে জীবনের মূল উদ্দেশ্য আবিষ্কার করুন
          </p>
        </div>

        {/* Input Form */}
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-indigo-400/20 to-blue-400/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
          
          <div className="relative bg-slate-800/60 backdrop-blur-sm rounded-3xl p-10 border border-purple-400/20">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <label className="block text-purple-300 text-lg font-semibold mb-4">
                  আপনার জন্ম তারিখ লিখুন
                </label>
                <input
                  type="text"
                  value={birthdate}
                  onChange={handleDateChange}
                  placeholder="DD/MM/YYYY (উদাহরণ: 15/08/1990)"
                  className="w-full px-6 py-4 text-xl bg-slate-700/60 backdrop-blur-sm border-2 border-purple-400/30 rounded-2xl focus:border-purple-400 focus:outline-none transition-all duration-300 text-purple-100 placeholder-slate-400 font-light"
                  disabled={isLoading}
                  maxLength={10}
                />
                
                <div className="absolute right-4 top-12">
                  <Compass className="w-6 h-6 text-purple-400/60" />
                </div>
              </div>

              <div className="bg-slate-700/30 rounded-xl p-4 border border-purple-400/20">
                <p className="text-slate-300 text-sm font-light">
                  <strong className="text-purple-400">নোট:</strong> আপনার সঠিক জন্ম তারিখ ব্যবহার করুন। 
                  দিন, মাস এবং বছরের সকল সংখ্যা গণনায় ব্যবহৃত হবে।
                </p>
              </div>

              <button
                type="submit"
                disabled={!birthdate.trim() || birthdate.length < 10 || isLoading}
                className="group relative w-full py-4 px-8 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-2xl font-semibold text-xl shadow-lg hover:shadow-xl transform transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative flex items-center justify-center space-x-3">
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>আপনার লাইফ পাথ গণনা করা হচ্ছে...</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-6 h-6" />
                      <span>আমার লাইফ পাথ আবিষ্কার করুন</span>
                      <Compass className="w-5 h-5 opacity-80" />
                    </>
                  )}
                </div>
              </button>
            </form>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-16 grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
            <h3 className="text-purple-300 font-semibold mb-3">লাইফ পাথ কী?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              আপনার জন্ম তারিখ থেকে গণনা করা এই সংখ্যা আপনার জীবনের মূল উদ্দেশ্য, 
              আধ্যাত্মিক যাত্রার দিকনির্দেশনা এবং জীবনের পাঠ প্রকাশ করে।
            </p>
          </div>
          
          <div className="bg-slate-800/40 backdrop-blur-sm rounded-xl p-6 border border-purple-400/20">
            <h3 className="text-purple-300 font-semibold mb-3">কেন গুরুত্বপূর্ণ?</h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              এটি আপনাকে বুঝতে সাহায্য করে আপনার জীবনের মূল লক্ষ্য কী, 
              কোন পথে আপনি সবচেয়ে বেশি বৃদ্ধি পাবেন এবং কীভাবে আপনার সর্বোচ্চ সম্ভাবনা অর্জন করবেন।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}