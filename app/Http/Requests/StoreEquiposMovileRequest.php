<?php

namespace App\Http\Requests;

use App\Models\EquiposMovile;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreEquiposMovileRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('equipos_movile_create');
    }

    public function rules()
    {
        return [
            'codigo'          => [
                'string',
                'nullable',
            ],
            'marca_id'        => [
                'integer',
                'exists:marcas_moviles,id',
                'required',
            ],
            'modelo'          => [
                'string',
                'min:0',
                'max:120',
                'nullable',
            ],
            'numero_de_serie' => [
                'string',
                'min:0',
                'max:100',
                'required',
            ],
            'imei'            => [
                'string',
                'nullable',
            ],
            'perifericos'     => [
                'nullable',
                'in:' . implode(',', Arr::pluck(EquiposMovile::PERIFERICOS_RADIO, 'value')),
            ],
            'nota'            => [
                'string',
                'nullable',
            ],
            'estatus'         => [
                'boolean',
            ],
        ];
    }
}
