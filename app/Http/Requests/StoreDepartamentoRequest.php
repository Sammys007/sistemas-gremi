<?php

namespace App\Http\Requests;

use App\Models\Departamento;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StoreDepartamentoRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('departamento_create');
    }

    public function rules()
    {
        return [
            'nombre' => [
                'string',
                'min:0',
                'max:170',
                'required',
            ],
        ];
    }
}
