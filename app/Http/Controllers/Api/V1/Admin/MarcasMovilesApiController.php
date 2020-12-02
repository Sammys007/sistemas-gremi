<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreMarcasMovileRequest;
use App\Http\Requests\UpdateMarcasMovileRequest;
use App\Http\Resources\Admin\MarcasMovileResource;
use App\Models\MarcasMovile;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class MarcasMovilesApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('marcas_movile_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MarcasMovileResource(MarcasMovile::advancedFilter());
    }

    public function store(StoreMarcasMovileRequest $request)
    {
        $marcasMovile = MarcasMovile::create($request->validated());

        return (new MarcasMovileResource($marcasMovile))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(MarcasMovile $marcasMovile)
    {
        abort_if(Gate::denies('marcas_movile_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(MarcasMovile $marcasMovile)
    {
        abort_if(Gate::denies('marcas_movile_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new MarcasMovileResource($marcasMovile);
    }

    public function update(UpdateMarcasMovileRequest $request, MarcasMovile $marcasMovile)
    {
        $marcasMovile->update($request->validated());

        return (new MarcasMovileResource($marcasMovile))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(MarcasMovile $marcasMovile)
    {
        abort_if(Gate::denies('marcas_movile_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new MarcasMovileResource($marcasMovile),
            'meta' => [],
        ]);
    }

    public function destroy(MarcasMovile $marcasMovile)
    {
        abort_if(Gate::denies('marcas_movile_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $marcasMovile->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
