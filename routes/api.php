<?php

Route::group(['prefix' => 'v1', 'as' => 'api.', 'namespace' => 'Api\V1\Admin', 'middleware' => ['auth:api']], function () {
    // Abilities
    Route::apiResource('abilities', 'AbilitiesController', ['only' => ['index']]);

    // Locales
    Route::get('locales/languages', 'LocalesController@languages')->name('locales.languages');
    Route::get('locales/messages', 'LocalesController@messages')->name('locales.messages');

    // Dashboard
    Route::get('dashboard', 'DashboardApiController@index')->name('dashboard');

    // Permissions
    Route::resource('permissions', 'PermissionsApiController');

    // Roles
    Route::resource('roles', 'RolesApiController');

    // Users
    Route::resource('users', 'UsersApiController');

    // Marcas
    Route::resource('marcas', 'MarcasApiController');

    // Procesadores
    Route::resource('procesadores', 'ProcesadoresApiController');

    // Memorias Rams
    Route::resource('memorias-rams', 'MemoriasRamsApiController');

    // Discos Duros
    Route::resource('discos-duros', 'DiscosDurosApiController');

    // Perifericos
    Route::resource('perifericos', 'PerifericosApiController');

    // Equipos
    Route::post('equipos/media', 'EquiposApiController@storeMedia')->name('equipos.storeMedia');
    Route::resource('equipos', 'EquiposApiController');

    // Departamentos
    Route::resource('departamentos', 'DepartamentosApiController');

    // Puestos
    Route::resource('puestos', 'PuestosApiController');

    // Responsables
    Route::resource('responsables', 'ResponsablesApiController');

    // Resguardos Pcs
    Route::post('resguardos-pcs/media', 'ResguardosPcApiController@storeMedia')->name('resguardos-pcs.storeMedia');
    Route::resource('resguardos-pcs', 'ResguardosPcApiController');

    // Marcas Moviles
    Route::resource('marcas-moviles', 'MarcasMovilesApiController');

    // Equipos Moviles
    Route::resource('equipos-moviles', 'EquiposMovilesApiController');

    // Resguardos Moviles
    Route::resource('resguardos-moviles', 'ResguardosMovilesApiController');
});
