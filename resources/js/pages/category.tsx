import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { category } from '@/routes';
import { CategoryPageProps } from '@/types';

export default function Category({ categories }: CategoryPageProps) {
    return (
        <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Kategori</h1>
                    <p className="text-muted-foreground">
                        Daftar kategori produk.
                    </p>
                </div>

                <Button>Tambah Kategori</Button>
            </div>

            <div className="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nama Kategori</TableHead>
                            <TableHead>Deskripsi</TableHead>
                            <TableHead>Jumlah Produk</TableHead>
                            <TableHead className="w-[180px]">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {categories.data.map((category) => (
                            <TableRow key={category.id}>
                                <TableCell className="font-medium">
                                    {category.nama_kategori}
                                </TableCell>

                                <TableCell>{category.deskripsi}</TableCell>

                                <TableCell>{category.jumlah_product}</TableCell>

                                <TableCell>
                                    <div className="flex gap-2">
                                        <Button variant="outline" size="sm">
                                            Edit
                                        </Button>

                                        <Button variant="destructive" size="sm">
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
    );
}

Category.layout = {
    breadcrumbs: [
        {
            title: 'Category',
            href: category(),
        },
    ],
};