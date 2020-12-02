<?php

namespace App\Http\Requests;

use App\Models\Equipo;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UpdateEquipoRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('equipo_edit');
    }

    public function rules()
    {
        return [
            'codigo'          => [
                'string',
                'required',
            ],
            'owner_id'        => [
                'integer',
                'exists:users,id',
                'nullable',
            ],
            'tipo'            => [
                'required',
                'in:' . implode(',', Arr::pluck(Equipo::TIPO_SELECT, 'value')),
            ],
            'marca_id'        => [
                'integer',
                'exists:marcas,id',
                'required',
            ],
            'modelo'          => [
                'string',
                'min:0',
                'max:150',
                'nullable',
            ],
            'procesador_id'   => [
                'integer',
                'exists:procesadores,id',
                'required',
            ],
            'memoria_ram_id'  => [
                'integer',
                'exists:memorias_rams,id',
                'required',
            ],
            'disco_duro_id'   => [
                'integer',
                'exists:discos_duros,id',
                'required',
            ],
            'periferico'      => [
                'array',
            ],
            'periferico.*.id' => [
                'integer',
                'exists:perifericos,id',
            ],
            'fotos'           => [
                'array',
                'nullable',
            ],
            'fotos.*.id'      => [
                'integer',
                'exists:media,id',
            ],
            'estatus'         => [
                'boolean',
            ],
            'nota'            => [
                'string',
                'nullable',
            ],
        ];
    }
}
