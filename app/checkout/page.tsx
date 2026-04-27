'use client';
import { useCartStore } from '@/store/cartStore';
import Navbar from '@/components/Navbar';
import { useState } from 'react';

export default function CheckoutPage() {
    const { items, total } = useCartStore();
    const [status, setStatus] = useState<'idle' | 'processing' | 'success'>('idle');

    const handleCheckout = () => {
        setStatus('processing');
        setTimeout(() => setStatus('success'), 2000);
    }

    return (
        <main className="min-h-screen bg-[#080A0C] text-[#F0EDE8]">
            <Navbar />
            <div className="max-w-3xl mx-auto pt-32 px-6">
                <h1 className="text-4xl font-black font-display mb-8">SECURE CHECKOUT</h1>
                {status === 'success' ? (
                    <div className="p-12 border border-[#2EE5C0] text-center">
                        <h2 className="text-2xl font-bold text-[#2EE5C0] mb-4">ORDER CONFIRMED</h2>
                        <p>Your STL files are heading to your email.</p>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {items.map(item => (
                            <div key={item.id} className="flex justify-between border-b border-white/10 pb-4">
                                <span>{item.name} x {item.quantity}</span>
                                <span>${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="text-right text-xl font-bold pt-4">Total: ${total.toFixed(2)}</div>
                        <button 
                            onClick={handleCheckout}
                            disabled={items.length === 0 || status === 'processing'}
                            className="w-full py-4 bg-[#C8A96E] text-[#080A0C] font-bold rounded-sm disabled:opacity-50"
                        >
                            {status === 'processing' ? 'PROCESSING...' : 'COMPLETE PURCHASE'}
                        </button>
                    </div>
                )}
            </div>
        </main>
    )
}
