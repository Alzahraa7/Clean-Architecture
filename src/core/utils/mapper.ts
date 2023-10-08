// to get the data from/to model and format it to/from the entities
export abstract class Mapper<I, O> {
  abstract fromJson(param: I): O;
  abstract toJson(param: O): I;
};