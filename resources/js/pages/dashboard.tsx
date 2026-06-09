import { Head } from '@inertiajs/react'; // Sesuaikan import Head dengan framework Anda (Inertia/Next.js)
import { DollarSign, ShoppingCart, Package, Truck, Users } from 'lucide-react';
import { dashboard } from '@/routes';
export default function InventoryStats() {
    // --- DUMMY DATA ---
    const stats = [
        {
            title: 'Total Penjualan',
            value: 'Rp 45.500.000',
            icon: <DollarSign size={18} />,
        },
        {
            title: 'Total Pembelian',
            value: 'Rp 32.100.000',
            icon: <ShoppingCart size={18} />,
        },
        { title: 'Total Produk', value: '1450', icon: <Package size={18} /> },
        { title: 'Total Supplier', value: '24', icon: <Truck size={18} /> },
        { title: 'Total Pelanggan', value: '356', icon: <Users size={18} /> },
        {
            title: 'Nilai Inventori',
            value: 'Rp 1.250.000.000',
            icon: <DollarSign size={18} />,
        },
    ];

    const produkTerlaris = [
        { name: 'Intel Core i7-13700K', sold: 145 },
        { name: 'NVIDIA RTX 4070 Ti', sold: 89 },
        { name: 'Samsung 990 PRO 1TB', sold: 210 },
    ];

    const stokMenipis = [
        { name: 'Corsair Vengeance 32GB', stock: 2 },
        { name: 'ASUS ROG Strix B650E-F', stock: 1 },
    ];

    const aktivitasTerbaru = [
        { action: 'Penjualan INV-2023001 selesai', time: '10 menit yang lalu' },
        { action: 'Stok masuk PO-2023055 diterima', time: '1 jam yang lalu' },
        { action: 'Pelanggan baru terdaftar', time: '2 jam yang lalu' },
    ];

    return (
        <>
            <Head title="Inventory" />

            {/* Main Container */}
            <div className="flex h-full flex-1 flex-col gap-6 overflow-y-auto bg-gray-50/30 p-8">
                {/* Header */}
                <div>
                    <h1 className="text-2xl font-bold text-gray-900">
                        Dashboard
                    </h1>
                    <p className="mt-1 text-sm text-gray-500">
                        Ringkasan sistem inventori hari ini.
                    </p>
                </div>

                {/* Top Stats Row */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-xl border border-gray-200 bg-white p-5"
                        >
                            <div className="mb-4 flex items-center justify-between text-gray-500">
                                <span className="text-sm font-medium">
                                    {stat.title}
                                </span>
                                {stat.icon}
                            </div>
                            <span className="text-xl font-bold text-gray-900 lg:text-2xl">
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Middle Lists Row */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {/* Produk Terlaris */}
                    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900">
                            Produk Terlaris
                        </h2>
                        <div className="flex flex-col gap-4">
                            {produkTerlaris.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                                >
                                    <span className="text-sm text-gray-700">
                                        {item.name}
                                    </span>
                                    <span className="rounded-md bg-gray-100 px-2 py-1 text-xs text-gray-600">
                                        {item.sold} terjual
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stok Menipis */}
                    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900">
                            Stok Menipis
                        </h2>
                        <div className="flex flex-col gap-4">
                            {stokMenipis.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                                >
                                    <span className="text-sm text-gray-700">
                                        {item.name}
                                    </span>
                                    <span className="rounded-md bg-red-50 px-2 py-1 text-xs text-red-600">
                                        Sisa {item.stock}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Aktivitas Terbaru */}
                    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900">
                            Aktivitas Terbaru
                        </h2>
                        <div className="flex flex-col gap-4">
                            {aktivitasTerbaru.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                                >
                                    <span className="text-sm text-gray-700">
                                        {item.action}
                                    </span>
                                    <span className="mt-1 text-xs text-gray-400">
                                        {item.time}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Charts Row (Mocks) */}
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                    {/* Grafik Penjualan */}
                    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900">
                            Grafik Penjualan (Mock)
                        </h2>
                        <div className="flex min-h-[200px] w-full flex-1 items-center justify-center rounded-lg bg-gray-50 text-sm text-gray-400">
                            [ Grafik Bar Penjualan ]
                        </div>
                    </div>

                    {/* Grafik Pembelian */}
                    <div className="flex flex-col rounded-xl border border-gray-200 bg-white p-6">
                        <h2 className="mb-4 text-sm font-semibold text-gray-900">
                            Grafik Pembelian (Mock)
                        </h2>
                        <div className="flex min-h-[200px] w-full flex-1 items-center justify-center rounded-lg bg-gray-50 text-sm text-gray-400">
                            [ Grafik Line Pembelian ]
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

InventoryStats.layout = {
    breadcrumbs: [
        {
            title: 'DASHBOARD',
            href: dashboard(),
        },
    ],
};