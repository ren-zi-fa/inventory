<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('invoice_number')->unique();

            $table->foreignId('customer_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete();

            $table->decimal('subtotal', 15, 2);
            $table->decimal('discount', 15, 2)->default(0);
            $table->decimal('tax', 15, 2)->default(0);
            $table->decimal('total', 15, 2);

            $table->enum('payment_method', [
                'cash',
                'transfer',
                'qris',
                'debit',
                'credit_card',
            ]);

            $table->enum('status', [
                'pending',
                'paid',
                'cancelled',
            ])->default('paid');

            $table->timestamp('order_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
