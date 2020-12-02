<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreResguardosPcRequest;
use App\Http\Requests\UpdateResguardosPcRequest;
use App\Http\Resources\Admin\ResguardosPcResource;
use App\Models\Equipo;
use App\Models\ResguardosPc;
use App\Models\Responsable;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class ResguardosPcApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('resguardos_pc_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResguardosPcResource(ResguardosPc::with(['responsable', 'equipo'])->advancedFilter());
    }

    public function store(StoreResguardosPcRequest $request)
    {
        $resguardosPc = ResguardosPc::create($request->validated());

        if ($media = $request->input('pdf', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $resguardosPc->id]);
        }

        return (new ResguardosPcResource($resguardosPc))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(ResguardosPc $resguardosPc)
    {
        abort_if(Gate::denies('resguardos_pc_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'responsable' => Responsable::get(['id', 'nombre']),
                'equipo'      => Equipo::get(['id', 'codigo']),
            ],
        ]);
    }

    public function show(ResguardosPc $resguardosPc)
    {
        abort_if(Gate::denies('resguardos_pc_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new ResguardosPcResource($resguardosPc->load(['responsable', 'equipo']));
    }

    public function update(UpdateResguardosPcRequest $request, ResguardosPc $resguardosPc)
    {
        $resguardosPc->update($request->validated());

        $resguardosPc->updateMedia($request->input('pdf', []), 'resguardos_pc_pdf');

        return (new ResguardosPcResource($resguardosPc))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(ResguardosPc $resguardosPc)
    {
        abort_if(Gate::denies('resguardos_pc_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new ResguardosPcResource($resguardosPc->load(['responsable', 'equipo'])),
            'meta' => [
                'responsable' => Responsable::get(['id', 'nombre']),
                'equipo'      => Equipo::get(['id', 'codigo']),
            ],
        ]);
    }

    public function destroy(ResguardosPc $resguardosPc)
    {
        abort_if(Gate::denies('resguardos_pc_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $resguardosPc->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['resguardos_pc_create', 'resguardos_pc_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new ResguardosPc();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
