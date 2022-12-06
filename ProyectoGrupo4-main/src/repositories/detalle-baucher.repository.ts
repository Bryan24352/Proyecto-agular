import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConexionDataSource} from '../datasources';
import {DetalleBaucher, DetalleBaucherRelations} from '../models';

export class DetalleBaucherRepository extends DefaultCrudRepository<
  DetalleBaucher,
  typeof DetalleBaucher.prototype.idBaucher,
  DetalleBaucherRelations
> {
  constructor(
    @inject('datasources.AtlasConexion') dataSource: AtlasConexionDataSource,
  ) {
    super(DetalleBaucher, dataSource);
  }
}
