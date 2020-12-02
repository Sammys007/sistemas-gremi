<?php

namespace App\Http\Requests;

use App\Models\DiscosDuro;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;
use Illuminate\Support\Arr;

class StoreDiscosDuroRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('discos_duro_create');
    }

    public function rules()
    {
        return [
            'nombre'    => [
                'string',
                'min:0',
                'max:120',
                'nullable',
            ],
            'tipo'      => [
                'required',
                'in:' . implode(',', Arr::pluck(DiscosDuro::TIPO_SELECT, 'value')),
            ],
            'capacidad' => [
                'string',
                'min:0',
                'max:5',
                'required',
            ],
        ];
    }
}
