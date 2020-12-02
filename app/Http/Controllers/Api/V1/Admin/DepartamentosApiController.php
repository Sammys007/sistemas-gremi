<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreDepartamentoRequest;
use App\Http\Requests\UpdateDepartamentoRequest;
use App\Http\Resources\Admin\DepartamentoResource;
use App\Models\Departamento;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class DepartamentosApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('departamento_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new DepartamentoResource(Departamento::advancedFilter());
    }

    public function store(StoreDepartamentoRequest $request)
    {
        $departamento = Departamento::create($request->validated());

        return (new DepartamentoResource($departamento))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Departamento $departamento)
    {
        abort_if(Gate::denies('departamento_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Departamento $departamento)
    {
        abort_if(Gate::denies('departamento_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new DepartamentoResource($departamento);
    }

    public function update(UpdateDepartamentoRequest $request, Departamento $departamento)
    {
        $departamento->update($request->validated());

        return (new DepartamentoResource($departamento))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Departamento $departamento)
    {
        abort_if(Gate::denies('departamento_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new DepartamentoResource($departamento),
            'meta' => [],
        ]);
    }

    public function destroy(Departamento $departamento)
    {
        abort_if(Gate::denies('departamento_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $departamento->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
