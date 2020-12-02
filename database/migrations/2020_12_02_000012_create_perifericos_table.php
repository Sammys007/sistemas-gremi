<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePerifericosTable extends Migration
{
    public function up()
    {
        Schema::create('perifericos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nombre');
            $table->string('marca')->nullable();
            $table->string('modelo')->nullable();
            $table->string('no_de_serie')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
