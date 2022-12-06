import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConexionDataSource} from '../datasources';
import {Baucher, BaucherRelations} from '../models';

export class BaucherRepository extends DefaultCrudRepository<
  Baucher,
  typeof Baucher.prototype.id,
  BaucherRelations
> {
  constructor(
    @inject('datasources.AtlasConexion') dataSource: AtlasConexionDataSource,
  ) {
    super(Baucher, dataSource);
  }
}
