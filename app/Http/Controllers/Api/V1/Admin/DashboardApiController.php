<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Services\ChartsService;

class DashboardApiController extends Controller
{
    public function index()
    {
        $stats0 = new ChartsService([
            'title'        => 'Equipos en proyecto',
            'chart_type'   => 'stats',
            'model'        => 'App\Models\Equipo',
            'column_class' => 'col-md-3',
            'footer_icon'  => 'date_range',
            'footer_text'  => 'Lifetime total',
        ]);

        $bar1 = new ChartsService([
            'title'           => 'Resguardos Entregados Por Mes',
            'chart_type'      => 'bar',
            'model'           => 'App\Models\ResguardosPc',
            'group_by_field'  => 'created_at',
            'group_by_period' => 'month',
            'column_class'    => 'col-md-12',
        ]);

        $latest2 = new ChartsService([
            'title'        => 'Últimos Resguardos Entregados',
            'chart_type'   => 'latest',
            'model'        => 'App\Models\ResguardosPc',
            'column_class' => 'col-md-4',
            'fields'       => ['folio', 'fecha'],
            'limit'        => 5,
        ]);

        return response()->json(compact('stats0', 'bar1', 'latest2'));
    }
}
