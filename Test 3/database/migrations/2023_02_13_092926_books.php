<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('books', function (Blueprint $table) {
            
            $table->id();
            $table->string("judul");
            $table->unsignedBigInteger("fk_publisher");
            $table->foreign("fk_publisher")->references("id")->on("publishers");
            $table->unsignedBigInteger("fk_author");
            $table->foreign("fk_author")->references("id")->on("authors");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
};
