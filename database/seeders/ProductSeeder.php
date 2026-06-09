<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use App\Models\Stock;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class ProductSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            'Laptop',
            'Komputer Desktop',
            'Aksesoris Komputer',
            'Networking',
            'Komponen PC',
        ];

        foreach ($categories as $cat) {
            Category::firstOrCreate(
                ['nama_kategori' => $cat],
                [
                    'deskripsi' => "Produk kategori {$cat}",
                    'sku' => strtoupper(Str::slug($cat)).'-'.rand(100, 999),
                ]
            );
        }

        $categories = Category::all();

        $productsByCategory = [
            'Laptop' => [
                'Lenovo ThinkPad X1 Carbon',
                'Dell XPS 13',
                'ASUS ZenBook 14',
                'MacBook Air M2',
                'Acer Swift 3',
            ],
            'Komputer Desktop' => [
                'PC Gaming Ryzen 7 Build',
                'Intel i5 Office PC',
                'Workstation Render PC',
                'PC All-in-One HP',
                'Custom Desktop High End',
            ],
            'Aksesoris Komputer' => [
                'Keyboard Mechanical RGB',
                'Mouse Logitech Wireless',
                'Headset Gaming HyperX',
                'Mousepad XXL',
                'Webcam Full HD',
            ],
            'Networking' => [
                'Router TP-Link Archer',
                'Switch Gigabit 8 Port',
                'WiFi Extender',
                'Access Point Ubiquiti',
                'Modem Fiber Optic',
            ],
            'Komponen PC' => [
                'RAM DDR4 16GB',
                'SSD NVMe 1TB',
                'GPU RTX 4060',
                'Motherboard B550',
                'Power Supply 650W',
            ],
        ];

        foreach ($categories as $category) {
            $list = $productsByCategory[$category->nama_kategori] ?? [];

            foreach ($list as $name) {
                $product = Product::create([
                    'nama_produk' => $name,
                    'sku' => strtoupper(Str::random(10)),
                    'category_id' => $category->id,
                    'harga_beli' => rand(500000, 5000000),
                    'harga_jual' => rand(600000, 7000000),
                    'image' => null,
                ]);

                Stock::create([
                    'product_id' => $product->id,
                    'current_stock' => rand(1, 50),
                ]);
            }
        }
    }
}
