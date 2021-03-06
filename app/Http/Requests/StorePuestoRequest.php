<?php

namespace App\Http\Requests;

use App\Models\Puesto;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class StorePuestoRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('puesto_create');
    }

    public function rules()
    {
        return [
            'nombre'          => [
                'string',
                'min:0',
                'max:150',
                'required',
            ],
            'departamento_id' => [
                'integer',
                'exists:departamentos,id',
                'required',
            ],
        ];
    }
}
