import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { customer } from '@/routes';
import { CustomerPageProps } from '@/types';

export default function Customer({ customers }: CustomerPageProps) {
    return (
        <div className="p-6">
            <div className="mb-6 flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Customer</h1>
                    <p className="text-muted-foreground">
                        Daftar pelanggan yang terdaftar.
                    </p>
                </div>

                <Button>Tambah Customer</Button>
            </div>

            <div className="rounded-lg border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Kode</TableHead>
                            <TableHead>Nama Customer</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Telepon</TableHead>
                            <TableHead>Kota</TableHead>
                            <TableHead>Total Order</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="w-[180px]">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {customers.data.length > 0 ? (
                            customers.data.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>
                                        {customer.kode_customer}
                                    </TableCell>

                                    <TableCell className="font-medium">
                                        {customer.nama_customer}
                                    </TableCell>

                                    <TableCell>
                                        {customer.email ?? '-'}
                                    </TableCell>

                                    <TableCell>{customer.telepon}</TableCell>

                                    <TableCell>
                                        {customer.kota ?? '-'}
                                    </TableCell>

                                    <TableCell>
                                        {customer.total_orders}
                                    </TableCell>

                                    <TableCell>
                                        <Badge
                                            variant={
                                                customer.is_active
                                                    ? 'default'
                                                    : 'secondary'
                                            }
                                        >
                                            {customer.is_active
                                                ? 'Aktif'
                                                : 'Nonaktif'}
                                        </Badge>
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex gap-2">
                                            <Button variant="outline" size="sm">
                                                Edit
                                            </Button>

                                            <Button
                                                variant="destructive"
                                                size="sm"
                                            >
                                                Hapus
                                            </Button>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={8} className="text-center">
                                    Tidak ada data customer.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
Customer.layout = {
    breadcrumbs: [
        {
            title: 'Pelangan',
            href: customer(),
        },
    ],
};