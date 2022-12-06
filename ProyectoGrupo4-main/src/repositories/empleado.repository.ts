import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {AtlasConexionDataSource} from '../datasources';
import {Empleado, EmpleadoRelations} from '../models';

export class EmpleadoRepository extends DefaultCrudRepository<
  Empleado,
  typeof Empleado.prototype.codigoEmpleado,
  EmpleadoRelations
> {
  constructor(
    @inject('datasources.AtlasConexion') dataSource: AtlasConexionDataSource,
  ) {
    super(Empleado, dataSource);
  }
}
