
/**
 * Client
**/

import * as runtime from '@prisma/client/runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Application
 * 应用
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model AppVersion
 * 应用版本
 */
export type AppVersion = $Result.DefaultSelection<Prisma.$AppVersionPayload>
/**
 * Model AppEnv
 * 应用环境
 */
export type AppEnv = $Result.DefaultSelection<Prisma.$AppEnvPayload>
/**
 * Model PageNode
 * 节点
 */
export type PageNode = $Result.DefaultSelection<Prisma.$PageNodePayload>
/**
 * Model PageScheme
 * 页面schema
 */
export type PageScheme = $Result.DefaultSelection<Prisma.$PageSchemePayload>
/**
 * Model BlockStyle
 * 区块风格
 */
export type BlockStyle = $Result.DefaultSelection<Prisma.$BlockStylePayload>
/**
 * Model BlockCategory
 * 区块分类 
 */
export type BlockCategory = $Result.DefaultSelection<Prisma.$BlockCategoryPayload>
/**
 * Model Block
 * 区块
 */
export type Block = $Result.DefaultSelection<Prisma.$BlockPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Applications
 * const applications = await prisma.application.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Applications
   * const applications = await prisma.application.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs>;

  /**
   * `prisma.appVersion`: Exposes CRUD operations for the **AppVersion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppVersions
    * const appVersions = await prisma.appVersion.findMany()
    * ```
    */
  get appVersion(): Prisma.AppVersionDelegate<ExtArgs>;

  /**
   * `prisma.appEnv`: Exposes CRUD operations for the **AppEnv** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AppEnvs
    * const appEnvs = await prisma.appEnv.findMany()
    * ```
    */
  get appEnv(): Prisma.AppEnvDelegate<ExtArgs>;

  /**
   * `prisma.pageNode`: Exposes CRUD operations for the **PageNode** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageNodes
    * const pageNodes = await prisma.pageNode.findMany()
    * ```
    */
  get pageNode(): Prisma.PageNodeDelegate<ExtArgs>;

  /**
   * `prisma.pageScheme`: Exposes CRUD operations for the **PageScheme** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageSchemes
    * const pageSchemes = await prisma.pageScheme.findMany()
    * ```
    */
  get pageScheme(): Prisma.PageSchemeDelegate<ExtArgs>;

  /**
   * `prisma.blockStyle`: Exposes CRUD operations for the **BlockStyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockStyles
    * const blockStyles = await prisma.blockStyle.findMany()
    * ```
    */
  get blockStyle(): Prisma.BlockStyleDelegate<ExtArgs>;

  /**
   * `prisma.blockCategory`: Exposes CRUD operations for the **BlockCategory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BlockCategories
    * const blockCategories = await prisma.blockCategory.findMany()
    * ```
    */
  get blockCategory(): Prisma.BlockCategoryDelegate<ExtArgs>;

  /**
   * `prisma.block`: Exposes CRUD operations for the **Block** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blocks
    * const blocks = await prisma.block.findMany()
    * ```
    */
  get block(): Prisma.BlockDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Application: 'Application',
    AppVersion: 'AppVersion',
    AppEnv: 'AppEnv',
    PageNode: 'PageNode',
    PageScheme: 'PageScheme',
    BlockStyle: 'BlockStyle',
    BlockCategory: 'BlockCategory',
    Block: 'Block'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'application' | 'appVersion' | 'appEnv' | 'pageNode' | 'pageScheme' | 'blockStyle' | 'blockCategory' | 'block'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>,
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      AppVersion: {
        payload: Prisma.$AppVersionPayload<ExtArgs>
        fields: Prisma.AppVersionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppVersionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppVersionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload>
          }
          findFirst: {
            args: Prisma.AppVersionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppVersionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload>
          }
          findMany: {
            args: Prisma.AppVersionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload>[]
          }
          create: {
            args: Prisma.AppVersionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload>
          }
          createMany: {
            args: Prisma.AppVersionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AppVersionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload>
          }
          update: {
            args: Prisma.AppVersionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload>
          }
          deleteMany: {
            args: Prisma.AppVersionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppVersionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppVersionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppVersionPayload>
          }
          aggregate: {
            args: Prisma.AppVersionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppVersion>
          }
          groupBy: {
            args: Prisma.AppVersionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppVersionGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppVersionCountArgs<ExtArgs>,
            result: $Utils.Optional<AppVersionCountAggregateOutputType> | number
          }
        }
      }
      AppEnv: {
        payload: Prisma.$AppEnvPayload<ExtArgs>
        fields: Prisma.AppEnvFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AppEnvFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AppEnvFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload>
          }
          findFirst: {
            args: Prisma.AppEnvFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AppEnvFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload>
          }
          findMany: {
            args: Prisma.AppEnvFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload>[]
          }
          create: {
            args: Prisma.AppEnvCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload>
          }
          createMany: {
            args: Prisma.AppEnvCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AppEnvDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload>
          }
          update: {
            args: Prisma.AppEnvUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload>
          }
          deleteMany: {
            args: Prisma.AppEnvDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AppEnvUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AppEnvUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AppEnvPayload>
          }
          aggregate: {
            args: Prisma.AppEnvAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAppEnv>
          }
          groupBy: {
            args: Prisma.AppEnvGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AppEnvGroupByOutputType>[]
          }
          count: {
            args: Prisma.AppEnvCountArgs<ExtArgs>,
            result: $Utils.Optional<AppEnvCountAggregateOutputType> | number
          }
        }
      }
      PageNode: {
        payload: Prisma.$PageNodePayload<ExtArgs>
        fields: Prisma.PageNodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageNodeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageNodeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload>
          }
          findFirst: {
            args: Prisma.PageNodeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageNodeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload>
          }
          findMany: {
            args: Prisma.PageNodeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload>[]
          }
          create: {
            args: Prisma.PageNodeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload>
          }
          createMany: {
            args: Prisma.PageNodeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PageNodeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload>
          }
          update: {
            args: Prisma.PageNodeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload>
          }
          deleteMany: {
            args: Prisma.PageNodeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PageNodeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PageNodeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageNodePayload>
          }
          aggregate: {
            args: Prisma.PageNodeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePageNode>
          }
          groupBy: {
            args: Prisma.PageNodeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PageNodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageNodeCountArgs<ExtArgs>,
            result: $Utils.Optional<PageNodeCountAggregateOutputType> | number
          }
        }
      }
      PageScheme: {
        payload: Prisma.$PageSchemePayload<ExtArgs>
        fields: Prisma.PageSchemeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageSchemeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageSchemeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload>
          }
          findFirst: {
            args: Prisma.PageSchemeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageSchemeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload>
          }
          findMany: {
            args: Prisma.PageSchemeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload>[]
          }
          create: {
            args: Prisma.PageSchemeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload>
          }
          createMany: {
            args: Prisma.PageSchemeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PageSchemeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload>
          }
          update: {
            args: Prisma.PageSchemeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload>
          }
          deleteMany: {
            args: Prisma.PageSchemeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PageSchemeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PageSchemeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PageSchemePayload>
          }
          aggregate: {
            args: Prisma.PageSchemeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePageScheme>
          }
          groupBy: {
            args: Prisma.PageSchemeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PageSchemeGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageSchemeCountArgs<ExtArgs>,
            result: $Utils.Optional<PageSchemeCountAggregateOutputType> | number
          }
        }
      }
      BlockStyle: {
        payload: Prisma.$BlockStylePayload<ExtArgs>
        fields: Prisma.BlockStyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockStyleFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockStyleFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload>
          }
          findFirst: {
            args: Prisma.BlockStyleFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockStyleFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload>
          }
          findMany: {
            args: Prisma.BlockStyleFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload>[]
          }
          create: {
            args: Prisma.BlockStyleCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload>
          }
          createMany: {
            args: Prisma.BlockStyleCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlockStyleDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload>
          }
          update: {
            args: Prisma.BlockStyleUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload>
          }
          deleteMany: {
            args: Prisma.BlockStyleDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockStyleUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockStyleUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockStylePayload>
          }
          aggregate: {
            args: Prisma.BlockStyleAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlockStyle>
          }
          groupBy: {
            args: Prisma.BlockStyleGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockStyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockStyleCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockStyleCountAggregateOutputType> | number
          }
        }
      }
      BlockCategory: {
        payload: Prisma.$BlockCategoryPayload<ExtArgs>
        fields: Prisma.BlockCategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockCategoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockCategoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          findFirst: {
            args: Prisma.BlockCategoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockCategoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          findMany: {
            args: Prisma.BlockCategoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>[]
          }
          create: {
            args: Prisma.BlockCategoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          createMany: {
            args: Prisma.BlockCategoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlockCategoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          update: {
            args: Prisma.BlockCategoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          deleteMany: {
            args: Prisma.BlockCategoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockCategoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockCategoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockCategoryPayload>
          }
          aggregate: {
            args: Prisma.BlockCategoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlockCategory>
          }
          groupBy: {
            args: Prisma.BlockCategoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockCategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCategoryCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockCategoryCountAggregateOutputType> | number
          }
        }
      }
      Block: {
        payload: Prisma.$BlockPayload<ExtArgs>
        fields: Prisma.BlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findFirst: {
            args: Prisma.BlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          findMany: {
            args: Prisma.BlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>[]
          }
          create: {
            args: Prisma.BlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          createMany: {
            args: Prisma.BlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          update: {
            args: Prisma.BlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          deleteMany: {
            args: Prisma.BlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BlockPayload>
          }
          aggregate: {
            args: Prisma.BlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBlock>
          }
          groupBy: {
            args: Prisma.BlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.BlockCountArgs<ExtArgs>,
            result: $Utils.Optional<BlockCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationAvgAggregateOutputType = {
    id: number | null
  }

  export type ApplicationSumAggregateOutputType = {
    id: number | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: number | null
    name: string | null
    describe: string | null
    currentEditVersion: string | null
    isDeleted: boolean | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    describe: string | null
    currentEditVersion: string | null
    isDeleted: boolean | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    name: number
    describe: number
    currentEditVersion: number
    isDeleted: number
    _all: number
  }


  export type ApplicationAvgAggregateInputType = {
    id?: true
  }

  export type ApplicationSumAggregateInputType = {
    id?: true
  }

  export type ApplicationMinAggregateInputType = {
    id?: true
    name?: true
    describe?: true
    currentEditVersion?: true
    isDeleted?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    name?: true
    describe?: true
    currentEditVersion?: true
    isDeleted?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    name?: true
    describe?: true
    currentEditVersion?: true
    isDeleted?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApplicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApplicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _avg?: ApplicationAvgAggregateInputType
    _sum?: ApplicationSumAggregateInputType
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: number
    name: string
    describe: string
    currentEditVersion: string
    isDeleted: boolean
    _count: ApplicationCountAggregateOutputType | null
    _avg: ApplicationAvgAggregateOutputType | null
    _sum: ApplicationSumAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    describe?: boolean
    currentEditVersion?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    name?: boolean
    describe?: boolean
    currentEditVersion?: boolean
    isDeleted?: boolean
  }


  export type $ApplicationPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 应用名 
       */
      name: string
      /**
       * 应用描述 
       */
      describe: string
      /**
       * 当前编辑版本 
       */
      currentEditVersion: string
      /**
       * 是否被删除 
       */
      isDeleted: boolean
    }, ExtArgs["result"]["application"]>
    composites: {}
  }


  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ApplicationFindManyArgs, 'select' | 'include'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ApplicationFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Application that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ApplicationFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ApplicationFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
    **/
    create<T extends ApplicationCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Applications.
     *     @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     *     @example
     *     // Create many Applications
     *     const application = await prisma.application.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ApplicationCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
    **/
    delete<T extends ApplicationDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ApplicationUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ApplicationDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ApplicationUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
    **/
    upsert<T extends ApplicationUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>
    ): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Application model
   */ 
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'Int'>
    readonly name: FieldRef<"Application", 'String'>
    readonly describe: FieldRef<"Application", 'String'>
    readonly currentEditVersion: FieldRef<"Application", 'String'>
    readonly isDeleted: FieldRef<"Application", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }


  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }


  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }


  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }


  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
  }


  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
  }



  /**
   * Model AppVersion
   */

  export type AggregateAppVersion = {
    _count: AppVersionCountAggregateOutputType | null
    _avg: AppVersionAvgAggregateOutputType | null
    _sum: AppVersionSumAggregateOutputType | null
    _min: AppVersionMinAggregateOutputType | null
    _max: AppVersionMaxAggregateOutputType | null
  }

  export type AppVersionAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
  }

  export type AppVersionSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
  }

  export type AppVersionMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    version: string | null
    isAuditing: boolean | null
    isPass: boolean | null
    auditContent: string | null
    isDeleted: boolean | null
  }

  export type AppVersionMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    version: string | null
    isAuditing: boolean | null
    isPass: boolean | null
    auditContent: string | null
    isDeleted: boolean | null
  }

  export type AppVersionCountAggregateOutputType = {
    id: number
    applicationId: number
    version: number
    isAuditing: number
    isPass: number
    auditContent: number
    isDeleted: number
    _all: number
  }


  export type AppVersionAvgAggregateInputType = {
    id?: true
    applicationId?: true
  }

  export type AppVersionSumAggregateInputType = {
    id?: true
    applicationId?: true
  }

  export type AppVersionMinAggregateInputType = {
    id?: true
    applicationId?: true
    version?: true
    isAuditing?: true
    isPass?: true
    auditContent?: true
    isDeleted?: true
  }

  export type AppVersionMaxAggregateInputType = {
    id?: true
    applicationId?: true
    version?: true
    isAuditing?: true
    isPass?: true
    auditContent?: true
    isDeleted?: true
  }

  export type AppVersionCountAggregateInputType = {
    id?: true
    applicationId?: true
    version?: true
    isAuditing?: true
    isPass?: true
    auditContent?: true
    isDeleted?: true
    _all?: true
  }

  export type AppVersionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppVersion to aggregate.
     */
    where?: AppVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppVersions to fetch.
     */
    orderBy?: AppVersionOrderByWithRelationInput | AppVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppVersions
    **/
    _count?: true | AppVersionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppVersionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppVersionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppVersionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppVersionMaxAggregateInputType
  }

  export type GetAppVersionAggregateType<T extends AppVersionAggregateArgs> = {
        [P in keyof T & keyof AggregateAppVersion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppVersion[P]>
      : GetScalarType<T[P], AggregateAppVersion[P]>
  }




  export type AppVersionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AppVersionWhereInput
    orderBy?: AppVersionOrderByWithAggregationInput | AppVersionOrderByWithAggregationInput[]
    by: AppVersionScalarFieldEnum[] | AppVersionScalarFieldEnum
    having?: AppVersionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppVersionCountAggregateInputType | true
    _avg?: AppVersionAvgAggregateInputType
    _sum?: AppVersionSumAggregateInputType
    _min?: AppVersionMinAggregateInputType
    _max?: AppVersionMaxAggregateInputType
  }

  export type AppVersionGroupByOutputType = {
    id: number
    applicationId: number
    version: string
    isAuditing: boolean
    isPass: boolean
    auditContent: string
    isDeleted: boolean
    _count: AppVersionCountAggregateOutputType | null
    _avg: AppVersionAvgAggregateOutputType | null
    _sum: AppVersionSumAggregateOutputType | null
    _min: AppVersionMinAggregateOutputType | null
    _max: AppVersionMaxAggregateOutputType | null
  }

  type GetAppVersionGroupByPayload<T extends AppVersionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppVersionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppVersionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppVersionGroupByOutputType[P]>
            : GetScalarType<T[P], AppVersionGroupByOutputType[P]>
        }
      >
    >


  export type AppVersionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    version?: boolean
    isAuditing?: boolean
    isPass?: boolean
    auditContent?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["appVersion"]>

  export type AppVersionSelectScalar = {
    id?: boolean
    applicationId?: boolean
    version?: boolean
    isAuditing?: boolean
    isPass?: boolean
    auditContent?: boolean
    isDeleted?: boolean
  }


  export type $AppVersionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "AppVersion"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 对应应用id
       */
      applicationId: number
      /**
       * 版本号
       */
      version: string
      /**
       * 是否正在审核中
       */
      isAuditing: boolean
      /**
       * 是否已审核通过，false并不代表未通过，有可能是没提交过
       */
      isPass: boolean
      /**
       * 审核意见，不为空字符串代表未通过
       */
      auditContent: string
      /**
       * 是否被删除
       */
      isDeleted: boolean
    }, ExtArgs["result"]["appVersion"]>
    composites: {}
  }


  type AppVersionGetPayload<S extends boolean | null | undefined | AppVersionDefaultArgs> = $Result.GetResult<Prisma.$AppVersionPayload, S>

  type AppVersionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AppVersionFindManyArgs, 'select' | 'include'> & {
      select?: AppVersionCountAggregateInputType | true
    }

  export interface AppVersionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppVersion'], meta: { name: 'AppVersion' } }
    /**
     * Find zero or one AppVersion that matches the filter.
     * @param {AppVersionFindUniqueArgs} args - Arguments to find a AppVersion
     * @example
     * // Get one AppVersion
     * const appVersion = await prisma.appVersion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppVersionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppVersionFindUniqueArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AppVersion that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppVersionFindUniqueOrThrowArgs} args - Arguments to find a AppVersion
     * @example
     * // Get one AppVersion
     * const appVersion = await prisma.appVersion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppVersionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppVersionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AppVersion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppVersionFindFirstArgs} args - Arguments to find a AppVersion
     * @example
     * // Get one AppVersion
     * const appVersion = await prisma.appVersion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppVersionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppVersionFindFirstArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AppVersion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppVersionFindFirstOrThrowArgs} args - Arguments to find a AppVersion
     * @example
     * // Get one AppVersion
     * const appVersion = await prisma.appVersion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppVersionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppVersionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AppVersions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppVersionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppVersions
     * const appVersions = await prisma.appVersion.findMany()
     * 
     * // Get first 10 AppVersions
     * const appVersions = await prisma.appVersion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appVersionWithIdOnly = await prisma.appVersion.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppVersionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppVersionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AppVersion.
     * @param {AppVersionCreateArgs} args - Arguments to create a AppVersion.
     * @example
     * // Create one AppVersion
     * const AppVersion = await prisma.appVersion.create({
     *   data: {
     *     // ... data to create a AppVersion
     *   }
     * })
     * 
    **/
    create<T extends AppVersionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppVersionCreateArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AppVersions.
     *     @param {AppVersionCreateManyArgs} args - Arguments to create many AppVersions.
     *     @example
     *     // Create many AppVersions
     *     const appVersion = await prisma.appVersion.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppVersionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppVersionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppVersion.
     * @param {AppVersionDeleteArgs} args - Arguments to delete one AppVersion.
     * @example
     * // Delete one AppVersion
     * const AppVersion = await prisma.appVersion.delete({
     *   where: {
     *     // ... filter to delete one AppVersion
     *   }
     * })
     * 
    **/
    delete<T extends AppVersionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppVersionDeleteArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AppVersion.
     * @param {AppVersionUpdateArgs} args - Arguments to update one AppVersion.
     * @example
     * // Update one AppVersion
     * const appVersion = await prisma.appVersion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppVersionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppVersionUpdateArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AppVersions.
     * @param {AppVersionDeleteManyArgs} args - Arguments to filter AppVersions to delete.
     * @example
     * // Delete a few AppVersions
     * const { count } = await prisma.appVersion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppVersionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppVersionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppVersionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppVersions
     * const appVersion = await prisma.appVersion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppVersionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppVersionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppVersion.
     * @param {AppVersionUpsertArgs} args - Arguments to update or create a AppVersion.
     * @example
     * // Update or create a AppVersion
     * const appVersion = await prisma.appVersion.upsert({
     *   create: {
     *     // ... data to create a AppVersion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppVersion we want to update
     *   }
     * })
    **/
    upsert<T extends AppVersionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppVersionUpsertArgs<ExtArgs>>
    ): Prisma__AppVersionClient<$Result.GetResult<Prisma.$AppVersionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AppVersions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppVersionCountArgs} args - Arguments to filter AppVersions to count.
     * @example
     * // Count the number of AppVersions
     * const count = await prisma.appVersion.count({
     *   where: {
     *     // ... the filter for the AppVersions we want to count
     *   }
     * })
    **/
    count<T extends AppVersionCountArgs>(
      args?: Subset<T, AppVersionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppVersionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppVersionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppVersionAggregateArgs>(args: Subset<T, AppVersionAggregateArgs>): Prisma.PrismaPromise<GetAppVersionAggregateType<T>>

    /**
     * Group by AppVersion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppVersionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppVersionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppVersionGroupByArgs['orderBy'] }
        : { orderBy?: AppVersionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppVersionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppVersionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppVersion model
   */
  readonly fields: AppVersionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppVersion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppVersionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AppVersion model
   */ 
  interface AppVersionFieldRefs {
    readonly id: FieldRef<"AppVersion", 'Int'>
    readonly applicationId: FieldRef<"AppVersion", 'Int'>
    readonly version: FieldRef<"AppVersion", 'String'>
    readonly isAuditing: FieldRef<"AppVersion", 'Boolean'>
    readonly isPass: FieldRef<"AppVersion", 'Boolean'>
    readonly auditContent: FieldRef<"AppVersion", 'String'>
    readonly isDeleted: FieldRef<"AppVersion", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * AppVersion findUnique
   */
  export type AppVersionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * Filter, which AppVersion to fetch.
     */
    where: AppVersionWhereUniqueInput
  }


  /**
   * AppVersion findUniqueOrThrow
   */
  export type AppVersionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * Filter, which AppVersion to fetch.
     */
    where: AppVersionWhereUniqueInput
  }


  /**
   * AppVersion findFirst
   */
  export type AppVersionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * Filter, which AppVersion to fetch.
     */
    where?: AppVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppVersions to fetch.
     */
    orderBy?: AppVersionOrderByWithRelationInput | AppVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppVersions.
     */
    cursor?: AppVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppVersions.
     */
    distinct?: AppVersionScalarFieldEnum | AppVersionScalarFieldEnum[]
  }


  /**
   * AppVersion findFirstOrThrow
   */
  export type AppVersionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * Filter, which AppVersion to fetch.
     */
    where?: AppVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppVersions to fetch.
     */
    orderBy?: AppVersionOrderByWithRelationInput | AppVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppVersions.
     */
    cursor?: AppVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppVersions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppVersions.
     */
    distinct?: AppVersionScalarFieldEnum | AppVersionScalarFieldEnum[]
  }


  /**
   * AppVersion findMany
   */
  export type AppVersionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * Filter, which AppVersions to fetch.
     */
    where?: AppVersionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppVersions to fetch.
     */
    orderBy?: AppVersionOrderByWithRelationInput | AppVersionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppVersions.
     */
    cursor?: AppVersionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppVersions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppVersions.
     */
    skip?: number
    distinct?: AppVersionScalarFieldEnum | AppVersionScalarFieldEnum[]
  }


  /**
   * AppVersion create
   */
  export type AppVersionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * The data needed to create a AppVersion.
     */
    data: XOR<AppVersionCreateInput, AppVersionUncheckedCreateInput>
  }


  /**
   * AppVersion createMany
   */
  export type AppVersionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppVersions.
     */
    data: AppVersionCreateManyInput | AppVersionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AppVersion update
   */
  export type AppVersionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * The data needed to update a AppVersion.
     */
    data: XOR<AppVersionUpdateInput, AppVersionUncheckedUpdateInput>
    /**
     * Choose, which AppVersion to update.
     */
    where: AppVersionWhereUniqueInput
  }


  /**
   * AppVersion updateMany
   */
  export type AppVersionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppVersions.
     */
    data: XOR<AppVersionUpdateManyMutationInput, AppVersionUncheckedUpdateManyInput>
    /**
     * Filter which AppVersions to update
     */
    where?: AppVersionWhereInput
  }


  /**
   * AppVersion upsert
   */
  export type AppVersionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * The filter to search for the AppVersion to update in case it exists.
     */
    where: AppVersionWhereUniqueInput
    /**
     * In case the AppVersion found by the `where` argument doesn't exist, create a new AppVersion with this data.
     */
    create: XOR<AppVersionCreateInput, AppVersionUncheckedCreateInput>
    /**
     * In case the AppVersion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppVersionUpdateInput, AppVersionUncheckedUpdateInput>
  }


  /**
   * AppVersion delete
   */
  export type AppVersionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
    /**
     * Filter which AppVersion to delete.
     */
    where: AppVersionWhereUniqueInput
  }


  /**
   * AppVersion deleteMany
   */
  export type AppVersionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppVersions to delete
     */
    where?: AppVersionWhereInput
  }


  /**
   * AppVersion without action
   */
  export type AppVersionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppVersion
     */
    select?: AppVersionSelect<ExtArgs> | null
  }



  /**
   * Model AppEnv
   */

  export type AggregateAppEnv = {
    _count: AppEnvCountAggregateOutputType | null
    _avg: AppEnvAvgAggregateOutputType | null
    _sum: AppEnvSumAggregateOutputType | null
    _min: AppEnvMinAggregateOutputType | null
    _max: AppEnvMaxAggregateOutputType | null
  }

  export type AppEnvAvgAggregateOutputType = {
    id: number | null
    applicationId: number | null
    appVersionId: number | null
  }

  export type AppEnvSumAggregateOutputType = {
    id: number | null
    applicationId: number | null
    appVersionId: number | null
  }

  export type AppEnvMinAggregateOutputType = {
    id: number | null
    applicationId: number | null
    env: string | null
    envCh: string | null
    canDelete: boolean | null
    appVersionId: number | null
    version: string | null
    isDeleted: boolean | null
  }

  export type AppEnvMaxAggregateOutputType = {
    id: number | null
    applicationId: number | null
    env: string | null
    envCh: string | null
    canDelete: boolean | null
    appVersionId: number | null
    version: string | null
    isDeleted: boolean | null
  }

  export type AppEnvCountAggregateOutputType = {
    id: number
    applicationId: number
    env: number
    envCh: number
    canDelete: number
    appVersionId: number
    version: number
    isDeleted: number
    _all: number
  }


  export type AppEnvAvgAggregateInputType = {
    id?: true
    applicationId?: true
    appVersionId?: true
  }

  export type AppEnvSumAggregateInputType = {
    id?: true
    applicationId?: true
    appVersionId?: true
  }

  export type AppEnvMinAggregateInputType = {
    id?: true
    applicationId?: true
    env?: true
    envCh?: true
    canDelete?: true
    appVersionId?: true
    version?: true
    isDeleted?: true
  }

  export type AppEnvMaxAggregateInputType = {
    id?: true
    applicationId?: true
    env?: true
    envCh?: true
    canDelete?: true
    appVersionId?: true
    version?: true
    isDeleted?: true
  }

  export type AppEnvCountAggregateInputType = {
    id?: true
    applicationId?: true
    env?: true
    envCh?: true
    canDelete?: true
    appVersionId?: true
    version?: true
    isDeleted?: true
    _all?: true
  }

  export type AppEnvAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppEnv to aggregate.
     */
    where?: AppEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEnvs to fetch.
     */
    orderBy?: AppEnvOrderByWithRelationInput | AppEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AppEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEnvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AppEnvs
    **/
    _count?: true | AppEnvCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AppEnvAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AppEnvSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AppEnvMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AppEnvMaxAggregateInputType
  }

  export type GetAppEnvAggregateType<T extends AppEnvAggregateArgs> = {
        [P in keyof T & keyof AggregateAppEnv]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppEnv[P]>
      : GetScalarType<T[P], AggregateAppEnv[P]>
  }




  export type AppEnvGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AppEnvWhereInput
    orderBy?: AppEnvOrderByWithAggregationInput | AppEnvOrderByWithAggregationInput[]
    by: AppEnvScalarFieldEnum[] | AppEnvScalarFieldEnum
    having?: AppEnvScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AppEnvCountAggregateInputType | true
    _avg?: AppEnvAvgAggregateInputType
    _sum?: AppEnvSumAggregateInputType
    _min?: AppEnvMinAggregateInputType
    _max?: AppEnvMaxAggregateInputType
  }

  export type AppEnvGroupByOutputType = {
    id: number
    applicationId: number
    env: string
    envCh: string
    canDelete: boolean
    appVersionId: number
    version: string
    isDeleted: boolean
    _count: AppEnvCountAggregateOutputType | null
    _avg: AppEnvAvgAggregateOutputType | null
    _sum: AppEnvSumAggregateOutputType | null
    _min: AppEnvMinAggregateOutputType | null
    _max: AppEnvMaxAggregateOutputType | null
  }

  type GetAppEnvGroupByPayload<T extends AppEnvGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppEnvGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AppEnvGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AppEnvGroupByOutputType[P]>
            : GetScalarType<T[P], AppEnvGroupByOutputType[P]>
        }
      >
    >


  export type AppEnvSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    env?: boolean
    envCh?: boolean
    canDelete?: boolean
    appVersionId?: boolean
    version?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["appEnv"]>

  export type AppEnvSelectScalar = {
    id?: boolean
    applicationId?: boolean
    env?: boolean
    envCh?: boolean
    canDelete?: boolean
    appVersionId?: boolean
    version?: boolean
    isDeleted?: boolean
  }


  export type $AppEnvPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "AppEnv"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 对应应用id
       */
      applicationId: number
      /**
       * 环境（默认有test/pre/master）
       */
      env: string
      /**
       * 环境名
       */
      envCh: string
      /**
       * 是否可删除（test/pre/master不可删除）
       */
      canDelete: boolean
      /**
       * 版本号id, 为0则为无绑定
       */
      appVersionId: number
      /**
       * 版本号
       */
      version: string
      /**
       * 是否被删除
       */
      isDeleted: boolean
    }, ExtArgs["result"]["appEnv"]>
    composites: {}
  }


  type AppEnvGetPayload<S extends boolean | null | undefined | AppEnvDefaultArgs> = $Result.GetResult<Prisma.$AppEnvPayload, S>

  type AppEnvCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AppEnvFindManyArgs, 'select' | 'include'> & {
      select?: AppEnvCountAggregateInputType | true
    }

  export interface AppEnvDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AppEnv'], meta: { name: 'AppEnv' } }
    /**
     * Find zero or one AppEnv that matches the filter.
     * @param {AppEnvFindUniqueArgs} args - Arguments to find a AppEnv
     * @example
     * // Get one AppEnv
     * const appEnv = await prisma.appEnv.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AppEnvFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AppEnvFindUniqueArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one AppEnv that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AppEnvFindUniqueOrThrowArgs} args - Arguments to find a AppEnv
     * @example
     * // Get one AppEnv
     * const appEnv = await prisma.appEnv.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AppEnvFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppEnvFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first AppEnv that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEnvFindFirstArgs} args - Arguments to find a AppEnv
     * @example
     * // Get one AppEnv
     * const appEnv = await prisma.appEnv.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AppEnvFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AppEnvFindFirstArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first AppEnv that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEnvFindFirstOrThrowArgs} args - Arguments to find a AppEnv
     * @example
     * // Get one AppEnv
     * const appEnv = await prisma.appEnv.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AppEnvFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AppEnvFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more AppEnvs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEnvFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AppEnvs
     * const appEnvs = await prisma.appEnv.findMany()
     * 
     * // Get first 10 AppEnvs
     * const appEnvs = await prisma.appEnv.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const appEnvWithIdOnly = await prisma.appEnv.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AppEnvFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppEnvFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a AppEnv.
     * @param {AppEnvCreateArgs} args - Arguments to create a AppEnv.
     * @example
     * // Create one AppEnv
     * const AppEnv = await prisma.appEnv.create({
     *   data: {
     *     // ... data to create a AppEnv
     *   }
     * })
     * 
    **/
    create<T extends AppEnvCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AppEnvCreateArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many AppEnvs.
     *     @param {AppEnvCreateManyArgs} args - Arguments to create many AppEnvs.
     *     @example
     *     // Create many AppEnvs
     *     const appEnv = await prisma.appEnv.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AppEnvCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppEnvCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AppEnv.
     * @param {AppEnvDeleteArgs} args - Arguments to delete one AppEnv.
     * @example
     * // Delete one AppEnv
     * const AppEnv = await prisma.appEnv.delete({
     *   where: {
     *     // ... filter to delete one AppEnv
     *   }
     * })
     * 
    **/
    delete<T extends AppEnvDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AppEnvDeleteArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one AppEnv.
     * @param {AppEnvUpdateArgs} args - Arguments to update one AppEnv.
     * @example
     * // Update one AppEnv
     * const appEnv = await prisma.appEnv.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AppEnvUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AppEnvUpdateArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more AppEnvs.
     * @param {AppEnvDeleteManyArgs} args - Arguments to filter AppEnvs to delete.
     * @example
     * // Delete a few AppEnvs
     * const { count } = await prisma.appEnv.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AppEnvDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AppEnvDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AppEnvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEnvUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AppEnvs
     * const appEnv = await prisma.appEnv.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AppEnvUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AppEnvUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AppEnv.
     * @param {AppEnvUpsertArgs} args - Arguments to update or create a AppEnv.
     * @example
     * // Update or create a AppEnv
     * const appEnv = await prisma.appEnv.upsert({
     *   create: {
     *     // ... data to create a AppEnv
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AppEnv we want to update
     *   }
     * })
    **/
    upsert<T extends AppEnvUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AppEnvUpsertArgs<ExtArgs>>
    ): Prisma__AppEnvClient<$Result.GetResult<Prisma.$AppEnvPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of AppEnvs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEnvCountArgs} args - Arguments to filter AppEnvs to count.
     * @example
     * // Count the number of AppEnvs
     * const count = await prisma.appEnv.count({
     *   where: {
     *     // ... the filter for the AppEnvs we want to count
     *   }
     * })
    **/
    count<T extends AppEnvCountArgs>(
      args?: Subset<T, AppEnvCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppEnvCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AppEnv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEnvAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AppEnvAggregateArgs>(args: Subset<T, AppEnvAggregateArgs>): Prisma.PrismaPromise<GetAppEnvAggregateType<T>>

    /**
     * Group by AppEnv.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppEnvGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AppEnvGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AppEnvGroupByArgs['orderBy'] }
        : { orderBy?: AppEnvGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AppEnvGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAppEnvGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AppEnv model
   */
  readonly fields: AppEnvFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AppEnv.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AppEnvClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the AppEnv model
   */ 
  interface AppEnvFieldRefs {
    readonly id: FieldRef<"AppEnv", 'Int'>
    readonly applicationId: FieldRef<"AppEnv", 'Int'>
    readonly env: FieldRef<"AppEnv", 'String'>
    readonly envCh: FieldRef<"AppEnv", 'String'>
    readonly canDelete: FieldRef<"AppEnv", 'Boolean'>
    readonly appVersionId: FieldRef<"AppEnv", 'Int'>
    readonly version: FieldRef<"AppEnv", 'String'>
    readonly isDeleted: FieldRef<"AppEnv", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * AppEnv findUnique
   */
  export type AppEnvFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * Filter, which AppEnv to fetch.
     */
    where: AppEnvWhereUniqueInput
  }


  /**
   * AppEnv findUniqueOrThrow
   */
  export type AppEnvFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * Filter, which AppEnv to fetch.
     */
    where: AppEnvWhereUniqueInput
  }


  /**
   * AppEnv findFirst
   */
  export type AppEnvFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * Filter, which AppEnv to fetch.
     */
    where?: AppEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEnvs to fetch.
     */
    orderBy?: AppEnvOrderByWithRelationInput | AppEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppEnvs.
     */
    cursor?: AppEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEnvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppEnvs.
     */
    distinct?: AppEnvScalarFieldEnum | AppEnvScalarFieldEnum[]
  }


  /**
   * AppEnv findFirstOrThrow
   */
  export type AppEnvFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * Filter, which AppEnv to fetch.
     */
    where?: AppEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEnvs to fetch.
     */
    orderBy?: AppEnvOrderByWithRelationInput | AppEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AppEnvs.
     */
    cursor?: AppEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEnvs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AppEnvs.
     */
    distinct?: AppEnvScalarFieldEnum | AppEnvScalarFieldEnum[]
  }


  /**
   * AppEnv findMany
   */
  export type AppEnvFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * Filter, which AppEnvs to fetch.
     */
    where?: AppEnvWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AppEnvs to fetch.
     */
    orderBy?: AppEnvOrderByWithRelationInput | AppEnvOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AppEnvs.
     */
    cursor?: AppEnvWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AppEnvs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AppEnvs.
     */
    skip?: number
    distinct?: AppEnvScalarFieldEnum | AppEnvScalarFieldEnum[]
  }


  /**
   * AppEnv create
   */
  export type AppEnvCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * The data needed to create a AppEnv.
     */
    data: XOR<AppEnvCreateInput, AppEnvUncheckedCreateInput>
  }


  /**
   * AppEnv createMany
   */
  export type AppEnvCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AppEnvs.
     */
    data: AppEnvCreateManyInput | AppEnvCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * AppEnv update
   */
  export type AppEnvUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * The data needed to update a AppEnv.
     */
    data: XOR<AppEnvUpdateInput, AppEnvUncheckedUpdateInput>
    /**
     * Choose, which AppEnv to update.
     */
    where: AppEnvWhereUniqueInput
  }


  /**
   * AppEnv updateMany
   */
  export type AppEnvUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AppEnvs.
     */
    data: XOR<AppEnvUpdateManyMutationInput, AppEnvUncheckedUpdateManyInput>
    /**
     * Filter which AppEnvs to update
     */
    where?: AppEnvWhereInput
  }


  /**
   * AppEnv upsert
   */
  export type AppEnvUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * The filter to search for the AppEnv to update in case it exists.
     */
    where: AppEnvWhereUniqueInput
    /**
     * In case the AppEnv found by the `where` argument doesn't exist, create a new AppEnv with this data.
     */
    create: XOR<AppEnvCreateInput, AppEnvUncheckedCreateInput>
    /**
     * In case the AppEnv was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AppEnvUpdateInput, AppEnvUncheckedUpdateInput>
  }


  /**
   * AppEnv delete
   */
  export type AppEnvDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
    /**
     * Filter which AppEnv to delete.
     */
    where: AppEnvWhereUniqueInput
  }


  /**
   * AppEnv deleteMany
   */
  export type AppEnvDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which AppEnvs to delete
     */
    where?: AppEnvWhereInput
  }


  /**
   * AppEnv without action
   */
  export type AppEnvDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AppEnv
     */
    select?: AppEnvSelect<ExtArgs> | null
  }



  /**
   * Model PageNode
   */

  export type AggregatePageNode = {
    _count: PageNodeCountAggregateOutputType | null
    _avg: PageNodeAvgAggregateOutputType | null
    _sum: PageNodeSumAggregateOutputType | null
    _min: PageNodeMinAggregateOutputType | null
    _max: PageNodeMaxAggregateOutputType | null
  }

  export type PageNodeAvgAggregateOutputType = {
    id: number | null
    parentId: number | null
    applicationId: number | null
  }

  export type PageNodeSumAggregateOutputType = {
    id: number | null
    parentId: number | null
    applicationId: number | null
  }

  export type PageNodeMinAggregateOutputType = {
    id: number | null
    name: string | null
    describe: string | null
    parentId: number | null
    applicationId: number | null
    version: string | null
    hasSchema: boolean | null
    isDeleted: boolean | null
  }

  export type PageNodeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    describe: string | null
    parentId: number | null
    applicationId: number | null
    version: string | null
    hasSchema: boolean | null
    isDeleted: boolean | null
  }

  export type PageNodeCountAggregateOutputType = {
    id: number
    name: number
    describe: number
    parentId: number
    applicationId: number
    version: number
    hasSchema: number
    isDeleted: number
    _all: number
  }


  export type PageNodeAvgAggregateInputType = {
    id?: true
    parentId?: true
    applicationId?: true
  }

  export type PageNodeSumAggregateInputType = {
    id?: true
    parentId?: true
    applicationId?: true
  }

  export type PageNodeMinAggregateInputType = {
    id?: true
    name?: true
    describe?: true
    parentId?: true
    applicationId?: true
    version?: true
    hasSchema?: true
    isDeleted?: true
  }

  export type PageNodeMaxAggregateInputType = {
    id?: true
    name?: true
    describe?: true
    parentId?: true
    applicationId?: true
    version?: true
    hasSchema?: true
    isDeleted?: true
  }

  export type PageNodeCountAggregateInputType = {
    id?: true
    name?: true
    describe?: true
    parentId?: true
    applicationId?: true
    version?: true
    hasSchema?: true
    isDeleted?: true
    _all?: true
  }

  export type PageNodeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageNode to aggregate.
     */
    where?: PageNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageNodes to fetch.
     */
    orderBy?: PageNodeOrderByWithRelationInput | PageNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageNodes
    **/
    _count?: true | PageNodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageNodeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageNodeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageNodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageNodeMaxAggregateInputType
  }

  export type GetPageNodeAggregateType<T extends PageNodeAggregateArgs> = {
        [P in keyof T & keyof AggregatePageNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageNode[P]>
      : GetScalarType<T[P], AggregatePageNode[P]>
  }




  export type PageNodeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PageNodeWhereInput
    orderBy?: PageNodeOrderByWithAggregationInput | PageNodeOrderByWithAggregationInput[]
    by: PageNodeScalarFieldEnum[] | PageNodeScalarFieldEnum
    having?: PageNodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageNodeCountAggregateInputType | true
    _avg?: PageNodeAvgAggregateInputType
    _sum?: PageNodeSumAggregateInputType
    _min?: PageNodeMinAggregateInputType
    _max?: PageNodeMaxAggregateInputType
  }

  export type PageNodeGroupByOutputType = {
    id: number
    name: string
    describe: string
    parentId: number
    applicationId: number
    version: string
    hasSchema: boolean
    isDeleted: boolean
    _count: PageNodeCountAggregateOutputType | null
    _avg: PageNodeAvgAggregateOutputType | null
    _sum: PageNodeSumAggregateOutputType | null
    _min: PageNodeMinAggregateOutputType | null
    _max: PageNodeMaxAggregateOutputType | null
  }

  type GetPageNodeGroupByPayload<T extends PageNodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageNodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageNodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageNodeGroupByOutputType[P]>
            : GetScalarType<T[P], PageNodeGroupByOutputType[P]>
        }
      >
    >


  export type PageNodeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    describe?: boolean
    parentId?: boolean
    applicationId?: boolean
    version?: boolean
    hasSchema?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["pageNode"]>

  export type PageNodeSelectScalar = {
    id?: boolean
    name?: boolean
    describe?: boolean
    parentId?: boolean
    applicationId?: boolean
    version?: boolean
    hasSchema?: boolean
    isDeleted?: boolean
  }


  export type $PageNodePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PageNode"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 节点名, 必须英文
       */
      name: string
      /**
       * 描述
       */
      describe: string
      /**
       * 父节点, 为0代表根节点
       */
      parentId: number
      /**
       * 对应应用id
       */
      applicationId: number
      /**
       * 版本号xx.xx.xx
       */
      version: string
      /**
       * 节点是否承载页面
       */
      hasSchema: boolean
      /**
       * 是否被删除
       */
      isDeleted: boolean
    }, ExtArgs["result"]["pageNode"]>
    composites: {}
  }


  type PageNodeGetPayload<S extends boolean | null | undefined | PageNodeDefaultArgs> = $Result.GetResult<Prisma.$PageNodePayload, S>

  type PageNodeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PageNodeFindManyArgs, 'select' | 'include'> & {
      select?: PageNodeCountAggregateInputType | true
    }

  export interface PageNodeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageNode'], meta: { name: 'PageNode' } }
    /**
     * Find zero or one PageNode that matches the filter.
     * @param {PageNodeFindUniqueArgs} args - Arguments to find a PageNode
     * @example
     * // Get one PageNode
     * const pageNode = await prisma.pageNode.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PageNodeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PageNodeFindUniqueArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PageNode that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PageNodeFindUniqueOrThrowArgs} args - Arguments to find a PageNode
     * @example
     * // Get one PageNode
     * const pageNode = await prisma.pageNode.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PageNodeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PageNodeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PageNode that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageNodeFindFirstArgs} args - Arguments to find a PageNode
     * @example
     * // Get one PageNode
     * const pageNode = await prisma.pageNode.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PageNodeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PageNodeFindFirstArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PageNode that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageNodeFindFirstOrThrowArgs} args - Arguments to find a PageNode
     * @example
     * // Get one PageNode
     * const pageNode = await prisma.pageNode.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PageNodeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PageNodeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PageNodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageNodeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageNodes
     * const pageNodes = await prisma.pageNode.findMany()
     * 
     * // Get first 10 PageNodes
     * const pageNodes = await prisma.pageNode.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageNodeWithIdOnly = await prisma.pageNode.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PageNodeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageNodeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PageNode.
     * @param {PageNodeCreateArgs} args - Arguments to create a PageNode.
     * @example
     * // Create one PageNode
     * const PageNode = await prisma.pageNode.create({
     *   data: {
     *     // ... data to create a PageNode
     *   }
     * })
     * 
    **/
    create<T extends PageNodeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PageNodeCreateArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PageNodes.
     *     @param {PageNodeCreateManyArgs} args - Arguments to create many PageNodes.
     *     @example
     *     // Create many PageNodes
     *     const pageNode = await prisma.pageNode.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PageNodeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageNodeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PageNode.
     * @param {PageNodeDeleteArgs} args - Arguments to delete one PageNode.
     * @example
     * // Delete one PageNode
     * const PageNode = await prisma.pageNode.delete({
     *   where: {
     *     // ... filter to delete one PageNode
     *   }
     * })
     * 
    **/
    delete<T extends PageNodeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PageNodeDeleteArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PageNode.
     * @param {PageNodeUpdateArgs} args - Arguments to update one PageNode.
     * @example
     * // Update one PageNode
     * const pageNode = await prisma.pageNode.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PageNodeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PageNodeUpdateArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PageNodes.
     * @param {PageNodeDeleteManyArgs} args - Arguments to filter PageNodes to delete.
     * @example
     * // Delete a few PageNodes
     * const { count } = await prisma.pageNode.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PageNodeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageNodeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageNodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageNodes
     * const pageNode = await prisma.pageNode.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PageNodeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PageNodeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PageNode.
     * @param {PageNodeUpsertArgs} args - Arguments to update or create a PageNode.
     * @example
     * // Update or create a PageNode
     * const pageNode = await prisma.pageNode.upsert({
     *   create: {
     *     // ... data to create a PageNode
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageNode we want to update
     *   }
     * })
    **/
    upsert<T extends PageNodeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PageNodeUpsertArgs<ExtArgs>>
    ): Prisma__PageNodeClient<$Result.GetResult<Prisma.$PageNodePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PageNodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageNodeCountArgs} args - Arguments to filter PageNodes to count.
     * @example
     * // Count the number of PageNodes
     * const count = await prisma.pageNode.count({
     *   where: {
     *     // ... the filter for the PageNodes we want to count
     *   }
     * })
    **/
    count<T extends PageNodeCountArgs>(
      args?: Subset<T, PageNodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageNodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageNodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageNodeAggregateArgs>(args: Subset<T, PageNodeAggregateArgs>): Prisma.PrismaPromise<GetPageNodeAggregateType<T>>

    /**
     * Group by PageNode.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageNodeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageNodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageNodeGroupByArgs['orderBy'] }
        : { orderBy?: PageNodeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageNodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageNode model
   */
  readonly fields: PageNodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageNode.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageNodeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PageNode model
   */ 
  interface PageNodeFieldRefs {
    readonly id: FieldRef<"PageNode", 'Int'>
    readonly name: FieldRef<"PageNode", 'String'>
    readonly describe: FieldRef<"PageNode", 'String'>
    readonly parentId: FieldRef<"PageNode", 'Int'>
    readonly applicationId: FieldRef<"PageNode", 'Int'>
    readonly version: FieldRef<"PageNode", 'String'>
    readonly hasSchema: FieldRef<"PageNode", 'Boolean'>
    readonly isDeleted: FieldRef<"PageNode", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * PageNode findUnique
   */
  export type PageNodeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * Filter, which PageNode to fetch.
     */
    where: PageNodeWhereUniqueInput
  }


  /**
   * PageNode findUniqueOrThrow
   */
  export type PageNodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * Filter, which PageNode to fetch.
     */
    where: PageNodeWhereUniqueInput
  }


  /**
   * PageNode findFirst
   */
  export type PageNodeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * Filter, which PageNode to fetch.
     */
    where?: PageNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageNodes to fetch.
     */
    orderBy?: PageNodeOrderByWithRelationInput | PageNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageNodes.
     */
    cursor?: PageNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageNodes.
     */
    distinct?: PageNodeScalarFieldEnum | PageNodeScalarFieldEnum[]
  }


  /**
   * PageNode findFirstOrThrow
   */
  export type PageNodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * Filter, which PageNode to fetch.
     */
    where?: PageNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageNodes to fetch.
     */
    orderBy?: PageNodeOrderByWithRelationInput | PageNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageNodes.
     */
    cursor?: PageNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageNodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageNodes.
     */
    distinct?: PageNodeScalarFieldEnum | PageNodeScalarFieldEnum[]
  }


  /**
   * PageNode findMany
   */
  export type PageNodeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * Filter, which PageNodes to fetch.
     */
    where?: PageNodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageNodes to fetch.
     */
    orderBy?: PageNodeOrderByWithRelationInput | PageNodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageNodes.
     */
    cursor?: PageNodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageNodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageNodes.
     */
    skip?: number
    distinct?: PageNodeScalarFieldEnum | PageNodeScalarFieldEnum[]
  }


  /**
   * PageNode create
   */
  export type PageNodeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * The data needed to create a PageNode.
     */
    data: XOR<PageNodeCreateInput, PageNodeUncheckedCreateInput>
  }


  /**
   * PageNode createMany
   */
  export type PageNodeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageNodes.
     */
    data: PageNodeCreateManyInput | PageNodeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PageNode update
   */
  export type PageNodeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * The data needed to update a PageNode.
     */
    data: XOR<PageNodeUpdateInput, PageNodeUncheckedUpdateInput>
    /**
     * Choose, which PageNode to update.
     */
    where: PageNodeWhereUniqueInput
  }


  /**
   * PageNode updateMany
   */
  export type PageNodeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageNodes.
     */
    data: XOR<PageNodeUpdateManyMutationInput, PageNodeUncheckedUpdateManyInput>
    /**
     * Filter which PageNodes to update
     */
    where?: PageNodeWhereInput
  }


  /**
   * PageNode upsert
   */
  export type PageNodeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * The filter to search for the PageNode to update in case it exists.
     */
    where: PageNodeWhereUniqueInput
    /**
     * In case the PageNode found by the `where` argument doesn't exist, create a new PageNode with this data.
     */
    create: XOR<PageNodeCreateInput, PageNodeUncheckedCreateInput>
    /**
     * In case the PageNode was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageNodeUpdateInput, PageNodeUncheckedUpdateInput>
  }


  /**
   * PageNode delete
   */
  export type PageNodeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
    /**
     * Filter which PageNode to delete.
     */
    where: PageNodeWhereUniqueInput
  }


  /**
   * PageNode deleteMany
   */
  export type PageNodeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageNodes to delete
     */
    where?: PageNodeWhereInput
  }


  /**
   * PageNode without action
   */
  export type PageNodeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageNode
     */
    select?: PageNodeSelect<ExtArgs> | null
  }



  /**
   * Model PageScheme
   */

  export type AggregatePageScheme = {
    _count: PageSchemeCountAggregateOutputType | null
    _avg: PageSchemeAvgAggregateOutputType | null
    _sum: PageSchemeSumAggregateOutputType | null
    _min: PageSchemeMinAggregateOutputType | null
    _max: PageSchemeMaxAggregateOutputType | null
  }

  export type PageSchemeAvgAggregateOutputType = {
    id: number | null
    nodeId: number | null
  }

  export type PageSchemeSumAggregateOutputType = {
    id: number | null
    nodeId: number | null
  }

  export type PageSchemeMinAggregateOutputType = {
    id: number | null
    schema: string | null
    package: string | null
    nodeId: number | null
    isDeleted: boolean | null
  }

  export type PageSchemeMaxAggregateOutputType = {
    id: number | null
    schema: string | null
    package: string | null
    nodeId: number | null
    isDeleted: boolean | null
  }

  export type PageSchemeCountAggregateOutputType = {
    id: number
    schema: number
    package: number
    nodeId: number
    isDeleted: number
    _all: number
  }


  export type PageSchemeAvgAggregateInputType = {
    id?: true
    nodeId?: true
  }

  export type PageSchemeSumAggregateInputType = {
    id?: true
    nodeId?: true
  }

  export type PageSchemeMinAggregateInputType = {
    id?: true
    schema?: true
    package?: true
    nodeId?: true
    isDeleted?: true
  }

  export type PageSchemeMaxAggregateInputType = {
    id?: true
    schema?: true
    package?: true
    nodeId?: true
    isDeleted?: true
  }

  export type PageSchemeCountAggregateInputType = {
    id?: true
    schema?: true
    package?: true
    nodeId?: true
    isDeleted?: true
    _all?: true
  }

  export type PageSchemeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageScheme to aggregate.
     */
    where?: PageSchemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSchemes to fetch.
     */
    orderBy?: PageSchemeOrderByWithRelationInput | PageSchemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageSchemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSchemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSchemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageSchemes
    **/
    _count?: true | PageSchemeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageSchemeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageSchemeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageSchemeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageSchemeMaxAggregateInputType
  }

  export type GetPageSchemeAggregateType<T extends PageSchemeAggregateArgs> = {
        [P in keyof T & keyof AggregatePageScheme]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageScheme[P]>
      : GetScalarType<T[P], AggregatePageScheme[P]>
  }




  export type PageSchemeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PageSchemeWhereInput
    orderBy?: PageSchemeOrderByWithAggregationInput | PageSchemeOrderByWithAggregationInput[]
    by: PageSchemeScalarFieldEnum[] | PageSchemeScalarFieldEnum
    having?: PageSchemeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageSchemeCountAggregateInputType | true
    _avg?: PageSchemeAvgAggregateInputType
    _sum?: PageSchemeSumAggregateInputType
    _min?: PageSchemeMinAggregateInputType
    _max?: PageSchemeMaxAggregateInputType
  }

  export type PageSchemeGroupByOutputType = {
    id: number
    schema: string
    package: string
    nodeId: number
    isDeleted: boolean
    _count: PageSchemeCountAggregateOutputType | null
    _avg: PageSchemeAvgAggregateOutputType | null
    _sum: PageSchemeSumAggregateOutputType | null
    _min: PageSchemeMinAggregateOutputType | null
    _max: PageSchemeMaxAggregateOutputType | null
  }

  type GetPageSchemeGroupByPayload<T extends PageSchemeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageSchemeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageSchemeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageSchemeGroupByOutputType[P]>
            : GetScalarType<T[P], PageSchemeGroupByOutputType[P]>
        }
      >
    >


  export type PageSchemeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schema?: boolean
    package?: boolean
    nodeId?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["pageScheme"]>

  export type PageSchemeSelectScalar = {
    id?: boolean
    schema?: boolean
    package?: boolean
    nodeId?: boolean
    isDeleted?: boolean
  }


  export type $PageSchemePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "PageScheme"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 低代码页面schema
       */
      schema: string
      /**
       * 低代码页面package
       */
      package: string
      /**
       * 节点id
       */
      nodeId: number
      /**
       * 是否被删除
       */
      isDeleted: boolean
    }, ExtArgs["result"]["pageScheme"]>
    composites: {}
  }


  type PageSchemeGetPayload<S extends boolean | null | undefined | PageSchemeDefaultArgs> = $Result.GetResult<Prisma.$PageSchemePayload, S>

  type PageSchemeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PageSchemeFindManyArgs, 'select' | 'include'> & {
      select?: PageSchemeCountAggregateInputType | true
    }

  export interface PageSchemeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageScheme'], meta: { name: 'PageScheme' } }
    /**
     * Find zero or one PageScheme that matches the filter.
     * @param {PageSchemeFindUniqueArgs} args - Arguments to find a PageScheme
     * @example
     * // Get one PageScheme
     * const pageScheme = await prisma.pageScheme.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PageSchemeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PageSchemeFindUniqueArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PageScheme that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PageSchemeFindUniqueOrThrowArgs} args - Arguments to find a PageScheme
     * @example
     * // Get one PageScheme
     * const pageScheme = await prisma.pageScheme.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PageSchemeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PageSchemeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PageScheme that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSchemeFindFirstArgs} args - Arguments to find a PageScheme
     * @example
     * // Get one PageScheme
     * const pageScheme = await prisma.pageScheme.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PageSchemeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PageSchemeFindFirstArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PageScheme that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSchemeFindFirstOrThrowArgs} args - Arguments to find a PageScheme
     * @example
     * // Get one PageScheme
     * const pageScheme = await prisma.pageScheme.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PageSchemeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PageSchemeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PageSchemes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSchemeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageSchemes
     * const pageSchemes = await prisma.pageScheme.findMany()
     * 
     * // Get first 10 PageSchemes
     * const pageSchemes = await prisma.pageScheme.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageSchemeWithIdOnly = await prisma.pageScheme.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PageSchemeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageSchemeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PageScheme.
     * @param {PageSchemeCreateArgs} args - Arguments to create a PageScheme.
     * @example
     * // Create one PageScheme
     * const PageScheme = await prisma.pageScheme.create({
     *   data: {
     *     // ... data to create a PageScheme
     *   }
     * })
     * 
    **/
    create<T extends PageSchemeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PageSchemeCreateArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PageSchemes.
     *     @param {PageSchemeCreateManyArgs} args - Arguments to create many PageSchemes.
     *     @example
     *     // Create many PageSchemes
     *     const pageScheme = await prisma.pageScheme.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PageSchemeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageSchemeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PageScheme.
     * @param {PageSchemeDeleteArgs} args - Arguments to delete one PageScheme.
     * @example
     * // Delete one PageScheme
     * const PageScheme = await prisma.pageScheme.delete({
     *   where: {
     *     // ... filter to delete one PageScheme
     *   }
     * })
     * 
    **/
    delete<T extends PageSchemeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PageSchemeDeleteArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PageScheme.
     * @param {PageSchemeUpdateArgs} args - Arguments to update one PageScheme.
     * @example
     * // Update one PageScheme
     * const pageScheme = await prisma.pageScheme.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PageSchemeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PageSchemeUpdateArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PageSchemes.
     * @param {PageSchemeDeleteManyArgs} args - Arguments to filter PageSchemes to delete.
     * @example
     * // Delete a few PageSchemes
     * const { count } = await prisma.pageScheme.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PageSchemeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PageSchemeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageSchemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSchemeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageSchemes
     * const pageScheme = await prisma.pageScheme.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PageSchemeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PageSchemeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PageScheme.
     * @param {PageSchemeUpsertArgs} args - Arguments to update or create a PageScheme.
     * @example
     * // Update or create a PageScheme
     * const pageScheme = await prisma.pageScheme.upsert({
     *   create: {
     *     // ... data to create a PageScheme
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageScheme we want to update
     *   }
     * })
    **/
    upsert<T extends PageSchemeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PageSchemeUpsertArgs<ExtArgs>>
    ): Prisma__PageSchemeClient<$Result.GetResult<Prisma.$PageSchemePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PageSchemes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSchemeCountArgs} args - Arguments to filter PageSchemes to count.
     * @example
     * // Count the number of PageSchemes
     * const count = await prisma.pageScheme.count({
     *   where: {
     *     // ... the filter for the PageSchemes we want to count
     *   }
     * })
    **/
    count<T extends PageSchemeCountArgs>(
      args?: Subset<T, PageSchemeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageSchemeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageScheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSchemeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PageSchemeAggregateArgs>(args: Subset<T, PageSchemeAggregateArgs>): Prisma.PrismaPromise<GetPageSchemeAggregateType<T>>

    /**
     * Group by PageScheme.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageSchemeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PageSchemeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageSchemeGroupByArgs['orderBy'] }
        : { orderBy?: PageSchemeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PageSchemeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageSchemeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageScheme model
   */
  readonly fields: PageSchemeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageScheme.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageSchemeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PageScheme model
   */ 
  interface PageSchemeFieldRefs {
    readonly id: FieldRef<"PageScheme", 'Int'>
    readonly schema: FieldRef<"PageScheme", 'String'>
    readonly package: FieldRef<"PageScheme", 'String'>
    readonly nodeId: FieldRef<"PageScheme", 'Int'>
    readonly isDeleted: FieldRef<"PageScheme", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * PageScheme findUnique
   */
  export type PageSchemeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * Filter, which PageScheme to fetch.
     */
    where: PageSchemeWhereUniqueInput
  }


  /**
   * PageScheme findUniqueOrThrow
   */
  export type PageSchemeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * Filter, which PageScheme to fetch.
     */
    where: PageSchemeWhereUniqueInput
  }


  /**
   * PageScheme findFirst
   */
  export type PageSchemeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * Filter, which PageScheme to fetch.
     */
    where?: PageSchemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSchemes to fetch.
     */
    orderBy?: PageSchemeOrderByWithRelationInput | PageSchemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageSchemes.
     */
    cursor?: PageSchemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSchemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSchemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageSchemes.
     */
    distinct?: PageSchemeScalarFieldEnum | PageSchemeScalarFieldEnum[]
  }


  /**
   * PageScheme findFirstOrThrow
   */
  export type PageSchemeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * Filter, which PageScheme to fetch.
     */
    where?: PageSchemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSchemes to fetch.
     */
    orderBy?: PageSchemeOrderByWithRelationInput | PageSchemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageSchemes.
     */
    cursor?: PageSchemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSchemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSchemes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageSchemes.
     */
    distinct?: PageSchemeScalarFieldEnum | PageSchemeScalarFieldEnum[]
  }


  /**
   * PageScheme findMany
   */
  export type PageSchemeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * Filter, which PageSchemes to fetch.
     */
    where?: PageSchemeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageSchemes to fetch.
     */
    orderBy?: PageSchemeOrderByWithRelationInput | PageSchemeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageSchemes.
     */
    cursor?: PageSchemeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageSchemes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageSchemes.
     */
    skip?: number
    distinct?: PageSchemeScalarFieldEnum | PageSchemeScalarFieldEnum[]
  }


  /**
   * PageScheme create
   */
  export type PageSchemeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * The data needed to create a PageScheme.
     */
    data: XOR<PageSchemeCreateInput, PageSchemeUncheckedCreateInput>
  }


  /**
   * PageScheme createMany
   */
  export type PageSchemeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageSchemes.
     */
    data: PageSchemeCreateManyInput | PageSchemeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PageScheme update
   */
  export type PageSchemeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * The data needed to update a PageScheme.
     */
    data: XOR<PageSchemeUpdateInput, PageSchemeUncheckedUpdateInput>
    /**
     * Choose, which PageScheme to update.
     */
    where: PageSchemeWhereUniqueInput
  }


  /**
   * PageScheme updateMany
   */
  export type PageSchemeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageSchemes.
     */
    data: XOR<PageSchemeUpdateManyMutationInput, PageSchemeUncheckedUpdateManyInput>
    /**
     * Filter which PageSchemes to update
     */
    where?: PageSchemeWhereInput
  }


  /**
   * PageScheme upsert
   */
  export type PageSchemeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * The filter to search for the PageScheme to update in case it exists.
     */
    where: PageSchemeWhereUniqueInput
    /**
     * In case the PageScheme found by the `where` argument doesn't exist, create a new PageScheme with this data.
     */
    create: XOR<PageSchemeCreateInput, PageSchemeUncheckedCreateInput>
    /**
     * In case the PageScheme was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageSchemeUpdateInput, PageSchemeUncheckedUpdateInput>
  }


  /**
   * PageScheme delete
   */
  export type PageSchemeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
    /**
     * Filter which PageScheme to delete.
     */
    where: PageSchemeWhereUniqueInput
  }


  /**
   * PageScheme deleteMany
   */
  export type PageSchemeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageSchemes to delete
     */
    where?: PageSchemeWhereInput
  }


  /**
   * PageScheme without action
   */
  export type PageSchemeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageScheme
     */
    select?: PageSchemeSelect<ExtArgs> | null
  }



  /**
   * Model BlockStyle
   */

  export type AggregateBlockStyle = {
    _count: BlockStyleCountAggregateOutputType | null
    _avg: BlockStyleAvgAggregateOutputType | null
    _sum: BlockStyleSumAggregateOutputType | null
    _min: BlockStyleMinAggregateOutputType | null
    _max: BlockStyleMaxAggregateOutputType | null
  }

  export type BlockStyleAvgAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type BlockStyleSumAggregateOutputType = {
    id: number | null
    priority: number | null
  }

  export type BlockStyleMinAggregateOutputType = {
    id: number | null
    name: string | null
    priority: number | null
    isDeleted: boolean | null
  }

  export type BlockStyleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    priority: number | null
    isDeleted: boolean | null
  }

  export type BlockStyleCountAggregateOutputType = {
    id: number
    name: number
    priority: number
    isDeleted: number
    _all: number
  }


  export type BlockStyleAvgAggregateInputType = {
    id?: true
    priority?: true
  }

  export type BlockStyleSumAggregateInputType = {
    id?: true
    priority?: true
  }

  export type BlockStyleMinAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    isDeleted?: true
  }

  export type BlockStyleMaxAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    isDeleted?: true
  }

  export type BlockStyleCountAggregateInputType = {
    id?: true
    name?: true
    priority?: true
    isDeleted?: true
    _all?: true
  }

  export type BlockStyleAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockStyle to aggregate.
     */
    where?: BlockStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockStyles to fetch.
     */
    orderBy?: BlockStyleOrderByWithRelationInput | BlockStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockStyles
    **/
    _count?: true | BlockStyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockStyleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockStyleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockStyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockStyleMaxAggregateInputType
  }

  export type GetBlockStyleAggregateType<T extends BlockStyleAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockStyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockStyle[P]>
      : GetScalarType<T[P], AggregateBlockStyle[P]>
  }




  export type BlockStyleGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BlockStyleWhereInput
    orderBy?: BlockStyleOrderByWithAggregationInput | BlockStyleOrderByWithAggregationInput[]
    by: BlockStyleScalarFieldEnum[] | BlockStyleScalarFieldEnum
    having?: BlockStyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockStyleCountAggregateInputType | true
    _avg?: BlockStyleAvgAggregateInputType
    _sum?: BlockStyleSumAggregateInputType
    _min?: BlockStyleMinAggregateInputType
    _max?: BlockStyleMaxAggregateInputType
  }

  export type BlockStyleGroupByOutputType = {
    id: number
    name: string
    priority: number
    isDeleted: boolean
    _count: BlockStyleCountAggregateOutputType | null
    _avg: BlockStyleAvgAggregateOutputType | null
    _sum: BlockStyleSumAggregateOutputType | null
    _min: BlockStyleMinAggregateOutputType | null
    _max: BlockStyleMaxAggregateOutputType | null
  }

  type GetBlockStyleGroupByPayload<T extends BlockStyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockStyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockStyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockStyleGroupByOutputType[P]>
            : GetScalarType<T[P], BlockStyleGroupByOutputType[P]>
        }
      >
    >


  export type BlockStyleSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    priority?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["blockStyle"]>

  export type BlockStyleSelectScalar = {
    id?: boolean
    name?: boolean
    priority?: boolean
    isDeleted?: boolean
  }


  export type $BlockStylePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "BlockStyle"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 风格名称, 中文
       */
      name: string
      /**
       * 优先级 越大越排前面
       */
      priority: number
      /**
       * 是否被删除
       */
      isDeleted: boolean
    }, ExtArgs["result"]["blockStyle"]>
    composites: {}
  }


  type BlockStyleGetPayload<S extends boolean | null | undefined | BlockStyleDefaultArgs> = $Result.GetResult<Prisma.$BlockStylePayload, S>

  type BlockStyleCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BlockStyleFindManyArgs, 'select' | 'include'> & {
      select?: BlockStyleCountAggregateInputType | true
    }

  export interface BlockStyleDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockStyle'], meta: { name: 'BlockStyle' } }
    /**
     * Find zero or one BlockStyle that matches the filter.
     * @param {BlockStyleFindUniqueArgs} args - Arguments to find a BlockStyle
     * @example
     * // Get one BlockStyle
     * const blockStyle = await prisma.blockStyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockStyleFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockStyleFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BlockStyle that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlockStyleFindUniqueOrThrowArgs} args - Arguments to find a BlockStyle
     * @example
     * // Get one BlockStyle
     * const blockStyle = await prisma.blockStyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockStyleFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockStyleFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BlockStyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockStyleFindFirstArgs} args - Arguments to find a BlockStyle
     * @example
     * // Get one BlockStyle
     * const blockStyle = await prisma.blockStyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockStyleFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockStyleFindFirstArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BlockStyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockStyleFindFirstOrThrowArgs} args - Arguments to find a BlockStyle
     * @example
     * // Get one BlockStyle
     * const blockStyle = await prisma.blockStyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockStyleFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockStyleFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BlockStyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockStyleFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockStyles
     * const blockStyles = await prisma.blockStyle.findMany()
     * 
     * // Get first 10 BlockStyles
     * const blockStyles = await prisma.blockStyle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockStyleWithIdOnly = await prisma.blockStyle.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlockStyleFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockStyleFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BlockStyle.
     * @param {BlockStyleCreateArgs} args - Arguments to create a BlockStyle.
     * @example
     * // Create one BlockStyle
     * const BlockStyle = await prisma.blockStyle.create({
     *   data: {
     *     // ... data to create a BlockStyle
     *   }
     * })
     * 
    **/
    create<T extends BlockStyleCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockStyleCreateArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BlockStyles.
     *     @param {BlockStyleCreateManyArgs} args - Arguments to create many BlockStyles.
     *     @example
     *     // Create many BlockStyles
     *     const blockStyle = await prisma.blockStyle.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlockStyleCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockStyleCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlockStyle.
     * @param {BlockStyleDeleteArgs} args - Arguments to delete one BlockStyle.
     * @example
     * // Delete one BlockStyle
     * const BlockStyle = await prisma.blockStyle.delete({
     *   where: {
     *     // ... filter to delete one BlockStyle
     *   }
     * })
     * 
    **/
    delete<T extends BlockStyleDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockStyleDeleteArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BlockStyle.
     * @param {BlockStyleUpdateArgs} args - Arguments to update one BlockStyle.
     * @example
     * // Update one BlockStyle
     * const blockStyle = await prisma.blockStyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockStyleUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockStyleUpdateArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BlockStyles.
     * @param {BlockStyleDeleteManyArgs} args - Arguments to filter BlockStyles to delete.
     * @example
     * // Delete a few BlockStyles
     * const { count } = await prisma.blockStyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockStyleDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockStyleDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockStyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockStyles
     * const blockStyle = await prisma.blockStyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockStyleUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockStyleUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlockStyle.
     * @param {BlockStyleUpsertArgs} args - Arguments to update or create a BlockStyle.
     * @example
     * // Update or create a BlockStyle
     * const blockStyle = await prisma.blockStyle.upsert({
     *   create: {
     *     // ... data to create a BlockStyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockStyle we want to update
     *   }
     * })
    **/
    upsert<T extends BlockStyleUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockStyleUpsertArgs<ExtArgs>>
    ): Prisma__BlockStyleClient<$Result.GetResult<Prisma.$BlockStylePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BlockStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockStyleCountArgs} args - Arguments to filter BlockStyles to count.
     * @example
     * // Count the number of BlockStyles
     * const count = await prisma.blockStyle.count({
     *   where: {
     *     // ... the filter for the BlockStyles we want to count
     *   }
     * })
    **/
    count<T extends BlockStyleCountArgs>(
      args?: Subset<T, BlockStyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockStyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockStyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockStyleAggregateArgs>(args: Subset<T, BlockStyleAggregateArgs>): Prisma.PrismaPromise<GetBlockStyleAggregateType<T>>

    /**
     * Group by BlockStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockStyleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockStyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockStyleGroupByArgs['orderBy'] }
        : { orderBy?: BlockStyleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockStyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockStyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockStyle model
   */
  readonly fields: BlockStyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockStyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockStyleClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BlockStyle model
   */ 
  interface BlockStyleFieldRefs {
    readonly id: FieldRef<"BlockStyle", 'Int'>
    readonly name: FieldRef<"BlockStyle", 'String'>
    readonly priority: FieldRef<"BlockStyle", 'Int'>
    readonly isDeleted: FieldRef<"BlockStyle", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * BlockStyle findUnique
   */
  export type BlockStyleFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * Filter, which BlockStyle to fetch.
     */
    where: BlockStyleWhereUniqueInput
  }


  /**
   * BlockStyle findUniqueOrThrow
   */
  export type BlockStyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * Filter, which BlockStyle to fetch.
     */
    where: BlockStyleWhereUniqueInput
  }


  /**
   * BlockStyle findFirst
   */
  export type BlockStyleFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * Filter, which BlockStyle to fetch.
     */
    where?: BlockStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockStyles to fetch.
     */
    orderBy?: BlockStyleOrderByWithRelationInput | BlockStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockStyles.
     */
    cursor?: BlockStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockStyles.
     */
    distinct?: BlockStyleScalarFieldEnum | BlockStyleScalarFieldEnum[]
  }


  /**
   * BlockStyle findFirstOrThrow
   */
  export type BlockStyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * Filter, which BlockStyle to fetch.
     */
    where?: BlockStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockStyles to fetch.
     */
    orderBy?: BlockStyleOrderByWithRelationInput | BlockStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockStyles.
     */
    cursor?: BlockStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockStyles.
     */
    distinct?: BlockStyleScalarFieldEnum | BlockStyleScalarFieldEnum[]
  }


  /**
   * BlockStyle findMany
   */
  export type BlockStyleFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * Filter, which BlockStyles to fetch.
     */
    where?: BlockStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockStyles to fetch.
     */
    orderBy?: BlockStyleOrderByWithRelationInput | BlockStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockStyles.
     */
    cursor?: BlockStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockStyles.
     */
    skip?: number
    distinct?: BlockStyleScalarFieldEnum | BlockStyleScalarFieldEnum[]
  }


  /**
   * BlockStyle create
   */
  export type BlockStyleCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * The data needed to create a BlockStyle.
     */
    data: XOR<BlockStyleCreateInput, BlockStyleUncheckedCreateInput>
  }


  /**
   * BlockStyle createMany
   */
  export type BlockStyleCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockStyles.
     */
    data: BlockStyleCreateManyInput | BlockStyleCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BlockStyle update
   */
  export type BlockStyleUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * The data needed to update a BlockStyle.
     */
    data: XOR<BlockStyleUpdateInput, BlockStyleUncheckedUpdateInput>
    /**
     * Choose, which BlockStyle to update.
     */
    where: BlockStyleWhereUniqueInput
  }


  /**
   * BlockStyle updateMany
   */
  export type BlockStyleUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockStyles.
     */
    data: XOR<BlockStyleUpdateManyMutationInput, BlockStyleUncheckedUpdateManyInput>
    /**
     * Filter which BlockStyles to update
     */
    where?: BlockStyleWhereInput
  }


  /**
   * BlockStyle upsert
   */
  export type BlockStyleUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * The filter to search for the BlockStyle to update in case it exists.
     */
    where: BlockStyleWhereUniqueInput
    /**
     * In case the BlockStyle found by the `where` argument doesn't exist, create a new BlockStyle with this data.
     */
    create: XOR<BlockStyleCreateInput, BlockStyleUncheckedCreateInput>
    /**
     * In case the BlockStyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockStyleUpdateInput, BlockStyleUncheckedUpdateInput>
  }


  /**
   * BlockStyle delete
   */
  export type BlockStyleDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
    /**
     * Filter which BlockStyle to delete.
     */
    where: BlockStyleWhereUniqueInput
  }


  /**
   * BlockStyle deleteMany
   */
  export type BlockStyleDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockStyles to delete
     */
    where?: BlockStyleWhereInput
  }


  /**
   * BlockStyle without action
   */
  export type BlockStyleDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockStyle
     */
    select?: BlockStyleSelect<ExtArgs> | null
  }



  /**
   * Model BlockCategory
   */

  export type AggregateBlockCategory = {
    _count: BlockCategoryCountAggregateOutputType | null
    _avg: BlockCategoryAvgAggregateOutputType | null
    _sum: BlockCategorySumAggregateOutputType | null
    _min: BlockCategoryMinAggregateOutputType | null
    _max: BlockCategoryMaxAggregateOutputType | null
  }

  export type BlockCategoryAvgAggregateOutputType = {
    id: number | null
    styleId: number | null
    priority: number | null
  }

  export type BlockCategorySumAggregateOutputType = {
    id: number | null
    styleId: number | null
    priority: number | null
  }

  export type BlockCategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    styleId: number | null
    priority: number | null
    isDeleted: boolean | null
  }

  export type BlockCategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    styleId: number | null
    priority: number | null
    isDeleted: boolean | null
  }

  export type BlockCategoryCountAggregateOutputType = {
    id: number
    name: number
    styleId: number
    priority: number
    isDeleted: number
    _all: number
  }


  export type BlockCategoryAvgAggregateInputType = {
    id?: true
    styleId?: true
    priority?: true
  }

  export type BlockCategorySumAggregateInputType = {
    id?: true
    styleId?: true
    priority?: true
  }

  export type BlockCategoryMinAggregateInputType = {
    id?: true
    name?: true
    styleId?: true
    priority?: true
    isDeleted?: true
  }

  export type BlockCategoryMaxAggregateInputType = {
    id?: true
    name?: true
    styleId?: true
    priority?: true
    isDeleted?: true
  }

  export type BlockCategoryCountAggregateInputType = {
    id?: true
    name?: true
    styleId?: true
    priority?: true
    isDeleted?: true
    _all?: true
  }

  export type BlockCategoryAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockCategory to aggregate.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BlockCategories
    **/
    _count?: true | BlockCategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockCategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockCategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockCategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockCategoryMaxAggregateInputType
  }

  export type GetBlockCategoryAggregateType<T extends BlockCategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateBlockCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlockCategory[P]>
      : GetScalarType<T[P], AggregateBlockCategory[P]>
  }




  export type BlockCategoryGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BlockCategoryWhereInput
    orderBy?: BlockCategoryOrderByWithAggregationInput | BlockCategoryOrderByWithAggregationInput[]
    by: BlockCategoryScalarFieldEnum[] | BlockCategoryScalarFieldEnum
    having?: BlockCategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCategoryCountAggregateInputType | true
    _avg?: BlockCategoryAvgAggregateInputType
    _sum?: BlockCategorySumAggregateInputType
    _min?: BlockCategoryMinAggregateInputType
    _max?: BlockCategoryMaxAggregateInputType
  }

  export type BlockCategoryGroupByOutputType = {
    id: number
    name: string
    styleId: number
    priority: number
    isDeleted: boolean
    _count: BlockCategoryCountAggregateOutputType | null
    _avg: BlockCategoryAvgAggregateOutputType | null
    _sum: BlockCategorySumAggregateOutputType | null
    _min: BlockCategoryMinAggregateOutputType | null
    _max: BlockCategoryMaxAggregateOutputType | null
  }

  type GetBlockCategoryGroupByPayload<T extends BlockCategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockCategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockCategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockCategoryGroupByOutputType[P]>
            : GetScalarType<T[P], BlockCategoryGroupByOutputType[P]>
        }
      >
    >


  export type BlockCategorySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    styleId?: boolean
    priority?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["blockCategory"]>

  export type BlockCategorySelectScalar = {
    id?: boolean
    name?: boolean
    styleId?: boolean
    priority?: boolean
    isDeleted?: boolean
  }


  export type $BlockCategoryPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "BlockCategory"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 区块名
       */
      name: string
      /**
       * 所属风格id
       */
      styleId: number
      /**
       * 优先级 越大越排前面
       */
      priority: number
      /**
       * 是否被删除
       */
      isDeleted: boolean
    }, ExtArgs["result"]["blockCategory"]>
    composites: {}
  }


  type BlockCategoryGetPayload<S extends boolean | null | undefined | BlockCategoryDefaultArgs> = $Result.GetResult<Prisma.$BlockCategoryPayload, S>

  type BlockCategoryCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BlockCategoryFindManyArgs, 'select' | 'include'> & {
      select?: BlockCategoryCountAggregateInputType | true
    }

  export interface BlockCategoryDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BlockCategory'], meta: { name: 'BlockCategory' } }
    /**
     * Find zero or one BlockCategory that matches the filter.
     * @param {BlockCategoryFindUniqueArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockCategoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one BlockCategory that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlockCategoryFindUniqueOrThrowArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockCategoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first BlockCategory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryFindFirstArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockCategoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindFirstArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first BlockCategory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryFindFirstOrThrowArgs} args - Arguments to find a BlockCategory
     * @example
     * // Get one BlockCategory
     * const blockCategory = await prisma.blockCategory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockCategoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more BlockCategories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BlockCategories
     * const blockCategories = await prisma.blockCategory.findMany()
     * 
     * // Get first 10 BlockCategories
     * const blockCategories = await prisma.blockCategory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockCategoryWithIdOnly = await prisma.blockCategory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlockCategoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a BlockCategory.
     * @param {BlockCategoryCreateArgs} args - Arguments to create a BlockCategory.
     * @example
     * // Create one BlockCategory
     * const BlockCategory = await prisma.blockCategory.create({
     *   data: {
     *     // ... data to create a BlockCategory
     *   }
     * })
     * 
    **/
    create<T extends BlockCategoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryCreateArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many BlockCategories.
     *     @param {BlockCategoryCreateManyArgs} args - Arguments to create many BlockCategories.
     *     @example
     *     // Create many BlockCategories
     *     const blockCategory = await prisma.blockCategory.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlockCategoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BlockCategory.
     * @param {BlockCategoryDeleteArgs} args - Arguments to delete one BlockCategory.
     * @example
     * // Delete one BlockCategory
     * const BlockCategory = await prisma.blockCategory.delete({
     *   where: {
     *     // ... filter to delete one BlockCategory
     *   }
     * })
     * 
    **/
    delete<T extends BlockCategoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryDeleteArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one BlockCategory.
     * @param {BlockCategoryUpdateArgs} args - Arguments to update one BlockCategory.
     * @example
     * // Update one BlockCategory
     * const blockCategory = await prisma.blockCategory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockCategoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryUpdateArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more BlockCategories.
     * @param {BlockCategoryDeleteManyArgs} args - Arguments to filter BlockCategories to delete.
     * @example
     * // Delete a few BlockCategories
     * const { count } = await prisma.blockCategory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockCategoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCategoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BlockCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BlockCategories
     * const blockCategory = await prisma.blockCategory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockCategoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BlockCategory.
     * @param {BlockCategoryUpsertArgs} args - Arguments to update or create a BlockCategory.
     * @example
     * // Update or create a BlockCategory
     * const blockCategory = await prisma.blockCategory.upsert({
     *   create: {
     *     // ... data to create a BlockCategory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BlockCategory we want to update
     *   }
     * })
    **/
    upsert<T extends BlockCategoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCategoryUpsertArgs<ExtArgs>>
    ): Prisma__BlockCategoryClient<$Result.GetResult<Prisma.$BlockCategoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of BlockCategories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryCountArgs} args - Arguments to filter BlockCategories to count.
     * @example
     * // Count the number of BlockCategories
     * const count = await prisma.blockCategory.count({
     *   where: {
     *     // ... the filter for the BlockCategories we want to count
     *   }
     * })
    **/
    count<T extends BlockCategoryCountArgs>(
      args?: Subset<T, BlockCategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BlockCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockCategoryAggregateArgs>(args: Subset<T, BlockCategoryAggregateArgs>): Prisma.PrismaPromise<GetBlockCategoryAggregateType<T>>

    /**
     * Group by BlockCategory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockCategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockCategoryGroupByArgs['orderBy'] }
        : { orderBy?: BlockCategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockCategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BlockCategory model
   */
  readonly fields: BlockCategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BlockCategory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockCategoryClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the BlockCategory model
   */ 
  interface BlockCategoryFieldRefs {
    readonly id: FieldRef<"BlockCategory", 'Int'>
    readonly name: FieldRef<"BlockCategory", 'String'>
    readonly styleId: FieldRef<"BlockCategory", 'Int'>
    readonly priority: FieldRef<"BlockCategory", 'Int'>
    readonly isDeleted: FieldRef<"BlockCategory", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * BlockCategory findUnique
   */
  export type BlockCategoryFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory findUniqueOrThrow
   */
  export type BlockCategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory findFirst
   */
  export type BlockCategoryFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockCategories.
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockCategories.
     */
    distinct?: BlockCategoryScalarFieldEnum | BlockCategoryScalarFieldEnum[]
  }


  /**
   * BlockCategory findFirstOrThrow
   */
  export type BlockCategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Filter, which BlockCategory to fetch.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BlockCategories.
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BlockCategories.
     */
    distinct?: BlockCategoryScalarFieldEnum | BlockCategoryScalarFieldEnum[]
  }


  /**
   * BlockCategory findMany
   */
  export type BlockCategoryFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Filter, which BlockCategories to fetch.
     */
    where?: BlockCategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BlockCategories to fetch.
     */
    orderBy?: BlockCategoryOrderByWithRelationInput | BlockCategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BlockCategories.
     */
    cursor?: BlockCategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BlockCategories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BlockCategories.
     */
    skip?: number
    distinct?: BlockCategoryScalarFieldEnum | BlockCategoryScalarFieldEnum[]
  }


  /**
   * BlockCategory create
   */
  export type BlockCategoryCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * The data needed to create a BlockCategory.
     */
    data: XOR<BlockCategoryCreateInput, BlockCategoryUncheckedCreateInput>
  }


  /**
   * BlockCategory createMany
   */
  export type BlockCategoryCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BlockCategories.
     */
    data: BlockCategoryCreateManyInput | BlockCategoryCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * BlockCategory update
   */
  export type BlockCategoryUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * The data needed to update a BlockCategory.
     */
    data: XOR<BlockCategoryUpdateInput, BlockCategoryUncheckedUpdateInput>
    /**
     * Choose, which BlockCategory to update.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory updateMany
   */
  export type BlockCategoryUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BlockCategories.
     */
    data: XOR<BlockCategoryUpdateManyMutationInput, BlockCategoryUncheckedUpdateManyInput>
    /**
     * Filter which BlockCategories to update
     */
    where?: BlockCategoryWhereInput
  }


  /**
   * BlockCategory upsert
   */
  export type BlockCategoryUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * The filter to search for the BlockCategory to update in case it exists.
     */
    where: BlockCategoryWhereUniqueInput
    /**
     * In case the BlockCategory found by the `where` argument doesn't exist, create a new BlockCategory with this data.
     */
    create: XOR<BlockCategoryCreateInput, BlockCategoryUncheckedCreateInput>
    /**
     * In case the BlockCategory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockCategoryUpdateInput, BlockCategoryUncheckedUpdateInput>
  }


  /**
   * BlockCategory delete
   */
  export type BlockCategoryDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
    /**
     * Filter which BlockCategory to delete.
     */
    where: BlockCategoryWhereUniqueInput
  }


  /**
   * BlockCategory deleteMany
   */
  export type BlockCategoryDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which BlockCategories to delete
     */
    where?: BlockCategoryWhereInput
  }


  /**
   * BlockCategory without action
   */
  export type BlockCategoryDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BlockCategory
     */
    select?: BlockCategorySelect<ExtArgs> | null
  }



  /**
   * Model Block
   */

  export type AggregateBlock = {
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  export type BlockAvgAggregateOutputType = {
    id: number | null
    styleId: number | null
    categoryId: number | null
    priority: number | null
  }

  export type BlockSumAggregateOutputType = {
    id: number | null
    styleId: number | null
    categoryId: number | null
    priority: number | null
  }

  export type BlockMinAggregateOutputType = {
    id: number | null
    styleId: number | null
    name: string | null
    nameCh: string | null
    schema: string | null
    screenshot: string | null
    categoryId: number | null
    categoryName: string | null
    keywords: string | null
    priority: number | null
    isDeleted: boolean | null
  }

  export type BlockMaxAggregateOutputType = {
    id: number | null
    styleId: number | null
    name: string | null
    nameCh: string | null
    schema: string | null
    screenshot: string | null
    categoryId: number | null
    categoryName: string | null
    keywords: string | null
    priority: number | null
    isDeleted: boolean | null
  }

  export type BlockCountAggregateOutputType = {
    id: number
    styleId: number
    name: number
    nameCh: number
    schema: number
    screenshot: number
    categoryId: number
    categoryName: number
    keywords: number
    priority: number
    isDeleted: number
    _all: number
  }


  export type BlockAvgAggregateInputType = {
    id?: true
    styleId?: true
    categoryId?: true
    priority?: true
  }

  export type BlockSumAggregateInputType = {
    id?: true
    styleId?: true
    categoryId?: true
    priority?: true
  }

  export type BlockMinAggregateInputType = {
    id?: true
    styleId?: true
    name?: true
    nameCh?: true
    schema?: true
    screenshot?: true
    categoryId?: true
    categoryName?: true
    keywords?: true
    priority?: true
    isDeleted?: true
  }

  export type BlockMaxAggregateInputType = {
    id?: true
    styleId?: true
    name?: true
    nameCh?: true
    schema?: true
    screenshot?: true
    categoryId?: true
    categoryName?: true
    keywords?: true
    priority?: true
    isDeleted?: true
  }

  export type BlockCountAggregateInputType = {
    id?: true
    styleId?: true
    name?: true
    nameCh?: true
    schema?: true
    screenshot?: true
    categoryId?: true
    categoryName?: true
    keywords?: true
    priority?: true
    isDeleted?: true
    _all?: true
  }

  export type BlockAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Block to aggregate.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blocks
    **/
    _count?: true | BlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BlockMaxAggregateInputType
  }

  export type GetBlockAggregateType<T extends BlockAggregateArgs> = {
        [P in keyof T & keyof AggregateBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlock[P]>
      : GetScalarType<T[P], AggregateBlock[P]>
  }




  export type BlockGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: BlockWhereInput
    orderBy?: BlockOrderByWithAggregationInput | BlockOrderByWithAggregationInput[]
    by: BlockScalarFieldEnum[] | BlockScalarFieldEnum
    having?: BlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BlockCountAggregateInputType | true
    _avg?: BlockAvgAggregateInputType
    _sum?: BlockSumAggregateInputType
    _min?: BlockMinAggregateInputType
    _max?: BlockMaxAggregateInputType
  }

  export type BlockGroupByOutputType = {
    id: number
    styleId: number
    name: string
    nameCh: string
    schema: string
    screenshot: string
    categoryId: number
    categoryName: string
    keywords: string
    priority: number
    isDeleted: boolean
    _count: BlockCountAggregateOutputType | null
    _avg: BlockAvgAggregateOutputType | null
    _sum: BlockSumAggregateOutputType | null
    _min: BlockMinAggregateOutputType | null
    _max: BlockMaxAggregateOutputType | null
  }

  type GetBlockGroupByPayload<T extends BlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BlockGroupByOutputType[P]>
            : GetScalarType<T[P], BlockGroupByOutputType[P]>
        }
      >
    >


  export type BlockSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleId?: boolean
    name?: boolean
    nameCh?: boolean
    schema?: boolean
    screenshot?: boolean
    categoryId?: boolean
    categoryName?: boolean
    keywords?: boolean
    priority?: boolean
    isDeleted?: boolean
  }, ExtArgs["result"]["block"]>

  export type BlockSelectScalar = {
    id?: boolean
    styleId?: boolean
    name?: boolean
    nameCh?: boolean
    schema?: boolean
    screenshot?: boolean
    categoryId?: boolean
    categoryName?: boolean
    keywords?: boolean
    priority?: boolean
    isDeleted?: boolean
  }


  export type $BlockPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Block"
    objects: {}
    scalars: $Extensions.GetResult<{
      id: number
      /**
       * 所属风格id
       */
      styleId: number
      /**
       * 组件名, 英文
       */
      name: string
      /**
       * 组件中文名
       */
      nameCh: string
      /**
       * 对应schema
       */
      schema: string
      /**
       * 截图
       */
      screenshot: string
      /**
       * 分类Id
       */
      categoryId: number
      /**
       * 分类名
       */
      categoryName: string
      /**
       * 关键词 逗号或-分隔
       */
      keywords: string
      /**
       * 优先级 越大越排前面
       */
      priority: number
      /**
       * 是否被删除
       */
      isDeleted: boolean
    }, ExtArgs["result"]["block"]>
    composites: {}
  }


  type BlockGetPayload<S extends boolean | null | undefined | BlockDefaultArgs> = $Result.GetResult<Prisma.$BlockPayload, S>

  type BlockCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<BlockFindManyArgs, 'select' | 'include'> & {
      select?: BlockCountAggregateInputType | true
    }

  export interface BlockDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Block'], meta: { name: 'Block' } }
    /**
     * Find zero or one Block that matches the filter.
     * @param {BlockFindUniqueArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BlockFindUniqueArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Block that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BlockFindUniqueOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Block that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Block that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindFirstOrThrowArgs} args - Arguments to find a Block
     * @example
     * // Get one Block
     * const block = await prisma.block.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Blocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blocks
     * const blocks = await prisma.block.findMany()
     * 
     * // Get first 10 Blocks
     * const blocks = await prisma.block.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blockWithIdOnly = await prisma.block.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends BlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Block.
     * @param {BlockCreateArgs} args - Arguments to create a Block.
     * @example
     * // Create one Block
     * const Block = await prisma.block.create({
     *   data: {
     *     // ... data to create a Block
     *   }
     * })
     * 
    **/
    create<T extends BlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockCreateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Blocks.
     *     @param {BlockCreateManyArgs} args - Arguments to create many Blocks.
     *     @example
     *     // Create many Blocks
     *     const block = await prisma.block.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Block.
     * @param {BlockDeleteArgs} args - Arguments to delete one Block.
     * @example
     * // Delete one Block
     * const Block = await prisma.block.delete({
     *   where: {
     *     // ... filter to delete one Block
     *   }
     * })
     * 
    **/
    delete<T extends BlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BlockDeleteArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Block.
     * @param {BlockUpdateArgs} args - Arguments to update one Block.
     * @example
     * // Update one Block
     * const block = await prisma.block.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Blocks.
     * @param {BlockDeleteManyArgs} args - Arguments to filter Blocks to delete.
     * @example
     * // Delete a few Blocks
     * const { count } = await prisma.block.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blocks
     * const block = await prisma.block.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Block.
     * @param {BlockUpsertArgs} args - Arguments to update or create a Block.
     * @example
     * // Update or create a Block
     * const block = await prisma.block.upsert({
     *   create: {
     *     // ... data to create a Block
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Block we want to update
     *   }
     * })
    **/
    upsert<T extends BlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BlockUpsertArgs<ExtArgs>>
    ): Prisma__BlockClient<$Result.GetResult<Prisma.$BlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Blocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockCountArgs} args - Arguments to filter Blocks to count.
     * @example
     * // Count the number of Blocks
     * const count = await prisma.block.count({
     *   where: {
     *     // ... the filter for the Blocks we want to count
     *   }
     * })
    **/
    count<T extends BlockCountArgs>(
      args?: Subset<T, BlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BlockAggregateArgs>(args: Subset<T, BlockAggregateArgs>): Prisma.PrismaPromise<GetBlockAggregateType<T>>

    /**
     * Group by Block.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BlockGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BlockGroupByArgs['orderBy'] }
        : { orderBy?: BlockGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Block model
   */
  readonly fields: BlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Block.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BlockClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Block model
   */ 
  interface BlockFieldRefs {
    readonly id: FieldRef<"Block", 'Int'>
    readonly styleId: FieldRef<"Block", 'Int'>
    readonly name: FieldRef<"Block", 'String'>
    readonly nameCh: FieldRef<"Block", 'String'>
    readonly schema: FieldRef<"Block", 'String'>
    readonly screenshot: FieldRef<"Block", 'String'>
    readonly categoryId: FieldRef<"Block", 'Int'>
    readonly categoryName: FieldRef<"Block", 'String'>
    readonly keywords: FieldRef<"Block", 'String'>
    readonly priority: FieldRef<"Block", 'Int'>
    readonly isDeleted: FieldRef<"Block", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * Block findUnique
   */
  export type BlockFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block findUniqueOrThrow
   */
  export type BlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block findFirst
   */
  export type BlockFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block findFirstOrThrow
   */
  export type BlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Filter, which Block to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blocks.
     */
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block findMany
   */
  export type BlockFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Filter, which Blocks to fetch.
     */
    where?: BlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blocks to fetch.
     */
    orderBy?: BlockOrderByWithRelationInput | BlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blocks.
     */
    cursor?: BlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blocks.
     */
    skip?: number
    distinct?: BlockScalarFieldEnum | BlockScalarFieldEnum[]
  }


  /**
   * Block create
   */
  export type BlockCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * The data needed to create a Block.
     */
    data: XOR<BlockCreateInput, BlockUncheckedCreateInput>
  }


  /**
   * Block createMany
   */
  export type BlockCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blocks.
     */
    data: BlockCreateManyInput | BlockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Block update
   */
  export type BlockUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * The data needed to update a Block.
     */
    data: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
    /**
     * Choose, which Block to update.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block updateMany
   */
  export type BlockUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blocks.
     */
    data: XOR<BlockUpdateManyMutationInput, BlockUncheckedUpdateManyInput>
    /**
     * Filter which Blocks to update
     */
    where?: BlockWhereInput
  }


  /**
   * Block upsert
   */
  export type BlockUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * The filter to search for the Block to update in case it exists.
     */
    where: BlockWhereUniqueInput
    /**
     * In case the Block found by the `where` argument doesn't exist, create a new Block with this data.
     */
    create: XOR<BlockCreateInput, BlockUncheckedCreateInput>
    /**
     * In case the Block was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BlockUpdateInput, BlockUncheckedUpdateInput>
  }


  /**
   * Block delete
   */
  export type BlockDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
    /**
     * Filter which Block to delete.
     */
    where: BlockWhereUniqueInput
  }


  /**
   * Block deleteMany
   */
  export type BlockDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blocks to delete
     */
    where?: BlockWhereInput
  }


  /**
   * Block without action
   */
  export type BlockDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Block
     */
    select?: BlockSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    describe: 'describe',
    currentEditVersion: 'currentEditVersion',
    isDeleted: 'isDeleted'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const AppVersionScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    version: 'version',
    isAuditing: 'isAuditing',
    isPass: 'isPass',
    auditContent: 'auditContent',
    isDeleted: 'isDeleted'
  };

  export type AppVersionScalarFieldEnum = (typeof AppVersionScalarFieldEnum)[keyof typeof AppVersionScalarFieldEnum]


  export const AppEnvScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    env: 'env',
    envCh: 'envCh',
    canDelete: 'canDelete',
    appVersionId: 'appVersionId',
    version: 'version',
    isDeleted: 'isDeleted'
  };

  export type AppEnvScalarFieldEnum = (typeof AppEnvScalarFieldEnum)[keyof typeof AppEnvScalarFieldEnum]


  export const PageNodeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    describe: 'describe',
    parentId: 'parentId',
    applicationId: 'applicationId',
    version: 'version',
    hasSchema: 'hasSchema',
    isDeleted: 'isDeleted'
  };

  export type PageNodeScalarFieldEnum = (typeof PageNodeScalarFieldEnum)[keyof typeof PageNodeScalarFieldEnum]


  export const PageSchemeScalarFieldEnum: {
    id: 'id',
    schema: 'schema',
    package: 'package',
    nodeId: 'nodeId',
    isDeleted: 'isDeleted'
  };

  export type PageSchemeScalarFieldEnum = (typeof PageSchemeScalarFieldEnum)[keyof typeof PageSchemeScalarFieldEnum]


  export const BlockStyleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    priority: 'priority',
    isDeleted: 'isDeleted'
  };

  export type BlockStyleScalarFieldEnum = (typeof BlockStyleScalarFieldEnum)[keyof typeof BlockStyleScalarFieldEnum]


  export const BlockCategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    styleId: 'styleId',
    priority: 'priority',
    isDeleted: 'isDeleted'
  };

  export type BlockCategoryScalarFieldEnum = (typeof BlockCategoryScalarFieldEnum)[keyof typeof BlockCategoryScalarFieldEnum]


  export const BlockScalarFieldEnum: {
    id: 'id',
    styleId: 'styleId',
    name: 'name',
    nameCh: 'nameCh',
    schema: 'schema',
    screenshot: 'screenshot',
    categoryId: 'categoryId',
    categoryName: 'categoryName',
    keywords: 'keywords',
    priority: 'priority',
    isDeleted: 'isDeleted'
  };

  export type BlockScalarFieldEnum = (typeof BlockScalarFieldEnum)[keyof typeof BlockScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: IntFilter<"Application"> | number
    name?: StringFilter<"Application"> | string
    describe?: StringFilter<"Application"> | string
    currentEditVersion?: StringFilter<"Application"> | string
    isDeleted?: BoolFilter<"Application"> | boolean
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    currentEditVersion?: SortOrder
    isDeleted?: SortOrder
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    describe?: StringFilter<"Application"> | string
    currentEditVersion?: StringFilter<"Application"> | string
    isDeleted?: BoolFilter<"Application"> | boolean
  }, "id" | "name">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    currentEditVersion?: SortOrder
    isDeleted?: SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _avg?: ApplicationAvgOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
    _sum?: ApplicationSumOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Application"> | number
    name?: StringWithAggregatesFilter<"Application"> | string
    describe?: StringWithAggregatesFilter<"Application"> | string
    currentEditVersion?: StringWithAggregatesFilter<"Application"> | string
    isDeleted?: BoolWithAggregatesFilter<"Application"> | boolean
  }

  export type AppVersionWhereInput = {
    AND?: AppVersionWhereInput | AppVersionWhereInput[]
    OR?: AppVersionWhereInput[]
    NOT?: AppVersionWhereInput | AppVersionWhereInput[]
    id?: IntFilter<"AppVersion"> | number
    applicationId?: IntFilter<"AppVersion"> | number
    version?: StringFilter<"AppVersion"> | string
    isAuditing?: BoolFilter<"AppVersion"> | boolean
    isPass?: BoolFilter<"AppVersion"> | boolean
    auditContent?: StringFilter<"AppVersion"> | string
    isDeleted?: BoolFilter<"AppVersion"> | boolean
  }

  export type AppVersionOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    isAuditing?: SortOrder
    isPass?: SortOrder
    auditContent?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppVersionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId_version?: AppVersionApplicationId_versionCompoundUniqueInput
    AND?: AppVersionWhereInput | AppVersionWhereInput[]
    OR?: AppVersionWhereInput[]
    NOT?: AppVersionWhereInput | AppVersionWhereInput[]
    applicationId?: IntFilter<"AppVersion"> | number
    version?: StringFilter<"AppVersion"> | string
    isAuditing?: BoolFilter<"AppVersion"> | boolean
    isPass?: BoolFilter<"AppVersion"> | boolean
    auditContent?: StringFilter<"AppVersion"> | string
    isDeleted?: BoolFilter<"AppVersion"> | boolean
  }, "id" | "applicationId_version">

  export type AppVersionOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    isAuditing?: SortOrder
    isPass?: SortOrder
    auditContent?: SortOrder
    isDeleted?: SortOrder
    _count?: AppVersionCountOrderByAggregateInput
    _avg?: AppVersionAvgOrderByAggregateInput
    _max?: AppVersionMaxOrderByAggregateInput
    _min?: AppVersionMinOrderByAggregateInput
    _sum?: AppVersionSumOrderByAggregateInput
  }

  export type AppVersionScalarWhereWithAggregatesInput = {
    AND?: AppVersionScalarWhereWithAggregatesInput | AppVersionScalarWhereWithAggregatesInput[]
    OR?: AppVersionScalarWhereWithAggregatesInput[]
    NOT?: AppVersionScalarWhereWithAggregatesInput | AppVersionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppVersion"> | number
    applicationId?: IntWithAggregatesFilter<"AppVersion"> | number
    version?: StringWithAggregatesFilter<"AppVersion"> | string
    isAuditing?: BoolWithAggregatesFilter<"AppVersion"> | boolean
    isPass?: BoolWithAggregatesFilter<"AppVersion"> | boolean
    auditContent?: StringWithAggregatesFilter<"AppVersion"> | string
    isDeleted?: BoolWithAggregatesFilter<"AppVersion"> | boolean
  }

  export type AppEnvWhereInput = {
    AND?: AppEnvWhereInput | AppEnvWhereInput[]
    OR?: AppEnvWhereInput[]
    NOT?: AppEnvWhereInput | AppEnvWhereInput[]
    id?: IntFilter<"AppEnv"> | number
    applicationId?: IntFilter<"AppEnv"> | number
    env?: StringFilter<"AppEnv"> | string
    envCh?: StringFilter<"AppEnv"> | string
    canDelete?: BoolFilter<"AppEnv"> | boolean
    appVersionId?: IntFilter<"AppEnv"> | number
    version?: StringFilter<"AppEnv"> | string
    isDeleted?: BoolFilter<"AppEnv"> | boolean
  }

  export type AppEnvOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    env?: SortOrder
    envCh?: SortOrder
    canDelete?: SortOrder
    appVersionId?: SortOrder
    version?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppEnvWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    applicationId_env?: AppEnvApplicationId_envCompoundUniqueInput
    AND?: AppEnvWhereInput | AppEnvWhereInput[]
    OR?: AppEnvWhereInput[]
    NOT?: AppEnvWhereInput | AppEnvWhereInput[]
    applicationId?: IntFilter<"AppEnv"> | number
    env?: StringFilter<"AppEnv"> | string
    envCh?: StringFilter<"AppEnv"> | string
    canDelete?: BoolFilter<"AppEnv"> | boolean
    appVersionId?: IntFilter<"AppEnv"> | number
    version?: StringFilter<"AppEnv"> | string
    isDeleted?: BoolFilter<"AppEnv"> | boolean
  }, "id" | "applicationId_env">

  export type AppEnvOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    env?: SortOrder
    envCh?: SortOrder
    canDelete?: SortOrder
    appVersionId?: SortOrder
    version?: SortOrder
    isDeleted?: SortOrder
    _count?: AppEnvCountOrderByAggregateInput
    _avg?: AppEnvAvgOrderByAggregateInput
    _max?: AppEnvMaxOrderByAggregateInput
    _min?: AppEnvMinOrderByAggregateInput
    _sum?: AppEnvSumOrderByAggregateInput
  }

  export type AppEnvScalarWhereWithAggregatesInput = {
    AND?: AppEnvScalarWhereWithAggregatesInput | AppEnvScalarWhereWithAggregatesInput[]
    OR?: AppEnvScalarWhereWithAggregatesInput[]
    NOT?: AppEnvScalarWhereWithAggregatesInput | AppEnvScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"AppEnv"> | number
    applicationId?: IntWithAggregatesFilter<"AppEnv"> | number
    env?: StringWithAggregatesFilter<"AppEnv"> | string
    envCh?: StringWithAggregatesFilter<"AppEnv"> | string
    canDelete?: BoolWithAggregatesFilter<"AppEnv"> | boolean
    appVersionId?: IntWithAggregatesFilter<"AppEnv"> | number
    version?: StringWithAggregatesFilter<"AppEnv"> | string
    isDeleted?: BoolWithAggregatesFilter<"AppEnv"> | boolean
  }

  export type PageNodeWhereInput = {
    AND?: PageNodeWhereInput | PageNodeWhereInput[]
    OR?: PageNodeWhereInput[]
    NOT?: PageNodeWhereInput | PageNodeWhereInput[]
    id?: IntFilter<"PageNode"> | number
    name?: StringFilter<"PageNode"> | string
    describe?: StringFilter<"PageNode"> | string
    parentId?: IntFilter<"PageNode"> | number
    applicationId?: IntFilter<"PageNode"> | number
    version?: StringFilter<"PageNode"> | string
    hasSchema?: BoolFilter<"PageNode"> | boolean
    isDeleted?: BoolFilter<"PageNode"> | boolean
  }

  export type PageNodeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    parentId?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    hasSchema?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageNodeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PageNodeWhereInput | PageNodeWhereInput[]
    OR?: PageNodeWhereInput[]
    NOT?: PageNodeWhereInput | PageNodeWhereInput[]
    name?: StringFilter<"PageNode"> | string
    describe?: StringFilter<"PageNode"> | string
    parentId?: IntFilter<"PageNode"> | number
    applicationId?: IntFilter<"PageNode"> | number
    version?: StringFilter<"PageNode"> | string
    hasSchema?: BoolFilter<"PageNode"> | boolean
    isDeleted?: BoolFilter<"PageNode"> | boolean
  }, "id">

  export type PageNodeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    parentId?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    hasSchema?: SortOrder
    isDeleted?: SortOrder
    _count?: PageNodeCountOrderByAggregateInput
    _avg?: PageNodeAvgOrderByAggregateInput
    _max?: PageNodeMaxOrderByAggregateInput
    _min?: PageNodeMinOrderByAggregateInput
    _sum?: PageNodeSumOrderByAggregateInput
  }

  export type PageNodeScalarWhereWithAggregatesInput = {
    AND?: PageNodeScalarWhereWithAggregatesInput | PageNodeScalarWhereWithAggregatesInput[]
    OR?: PageNodeScalarWhereWithAggregatesInput[]
    NOT?: PageNodeScalarWhereWithAggregatesInput | PageNodeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageNode"> | number
    name?: StringWithAggregatesFilter<"PageNode"> | string
    describe?: StringWithAggregatesFilter<"PageNode"> | string
    parentId?: IntWithAggregatesFilter<"PageNode"> | number
    applicationId?: IntWithAggregatesFilter<"PageNode"> | number
    version?: StringWithAggregatesFilter<"PageNode"> | string
    hasSchema?: BoolWithAggregatesFilter<"PageNode"> | boolean
    isDeleted?: BoolWithAggregatesFilter<"PageNode"> | boolean
  }

  export type PageSchemeWhereInput = {
    AND?: PageSchemeWhereInput | PageSchemeWhereInput[]
    OR?: PageSchemeWhereInput[]
    NOT?: PageSchemeWhereInput | PageSchemeWhereInput[]
    id?: IntFilter<"PageScheme"> | number
    schema?: StringFilter<"PageScheme"> | string
    package?: StringFilter<"PageScheme"> | string
    nodeId?: IntFilter<"PageScheme"> | number
    isDeleted?: BoolFilter<"PageScheme"> | boolean
  }

  export type PageSchemeOrderByWithRelationInput = {
    id?: SortOrder
    schema?: SortOrder
    package?: SortOrder
    nodeId?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageSchemeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PageSchemeWhereInput | PageSchemeWhereInput[]
    OR?: PageSchemeWhereInput[]
    NOT?: PageSchemeWhereInput | PageSchemeWhereInput[]
    schema?: StringFilter<"PageScheme"> | string
    package?: StringFilter<"PageScheme"> | string
    nodeId?: IntFilter<"PageScheme"> | number
    isDeleted?: BoolFilter<"PageScheme"> | boolean
  }, "id">

  export type PageSchemeOrderByWithAggregationInput = {
    id?: SortOrder
    schema?: SortOrder
    package?: SortOrder
    nodeId?: SortOrder
    isDeleted?: SortOrder
    _count?: PageSchemeCountOrderByAggregateInput
    _avg?: PageSchemeAvgOrderByAggregateInput
    _max?: PageSchemeMaxOrderByAggregateInput
    _min?: PageSchemeMinOrderByAggregateInput
    _sum?: PageSchemeSumOrderByAggregateInput
  }

  export type PageSchemeScalarWhereWithAggregatesInput = {
    AND?: PageSchemeScalarWhereWithAggregatesInput | PageSchemeScalarWhereWithAggregatesInput[]
    OR?: PageSchemeScalarWhereWithAggregatesInput[]
    NOT?: PageSchemeScalarWhereWithAggregatesInput | PageSchemeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PageScheme"> | number
    schema?: StringWithAggregatesFilter<"PageScheme"> | string
    package?: StringWithAggregatesFilter<"PageScheme"> | string
    nodeId?: IntWithAggregatesFilter<"PageScheme"> | number
    isDeleted?: BoolWithAggregatesFilter<"PageScheme"> | boolean
  }

  export type BlockStyleWhereInput = {
    AND?: BlockStyleWhereInput | BlockStyleWhereInput[]
    OR?: BlockStyleWhereInput[]
    NOT?: BlockStyleWhereInput | BlockStyleWhereInput[]
    id?: IntFilter<"BlockStyle"> | number
    name?: StringFilter<"BlockStyle"> | string
    priority?: IntFilter<"BlockStyle"> | number
    isDeleted?: BoolFilter<"BlockStyle"> | boolean
  }

  export type BlockStyleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockStyleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlockStyleWhereInput | BlockStyleWhereInput[]
    OR?: BlockStyleWhereInput[]
    NOT?: BlockStyleWhereInput | BlockStyleWhereInput[]
    name?: StringFilter<"BlockStyle"> | string
    priority?: IntFilter<"BlockStyle"> | number
    isDeleted?: BoolFilter<"BlockStyle"> | boolean
  }, "id">

  export type BlockStyleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
    _count?: BlockStyleCountOrderByAggregateInput
    _avg?: BlockStyleAvgOrderByAggregateInput
    _max?: BlockStyleMaxOrderByAggregateInput
    _min?: BlockStyleMinOrderByAggregateInput
    _sum?: BlockStyleSumOrderByAggregateInput
  }

  export type BlockStyleScalarWhereWithAggregatesInput = {
    AND?: BlockStyleScalarWhereWithAggregatesInput | BlockStyleScalarWhereWithAggregatesInput[]
    OR?: BlockStyleScalarWhereWithAggregatesInput[]
    NOT?: BlockStyleScalarWhereWithAggregatesInput | BlockStyleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockStyle"> | number
    name?: StringWithAggregatesFilter<"BlockStyle"> | string
    priority?: IntWithAggregatesFilter<"BlockStyle"> | number
    isDeleted?: BoolWithAggregatesFilter<"BlockStyle"> | boolean
  }

  export type BlockCategoryWhereInput = {
    AND?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    OR?: BlockCategoryWhereInput[]
    NOT?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    id?: IntFilter<"BlockCategory"> | number
    name?: StringFilter<"BlockCategory"> | string
    styleId?: IntFilter<"BlockCategory"> | number
    priority?: IntFilter<"BlockCategory"> | number
    isDeleted?: BoolFilter<"BlockCategory"> | boolean
  }

  export type BlockCategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockCategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    OR?: BlockCategoryWhereInput[]
    NOT?: BlockCategoryWhereInput | BlockCategoryWhereInput[]
    name?: StringFilter<"BlockCategory"> | string
    styleId?: IntFilter<"BlockCategory"> | number
    priority?: IntFilter<"BlockCategory"> | number
    isDeleted?: BoolFilter<"BlockCategory"> | boolean
  }, "id">

  export type BlockCategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
    _count?: BlockCategoryCountOrderByAggregateInput
    _avg?: BlockCategoryAvgOrderByAggregateInput
    _max?: BlockCategoryMaxOrderByAggregateInput
    _min?: BlockCategoryMinOrderByAggregateInput
    _sum?: BlockCategorySumOrderByAggregateInput
  }

  export type BlockCategoryScalarWhereWithAggregatesInput = {
    AND?: BlockCategoryScalarWhereWithAggregatesInput | BlockCategoryScalarWhereWithAggregatesInput[]
    OR?: BlockCategoryScalarWhereWithAggregatesInput[]
    NOT?: BlockCategoryScalarWhereWithAggregatesInput | BlockCategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"BlockCategory"> | number
    name?: StringWithAggregatesFilter<"BlockCategory"> | string
    styleId?: IntWithAggregatesFilter<"BlockCategory"> | number
    priority?: IntWithAggregatesFilter<"BlockCategory"> | number
    isDeleted?: BoolWithAggregatesFilter<"BlockCategory"> | boolean
  }

  export type BlockWhereInput = {
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    id?: IntFilter<"Block"> | number
    styleId?: IntFilter<"Block"> | number
    name?: StringFilter<"Block"> | string
    nameCh?: StringFilter<"Block"> | string
    schema?: StringFilter<"Block"> | string
    screenshot?: StringFilter<"Block"> | string
    categoryId?: IntFilter<"Block"> | number
    categoryName?: StringFilter<"Block"> | string
    keywords?: StringFilter<"Block"> | string
    priority?: IntFilter<"Block"> | number
    isDeleted?: BoolFilter<"Block"> | boolean
  }

  export type BlockOrderByWithRelationInput = {
    id?: SortOrder
    styleId?: SortOrder
    name?: SortOrder
    nameCh?: SortOrder
    schema?: SortOrder
    screenshot?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    keywords?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BlockWhereInput | BlockWhereInput[]
    OR?: BlockWhereInput[]
    NOT?: BlockWhereInput | BlockWhereInput[]
    styleId?: IntFilter<"Block"> | number
    name?: StringFilter<"Block"> | string
    nameCh?: StringFilter<"Block"> | string
    schema?: StringFilter<"Block"> | string
    screenshot?: StringFilter<"Block"> | string
    categoryId?: IntFilter<"Block"> | number
    categoryName?: StringFilter<"Block"> | string
    keywords?: StringFilter<"Block"> | string
    priority?: IntFilter<"Block"> | number
    isDeleted?: BoolFilter<"Block"> | boolean
  }, "id">

  export type BlockOrderByWithAggregationInput = {
    id?: SortOrder
    styleId?: SortOrder
    name?: SortOrder
    nameCh?: SortOrder
    schema?: SortOrder
    screenshot?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    keywords?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
    _count?: BlockCountOrderByAggregateInput
    _avg?: BlockAvgOrderByAggregateInput
    _max?: BlockMaxOrderByAggregateInput
    _min?: BlockMinOrderByAggregateInput
    _sum?: BlockSumOrderByAggregateInput
  }

  export type BlockScalarWhereWithAggregatesInput = {
    AND?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    OR?: BlockScalarWhereWithAggregatesInput[]
    NOT?: BlockScalarWhereWithAggregatesInput | BlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Block"> | number
    styleId?: IntWithAggregatesFilter<"Block"> | number
    name?: StringWithAggregatesFilter<"Block"> | string
    nameCh?: StringWithAggregatesFilter<"Block"> | string
    schema?: StringWithAggregatesFilter<"Block"> | string
    screenshot?: StringWithAggregatesFilter<"Block"> | string
    categoryId?: IntWithAggregatesFilter<"Block"> | number
    categoryName?: StringWithAggregatesFilter<"Block"> | string
    keywords?: StringWithAggregatesFilter<"Block"> | string
    priority?: IntWithAggregatesFilter<"Block"> | number
    isDeleted?: BoolWithAggregatesFilter<"Block"> | boolean
  }

  export type ApplicationCreateInput = {
    name: string
    describe: string
    currentEditVersion?: string
    isDeleted?: boolean
  }

  export type ApplicationUncheckedCreateInput = {
    id?: number
    name: string
    describe: string
    currentEditVersion?: string
    isDeleted?: boolean
  }

  export type ApplicationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    currentEditVersion?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    currentEditVersion?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationCreateManyInput = {
    id?: number
    name: string
    describe: string
    currentEditVersion?: string
    isDeleted?: boolean
  }

  export type ApplicationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    currentEditVersion?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    currentEditVersion?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppVersionCreateInput = {
    applicationId: number
    version?: string
    isAuditing?: boolean
    isPass?: boolean
    auditContent?: string
    isDeleted?: boolean
  }

  export type AppVersionUncheckedCreateInput = {
    id?: number
    applicationId: number
    version?: string
    isAuditing?: boolean
    isPass?: boolean
    auditContent?: string
    isDeleted?: boolean
  }

  export type AppVersionUpdateInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isAuditing?: BoolFieldUpdateOperationsInput | boolean
    isPass?: BoolFieldUpdateOperationsInput | boolean
    auditContent?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppVersionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isAuditing?: BoolFieldUpdateOperationsInput | boolean
    isPass?: BoolFieldUpdateOperationsInput | boolean
    auditContent?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppVersionCreateManyInput = {
    id?: number
    applicationId: number
    version?: string
    isAuditing?: boolean
    isPass?: boolean
    auditContent?: string
    isDeleted?: boolean
  }

  export type AppVersionUpdateManyMutationInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isAuditing?: BoolFieldUpdateOperationsInput | boolean
    isPass?: BoolFieldUpdateOperationsInput | boolean
    auditContent?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppVersionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isAuditing?: BoolFieldUpdateOperationsInput | boolean
    isPass?: BoolFieldUpdateOperationsInput | boolean
    auditContent?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppEnvCreateInput = {
    applicationId: number
    env: string
    envCh: string
    canDelete?: boolean
    appVersionId?: number
    version?: string
    isDeleted?: boolean
  }

  export type AppEnvUncheckedCreateInput = {
    id?: number
    applicationId: number
    env: string
    envCh: string
    canDelete?: boolean
    appVersionId?: number
    version?: string
    isDeleted?: boolean
  }

  export type AppEnvUpdateInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    env?: StringFieldUpdateOperationsInput | string
    envCh?: StringFieldUpdateOperationsInput | string
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    appVersionId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppEnvUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    env?: StringFieldUpdateOperationsInput | string
    envCh?: StringFieldUpdateOperationsInput | string
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    appVersionId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppEnvCreateManyInput = {
    id?: number
    applicationId: number
    env: string
    envCh: string
    canDelete?: boolean
    appVersionId?: number
    version?: string
    isDeleted?: boolean
  }

  export type AppEnvUpdateManyMutationInput = {
    applicationId?: IntFieldUpdateOperationsInput | number
    env?: StringFieldUpdateOperationsInput | string
    envCh?: StringFieldUpdateOperationsInput | string
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    appVersionId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type AppEnvUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    env?: StringFieldUpdateOperationsInput | string
    envCh?: StringFieldUpdateOperationsInput | string
    canDelete?: BoolFieldUpdateOperationsInput | boolean
    appVersionId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageNodeCreateInput = {
    name: string
    describe: string
    parentId?: number
    applicationId: number
    version: string
    hasSchema?: boolean
    isDeleted?: boolean
  }

  export type PageNodeUncheckedCreateInput = {
    id?: number
    name: string
    describe: string
    parentId?: number
    applicationId: number
    version: string
    hasSchema?: boolean
    isDeleted?: boolean
  }

  export type PageNodeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    hasSchema?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageNodeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    hasSchema?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageNodeCreateManyInput = {
    id?: number
    name: string
    describe: string
    parentId?: number
    applicationId: number
    version: string
    hasSchema?: boolean
    isDeleted?: boolean
  }

  export type PageNodeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    hasSchema?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageNodeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    describe?: StringFieldUpdateOperationsInput | string
    parentId?: IntFieldUpdateOperationsInput | number
    applicationId?: IntFieldUpdateOperationsInput | number
    version?: StringFieldUpdateOperationsInput | string
    hasSchema?: BoolFieldUpdateOperationsInput | boolean
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageSchemeCreateInput = {
    schema: string
    package: string
    nodeId: number
    isDeleted?: boolean
  }

  export type PageSchemeUncheckedCreateInput = {
    id?: number
    schema: string
    package: string
    nodeId: number
    isDeleted?: boolean
  }

  export type PageSchemeUpdateInput = {
    schema?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    nodeId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageSchemeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schema?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    nodeId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageSchemeCreateManyInput = {
    id?: number
    schema: string
    package: string
    nodeId: number
    isDeleted?: boolean
  }

  export type PageSchemeUpdateManyMutationInput = {
    schema?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    nodeId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PageSchemeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schema?: StringFieldUpdateOperationsInput | string
    package?: StringFieldUpdateOperationsInput | string
    nodeId?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockStyleCreateInput = {
    name: string
    priority?: number
    isDeleted?: boolean
  }

  export type BlockStyleUncheckedCreateInput = {
    id?: number
    name: string
    priority?: number
    isDeleted?: boolean
  }

  export type BlockStyleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockStyleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockStyleCreateManyInput = {
    id?: number
    name: string
    priority?: number
    isDeleted?: boolean
  }

  export type BlockStyleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockStyleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockCategoryCreateInput = {
    name: string
    styleId: number
    priority?: number
    isDeleted?: boolean
  }

  export type BlockCategoryUncheckedCreateInput = {
    id?: number
    name: string
    styleId: number
    priority?: number
    isDeleted?: boolean
  }

  export type BlockCategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    styleId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockCategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    styleId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockCategoryCreateManyInput = {
    id?: number
    name: string
    styleId: number
    priority?: number
    isDeleted?: boolean
  }

  export type BlockCategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    styleId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockCategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    styleId?: IntFieldUpdateOperationsInput | number
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockCreateInput = {
    styleId: number
    name: string
    nameCh: string
    schema: string
    screenshot: string
    categoryId: number
    categoryName: string
    keywords?: string
    priority?: number
    isDeleted?: boolean
  }

  export type BlockUncheckedCreateInput = {
    id?: number
    styleId: number
    name: string
    nameCh: string
    schema: string
    screenshot: string
    categoryId: number
    categoryName: string
    keywords?: string
    priority?: number
    isDeleted?: boolean
  }

  export type BlockUpdateInput = {
    styleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameCh?: StringFieldUpdateOperationsInput | string
    schema?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    styleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameCh?: StringFieldUpdateOperationsInput | string
    schema?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockCreateManyInput = {
    id?: number
    styleId: number
    name: string
    nameCh: string
    schema: string
    screenshot: string
    categoryId: number
    categoryName: string
    keywords?: string
    priority?: number
    isDeleted?: boolean
  }

  export type BlockUpdateManyMutationInput = {
    styleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameCh?: StringFieldUpdateOperationsInput | string
    schema?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type BlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    styleId?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    nameCh?: StringFieldUpdateOperationsInput | string
    schema?: StringFieldUpdateOperationsInput | string
    screenshot?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    keywords?: StringFieldUpdateOperationsInput | string
    priority?: IntFieldUpdateOperationsInput | number
    isDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    currentEditVersion?: SortOrder
    isDeleted?: SortOrder
  }

  export type ApplicationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    currentEditVersion?: SortOrder
    isDeleted?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    currentEditVersion?: SortOrder
    isDeleted?: SortOrder
  }

  export type ApplicationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AppVersionApplicationId_versionCompoundUniqueInput = {
    applicationId: number
    version: string
  }

  export type AppVersionCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    isAuditing?: SortOrder
    isPass?: SortOrder
    auditContent?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppVersionAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
  }

  export type AppVersionMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    isAuditing?: SortOrder
    isPass?: SortOrder
    auditContent?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppVersionMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    isAuditing?: SortOrder
    isPass?: SortOrder
    auditContent?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppVersionSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
  }

  export type AppEnvApplicationId_envCompoundUniqueInput = {
    applicationId: number
    env: string
  }

  export type AppEnvCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    env?: SortOrder
    envCh?: SortOrder
    canDelete?: SortOrder
    appVersionId?: SortOrder
    version?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppEnvAvgOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    appVersionId?: SortOrder
  }

  export type AppEnvMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    env?: SortOrder
    envCh?: SortOrder
    canDelete?: SortOrder
    appVersionId?: SortOrder
    version?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppEnvMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    env?: SortOrder
    envCh?: SortOrder
    canDelete?: SortOrder
    appVersionId?: SortOrder
    version?: SortOrder
    isDeleted?: SortOrder
  }

  export type AppEnvSumOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    appVersionId?: SortOrder
  }

  export type PageNodeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    parentId?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    hasSchema?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageNodeAvgOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    applicationId?: SortOrder
  }

  export type PageNodeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    parentId?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    hasSchema?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageNodeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    describe?: SortOrder
    parentId?: SortOrder
    applicationId?: SortOrder
    version?: SortOrder
    hasSchema?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageNodeSumOrderByAggregateInput = {
    id?: SortOrder
    parentId?: SortOrder
    applicationId?: SortOrder
  }

  export type PageSchemeCountOrderByAggregateInput = {
    id?: SortOrder
    schema?: SortOrder
    package?: SortOrder
    nodeId?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageSchemeAvgOrderByAggregateInput = {
    id?: SortOrder
    nodeId?: SortOrder
  }

  export type PageSchemeMaxOrderByAggregateInput = {
    id?: SortOrder
    schema?: SortOrder
    package?: SortOrder
    nodeId?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageSchemeMinOrderByAggregateInput = {
    id?: SortOrder
    schema?: SortOrder
    package?: SortOrder
    nodeId?: SortOrder
    isDeleted?: SortOrder
  }

  export type PageSchemeSumOrderByAggregateInput = {
    id?: SortOrder
    nodeId?: SortOrder
  }

  export type BlockStyleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockStyleAvgOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type BlockStyleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockStyleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockStyleSumOrderByAggregateInput = {
    id?: SortOrder
    priority?: SortOrder
  }

  export type BlockCategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockCategoryAvgOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    priority?: SortOrder
  }

  export type BlockCategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockCategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    styleId?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockCategorySumOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    priority?: SortOrder
  }

  export type BlockCountOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    name?: SortOrder
    nameCh?: SortOrder
    schema?: SortOrder
    screenshot?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    keywords?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockAvgOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    categoryId?: SortOrder
    priority?: SortOrder
  }

  export type BlockMaxOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    name?: SortOrder
    nameCh?: SortOrder
    schema?: SortOrder
    screenshot?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    keywords?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockMinOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    name?: SortOrder
    nameCh?: SortOrder
    schema?: SortOrder
    screenshot?: SortOrder
    categoryId?: SortOrder
    categoryName?: SortOrder
    keywords?: SortOrder
    priority?: SortOrder
    isDeleted?: SortOrder
  }

  export type BlockSumOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    categoryId?: SortOrder
    priority?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ApplicationDefaultArgs instead
     */
    export type ApplicationArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ApplicationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppVersionDefaultArgs instead
     */
    export type AppVersionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AppVersionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AppEnvDefaultArgs instead
     */
    export type AppEnvArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AppEnvDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PageNodeDefaultArgs instead
     */
    export type PageNodeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PageNodeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PageSchemeDefaultArgs instead
     */
    export type PageSchemeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PageSchemeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockStyleDefaultArgs instead
     */
    export type BlockStyleArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BlockStyleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockCategoryDefaultArgs instead
     */
    export type BlockCategoryArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BlockCategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BlockDefaultArgs instead
     */
    export type BlockArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = BlockDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}