<?php

namespace App\Http\Requests;

use App\Models\MemoriasRam;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class UpdateMemoriasRamRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('memorias_ram_edit');
    }

    public function rules()
    {
        return [
            'nombre'    => [
                'string',
                'min:0',
                'max:100',
                'nullable',
            ],
            'tipo'      => [
                'required',
                'in:' . implode(',', Arr::pluck(MemoriasRam::TIPO_SELECT, 'value')),
            ],
            'capacidad' => [
                'required',
                'in:' . implode(',', Arr::pluck(MemoriasRam::CAPACIDAD_SELECT, 'value')),
            ],
        ];
    }
}
