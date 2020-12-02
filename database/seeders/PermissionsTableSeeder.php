<?php

namespace Database\Seeders;

use App\Models\Permission;
use Illuminate\Database\Seeder;

class PermissionsTableSeeder extends Seeder
{
    public function run()
    {
        $permissions = [
            [
                'id'    => 1,
                'title' => 'user_management_access',
            ],
            [
                'id'    => 2,
                'title' => 'permission_create',
            ],
            [
                'id'    => 3,
                'title' => 'permission_edit',
            ],
            [
                'id'    => 4,
                'title' => 'permission_show',
            ],
            [
                'id'    => 5,
                'title' => 'permission_delete',
            ],
            [
                'id'    => 6,
                'title' => 'permission_access',
            ],
            [
                'id'    => 7,
                'title' => 'role_create',
            ],
            [
                'id'    => 8,
                'title' => 'role_edit',
            ],
            [
                'id'    => 9,
                'title' => 'role_show',
            ],
            [
                'id'    => 10,
                'title' => 'role_delete',
            ],
            [
                'id'    => 11,
                'title' => 'role_access',
            ],
            [
                'id'    => 12,
                'title' => 'user_create',
            ],
            [
                'id'    => 13,
                'title' => 'user_edit',
            ],
            [
                'id'    => 14,
                'title' => 'user_show',
            ],
            [
                'id'    => 15,
                'title' => 'user_delete',
            ],
            [
                'id'    => 16,
                'title' => 'user_access',
            ],
            [
                'id'    => 17,
                'title' => 'informacion_de_personal_access',
            ],
            [
                'id'    => 18,
                'title' => 'equipos_de_computo_access',
            ],
            [
                'id'    => 19,
                'title' => 'lista_de_resguardo_access',
            ],
            [
                'id'    => 20,
                'title' => 'marca_create',
            ],
            [
                'id'    => 21,
                'title' => 'marca_edit',
            ],
            [
                'id'    => 22,
                'title' => 'marca_show',
            ],
            [
                'id'    => 23,
                'title' => 'marca_delete',
            ],
            [
                'id'    => 24,
                'title' => 'marca_access',
            ],
            [
                'id'    => 25,
                'title' => 'procesadore_create',
            ],
            [
                'id'    => 26,
                'title' => 'procesadore_edit',
            ],
            [
                'id'    => 27,
                'title' => 'procesadore_show',
            ],
            [
                'id'    => 28,
                'title' => 'procesadore_delete',
            ],
            [
                'id'    => 29,
                'title' => 'procesadore_access',
            ],
            [
                'id'    => 30,
                'title' => 'memorias_ram_create',
            ],
            [
                'id'    => 31,
                'title' => 'memorias_ram_edit',
            ],
            [
                'id'    => 32,
                'title' => 'memorias_ram_show',
            ],
            [
                'id'    => 33,
                'title' => 'memorias_ram_delete',
            ],
            [
                'id'    => 34,
                'title' => 'memorias_ram_access',
            ],
            [
                'id'    => 35,
                'title' => 'discos_duro_create',
            ],
            [
                'id'    => 36,
                'title' => 'discos_duro_edit',
            ],
            [
                'id'    => 37,
                'title' => 'discos_duro_show',
            ],
            [
                'id'    => 38,
                'title' => 'discos_duro_delete',
            ],
            [
                'id'    => 39,
                'title' => 'discos_duro_access',
            ],
            [
                'id'    => 40,
                'title' => 'periferico_create',
            ],
            [
                'id'    => 41,
                'title' => 'periferico_edit',
            ],
            [
                'id'    => 42,
                'title' => 'periferico_show',
            ],
            [
                'id'    => 43,
                'title' => 'periferico_delete',
            ],
            [
                'id'    => 44,
                'title' => 'periferico_access',
            ],
            [
                'id'    => 45,
                'title' => 'equipo_create',
            ],
            [
                'id'    => 46,
                'title' => 'equipo_edit',
            ],
            [
                'id'    => 47,
                'title' => 'equipo_show',
            ],
            [
                'id'    => 48,
                'title' => 'equipo_delete',
            ],
            [
                'id'    => 49,
                'title' => 'equipo_access',
            ],
            [
                'id'    => 50,
                'title' => 'departamento_create',
            ],
            [
                'id'    => 51,
                'title' => 'departamento_edit',
            ],
            [
                'id'    => 52,
                'title' => 'departamento_show',
            ],
            [
                'id'    => 53,
                'title' => 'departamento_delete',
            ],
            [
                'id'    => 54,
                'title' => 'departamento_access',
            ],
            [
                'id'    => 55,
                'title' => 'puesto_create',
            ],
            [
                'id'    => 56,
                'title' => 'puesto_edit',
            ],
            [
                'id'    => 57,
                'title' => 'puesto_show',
            ],
            [
                'id'    => 58,
                'title' => 'puesto_delete',
            ],
            [
                'id'    => 59,
                'title' => 'puesto_access',
            ],
            [
                'id'    => 60,
                'title' => 'responsable_create',
            ],
            [
                'id'    => 61,
                'title' => 'responsable_edit',
            ],
            [
                'id'    => 62,
                'title' => 'responsable_show',
            ],
            [
                'id'    => 63,
                'title' => 'responsable_delete',
            ],
            [
                'id'    => 64,
                'title' => 'responsable_access',
            ],
            [
                'id'    => 65,
                'title' => 'resguardos_pc_create',
            ],
            [
                'id'    => 66,
                'title' => 'resguardos_pc_edit',
            ],
            [
                'id'    => 67,
                'title' => 'resguardos_pc_show',
            ],
            [
                'id'    => 68,
                'title' => 'resguardos_pc_delete',
            ],
            [
                'id'    => 69,
                'title' => 'resguardos_pc_access',
            ],
            [
                'id'    => 70,
                'title' => 'dispositivos_movile_access',
            ],
            [
                'id'    => 71,
                'title' => 'marcas_movile_create',
            ],
            [
                'id'    => 72,
                'title' => 'marcas_movile_edit',
            ],
            [
                'id'    => 73,
                'title' => 'marcas_movile_show',
            ],
            [
                'id'    => 74,
                'title' => 'marcas_movile_delete',
            ],
            [
                'id'    => 75,
                'title' => 'marcas_movile_access',
            ],
            [
                'id'    => 76,
                'title' => 'equipos_movile_create',
            ],
            [
                'id'    => 77,
                'title' => 'equipos_movile_edit',
            ],
            [
                'id'    => 78,
                'title' => 'equipos_movile_show',
            ],
            [
                'id'    => 79,
                'title' => 'equipos_movile_delete',
            ],
            [
                'id'    => 80,
                'title' => 'equipos_movile_access',
            ],
            [
                'id'    => 81,
                'title' => 'resguardos_movile_create',
            ],
            [
                'id'    => 82,
                'title' => 'resguardos_movile_edit',
            ],
            [
                'id'    => 83,
                'title' => 'resguardos_movile_show',
            ],
            [
                'id'    => 84,
                'title' => 'resguardos_movile_delete',
            ],
            [
                'id'    => 85,
                'title' => 'resguardos_movile_access',
            ],
        ];

        Permission::insert($permissions);
    }
}
