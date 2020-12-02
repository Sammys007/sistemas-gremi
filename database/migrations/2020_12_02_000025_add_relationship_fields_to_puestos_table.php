<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToPuestosTable extends Migration
{
    public function up()
    {
        Schema::table('puestos', function (Blueprint $table) {
            $table->unsignedBigInteger('departamento_id');
            $table->foreign('departamento_id', 'departamento_fk_2687621')->references('id')->on('departamentos');
        });
    }
}
