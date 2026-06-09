<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        /*
        |----------------------------------------------------
        | PERMISSIONS
        |----------------------------------------------------
        */
        $permissions = [
            // dashboard & stats
            'dashboard.view',
            'inventory.stats',

            // product
            'product.view',
            'product.create',
            'product.edit',
            'product.delete',

            // category
            'category.view',
            'category.create',
            'category.edit',
            'category.delete',

            // supplier
            'supplier.view',
            'supplier.create',
            'supplier.edit',
            'supplier.delete',

            // customer
            'customer.view',
            'customer.create',
            'customer.edit',
            'customer.delete',

            // stock
            'stock.view',
            'stock.adjust',

            // purchase
            'purchase.view',
            'purchase.create',
            'purchase.approve',
            'purchase.delete',

            // sale
            'sale.view',
            'sale.create',
            'sale.cancel',

            // warranty
            'warranty.view',
            'warranty.create',

            // report
            'report.view',
            'report.export',

            // audit
            'audit.view',

            // setting
            'setting.view',
            'setting.edit',

            // user
            'user.view',
            'user.create',
            'user.edit',
            'user.delete',

            // role
            'role.view',
            'role.create',
            'role.edit',
            'role.delete',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission]);
        }

        /*
        |----------------------------------------------------
        | ROLES
        |----------------------------------------------------
        */

        $superAdmin = Role::firstOrCreate(['name' => 'super-admin']);
        $superAdmin->syncPermissions(Permission::all());

        $adminInventory = Role::firstOrCreate(['name' => 'admin-inventory']);
        $adminInventory->syncPermissions([
            'dashboard.view',
            'inventory.stats',

            'product.view', 'product.create', 'product.edit', 'product.delete',
            'category.view', 'category.create', 'category.edit', 'category.delete',
            'supplier.view', 'supplier.create', 'supplier.edit', 'supplier.delete',
            'customer.view', 'customer.create', 'customer.edit', 'customer.delete',
            'stock.view', 'stock.adjust',
            'purchase.view', 'purchase.create', 'purchase.approve', 'purchase.delete',
            'report.view', 'report.export',
        ]);

        $cashier = Role::firstOrCreate(['name' => 'cashier']);
        $cashier->syncPermissions([
            'dashboard.view',
            'product.view',
            'stock.view',
            'customer.view', 'customer.create', 'customer.edit',
            'sale.view', 'sale.create', 'sale.cancel',
            'warranty.view', 'warranty.create',
        ]);

        $purchasing = Role::firstOrCreate(['name' => 'purchasing']);
        $purchasing->syncPermissions([
            'dashboard.view',
            'inventory.stats',
            'product.view',
            'supplier.view', 'supplier.create', 'supplier.edit',
            'stock.view',
            'purchase.view', 'purchase.create',
            'report.view',
        ]);

        $manager = Role::firstOrCreate(['name' => 'manager']);
        $manager->syncPermissions([
            'dashboard.view',
            'inventory.stats',

            'product.view',
            'category.view',
            'supplier.view',
            'customer.view',
            'stock.view',
            'purchase.view',
            'sale.view',
            'warranty.view',
            'report.view',
            'report.export',
            'audit.view',
        ]);

        /*
        |----------------------------------------------------
        | USERS (1 USER PER ROLE)
        |----------------------------------------------------
        */

        $users = [
            [
                'name' => 'Super Admin',
                'email' => 'superadmin@example.com',
                'role' => 'super-admin',
            ],
            [
                'name' => 'Admin Inventory',
                'email' => 'inventory@example.com',
                'role' => 'admin-inventory',
            ],
            [
                'name' => 'Cashier',
                'email' => 'cashier@example.com',
                'role' => 'cashier',
            ],
            [
                'name' => 'Purchasing Staff',
                'email' => 'purchasing@example.com',
                'role' => 'purchasing',
            ],
            [
                'name' => 'Manager',
                'email' => 'manager@example.com',
                'role' => 'manager',
            ],
        ];

        foreach ($users as $data) {
            $user = User::factory()->create([
                'name' => $data['name'],
                'email' => $data['email'],
            ]);

            $user->assignRole($data['role']);
        }

    }
}
