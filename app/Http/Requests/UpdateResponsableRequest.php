<?php

namespace App\Http\Requests;

use App\Models\Responsable;
use Gate;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Response;

class UpdateResponsableRequest extends FormRequest
{
    public function authorize()
    {
        return Gate::allows('responsable_edit');
    }

    public function rules()
    {
        return [
            'nombre'    => [
                'string',
                'min:0',
                'max:200',
                'required',
            ],
            'puesto_id' => [
                'integer',
                'exists:puestos,id',
                'required',
            ],
        ];
    }
}
