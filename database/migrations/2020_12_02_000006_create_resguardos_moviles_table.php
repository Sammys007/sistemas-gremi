<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResguardosMovilesTable extends Migration
{
    public function up()
    {
        Schema::create('resguardos_moviles', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('folio')->nullable();
            $table->date('fecha');
            $table->string('nota')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }
}
