<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePerifericoRequest;
use App\Http\Requests\UpdatePerifericoRequest;
use App\Http\Resources\Admin\PerifericoResource;
use App\Models\Periferico;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PerifericosApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('periferico_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PerifericoResource(Periferico::advancedFilter());
    }

    public function store(StorePerifericoRequest $request)
    {
        $periferico = Periferico::create($request->validated());

        return (new PerifericoResource($periferico))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Periferico $periferico)
    {
        abort_if(Gate::denies('periferico_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [],
        ]);
    }

    public function show(Periferico $periferico)
    {
        abort_if(Gate::denies('periferico_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new PerifericoResource($periferico);
    }

    public function update(UpdatePerifericoRequest $request, Periferico $periferico)
    {
        $periferico->update($request->validated());

        return (new PerifericoResource($periferico))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Periferico $periferico)
    {
        abort_if(Gate::denies('periferico_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new PerifericoResource($periferico),
            'meta' => [],
        ]);
    }

    public function destroy(Periferico $periferico)
    {
        abort_if(Gate::denies('periferico_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $periferico->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }
}
