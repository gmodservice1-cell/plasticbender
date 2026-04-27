'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import { useColors } from '@/store/colorStore';

interface Product {
    id: string;
    name: string;
    category: string;
    price: number;
    image: string;
    description: string;
    htmlDescription: string;
}

export default function AdminPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const { primary, accent, updateColors } = useColors();

    useEffect(() => {
        fetch('/api/products').then(res => res.json()).then(setProducts);
    }, []);

    const updateProduct = (index: number, field: keyof Product, value: any) => {
        const newProducts = [...products];
        newProducts[index] = { ...newProducts[index], [field]: value };
        setProducts(newProducts);
    };

    const saveChanges = async () => {
        await fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(products),
        });
        alert('Saved!');
    };

    return (
        <main className="min-h-screen bg-[#080A0C] text-[#F0EDE8] py-24 px-6">
            <Navbar />
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-4xl font-black">SITE BUILDER</h1>
                
                <section className="bg-[#0F1215] p-6 border border-white/10 rounded-sm space-y-4">
                    <h2 className="text-xl font-bold">Theme Colors</h2>
                    <div className="flex gap-4">
                        <input type="color" value={primary} onChange={e => updateColors(e.target.value, accent)} />
                        <input type="color" value={accent} onChange={e => updateColors(primary, e.target.value)} />
                    </div>
                </section>

                <button onClick={saveChanges} className="bg-[#2EE5C0] text-[#080A0C] px-6 py-2 rounded-sm font-bold">SAVE ALL</button>
                {products.map((product, index) => (
                    <div key={product.id} className="bg-[#0F1215] p-6 border border-white/10 rounded-sm space-y-4">
                        <input value={product.name} onChange={e => updateProduct(index, 'name', e.target.value)} className="w-full bg-transparent border-b border-white/20 text-xl font-bold" />
                        <input value={product.image} onChange={e => updateProduct(index, 'image', e.target.value)} className="w-full text-xs font-mono text-gray-400" />
                        <textarea value={product.htmlDescription} onChange={e => updateProduct(index, 'htmlDescription', e.target.value)} className="w-full bg-white/5 p-2 rounded-sm font-mono text-sm h-32" />
                    </div>
                ))}
            </div>
        </main>
    )
}
