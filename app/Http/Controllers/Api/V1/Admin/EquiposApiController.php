<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreEquipoRequest;
use App\Http\Requests\UpdateEquipoRequest;
use App\Http\Resources\Admin\EquipoResource;
use App\Models\DiscosDuro;
use App\Models\Equipo;
use App\Models\Marca;
use App\Models\MemoriasRam;
use App\Models\Periferico;
use App\Models\Procesadore;
use App\Models\User;
use Gate;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Spatie\MediaLibrary\MediaCollections\Models\Media;

class EquiposApiController extends Controller
{
    public function index()
    {
        abort_if(Gate::denies('equipo_access'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EquipoResource(Equipo::with(['owner', 'marca', 'procesador', 'memoriaRam', 'discoDuro', 'periferico'])->advancedFilter());
    }

    public function store(StoreEquipoRequest $request)
    {
        $equipo = Equipo::create($request->validated());
        $equipo->periferico()->sync($request->input('periferico.*.id', []));

        if ($media = $request->input('fotos', [])) {
            Media::whereIn('id', data_get($media, '*.id'))
                ->where('model_id', 0)
                ->update(['model_id' => $equipo->id]);
        }

        return (new EquipoResource($equipo))
            ->response()
            ->setStatusCode(Response::HTTP_CREATED);
    }

    public function create(Equipo $equipo)
    {
        abort_if(Gate::denies('equipo_create'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'meta' => [
                'owner'       => User::get(['id', 'name']),
                'marca'       => Marca::get(['id', 'nombre']),
                'procesador'  => Procesadore::get(['id', 'nombre']),
                'memoria_ram' => MemoriasRam::get(['id', 'tipo']),
                'disco_duro'  => DiscosDuro::get(['id', 'capacidad']),
                'periferico'  => Periferico::get(['id', 'nombre']),
                'tipo'        => Equipo::TIPO_SELECT,
            ],
        ]);
    }

    public function show(Equipo $equipo)
    {
        abort_if(Gate::denies('equipo_show'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return new EquipoResource($equipo->load(['owner', 'marca', 'procesador', 'memoriaRam', 'discoDuro', 'periferico']));
    }

    public function update(UpdateEquipoRequest $request, Equipo $equipo)
    {
        $equipo->update($request->validated());
        $equipo->periferico()->sync($request->input('periferico.*.id', []));
        $equipo->updateMedia($request->input('fotos', []), 'equipo_fotos');

        return (new EquipoResource($equipo))
            ->response()
            ->setStatusCode(Response::HTTP_ACCEPTED);
    }

    public function edit(Equipo $equipo)
    {
        abort_if(Gate::denies('equipo_edit'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        return response([
            'data' => new EquipoResource($equipo->load(['owner', 'marca', 'procesador', 'memoriaRam', 'discoDuro', 'periferico'])),
            'meta' => [
                'owner'       => User::get(['id', 'name']),
                'marca'       => Marca::get(['id', 'nombre']),
                'procesador'  => Procesadore::get(['id', 'nombre']),
                'memoria_ram' => MemoriasRam::get(['id', 'tipo']),
                'disco_duro'  => DiscosDuro::get(['id', 'capacidad']),
                'periferico'  => Periferico::get(['id', 'nombre']),
                'tipo'        => Equipo::TIPO_SELECT,
            ],
        ]);
    }

    public function destroy(Equipo $equipo)
    {
        abort_if(Gate::denies('equipo_delete'), Response::HTTP_FORBIDDEN, '403 Forbidden');

        $equipo->delete();

        return response(null, Response::HTTP_NO_CONTENT);
    }

    public function storeMedia(Request $request)
    {
        abort_if(Gate::none(['equipo_create', 'equipo_edit']), Response::HTTP_FORBIDDEN, '403 Forbidden');

        if ($request->has('size')) {
            $this->validate($request, [
                'file' => 'max:' . $request->input('size') * 1024,
            ]);
        }

        $model         = new Equipo();
        $model->id     = $request->input('model_id', 0);
        $model->exists = true;
        $media         = $model->addMediaFromRequest('file')->toMediaCollection($request->input('collection_name'));

        return response()->json($media, Response::HTTP_CREATED);
    }
}
