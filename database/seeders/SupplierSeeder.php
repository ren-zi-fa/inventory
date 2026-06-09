<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SupplierSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('suppliers')->insert([
            [
                'kode_supplier' => 'SUP001',
                'nama_supplier' => 'PT Asus Indonesia',
                'email' => 'sales@asus.co.id',
                'telepon' => '081234567890',
                'alamat' => 'Jl. Sudirman No. 10',
                'nama_kontak' => 'Budi Santoso',
                'kota' => 'Jakarta',
                'provinsi' => 'DKI Jakarta',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_supplier' => 'SUP002',
                'nama_supplier' => 'PT Acer Indonesia',
                'email' => 'sales@acer.co.id',
                'telepon' => '081234567891',
                'alamat' => 'Jl. Gatot Subroto No. 21',
                'nama_kontak' => 'Andi Wijaya',
                'kota' => 'Jakarta',
                'provinsi' => 'DKI Jakarta',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_supplier' => 'SUP003',
                'nama_supplier' => 'PT Logitech Indonesia',
                'email' => 'sales@logitech.co.id',
                'telepon' => '081234567892',
                'alamat' => 'Jl. Asia Afrika No. 15',
                'nama_kontak' => 'Rina Putri',
                'kota' => 'Bandung',
                'provinsi' => 'Jawa Barat',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_supplier' => 'SUP004',
                'nama_supplier' => 'PT Epson Indonesia',
                'email' => 'sales@epson.co.id',
                'telepon' => '081234567893',
                'alamat' => 'Jl. Pemuda No. 8',
                'nama_kontak' => 'Dewi Lestari',
                'kota' => 'Semarang',
                'provinsi' => 'Jawa Tengah',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'kode_supplier' => 'SUP005',
                'nama_supplier' => 'PT Lenovo Indonesia',
                'email' => 'sales@lenovo.co.id',
                'telepon' => '081234567894',
                'alamat' => 'Jl. Ahmad Yani No. 45',
                'nama_kontak' => 'Fajar Nugroho',
                'kota' => 'Surabaya',
                'provinsi' => 'Jawa Timur',
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);

    }
}
