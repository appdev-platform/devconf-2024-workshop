import { Entity } from "@backstage/catalog-model";

export function getTimezone(entity: Entity) {
  return entity.metadata.annotations?.['demo/timezone'];
}
