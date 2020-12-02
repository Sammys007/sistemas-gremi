<?php

namespace App\Http\Requests;

use App\Models\Marca;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreMarcaRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('marca_create');
    }

    public function rules()
    {
        return [
            'nombre' => [
                'string',
                'min:0',
                'max:120',
                'required',
                'unique:marcas',
            ],
        ];
    }
}
