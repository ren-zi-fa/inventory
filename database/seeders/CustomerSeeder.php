<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CustomerSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('customers')->insert([
            [
                'kode_customer' => 'CUS001',
                'nama_customer' => 'Budi Santoso',
                'email' => 'budi@gmail.com',
                'telepon' => '081234567890',
                'alamat' => 'Jl. Sudirman No. 10',
                'kota' => 'Jakarta',
                'provinsi' => 'DKI Jakarta',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_customer' => 'CUS002',
                'nama_customer' => 'Andi Wijaya',
                'email' => 'andi@gmail.com',
                'telepon' => '081234567891',
                'alamat' => 'Jl. Asia Afrika No. 20',
                'kota' => 'Bandung',
                'provinsi' => 'Jawa Barat',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_customer' => 'CUS003',
                'nama_customer' => 'Siti Nurhaliza',
                'email' => 'siti@gmail.com',
                'telepon' => '081234567892',
                'alamat' => 'Jl. Pemuda No. 5',
                'kota' => 'Semarang',
                'provinsi' => 'Jawa Tengah',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
        DB::table('orders')->insert([
            [
                'invoice_number' => 'INV-20260604001',
                'customer_id' => 1,
                'subtotal' => 12000000,
                'discount' => 500000,
                'tax' => 1150000,
                'total' => 12650000,
                'payment_method' => 'transfer',
                'status' => 'paid',
                'order_date' => now(),

            ],
            [
                'invoice_number' => 'INV-20260604002',
                'customer_id' => 2,
                'subtotal' => 3500000,
                'discount' => 0,
                'tax' => 350000,
                'total' => 3850000,
                'payment_method' => 'qris',
                'status' => 'paid',
                'order_date' => now(),

            ],
            [
                'invoice_number' => 'INV-20260604003',
                'customer_id' => 1,
                'subtotal' => 2500000,
                'discount' => 100000,
                'tax' => 240000,
                'total' => 2640000,
                'payment_method' => 'cash',
                'status' => 'pending',
                'order_date' => now(),

            ],
            [
                'invoice_number' => 'INV-20260604004',
                'customer_id' => 3,
                'subtotal' => 5000000,
                'discount' => 250000,
                'tax' => 475000,
                'total' => 5225000,
                'payment_method' => 'debit',
                'status' => 'paid',
                'order_date' => now(),

            ],
        ]);
    }
}
