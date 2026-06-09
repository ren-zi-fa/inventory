import { Head } from '@inertiajs/react';
import { product } from '@/routes';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { ProductPageProps } from '@/types';

export default function Product({ products }: ProductPageProps) {
    return (
        <>
            <Head title="Produk" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-y-auto bg-white p-8">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">
                            Produk
                        </h1>
                        <p className="mt-1 text-sm text-gray-500">
                            Kelola data produk.
                        </p>
                    </div>
                    <Button className="bg-blue-600 hover:bg-blue-700">
                        Tambah Produk
                    </Button>
                </div>

                {/* Toolbar Section (Search & Filter) */}
                <div className="flex items-center gap-3">
                    <div className="w-full max-w-sm">
                        <Input
                            type="text"
                            placeholder="Cari produk..."
                            className="bg-gray-50/50"
                        />
                    </div>
                    <Button variant="outline" className="bg-gray-50/50">
                        Filter
                    </Button>
                </div>

                {/* Table Section */}
                <div className="rounded-md border border-gray-200">
                    <Table>
                        <TableHeader>
                            <TableRow className="bg-gray-50/50 text-gray-600 hover:bg-gray-50/50">
                                <TableHead className="w-[100px]">
                                    Gambar
                                </TableHead>
                                <TableHead>SKU</TableHead>
                                <TableHead className="min-w-[200px]">
                                    Nama Produk
                                </TableHead>
                                <TableHead>Kategori</TableHead>
                                <TableHead>Harga Beli</TableHead>
                                <TableHead>Harga Jual</TableHead>
                                <TableHead>Stok</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">
                                    Aksi
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {products.data.map((prod) => (
                                <TableRow key={prod.id}>
                                    <TableCell>
                                        {prod.image ? (
                                            <img
                                                src={prod.image}
                                                alt={prod.nama_produk}
                                                className="h-12 w-12 rounded-md object-cover"
                                            />
                                        ) : (
                                            <div className="flex h-12 w-12 items-center justify-center rounded-md bg-gray-100 text-[10px] text-gray-400">
                                                No Img
                                            </div>
                                        )}
                                    </TableCell>

                                    <TableCell className="font-medium text-gray-700">
                                        {prod.sku}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {prod.nama_produk}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {prod.category.nama_kategori}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {new Intl.NumberFormat('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR',
                                        }).format(Number(prod.harga_beli))}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {new Intl.NumberFormat('id-ID', {
                                            style: 'currency',
                                            currency: 'IDR',
                                        }).format(Number(prod.harga_jual))}
                                    </TableCell>

                                    <TableCell className="text-gray-600">
                                        {prod.stock.current_stock}
                                    </TableCell>

                                    <TableCell>
                                        <Badge
                                            variant="secondary"
                                            className={
                                                prod.stock.current_stock > 0
                                                    ? 'bg-green-100 text-green-700 hover:bg-green-100'
                                                    : 'bg-red-100 text-red-700 hover:bg-red-100'
                                            }
                                        >
                                            {prod.stock.current_stock > 0
                                                ? 'Available'
                                                : 'Out of Stock'}
                                        </Badge>
                                    </TableCell>

                                    <TableCell className="text-right">
                                        <div className="flex justify-end gap-2">
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                className="h-8"
                                            >
                                                Edit
                                            </Button>

                                            <Button
                                                variant="destructive"
                                                size="sm"
                                                className="h-8 bg-red-500 hover:bg-red-600"
                                            >
                                                Hapus
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </>
    );
}

Product.layout = {
    breadcrumbs: [
        {
            title: 'PRODUCT',
            href: product(),
        },
    ],
};