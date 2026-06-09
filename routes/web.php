<?php

use App\Http\Controllers\CategoryController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\StockMovementController;
use App\Http\Controllers\SupplierController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');

Route::middleware([])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
    Route::get('/product', [ProductController::class, 'index'])
        ->name('product');
    Route::get('/category', [CategoryController::class, 'index'])
        ->name('category');
    Route::get('/supplier', [SupplierController::class, 'index'])
        ->name('supplier');
    Route::get('/customer', [CustomerController::class, 'index'])
        ->name('customer');
    Route::get('/stock', [StockMovementController::class, 'index'])
        ->name('stock');
});

require __DIR__.'/settings.php';
