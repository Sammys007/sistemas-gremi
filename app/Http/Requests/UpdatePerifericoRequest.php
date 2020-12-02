<?php

namespace App\Http\Requests;

use App\Models\Periferico;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdatePerifericoRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('periferico_edit');
    }

    public function rules()
    {
        return [
            'nombre'      => [
                'string',
                'min:0',
                'max:120',
                'required',
            ],
            'marca'       => [
                'string',
                'min:0',
                'max:100',
                'nullable',
            ],
            'modelo'      => [
                'string',
                'min:0',
                'max:100',
                'nullable',
            ],
            'no_de_serie' => [
                'string',
                'min:0',
                'max:100',
                'nullable',
            ],
        ];
    }
}
