import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { supplier } from '@/routes';
import { SupplierPageProps } from '@/types';

export default function Supplier({ suppliers }: SupplierPageProps) {
    return (
        <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Supplier</h1>
                    <p className="text-muted-foreground">
                        Daftar supplier produk.
                    </p>
                </div>

                <Button>Tambah Supplier</Button>
            </div>

            <div className="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Kode</TableHead>
                            <TableHead>Nama Supplier</TableHead>
                            <TableHead>Provinsi</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Telepon</TableHead>
                            <TableHead className="w-[180px]">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {suppliers.data.map((supplier) => (
                            <TableRow key={supplier.id}>
                                <TableCell>{supplier.kode_supplier}</TableCell>

                                <TableCell className="font-medium">
                                    {supplier.nama_supplier}
                                </TableCell>

                                <TableCell>{supplier.provinsi}</TableCell>
                                <TableCell>{supplier.email}</TableCell>

                                <TableCell>{supplier.telepon}</TableCell>

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
Supplier.layout = {
    breadcrumbs: [
        {
            title: 'Supplier',
            href: supplier(),
        },
    ],
};