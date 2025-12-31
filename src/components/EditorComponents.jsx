import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const Section = ({ title, children, isOpen, onToggle }) => (
    <div className="border border-gray-700 rounded-lg mb-4 overflow-hidden bg-[#1E1E20]">
        <button
            onClick={onToggle}
            className="w-full flex justify-between items-center p-4 bg-[#2A2A2E] hover:bg-[#333338] transition-colors text-left"
        >
            <span className="font-semibold text-white">{title}</span>
            {isOpen ? <ChevronUp size={20} className="text-gray-400" /> : <ChevronDown size={20} className="text-gray-400" />}
        </button>
        {isOpen && <div className="p-4 space-y-4">{children}</div>}
    </div>
);

export const InputField = ({ label, value, onChange, type = "text" }) => (
    <div className="flex flex-col gap-1">
        <label className="text-xs text-gray-400 uppercase font-medium tracking-wider">{label}</label>
        {type === "textarea" ? (
            <textarea
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-[#0D0D0E] border border-gray-700 rounded p-2 text-white focus:border-blue-500 focus:outline-none min-h-[80px]"
            />
        ) : (
            <input
                type={type}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="bg-[#0D0D0E] border border-gray-700 rounded p-2 text-white focus:border-blue-500 focus:outline-none"
            />
        )}
    </div>
);
