<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToEquiposMovilesTable extends Migration
{
    public function up()
    {
        Schema::table('equipos_moviles', function (Blueprint $table) {
            $table->unsignedBigInteger('marca_id');
            $table->foreign('marca_id', 'marca_fk_2708632')->references('id')->on('marcas_moviles');
            $table->unsignedBigInteger('owner_id');
            $table->foreign('owner_id', 'owner_fk_2708769')->references('id')->on('users');
        });
    }
}
