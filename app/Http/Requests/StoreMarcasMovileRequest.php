<?php

namespace App\Http\Requests;

use App\Models\MarcasMovile;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreMarcasMovileRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('marcas_movile_create');
    }

    public function rules()
    {
        return [
            'nombre' => [
                'string',
                'min:0',
                'max:120',
                'required',
            ],
        ];
    }
}
