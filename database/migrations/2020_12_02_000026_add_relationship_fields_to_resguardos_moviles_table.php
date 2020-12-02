<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AddRelationshipFieldsToResguardosMovilesTable extends Migration
{
    public function up()
    {
        Schema::table('resguardos_moviles', function (Blueprint $table) {
            $table->unsignedBigInteger('responsable_id')->nullable();
            $table->foreign('responsable_id', 'responsable_fk_2708778')->references('id')->on('responsables');
            $table->unsignedBigInteger('equipo_id');
            $table->foreign('equipo_id', 'equipo_fk_2708779')->references('id')->on('equipos_moviles');
            $table->unsignedBigInteger('owner_id');
            $table->foreign('owner_id', 'owner_fk_2708877')->references('id')->on('users');
        });
    }
}
