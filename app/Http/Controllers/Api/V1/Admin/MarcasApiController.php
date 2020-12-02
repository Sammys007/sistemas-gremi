<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMarcaRequest;
use App\Http\Requests\UpdateMarcaRequest;
use App\Http\Resources\Admin\MarcaResource;
use App\Models\Marca;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MarcasApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('marca_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MarcaResource(Marca::advancedFilter());
    }

    public function store(StoreMarcaRequest $request)
    {
        $marca = Marca::create($request->validated());

        return (new MarcaResource($marca))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Marca $marca)
    {
        abort_if(Gate::denies('marca_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Marca $marca)
    {
        abort_if(Gate::denies('marca_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MarcaResource($marca);
    }

    public function update(UpdateMarcaRequest $request, Marca $marca)
    {
        $marca->update($request->validated());

        return (new MarcaResource($marca))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Marca $marca)
    {
        abort_if(Gate::denies('marca_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new MarcaResource($marca),
            'meta' => [],
        ]);
    }

    public function destroy(Marca $marca)
    {
        abort_if(Gate::denies('marca_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $marca->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
