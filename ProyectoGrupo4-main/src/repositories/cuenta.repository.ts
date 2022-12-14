import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConexionDataSource} from '../datasources';
import {Cuenta, CuentaRelations} from '../models';

export class CuentaRepository extends DefaultCrudRepository<
  Cuenta,
  typeof Cuenta.prototype.id,
  CuentaRelations
> {
  constructor(
    @inject('datasources.AtlasConexion') dataSource: AtlasConexionDataSource,
  ) {
    super(Cuenta, dataSource);
  }
}
