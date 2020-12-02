<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEquiposMovileRequest;
use App\Http\Requests\UpdateEquiposMovileRequest;
use App\Http\Resources\Admin\EquiposMovileResource;
use App\Models\EquiposMovile;
use App\Models\MarcasMovile;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class EquiposMovilesApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('equipos_movile_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EquiposMovileResource(EquiposMovile::with(['marca'])->advancedFilter());
    }

    public function store(StoreEquiposMovileRequest $request)
    {
        $equiposMovile = EquiposMovile::create($request->validated());

        return (new EquiposMovileResource($equiposMovile))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(EquiposMovile $equiposMovile)
    {
        abort_if(Gate::denies('equipos_movile_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'marca'       => MarcasMovile::get(['id', 'nombre']),
                'perifericos' => EquiposMovile::PERIFERICOS_RADIO,
            ],
        ]);
    }

    public function show(EquiposMovile $equiposMovile)
    {
        abort_if(Gate::denies('equipos_movile_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EquiposMovileResource($equiposMovile->load(['marca']));
    }

    public function update(UpdateEquiposMovileRequest $request, EquiposMovile $equiposMovile)
    {
        $equiposMovile->update($request->validated());

        return (new EquiposMovileResource($equiposMovile))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(EquiposMovile $equiposMovile)
    {
        abort_if(Gate::denies('equipos_movile_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new EquiposMovileResource($equiposMovile->load(['marca'])),
            'meta' => [
                'marca'       => MarcasMovile::get(['id', 'nombre']),
                'perifericos' => EquiposMovile::PERIFERICOS_RADIO,
            ],
        ]);
    }

    public function destroy(EquiposMovile $equiposMovile)
    {
        abort_if(Gate::denies('equipos_movile_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $equiposMovile->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
