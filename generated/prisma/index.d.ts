
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model PasswordResetRequest
 * 
 */
export type PasswordResetRequest = $Result.DefaultSelection<Prisma.$PasswordResetRequestPayload>
/**
 * Model RefreshToken
 * 
 */
export type RefreshToken = $Result.DefaultSelection<Prisma.$RefreshTokenPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model Remain
 * 
 */
export type Remain = $Result.DefaultSelection<Prisma.$RemainPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>
/**
 * Model ToolRequest
 * 
 */
export type ToolRequest = $Result.DefaultSelection<Prisma.$ToolRequestPayload>
/**
 * Model ActivationRejection
 * 
 */
export type ActivationRejection = $Result.DefaultSelection<Prisma.$ActivationRejectionPayload>
/**
 * Model Paternoster
 * 
 */
export type Paternoster = $Result.DefaultSelection<Prisma.$PaternosterPayload>
/**
 * Model PaternosterAxis
 * 
 */
export type PaternosterAxis = $Result.DefaultSelection<Prisma.$PaternosterAxisPayload>
/**
 * Model RollPlacement
 * 
 */
export type RollPlacement = $Result.DefaultSelection<Prisma.$RollPlacementPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  BLOCKED: 'BLOCKED',
  NOTAPROVED: 'NOTAPROVED',
  USER: 'USER',
  ADMIN: 'ADMIN',
  MANAGER: 'MANAGER'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RequestStatus: {
  CREATED: 'CREATED',
  APPROVED: 'APPROVED',
  DEVELOPING: 'DEVELOPING',
  FINISHED: 'FINISHED',
  REJECTED: 'REJECTED'
};

export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus]


export const ItemType: {
  Linoleym: 'Linoleym',
  Kovrolin: 'Kovrolin',
  Dorozhka: 'Dorozhka',
  Rezina: 'Rezina',
  Trava: 'Trava',
  Rope: 'Rope'
};

export type ItemType = (typeof ItemType)[keyof typeof ItemType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RequestStatus = $Enums.RequestStatus

export const RequestStatus: typeof $Enums.RequestStatus

export type ItemType = $Enums.ItemType

export const ItemType: typeof $Enums.ItemType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetRequest`: Exposes CRUD operations for the **PasswordResetRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetRequests
    * const passwordResetRequests = await prisma.passwordResetRequest.findMany()
    * ```
    */
  get passwordResetRequest(): Prisma.PasswordResetRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.refreshToken`: Exposes CRUD operations for the **RefreshToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RefreshTokens
    * const refreshTokens = await prisma.refreshToken.findMany()
    * ```
    */
  get refreshToken(): Prisma.RefreshTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.remain`: Exposes CRUD operations for the **Remain** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Remains
    * const remains = await prisma.remain.findMany()
    * ```
    */
  get remain(): Prisma.RemainDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.toolRequest`: Exposes CRUD operations for the **ToolRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ToolRequests
    * const toolRequests = await prisma.toolRequest.findMany()
    * ```
    */
  get toolRequest(): Prisma.ToolRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.activationRejection`: Exposes CRUD operations for the **ActivationRejection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ActivationRejections
    * const activationRejections = await prisma.activationRejection.findMany()
    * ```
    */
  get activationRejection(): Prisma.ActivationRejectionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paternoster`: Exposes CRUD operations for the **Paternoster** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Paternosters
    * const paternosters = await prisma.paternoster.findMany()
    * ```
    */
  get paternoster(): Prisma.PaternosterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.paternosterAxis`: Exposes CRUD operations for the **PaternosterAxis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaternosterAxes
    * const paternosterAxes = await prisma.paternosterAxis.findMany()
    * ```
    */
  get paternosterAxis(): Prisma.PaternosterAxisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rollPlacement`: Exposes CRUD operations for the **RollPlacement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RollPlacements
    * const rollPlacements = await prisma.rollPlacement.findMany()
    * ```
    */
  get rollPlacement(): Prisma.RollPlacementDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.5.0
   * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    PasswordResetRequest: 'PasswordResetRequest',
    RefreshToken: 'RefreshToken',
    Item: 'Item',
    Remain: 'Remain',
    Notification: 'Notification',
    ToolRequest: 'ToolRequest',
    ActivationRejection: 'ActivationRejection',
    Paternoster: 'Paternoster',
    PaternosterAxis: 'PaternosterAxis',
    RollPlacement: 'RollPlacement'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "passwordResetRequest" | "refreshToken" | "item" | "remain" | "notification" | "toolRequest" | "activationRejection" | "paternoster" | "paternosterAxis" | "rollPlacement"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetRequest: {
        payload: Prisma.$PasswordResetRequestPayload<ExtArgs>
        fields: Prisma.PasswordResetRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>
          }
          findMany: {
            args: Prisma.PasswordResetRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>[]
          }
          create: {
            args: Prisma.PasswordResetRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>
          }
          createMany: {
            args: Prisma.PasswordResetRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>
          }
          update: {
            args: Prisma.PasswordResetRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetRequestPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetRequest>
          }
          groupBy: {
            args: Prisma.PasswordResetRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetRequestCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetRequestCountAggregateOutputType> | number
          }
        }
      }
      RefreshToken: {
        payload: Prisma.$RefreshTokenPayload<ExtArgs>
        fields: Prisma.RefreshTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RefreshTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RefreshTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findFirst: {
            args: Prisma.RefreshTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RefreshTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          findMany: {
            args: Prisma.RefreshTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          create: {
            args: Prisma.RefreshTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          createMany: {
            args: Prisma.RefreshTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RefreshTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          delete: {
            args: Prisma.RefreshTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          update: {
            args: Prisma.RefreshTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          deleteMany: {
            args: Prisma.RefreshTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RefreshTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RefreshTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>[]
          }
          upsert: {
            args: Prisma.RefreshTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RefreshTokenPayload>
          }
          aggregate: {
            args: Prisma.RefreshTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRefreshToken>
          }
          groupBy: {
            args: Prisma.RefreshTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.RefreshTokenCountArgs<ExtArgs>
            result: $Utils.Optional<RefreshTokenCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      Remain: {
        payload: Prisma.$RemainPayload<ExtArgs>
        fields: Prisma.RemainFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RemainFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RemainFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>
          }
          findFirst: {
            args: Prisma.RemainFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RemainFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>
          }
          findMany: {
            args: Prisma.RemainFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>[]
          }
          create: {
            args: Prisma.RemainCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>
          }
          createMany: {
            args: Prisma.RemainCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RemainCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>[]
          }
          delete: {
            args: Prisma.RemainDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>
          }
          update: {
            args: Prisma.RemainUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>
          }
          deleteMany: {
            args: Prisma.RemainDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RemainUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RemainUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>[]
          }
          upsert: {
            args: Prisma.RemainUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RemainPayload>
          }
          aggregate: {
            args: Prisma.RemainAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRemain>
          }
          groupBy: {
            args: Prisma.RemainGroupByArgs<ExtArgs>
            result: $Utils.Optional<RemainGroupByOutputType>[]
          }
          count: {
            args: Prisma.RemainCountArgs<ExtArgs>
            result: $Utils.Optional<RemainCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
          }
        }
      }
      ToolRequest: {
        payload: Prisma.$ToolRequestPayload<ExtArgs>
        fields: Prisma.ToolRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ToolRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ToolRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>
          }
          findFirst: {
            args: Prisma.ToolRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ToolRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>
          }
          findMany: {
            args: Prisma.ToolRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>[]
          }
          create: {
            args: Prisma.ToolRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>
          }
          createMany: {
            args: Prisma.ToolRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ToolRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>[]
          }
          delete: {
            args: Prisma.ToolRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>
          }
          update: {
            args: Prisma.ToolRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>
          }
          deleteMany: {
            args: Prisma.ToolRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ToolRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ToolRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>[]
          }
          upsert: {
            args: Prisma.ToolRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ToolRequestPayload>
          }
          aggregate: {
            args: Prisma.ToolRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateToolRequest>
          }
          groupBy: {
            args: Prisma.ToolRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ToolRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ToolRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ToolRequestCountAggregateOutputType> | number
          }
        }
      }
      ActivationRejection: {
        payload: Prisma.$ActivationRejectionPayload<ExtArgs>
        fields: Prisma.ActivationRejectionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActivationRejectionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActivationRejectionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>
          }
          findFirst: {
            args: Prisma.ActivationRejectionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActivationRejectionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>
          }
          findMany: {
            args: Prisma.ActivationRejectionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>[]
          }
          create: {
            args: Prisma.ActivationRejectionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>
          }
          createMany: {
            args: Prisma.ActivationRejectionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ActivationRejectionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>[]
          }
          delete: {
            args: Prisma.ActivationRejectionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>
          }
          update: {
            args: Prisma.ActivationRejectionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>
          }
          deleteMany: {
            args: Prisma.ActivationRejectionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ActivationRejectionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ActivationRejectionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>[]
          }
          upsert: {
            args: Prisma.ActivationRejectionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ActivationRejectionPayload>
          }
          aggregate: {
            args: Prisma.ActivationRejectionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateActivationRejection>
          }
          groupBy: {
            args: Prisma.ActivationRejectionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ActivationRejectionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActivationRejectionCountArgs<ExtArgs>
            result: $Utils.Optional<ActivationRejectionCountAggregateOutputType> | number
          }
        }
      }
      Paternoster: {
        payload: Prisma.$PaternosterPayload<ExtArgs>
        fields: Prisma.PaternosterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaternosterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaternosterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>
          }
          findFirst: {
            args: Prisma.PaternosterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaternosterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>
          }
          findMany: {
            args: Prisma.PaternosterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>[]
          }
          create: {
            args: Prisma.PaternosterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>
          }
          createMany: {
            args: Prisma.PaternosterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaternosterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>[]
          }
          delete: {
            args: Prisma.PaternosterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>
          }
          update: {
            args: Prisma.PaternosterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>
          }
          deleteMany: {
            args: Prisma.PaternosterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaternosterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaternosterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>[]
          }
          upsert: {
            args: Prisma.PaternosterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterPayload>
          }
          aggregate: {
            args: Prisma.PaternosterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaternoster>
          }
          groupBy: {
            args: Prisma.PaternosterGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaternosterGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaternosterCountArgs<ExtArgs>
            result: $Utils.Optional<PaternosterCountAggregateOutputType> | number
          }
        }
      }
      PaternosterAxis: {
        payload: Prisma.$PaternosterAxisPayload<ExtArgs>
        fields: Prisma.PaternosterAxisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaternosterAxisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaternosterAxisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>
          }
          findFirst: {
            args: Prisma.PaternosterAxisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaternosterAxisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>
          }
          findMany: {
            args: Prisma.PaternosterAxisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>[]
          }
          create: {
            args: Prisma.PaternosterAxisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>
          }
          createMany: {
            args: Prisma.PaternosterAxisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaternosterAxisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>[]
          }
          delete: {
            args: Prisma.PaternosterAxisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>
          }
          update: {
            args: Prisma.PaternosterAxisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>
          }
          deleteMany: {
            args: Prisma.PaternosterAxisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaternosterAxisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaternosterAxisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>[]
          }
          upsert: {
            args: Prisma.PaternosterAxisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaternosterAxisPayload>
          }
          aggregate: {
            args: Prisma.PaternosterAxisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaternosterAxis>
          }
          groupBy: {
            args: Prisma.PaternosterAxisGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaternosterAxisGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaternosterAxisCountArgs<ExtArgs>
            result: $Utils.Optional<PaternosterAxisCountAggregateOutputType> | number
          }
        }
      }
      RollPlacement: {
        payload: Prisma.$RollPlacementPayload<ExtArgs>
        fields: Prisma.RollPlacementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RollPlacementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RollPlacementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>
          }
          findFirst: {
            args: Prisma.RollPlacementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RollPlacementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>
          }
          findMany: {
            args: Prisma.RollPlacementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>[]
          }
          create: {
            args: Prisma.RollPlacementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>
          }
          createMany: {
            args: Prisma.RollPlacementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RollPlacementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>[]
          }
          delete: {
            args: Prisma.RollPlacementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>
          }
          update: {
            args: Prisma.RollPlacementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>
          }
          deleteMany: {
            args: Prisma.RollPlacementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RollPlacementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RollPlacementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>[]
          }
          upsert: {
            args: Prisma.RollPlacementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RollPlacementPayload>
          }
          aggregate: {
            args: Prisma.RollPlacementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRollPlacement>
          }
          groupBy: {
            args: Prisma.RollPlacementGroupByArgs<ExtArgs>
            result: $Utils.Optional<RollPlacementGroupByOutputType>[]
          }
          count: {
            args: Prisma.RollPlacementCountArgs<ExtArgs>
            result: $Utils.Optional<RollPlacementCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    passwordResetRequest?: PasswordResetRequestOmit
    refreshToken?: RefreshTokenOmit
    item?: ItemOmit
    remain?: RemainOmit
    notification?: NotificationOmit
    toolRequest?: ToolRequestOmit
    activationRejection?: ActivationRejectionOmit
    paternoster?: PaternosterOmit
    paternosterAxis?: PaternosterAxisOmit
    rollPlacement?: RollPlacementOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    notifications: number
    passwordResets: number
    createdRemains: number
    toolRequests: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    passwordResets?: boolean | UserCountOutputTypeCountPasswordResetsArgs
    createdRemains?: boolean | UserCountOutputTypeCountCreatedRemainsArgs
    toolRequests?: boolean | UserCountOutputTypeCountToolRequestsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPasswordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedRemainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemainWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountToolRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolRequestWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    remains: number
    RollPlacement: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remains?: boolean | ItemCountOutputTypeCountRemainsArgs
    RollPlacement?: boolean | ItemCountOutputTypeCountRollPlacementArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountRemainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemainWhereInput
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountRollPlacementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollPlacementWhereInput
  }


  /**
   * Count Type PaternosterCountOutputType
   */

  export type PaternosterCountOutputType = {
    Axises: number
  }

  export type PaternosterCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Axises?: boolean | PaternosterCountOutputTypeCountAxisesArgs
  }

  // Custom InputTypes
  /**
   * PaternosterCountOutputType without action
   */
  export type PaternosterCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterCountOutputType
     */
    select?: PaternosterCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaternosterCountOutputType without action
   */
  export type PaternosterCountOutputTypeCountAxisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaternosterAxisWhereInput
  }


  /**
   * Count Type PaternosterAxisCountOutputType
   */

  export type PaternosterAxisCountOutputType = {
    Placements: number
  }

  export type PaternosterAxisCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Placements?: boolean | PaternosterAxisCountOutputTypeCountPlacementsArgs
  }

  // Custom InputTypes
  /**
   * PaternosterAxisCountOutputType without action
   */
  export type PaternosterAxisCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxisCountOutputType
     */
    select?: PaternosterAxisCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PaternosterAxisCountOutputType without action
   */
  export type PaternosterAxisCountOutputTypeCountPlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollPlacementWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
    departamentId: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    shopId: number | null
    departamentId: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    lastOnline: Date | null
    role: $Enums.Role | null
    shopId: number | null
    departamentId: number | null
    phone: string | null
    telegramChat: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    password: string | null
    lastOnline: Date | null
    role: $Enums.Role | null
    shopId: number | null
    departamentId: number | null
    phone: string | null
    telegramChat: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    password: number
    lastOnline: number
    role: number
    shopId: number
    departamentId: number
    phone: number
    telegramChat: number
    telegramSettings: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    shopId?: true
    departamentId?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    shopId?: true
    departamentId?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    password?: true
    lastOnline?: true
    role?: true
    shopId?: true
    departamentId?: true
    phone?: true
    telegramChat?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    password?: true
    lastOnline?: true
    role?: true
    shopId?: true
    departamentId?: true
    phone?: true
    telegramChat?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    password?: true
    lastOnline?: true
    role?: true
    shopId?: true
    departamentId?: true
    phone?: true
    telegramChat?: true
    telegramSettings?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    password: string
    lastOnline: Date | null
    role: $Enums.Role
    shopId: number | null
    departamentId: number | null
    phone: string
    telegramChat: string | null
    telegramSettings: JsonValue | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    lastOnline?: boolean
    role?: boolean
    shopId?: boolean
    departamentId?: boolean
    phone?: boolean
    telegramChat?: boolean
    telegramSettings?: boolean
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    createdRemains?: boolean | User$createdRemainsArgs<ExtArgs>
    toolRequests?: boolean | User$toolRequestsArgs<ExtArgs>
    ActivationRejection?: boolean | User$ActivationRejectionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    lastOnline?: boolean
    role?: boolean
    shopId?: boolean
    departamentId?: boolean
    phone?: boolean
    telegramChat?: boolean
    telegramSettings?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    password?: boolean
    lastOnline?: boolean
    role?: boolean
    shopId?: boolean
    departamentId?: boolean
    phone?: boolean
    telegramChat?: boolean
    telegramSettings?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    password?: boolean
    lastOnline?: boolean
    role?: boolean
    shopId?: boolean
    departamentId?: boolean
    phone?: boolean
    telegramChat?: boolean
    telegramSettings?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "password" | "lastOnline" | "role" | "shopId" | "departamentId" | "phone" | "telegramChat" | "telegramSettings", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    passwordResets?: boolean | User$passwordResetsArgs<ExtArgs>
    refreshToken?: boolean | User$refreshTokenArgs<ExtArgs>
    createdRemains?: boolean | User$createdRemainsArgs<ExtArgs>
    toolRequests?: boolean | User$toolRequestsArgs<ExtArgs>
    ActivationRejection?: boolean | User$ActivationRejectionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      passwordResets: Prisma.$PasswordResetRequestPayload<ExtArgs>[]
      refreshToken: Prisma.$RefreshTokenPayload<ExtArgs> | null
      createdRemains: Prisma.$RemainPayload<ExtArgs>[]
      toolRequests: Prisma.$ToolRequestPayload<ExtArgs>[]
      ActivationRejection: Prisma.$ActivationRejectionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      password: string
      lastOnline: Date | null
      role: $Enums.Role
      shopId: number | null
      departamentId: number | null
      phone: string
      telegramChat: string | null
      telegramSettings: Prisma.JsonValue | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    passwordResets<T extends User$passwordResetsArgs<ExtArgs> = {}>(args?: Subset<T, User$passwordResetsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    refreshToken<T extends User$refreshTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$refreshTokenArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdRemains<T extends User$createdRemainsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdRemainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    toolRequests<T extends User$toolRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$toolRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ActivationRejection<T extends User$ActivationRejectionArgs<ExtArgs> = {}>(args?: Subset<T, User$ActivationRejectionArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly lastOnline: FieldRef<"User", 'DateTime'>
    readonly role: FieldRef<"User", 'Role'>
    readonly shopId: FieldRef<"User", 'Int'>
    readonly departamentId: FieldRef<"User", 'Int'>
    readonly phone: FieldRef<"User", 'String'>
    readonly telegramChat: FieldRef<"User", 'String'>
    readonly telegramSettings: FieldRef<"User", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.passwordResets
   */
  export type User$passwordResetsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    where?: PasswordResetRequestWhereInput
    orderBy?: PasswordResetRequestOrderByWithRelationInput | PasswordResetRequestOrderByWithRelationInput[]
    cursor?: PasswordResetRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PasswordResetRequestScalarFieldEnum | PasswordResetRequestScalarFieldEnum[]
  }

  /**
   * User.refreshToken
   */
  export type User$refreshTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    where?: RefreshTokenWhereInput
  }

  /**
   * User.createdRemains
   */
  export type User$createdRemainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    where?: RemainWhereInput
    orderBy?: RemainOrderByWithRelationInput | RemainOrderByWithRelationInput[]
    cursor?: RemainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemainScalarFieldEnum | RemainScalarFieldEnum[]
  }

  /**
   * User.toolRequests
   */
  export type User$toolRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    where?: ToolRequestWhereInput
    orderBy?: ToolRequestOrderByWithRelationInput | ToolRequestOrderByWithRelationInput[]
    cursor?: ToolRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ToolRequestScalarFieldEnum | ToolRequestScalarFieldEnum[]
  }

  /**
   * User.ActivationRejection
   */
  export type User$ActivationRejectionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    where?: ActivationRejectionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetRequest
   */

  export type AggregatePasswordResetRequest = {
    _count: PasswordResetRequestCountAggregateOutputType | null
    _avg: PasswordResetRequestAvgAggregateOutputType | null
    _sum: PasswordResetRequestSumAggregateOutputType | null
    _min: PasswordResetRequestMinAggregateOutputType | null
    _max: PasswordResetRequestMaxAggregateOutputType | null
  }

  export type PasswordResetRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PasswordResetRequestMinAggregateOutputType = {
    id: number | null
    ip: string | null
    key: string | null
    created: Date | null
    expiredAt: Date | null
    isUsed: boolean | null
    userId: number | null
  }

  export type PasswordResetRequestMaxAggregateOutputType = {
    id: number | null
    ip: string | null
    key: string | null
    created: Date | null
    expiredAt: Date | null
    isUsed: boolean | null
    userId: number | null
  }

  export type PasswordResetRequestCountAggregateOutputType = {
    id: number
    ip: number
    key: number
    created: number
    expiredAt: number
    isUsed: number
    userId: number
    _all: number
  }


  export type PasswordResetRequestAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetRequestSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PasswordResetRequestMinAggregateInputType = {
    id?: true
    ip?: true
    key?: true
    created?: true
    expiredAt?: true
    isUsed?: true
    userId?: true
  }

  export type PasswordResetRequestMaxAggregateInputType = {
    id?: true
    ip?: true
    key?: true
    created?: true
    expiredAt?: true
    isUsed?: true
    userId?: true
  }

  export type PasswordResetRequestCountAggregateInputType = {
    id?: true
    ip?: true
    key?: true
    created?: true
    expiredAt?: true
    isUsed?: true
    userId?: true
    _all?: true
  }

  export type PasswordResetRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetRequest to aggregate.
     */
    where?: PasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetRequests to fetch.
     */
    orderBy?: PasswordResetRequestOrderByWithRelationInput | PasswordResetRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetRequests
    **/
    _count?: true | PasswordResetRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PasswordResetRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PasswordResetRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetRequestMaxAggregateInputType
  }

  export type GetPasswordResetRequestAggregateType<T extends PasswordResetRequestAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetRequest[P]>
      : GetScalarType<T[P], AggregatePasswordResetRequest[P]>
  }




  export type PasswordResetRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetRequestWhereInput
    orderBy?: PasswordResetRequestOrderByWithAggregationInput | PasswordResetRequestOrderByWithAggregationInput[]
    by: PasswordResetRequestScalarFieldEnum[] | PasswordResetRequestScalarFieldEnum
    having?: PasswordResetRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetRequestCountAggregateInputType | true
    _avg?: PasswordResetRequestAvgAggregateInputType
    _sum?: PasswordResetRequestSumAggregateInputType
    _min?: PasswordResetRequestMinAggregateInputType
    _max?: PasswordResetRequestMaxAggregateInputType
  }

  export type PasswordResetRequestGroupByOutputType = {
    id: number
    ip: string
    key: string
    created: Date
    expiredAt: Date
    isUsed: boolean
    userId: number
    _count: PasswordResetRequestCountAggregateOutputType | null
    _avg: PasswordResetRequestAvgAggregateOutputType | null
    _sum: PasswordResetRequestSumAggregateOutputType | null
    _min: PasswordResetRequestMinAggregateOutputType | null
    _max: PasswordResetRequestMaxAggregateOutputType | null
  }

  type GetPasswordResetRequestGroupByPayload<T extends PasswordResetRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetRequestGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetRequestGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    key?: boolean
    created?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    userId?: boolean
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetRequest"]>

  export type PasswordResetRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    key?: boolean
    created?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    userId?: boolean
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetRequest"]>

  export type PasswordResetRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ip?: boolean
    key?: boolean
    created?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    userId?: boolean
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetRequest"]>

  export type PasswordResetRequestSelectScalar = {
    id?: boolean
    ip?: boolean
    key?: boolean
    created?: boolean
    expiredAt?: boolean
    isUsed?: boolean
    userId?: boolean
  }

  export type PasswordResetRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ip" | "key" | "created" | "expiredAt" | "isUsed" | "userId", ExtArgs["result"]["passwordResetRequest"]>
  export type PasswordResetRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetRequest"
    objects: {
      forUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      ip: string
      key: string
      created: Date
      expiredAt: Date
      isUsed: boolean
      userId: number
    }, ExtArgs["result"]["passwordResetRequest"]>
    composites: {}
  }

  type PasswordResetRequestGetPayload<S extends boolean | null | undefined | PasswordResetRequestDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetRequestPayload, S>

  type PasswordResetRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetRequestCountAggregateInputType | true
    }

  export interface PasswordResetRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetRequest'], meta: { name: 'PasswordResetRequest' } }
    /**
     * Find zero or one PasswordResetRequest that matches the filter.
     * @param {PasswordResetRequestFindUniqueArgs} args - Arguments to find a PasswordResetRequest
     * @example
     * // Get one PasswordResetRequest
     * const passwordResetRequest = await prisma.passwordResetRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetRequestFindUniqueArgs>(args: SelectSubset<T, PasswordResetRequestFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetRequestFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetRequest
     * @example
     * // Get one PasswordResetRequest
     * const passwordResetRequest = await prisma.passwordResetRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetRequestFindFirstArgs} args - Arguments to find a PasswordResetRequest
     * @example
     * // Get one PasswordResetRequest
     * const passwordResetRequest = await prisma.passwordResetRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetRequestFindFirstArgs>(args?: SelectSubset<T, PasswordResetRequestFindFirstArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetRequestFindFirstOrThrowArgs} args - Arguments to find a PasswordResetRequest
     * @example
     * // Get one PasswordResetRequest
     * const passwordResetRequest = await prisma.passwordResetRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetRequests
     * const passwordResetRequests = await prisma.passwordResetRequest.findMany()
     * 
     * // Get first 10 PasswordResetRequests
     * const passwordResetRequests = await prisma.passwordResetRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const passwordResetRequestWithIdOnly = await prisma.passwordResetRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PasswordResetRequestFindManyArgs>(args?: SelectSubset<T, PasswordResetRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetRequest.
     * @param {PasswordResetRequestCreateArgs} args - Arguments to create a PasswordResetRequest.
     * @example
     * // Create one PasswordResetRequest
     * const PasswordResetRequest = await prisma.passwordResetRequest.create({
     *   data: {
     *     // ... data to create a PasswordResetRequest
     *   }
     * })
     * 
     */
    create<T extends PasswordResetRequestCreateArgs>(args: SelectSubset<T, PasswordResetRequestCreateArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetRequests.
     * @param {PasswordResetRequestCreateManyArgs} args - Arguments to create many PasswordResetRequests.
     * @example
     * // Create many PasswordResetRequests
     * const passwordResetRequest = await prisma.passwordResetRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetRequestCreateManyArgs>(args?: SelectSubset<T, PasswordResetRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetRequests and returns the data saved in the database.
     * @param {PasswordResetRequestCreateManyAndReturnArgs} args - Arguments to create many PasswordResetRequests.
     * @example
     * // Create many PasswordResetRequests
     * const passwordResetRequest = await prisma.passwordResetRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetRequests and only return the `id`
     * const passwordResetRequestWithIdOnly = await prisma.passwordResetRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetRequest.
     * @param {PasswordResetRequestDeleteArgs} args - Arguments to delete one PasswordResetRequest.
     * @example
     * // Delete one PasswordResetRequest
     * const PasswordResetRequest = await prisma.passwordResetRequest.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetRequest
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetRequestDeleteArgs>(args: SelectSubset<T, PasswordResetRequestDeleteArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetRequest.
     * @param {PasswordResetRequestUpdateArgs} args - Arguments to update one PasswordResetRequest.
     * @example
     * // Update one PasswordResetRequest
     * const passwordResetRequest = await prisma.passwordResetRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetRequestUpdateArgs>(args: SelectSubset<T, PasswordResetRequestUpdateArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetRequests.
     * @param {PasswordResetRequestDeleteManyArgs} args - Arguments to filter PasswordResetRequests to delete.
     * @example
     * // Delete a few PasswordResetRequests
     * const { count } = await prisma.passwordResetRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetRequestDeleteManyArgs>(args?: SelectSubset<T, PasswordResetRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetRequests
     * const passwordResetRequest = await prisma.passwordResetRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetRequestUpdateManyArgs>(args: SelectSubset<T, PasswordResetRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetRequests and returns the data updated in the database.
     * @param {PasswordResetRequestUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetRequests.
     * @example
     * // Update many PasswordResetRequests
     * const passwordResetRequest = await prisma.passwordResetRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetRequests and only return the `id`
     * const passwordResetRequestWithIdOnly = await prisma.passwordResetRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetRequest.
     * @param {PasswordResetRequestUpsertArgs} args - Arguments to update or create a PasswordResetRequest.
     * @example
     * // Update or create a PasswordResetRequest
     * const passwordResetRequest = await prisma.passwordResetRequest.upsert({
     *   create: {
     *     // ... data to create a PasswordResetRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetRequest we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetRequestUpsertArgs>(args: SelectSubset<T, PasswordResetRequestUpsertArgs<ExtArgs>>): Prisma__PasswordResetRequestClient<$Result.GetResult<Prisma.$PasswordResetRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetRequestCountArgs} args - Arguments to filter PasswordResetRequests to count.
     * @example
     * // Count the number of PasswordResetRequests
     * const count = await prisma.passwordResetRequest.count({
     *   where: {
     *     // ... the filter for the PasswordResetRequests we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetRequestCountArgs>(
      args?: Subset<T, PasswordResetRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PasswordResetRequestAggregateArgs>(args: Subset<T, PasswordResetRequestAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetRequestAggregateType<T>>

    /**
     * Group by PasswordResetRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetRequestGroupByArgs} args - Group by arguments.
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
      T extends PasswordResetRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetRequestGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PasswordResetRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetRequest model
   */
  readonly fields: PasswordResetRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetRequest model
   */ 
  interface PasswordResetRequestFieldRefs {
    readonly id: FieldRef<"PasswordResetRequest", 'Int'>
    readonly ip: FieldRef<"PasswordResetRequest", 'String'>
    readonly key: FieldRef<"PasswordResetRequest", 'String'>
    readonly created: FieldRef<"PasswordResetRequest", 'DateTime'>
    readonly expiredAt: FieldRef<"PasswordResetRequest", 'DateTime'>
    readonly isUsed: FieldRef<"PasswordResetRequest", 'Boolean'>
    readonly userId: FieldRef<"PasswordResetRequest", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetRequest findUnique
   */
  export type PasswordResetRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetRequest to fetch.
     */
    where: PasswordResetRequestWhereUniqueInput
  }

  /**
   * PasswordResetRequest findUniqueOrThrow
   */
  export type PasswordResetRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetRequest to fetch.
     */
    where: PasswordResetRequestWhereUniqueInput
  }

  /**
   * PasswordResetRequest findFirst
   */
  export type PasswordResetRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetRequest to fetch.
     */
    where?: PasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetRequests to fetch.
     */
    orderBy?: PasswordResetRequestOrderByWithRelationInput | PasswordResetRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetRequests.
     */
    cursor?: PasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetRequests.
     */
    distinct?: PasswordResetRequestScalarFieldEnum | PasswordResetRequestScalarFieldEnum[]
  }

  /**
   * PasswordResetRequest findFirstOrThrow
   */
  export type PasswordResetRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetRequest to fetch.
     */
    where?: PasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetRequests to fetch.
     */
    orderBy?: PasswordResetRequestOrderByWithRelationInput | PasswordResetRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetRequests.
     */
    cursor?: PasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetRequests.
     */
    distinct?: PasswordResetRequestScalarFieldEnum | PasswordResetRequestScalarFieldEnum[]
  }

  /**
   * PasswordResetRequest findMany
   */
  export type PasswordResetRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetRequests to fetch.
     */
    where?: PasswordResetRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetRequests to fetch.
     */
    orderBy?: PasswordResetRequestOrderByWithRelationInput | PasswordResetRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetRequests.
     */
    cursor?: PasswordResetRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetRequests.
     */
    skip?: number
    distinct?: PasswordResetRequestScalarFieldEnum | PasswordResetRequestScalarFieldEnum[]
  }

  /**
   * PasswordResetRequest create
   */
  export type PasswordResetRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetRequest.
     */
    data: XOR<PasswordResetRequestCreateInput, PasswordResetRequestUncheckedCreateInput>
  }

  /**
   * PasswordResetRequest createMany
   */
  export type PasswordResetRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetRequests.
     */
    data: PasswordResetRequestCreateManyInput | PasswordResetRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetRequest createManyAndReturn
   */
  export type PasswordResetRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetRequests.
     */
    data: PasswordResetRequestCreateManyInput | PasswordResetRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetRequest update
   */
  export type PasswordResetRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetRequest.
     */
    data: XOR<PasswordResetRequestUpdateInput, PasswordResetRequestUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetRequest to update.
     */
    where: PasswordResetRequestWhereUniqueInput
  }

  /**
   * PasswordResetRequest updateMany
   */
  export type PasswordResetRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetRequests.
     */
    data: XOR<PasswordResetRequestUpdateManyMutationInput, PasswordResetRequestUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetRequests to update
     */
    where?: PasswordResetRequestWhereInput
    /**
     * Limit how many PasswordResetRequests to update.
     */
    limit?: number
  }

  /**
   * PasswordResetRequest updateManyAndReturn
   */
  export type PasswordResetRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetRequests.
     */
    data: XOR<PasswordResetRequestUpdateManyMutationInput, PasswordResetRequestUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetRequests to update
     */
    where?: PasswordResetRequestWhereInput
    /**
     * Limit how many PasswordResetRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetRequest upsert
   */
  export type PasswordResetRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetRequest to update in case it exists.
     */
    where: PasswordResetRequestWhereUniqueInput
    /**
     * In case the PasswordResetRequest found by the `where` argument doesn't exist, create a new PasswordResetRequest with this data.
     */
    create: XOR<PasswordResetRequestCreateInput, PasswordResetRequestUncheckedCreateInput>
    /**
     * In case the PasswordResetRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetRequestUpdateInput, PasswordResetRequestUncheckedUpdateInput>
  }

  /**
   * PasswordResetRequest delete
   */
  export type PasswordResetRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetRequest to delete.
     */
    where: PasswordResetRequestWhereUniqueInput
  }

  /**
   * PasswordResetRequest deleteMany
   */
  export type PasswordResetRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetRequests to delete
     */
    where?: PasswordResetRequestWhereInput
    /**
     * Limit how many PasswordResetRequests to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetRequest without action
   */
  export type PasswordResetRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetRequest
     */
    select?: PasswordResetRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetRequest
     */
    omit?: PasswordResetRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetRequestInclude<ExtArgs> | null
  }


  /**
   * Model RefreshToken
   */

  export type AggregateRefreshToken = {
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  export type RefreshTokenAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type RefreshTokenMinAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
  }

  export type RefreshTokenMaxAggregateOutputType = {
    id: number | null
    token: string | null
    userId: number | null
  }

  export type RefreshTokenCountAggregateOutputType = {
    id: number
    token: number
    userId: number
    _all: number
  }


  export type RefreshTokenAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type RefreshTokenMinAggregateInputType = {
    id?: true
    token?: true
    userId?: true
  }

  export type RefreshTokenMaxAggregateInputType = {
    id?: true
    token?: true
    userId?: true
  }

  export type RefreshTokenCountAggregateInputType = {
    id?: true
    token?: true
    userId?: true
    _all?: true
  }

  export type RefreshTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshToken to aggregate.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RefreshTokens
    **/
    _count?: true | RefreshTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RefreshTokenAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RefreshTokenSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RefreshTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type GetRefreshTokenAggregateType<T extends RefreshTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateRefreshToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefreshToken[P]>
      : GetScalarType<T[P], AggregateRefreshToken[P]>
  }




  export type RefreshTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RefreshTokenWhereInput
    orderBy?: RefreshTokenOrderByWithAggregationInput | RefreshTokenOrderByWithAggregationInput[]
    by: RefreshTokenScalarFieldEnum[] | RefreshTokenScalarFieldEnum
    having?: RefreshTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RefreshTokenCountAggregateInputType | true
    _avg?: RefreshTokenAvgAggregateInputType
    _sum?: RefreshTokenSumAggregateInputType
    _min?: RefreshTokenMinAggregateInputType
    _max?: RefreshTokenMaxAggregateInputType
  }

  export type RefreshTokenGroupByOutputType = {
    id: number
    token: string
    userId: number
    _count: RefreshTokenCountAggregateOutputType | null
    _avg: RefreshTokenAvgAggregateOutputType | null
    _sum: RefreshTokenSumAggregateOutputType | null
    _min: RefreshTokenMinAggregateOutputType | null
    _max: RefreshTokenMaxAggregateOutputType | null
  }

  type GetRefreshTokenGroupByPayload<T extends RefreshTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RefreshTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RefreshTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
            : GetScalarType<T[P], RefreshTokenGroupByOutputType[P]>
        }
      >
    >


  export type RefreshTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    token?: boolean
    userId?: boolean
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["refreshToken"]>

  export type RefreshTokenSelectScalar = {
    id?: boolean
    token?: boolean
    userId?: boolean
  }

  export type RefreshTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "token" | "userId", ExtArgs["result"]["refreshToken"]>
  export type RefreshTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RefreshTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    forUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RefreshTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RefreshToken"
    objects: {
      forUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      token: string
      userId: number
    }, ExtArgs["result"]["refreshToken"]>
    composites: {}
  }

  type RefreshTokenGetPayload<S extends boolean | null | undefined | RefreshTokenDefaultArgs> = $Result.GetResult<Prisma.$RefreshTokenPayload, S>

  type RefreshTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RefreshTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RefreshTokenCountAggregateInputType | true
    }

  export interface RefreshTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RefreshToken'], meta: { name: 'RefreshToken' } }
    /**
     * Find zero or one RefreshToken that matches the filter.
     * @param {RefreshTokenFindUniqueArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RefreshTokenFindUniqueArgs>(args: SelectSubset<T, RefreshTokenFindUniqueArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RefreshToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RefreshTokenFindUniqueOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RefreshTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, RefreshTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RefreshTokenFindFirstArgs>(args?: SelectSubset<T, RefreshTokenFindFirstArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RefreshToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindFirstOrThrowArgs} args - Arguments to find a RefreshToken
     * @example
     * // Get one RefreshToken
     * const refreshToken = await prisma.refreshToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RefreshTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, RefreshTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RefreshTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany()
     * 
     * // Get first 10 RefreshTokens
     * const refreshTokens = await prisma.refreshToken.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RefreshTokenFindManyArgs>(args?: SelectSubset<T, RefreshTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RefreshToken.
     * @param {RefreshTokenCreateArgs} args - Arguments to create a RefreshToken.
     * @example
     * // Create one RefreshToken
     * const RefreshToken = await prisma.refreshToken.create({
     *   data: {
     *     // ... data to create a RefreshToken
     *   }
     * })
     * 
     */
    create<T extends RefreshTokenCreateArgs>(args: SelectSubset<T, RefreshTokenCreateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RefreshTokens.
     * @param {RefreshTokenCreateManyArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RefreshTokenCreateManyArgs>(args?: SelectSubset<T, RefreshTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RefreshTokens and returns the data saved in the database.
     * @param {RefreshTokenCreateManyAndReturnArgs} args - Arguments to create many RefreshTokens.
     * @example
     * // Create many RefreshTokens
     * const refreshToken = await prisma.refreshToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RefreshTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, RefreshTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RefreshToken.
     * @param {RefreshTokenDeleteArgs} args - Arguments to delete one RefreshToken.
     * @example
     * // Delete one RefreshToken
     * const RefreshToken = await prisma.refreshToken.delete({
     *   where: {
     *     // ... filter to delete one RefreshToken
     *   }
     * })
     * 
     */
    delete<T extends RefreshTokenDeleteArgs>(args: SelectSubset<T, RefreshTokenDeleteArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RefreshToken.
     * @param {RefreshTokenUpdateArgs} args - Arguments to update one RefreshToken.
     * @example
     * // Update one RefreshToken
     * const refreshToken = await prisma.refreshToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RefreshTokenUpdateArgs>(args: SelectSubset<T, RefreshTokenUpdateArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RefreshTokens.
     * @param {RefreshTokenDeleteManyArgs} args - Arguments to filter RefreshTokens to delete.
     * @example
     * // Delete a few RefreshTokens
     * const { count } = await prisma.refreshToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RefreshTokenDeleteManyArgs>(args?: SelectSubset<T, RefreshTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RefreshTokenUpdateManyArgs>(args: SelectSubset<T, RefreshTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RefreshTokens and returns the data updated in the database.
     * @param {RefreshTokenUpdateManyAndReturnArgs} args - Arguments to update many RefreshTokens.
     * @example
     * // Update many RefreshTokens
     * const refreshToken = await prisma.refreshToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RefreshTokens and only return the `id`
     * const refreshTokenWithIdOnly = await prisma.refreshToken.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RefreshTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, RefreshTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RefreshToken.
     * @param {RefreshTokenUpsertArgs} args - Arguments to update or create a RefreshToken.
     * @example
     * // Update or create a RefreshToken
     * const refreshToken = await prisma.refreshToken.upsert({
     *   create: {
     *     // ... data to create a RefreshToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RefreshToken we want to update
     *   }
     * })
     */
    upsert<T extends RefreshTokenUpsertArgs>(args: SelectSubset<T, RefreshTokenUpsertArgs<ExtArgs>>): Prisma__RefreshTokenClient<$Result.GetResult<Prisma.$RefreshTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RefreshTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenCountArgs} args - Arguments to filter RefreshTokens to count.
     * @example
     * // Count the number of RefreshTokens
     * const count = await prisma.refreshToken.count({
     *   where: {
     *     // ... the filter for the RefreshTokens we want to count
     *   }
     * })
    **/
    count<T extends RefreshTokenCountArgs>(
      args?: Subset<T, RefreshTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RefreshTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RefreshTokenAggregateArgs>(args: Subset<T, RefreshTokenAggregateArgs>): Prisma.PrismaPromise<GetRefreshTokenAggregateType<T>>

    /**
     * Group by RefreshToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RefreshTokenGroupByArgs} args - Group by arguments.
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
      T extends RefreshTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RefreshTokenGroupByArgs['orderBy'] }
        : { orderBy?: RefreshTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RefreshTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRefreshTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RefreshToken model
   */
  readonly fields: RefreshTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RefreshToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RefreshTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    forUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RefreshToken model
   */ 
  interface RefreshTokenFieldRefs {
    readonly id: FieldRef<"RefreshToken", 'Int'>
    readonly token: FieldRef<"RefreshToken", 'String'>
    readonly userId: FieldRef<"RefreshToken", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RefreshToken findUnique
   */
  export type RefreshTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findUniqueOrThrow
   */
  export type RefreshTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken findFirst
   */
  export type RefreshTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findFirstOrThrow
   */
  export type RefreshTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshToken to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RefreshTokens.
     */
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken findMany
   */
  export type RefreshTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter, which RefreshTokens to fetch.
     */
    where?: RefreshTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RefreshTokens to fetch.
     */
    orderBy?: RefreshTokenOrderByWithRelationInput | RefreshTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RefreshTokens.
     */
    cursor?: RefreshTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RefreshTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RefreshTokens.
     */
    skip?: number
    distinct?: RefreshTokenScalarFieldEnum | RefreshTokenScalarFieldEnum[]
  }

  /**
   * RefreshToken create
   */
  export type RefreshTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a RefreshToken.
     */
    data: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
  }

  /**
   * RefreshToken createMany
   */
  export type RefreshTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RefreshToken createManyAndReturn
   */
  export type RefreshTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to create many RefreshTokens.
     */
    data: RefreshTokenCreateManyInput | RefreshTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken update
   */
  export type RefreshTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a RefreshToken.
     */
    data: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
    /**
     * Choose, which RefreshToken to update.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken updateMany
   */
  export type RefreshTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
  }

  /**
   * RefreshToken updateManyAndReturn
   */
  export type RefreshTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * The data used to update RefreshTokens.
     */
    data: XOR<RefreshTokenUpdateManyMutationInput, RefreshTokenUncheckedUpdateManyInput>
    /**
     * Filter which RefreshTokens to update
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RefreshToken upsert
   */
  export type RefreshTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the RefreshToken to update in case it exists.
     */
    where: RefreshTokenWhereUniqueInput
    /**
     * In case the RefreshToken found by the `where` argument doesn't exist, create a new RefreshToken with this data.
     */
    create: XOR<RefreshTokenCreateInput, RefreshTokenUncheckedCreateInput>
    /**
     * In case the RefreshToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RefreshTokenUpdateInput, RefreshTokenUncheckedUpdateInput>
  }

  /**
   * RefreshToken delete
   */
  export type RefreshTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
    /**
     * Filter which RefreshToken to delete.
     */
    where: RefreshTokenWhereUniqueInput
  }

  /**
   * RefreshToken deleteMany
   */
  export type RefreshTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RefreshTokens to delete
     */
    where?: RefreshTokenWhereInput
    /**
     * Limit how many RefreshTokens to delete.
     */
    limit?: number
  }

  /**
   * RefreshToken without action
   */
  export type RefreshTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RefreshToken
     */
    select?: RefreshTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RefreshToken
     */
    omit?: RefreshTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RefreshTokenInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    departamentId: number | null
  }

  export type ItemSumAggregateOutputType = {
    departamentId: number | null
  }

  export type ItemMinAggregateOutputType = {
    code: string | null
    name: string | null
    type: $Enums.ItemType | null
    departamentId: number | null
  }

  export type ItemMaxAggregateOutputType = {
    code: string | null
    name: string | null
    type: $Enums.ItemType | null
    departamentId: number | null
  }

  export type ItemCountAggregateOutputType = {
    code: number
    name: number
    type: number
    departamentId: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    departamentId?: true
  }

  export type ItemSumAggregateInputType = {
    departamentId?: true
  }

  export type ItemMinAggregateInputType = {
    code?: true
    name?: true
    type?: true
    departamentId?: true
  }

  export type ItemMaxAggregateInputType = {
    code?: true
    name?: true
    type?: true
    departamentId?: true
  }

  export type ItemCountAggregateInputType = {
    code?: true
    name?: true
    type?: true
    departamentId?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId: number | null
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    type?: boolean
    departamentId?: boolean
    remains?: boolean | Item$remainsArgs<ExtArgs>
    RollPlacement?: boolean | Item$RollPlacementArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    type?: boolean
    departamentId?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    code?: boolean
    name?: boolean
    type?: boolean
    departamentId?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    code?: boolean
    name?: boolean
    type?: boolean
    departamentId?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"code" | "name" | "type" | "departamentId", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    remains?: boolean | Item$remainsArgs<ExtArgs>
    RollPlacement?: boolean | Item$RollPlacementArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      remains: Prisma.$RemainPayload<ExtArgs>[]
      RollPlacement: Prisma.$RollPlacementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      code: string
      name: string
      type: $Enums.ItemType
      departamentId: number | null
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `code`
     * const itemWithCodeOnly = await prisma.item.findMany({ select: { code: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `code`
     * const itemWithCodeOnly = await prisma.item.createManyAndReturn({
     *   select: { code: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `code`
     * const itemWithCodeOnly = await prisma.item.updateManyAndReturn({
     *   select: { code: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
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
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    remains<T extends Item$remainsArgs<ExtArgs> = {}>(args?: Subset<T, Item$remainsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RollPlacement<T extends Item$RollPlacementArgs<ExtArgs> = {}>(args?: Subset<T, Item$RollPlacementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly code: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly type: FieldRef<"Item", 'ItemType'>
    readonly departamentId: FieldRef<"Item", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.remains
   */
  export type Item$remainsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    where?: RemainWhereInput
    orderBy?: RemainOrderByWithRelationInput | RemainOrderByWithRelationInput[]
    cursor?: RemainWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RemainScalarFieldEnum | RemainScalarFieldEnum[]
  }

  /**
   * Item.RollPlacement
   */
  export type Item$RollPlacementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    where?: RollPlacementWhereInput
    orderBy?: RollPlacementOrderByWithRelationInput | RollPlacementOrderByWithRelationInput[]
    cursor?: RollPlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RollPlacementScalarFieldEnum | RollPlacementScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model Remain
   */

  export type AggregateRemain = {
    _count: RemainCountAggregateOutputType | null
    _avg: RemainAvgAggregateOutputType | null
    _sum: RemainSumAggregateOutputType | null
    _min: RemainMinAggregateOutputType | null
    _max: RemainMaxAggregateOutputType | null
  }

  export type RemainAvgAggregateOutputType = {
    shop: number | null
    userId: number | null
    DepartamentId: number | null
  }

  export type RemainSumAggregateOutputType = {
    shop: number | null
    userId: number | null
    DepartamentId: number | null
  }

  export type RemainMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    shop: number | null
    userId: number | null
    itemId: string | null
    SellDate: Date | null
    PrintedDate: Date | null
    DepartamentId: number | null
    IsDeleted: boolean | null
  }

  export type RemainMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    shop: number | null
    userId: number | null
    itemId: string | null
    SellDate: Date | null
    PrintedDate: Date | null
    DepartamentId: number | null
    IsDeleted: boolean | null
  }

  export type RemainCountAggregateOutputType = {
    id: number
    createdAt: number
    metadata: number
    shop: number
    userId: number
    itemId: number
    SellDate: number
    PrintedDate: number
    DepartamentId: number
    IsDeleted: number
    _all: number
  }


  export type RemainAvgAggregateInputType = {
    shop?: true
    userId?: true
    DepartamentId?: true
  }

  export type RemainSumAggregateInputType = {
    shop?: true
    userId?: true
    DepartamentId?: true
  }

  export type RemainMinAggregateInputType = {
    id?: true
    createdAt?: true
    shop?: true
    userId?: true
    itemId?: true
    SellDate?: true
    PrintedDate?: true
    DepartamentId?: true
    IsDeleted?: true
  }

  export type RemainMaxAggregateInputType = {
    id?: true
    createdAt?: true
    shop?: true
    userId?: true
    itemId?: true
    SellDate?: true
    PrintedDate?: true
    DepartamentId?: true
    IsDeleted?: true
  }

  export type RemainCountAggregateInputType = {
    id?: true
    createdAt?: true
    metadata?: true
    shop?: true
    userId?: true
    itemId?: true
    SellDate?: true
    PrintedDate?: true
    DepartamentId?: true
    IsDeleted?: true
    _all?: true
  }

  export type RemainAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Remain to aggregate.
     */
    where?: RemainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remains to fetch.
     */
    orderBy?: RemainOrderByWithRelationInput | RemainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RemainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Remains
    **/
    _count?: true | RemainCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RemainAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RemainSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RemainMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RemainMaxAggregateInputType
  }

  export type GetRemainAggregateType<T extends RemainAggregateArgs> = {
        [P in keyof T & keyof AggregateRemain]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRemain[P]>
      : GetScalarType<T[P], AggregateRemain[P]>
  }




  export type RemainGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RemainWhereInput
    orderBy?: RemainOrderByWithAggregationInput | RemainOrderByWithAggregationInput[]
    by: RemainScalarFieldEnum[] | RemainScalarFieldEnum
    having?: RemainScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RemainCountAggregateInputType | true
    _avg?: RemainAvgAggregateInputType
    _sum?: RemainSumAggregateInputType
    _min?: RemainMinAggregateInputType
    _max?: RemainMaxAggregateInputType
  }

  export type RemainGroupByOutputType = {
    id: string
    createdAt: Date
    metadata: JsonValue
    shop: number
    userId: number
    itemId: string
    SellDate: Date | null
    PrintedDate: Date | null
    DepartamentId: number | null
    IsDeleted: boolean
    _count: RemainCountAggregateOutputType | null
    _avg: RemainAvgAggregateOutputType | null
    _sum: RemainSumAggregateOutputType | null
    _min: RemainMinAggregateOutputType | null
    _max: RemainMaxAggregateOutputType | null
  }

  type GetRemainGroupByPayload<T extends RemainGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RemainGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RemainGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RemainGroupByOutputType[P]>
            : GetScalarType<T[P], RemainGroupByOutputType[P]>
        }
      >
    >


  export type RemainSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    metadata?: boolean
    shop?: boolean
    userId?: boolean
    itemId?: boolean
    SellDate?: boolean
    PrintedDate?: boolean
    DepartamentId?: boolean
    IsDeleted?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["remain"]>

  export type RemainSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    metadata?: boolean
    shop?: boolean
    userId?: boolean
    itemId?: boolean
    SellDate?: boolean
    PrintedDate?: boolean
    DepartamentId?: boolean
    IsDeleted?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["remain"]>

  export type RemainSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    metadata?: boolean
    shop?: boolean
    userId?: boolean
    itemId?: boolean
    SellDate?: boolean
    PrintedDate?: boolean
    DepartamentId?: boolean
    IsDeleted?: boolean
    item?: boolean | ItemDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["remain"]>

  export type RemainSelectScalar = {
    id?: boolean
    createdAt?: boolean
    metadata?: boolean
    shop?: boolean
    userId?: boolean
    itemId?: boolean
    SellDate?: boolean
    PrintedDate?: boolean
    DepartamentId?: boolean
    IsDeleted?: boolean
  }

  export type RemainOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "metadata" | "shop" | "userId" | "itemId" | "SellDate" | "PrintedDate" | "DepartamentId" | "IsDeleted", ExtArgs["result"]["remain"]>
  export type RemainInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RemainIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RemainIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    item?: boolean | ItemDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RemainPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Remain"
    objects: {
      item: Prisma.$ItemPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      metadata: Prisma.JsonValue
      shop: number
      userId: number
      itemId: string
      SellDate: Date | null
      PrintedDate: Date | null
      DepartamentId: number | null
      IsDeleted: boolean
    }, ExtArgs["result"]["remain"]>
    composites: {}
  }

  type RemainGetPayload<S extends boolean | null | undefined | RemainDefaultArgs> = $Result.GetResult<Prisma.$RemainPayload, S>

  type RemainCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RemainFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RemainCountAggregateInputType | true
    }

  export interface RemainDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Remain'], meta: { name: 'Remain' } }
    /**
     * Find zero or one Remain that matches the filter.
     * @param {RemainFindUniqueArgs} args - Arguments to find a Remain
     * @example
     * // Get one Remain
     * const remain = await prisma.remain.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RemainFindUniqueArgs>(args: SelectSubset<T, RemainFindUniqueArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Remain that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RemainFindUniqueOrThrowArgs} args - Arguments to find a Remain
     * @example
     * // Get one Remain
     * const remain = await prisma.remain.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RemainFindUniqueOrThrowArgs>(args: SelectSubset<T, RemainFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Remain that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemainFindFirstArgs} args - Arguments to find a Remain
     * @example
     * // Get one Remain
     * const remain = await prisma.remain.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RemainFindFirstArgs>(args?: SelectSubset<T, RemainFindFirstArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Remain that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemainFindFirstOrThrowArgs} args - Arguments to find a Remain
     * @example
     * // Get one Remain
     * const remain = await prisma.remain.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RemainFindFirstOrThrowArgs>(args?: SelectSubset<T, RemainFindFirstOrThrowArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Remains that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemainFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Remains
     * const remains = await prisma.remain.findMany()
     * 
     * // Get first 10 Remains
     * const remains = await prisma.remain.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const remainWithIdOnly = await prisma.remain.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RemainFindManyArgs>(args?: SelectSubset<T, RemainFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Remain.
     * @param {RemainCreateArgs} args - Arguments to create a Remain.
     * @example
     * // Create one Remain
     * const Remain = await prisma.remain.create({
     *   data: {
     *     // ... data to create a Remain
     *   }
     * })
     * 
     */
    create<T extends RemainCreateArgs>(args: SelectSubset<T, RemainCreateArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Remains.
     * @param {RemainCreateManyArgs} args - Arguments to create many Remains.
     * @example
     * // Create many Remains
     * const remain = await prisma.remain.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RemainCreateManyArgs>(args?: SelectSubset<T, RemainCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Remains and returns the data saved in the database.
     * @param {RemainCreateManyAndReturnArgs} args - Arguments to create many Remains.
     * @example
     * // Create many Remains
     * const remain = await prisma.remain.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Remains and only return the `id`
     * const remainWithIdOnly = await prisma.remain.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RemainCreateManyAndReturnArgs>(args?: SelectSubset<T, RemainCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Remain.
     * @param {RemainDeleteArgs} args - Arguments to delete one Remain.
     * @example
     * // Delete one Remain
     * const Remain = await prisma.remain.delete({
     *   where: {
     *     // ... filter to delete one Remain
     *   }
     * })
     * 
     */
    delete<T extends RemainDeleteArgs>(args: SelectSubset<T, RemainDeleteArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Remain.
     * @param {RemainUpdateArgs} args - Arguments to update one Remain.
     * @example
     * // Update one Remain
     * const remain = await prisma.remain.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RemainUpdateArgs>(args: SelectSubset<T, RemainUpdateArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Remains.
     * @param {RemainDeleteManyArgs} args - Arguments to filter Remains to delete.
     * @example
     * // Delete a few Remains
     * const { count } = await prisma.remain.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RemainDeleteManyArgs>(args?: SelectSubset<T, RemainDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Remains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemainUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Remains
     * const remain = await prisma.remain.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RemainUpdateManyArgs>(args: SelectSubset<T, RemainUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Remains and returns the data updated in the database.
     * @param {RemainUpdateManyAndReturnArgs} args - Arguments to update many Remains.
     * @example
     * // Update many Remains
     * const remain = await prisma.remain.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Remains and only return the `id`
     * const remainWithIdOnly = await prisma.remain.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RemainUpdateManyAndReturnArgs>(args: SelectSubset<T, RemainUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Remain.
     * @param {RemainUpsertArgs} args - Arguments to update or create a Remain.
     * @example
     * // Update or create a Remain
     * const remain = await prisma.remain.upsert({
     *   create: {
     *     // ... data to create a Remain
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Remain we want to update
     *   }
     * })
     */
    upsert<T extends RemainUpsertArgs>(args: SelectSubset<T, RemainUpsertArgs<ExtArgs>>): Prisma__RemainClient<$Result.GetResult<Prisma.$RemainPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Remains.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemainCountArgs} args - Arguments to filter Remains to count.
     * @example
     * // Count the number of Remains
     * const count = await prisma.remain.count({
     *   where: {
     *     // ... the filter for the Remains we want to count
     *   }
     * })
    **/
    count<T extends RemainCountArgs>(
      args?: Subset<T, RemainCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RemainCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Remain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemainAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RemainAggregateArgs>(args: Subset<T, RemainAggregateArgs>): Prisma.PrismaPromise<GetRemainAggregateType<T>>

    /**
     * Group by Remain.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RemainGroupByArgs} args - Group by arguments.
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
      T extends RemainGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RemainGroupByArgs['orderBy'] }
        : { orderBy?: RemainGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RemainGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRemainGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Remain model
   */
  readonly fields: RemainFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Remain.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RemainClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Remain model
   */ 
  interface RemainFieldRefs {
    readonly id: FieldRef<"Remain", 'String'>
    readonly createdAt: FieldRef<"Remain", 'DateTime'>
    readonly metadata: FieldRef<"Remain", 'Json'>
    readonly shop: FieldRef<"Remain", 'Int'>
    readonly userId: FieldRef<"Remain", 'Int'>
    readonly itemId: FieldRef<"Remain", 'String'>
    readonly SellDate: FieldRef<"Remain", 'DateTime'>
    readonly PrintedDate: FieldRef<"Remain", 'DateTime'>
    readonly DepartamentId: FieldRef<"Remain", 'Int'>
    readonly IsDeleted: FieldRef<"Remain", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Remain findUnique
   */
  export type RemainFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * Filter, which Remain to fetch.
     */
    where: RemainWhereUniqueInput
  }

  /**
   * Remain findUniqueOrThrow
   */
  export type RemainFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * Filter, which Remain to fetch.
     */
    where: RemainWhereUniqueInput
  }

  /**
   * Remain findFirst
   */
  export type RemainFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * Filter, which Remain to fetch.
     */
    where?: RemainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remains to fetch.
     */
    orderBy?: RemainOrderByWithRelationInput | RemainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Remains.
     */
    cursor?: RemainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Remains.
     */
    distinct?: RemainScalarFieldEnum | RemainScalarFieldEnum[]
  }

  /**
   * Remain findFirstOrThrow
   */
  export type RemainFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * Filter, which Remain to fetch.
     */
    where?: RemainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remains to fetch.
     */
    orderBy?: RemainOrderByWithRelationInput | RemainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Remains.
     */
    cursor?: RemainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remains.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Remains.
     */
    distinct?: RemainScalarFieldEnum | RemainScalarFieldEnum[]
  }

  /**
   * Remain findMany
   */
  export type RemainFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * Filter, which Remains to fetch.
     */
    where?: RemainWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Remains to fetch.
     */
    orderBy?: RemainOrderByWithRelationInput | RemainOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Remains.
     */
    cursor?: RemainWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Remains from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Remains.
     */
    skip?: number
    distinct?: RemainScalarFieldEnum | RemainScalarFieldEnum[]
  }

  /**
   * Remain create
   */
  export type RemainCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * The data needed to create a Remain.
     */
    data: XOR<RemainCreateInput, RemainUncheckedCreateInput>
  }

  /**
   * Remain createMany
   */
  export type RemainCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Remains.
     */
    data: RemainCreateManyInput | RemainCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Remain createManyAndReturn
   */
  export type RemainCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * The data used to create many Remains.
     */
    data: RemainCreateManyInput | RemainCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Remain update
   */
  export type RemainUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * The data needed to update a Remain.
     */
    data: XOR<RemainUpdateInput, RemainUncheckedUpdateInput>
    /**
     * Choose, which Remain to update.
     */
    where: RemainWhereUniqueInput
  }

  /**
   * Remain updateMany
   */
  export type RemainUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Remains.
     */
    data: XOR<RemainUpdateManyMutationInput, RemainUncheckedUpdateManyInput>
    /**
     * Filter which Remains to update
     */
    where?: RemainWhereInput
    /**
     * Limit how many Remains to update.
     */
    limit?: number
  }

  /**
   * Remain updateManyAndReturn
   */
  export type RemainUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * The data used to update Remains.
     */
    data: XOR<RemainUpdateManyMutationInput, RemainUncheckedUpdateManyInput>
    /**
     * Filter which Remains to update
     */
    where?: RemainWhereInput
    /**
     * Limit how many Remains to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Remain upsert
   */
  export type RemainUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * The filter to search for the Remain to update in case it exists.
     */
    where: RemainWhereUniqueInput
    /**
     * In case the Remain found by the `where` argument doesn't exist, create a new Remain with this data.
     */
    create: XOR<RemainCreateInput, RemainUncheckedCreateInput>
    /**
     * In case the Remain was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RemainUpdateInput, RemainUncheckedUpdateInput>
  }

  /**
   * Remain delete
   */
  export type RemainDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
    /**
     * Filter which Remain to delete.
     */
    where: RemainWhereUniqueInput
  }

  /**
   * Remain deleteMany
   */
  export type RemainDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Remains to delete
     */
    where?: RemainWhereInput
    /**
     * Limit how many Remains to delete.
     */
    limit?: number
  }

  /**
   * Remain without action
   */
  export type RemainDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Remain
     */
    select?: RemainSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Remain
     */
    omit?: RemainOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RemainInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type NotificationMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    Readed: boolean | null
    message: string | null
    showed: Date | null
    IsDeleted: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    userId: number | null
    Readed: boolean | null
    message: string | null
    showed: Date | null
    IsDeleted: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    createdAt: number
    userId: number
    Readed: number
    message: number
    showed: number
    IsDeleted: number
    _all: number
  }


  export type NotificationAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type NotificationMinAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    Readed?: true
    message?: true
    showed?: true
    IsDeleted?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    Readed?: true
    message?: true
    showed?: true
    IsDeleted?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    createdAt?: true
    userId?: true
    Readed?: true
    message?: true
    showed?: true
    IsDeleted?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: NotificationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: NotificationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _avg?: NotificationAvgAggregateInputType
    _sum?: NotificationSumAggregateInputType
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: number
    createdAt: Date
    userId: number
    Readed: boolean
    message: string
    showed: Date | null
    IsDeleted: boolean
    _count: NotificationCountAggregateOutputType | null
    _avg: NotificationAvgAggregateOutputType | null
    _sum: NotificationSumAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    Readed?: boolean
    message?: boolean
    showed?: boolean
    IsDeleted?: boolean
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    Readed?: boolean
    message?: boolean
    showed?: boolean
    IsDeleted?: boolean
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    Readed?: boolean
    message?: boolean
    showed?: boolean
    IsDeleted?: boolean
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    createdAt?: boolean
    userId?: boolean
    Readed?: boolean
    message?: boolean
    showed?: boolean
    IsDeleted?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "userId" | "Readed" | "message" | "showed" | "IsDeleted", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      ForUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      userId: number
      Readed: boolean
      message: string
      showed: Date | null
      IsDeleted: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ForUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Notification model
   */ 
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'Int'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly userId: FieldRef<"Notification", 'Int'>
    readonly Readed: FieldRef<"Notification", 'Boolean'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly showed: FieldRef<"Notification", 'DateTime'>
    readonly IsDeleted: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
  }


  /**
   * Model ToolRequest
   */

  export type AggregateToolRequest = {
    _count: ToolRequestCountAggregateOutputType | null
    _avg: ToolRequestAvgAggregateOutputType | null
    _sum: ToolRequestSumAggregateOutputType | null
    _min: ToolRequestMinAggregateOutputType | null
    _max: ToolRequestMaxAggregateOutputType | null
  }

  export type ToolRequestAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    departamentId: number | null
  }

  export type ToolRequestSumAggregateOutputType = {
    id: number | null
    userId: number | null
    departamentId: number | null
  }

  export type ToolRequestMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    toolName: string | null
    description: string | null
    howToContact: string | null
    status: $Enums.RequestStatus | null
    userId: number | null
    departamentId: number | null
    RejectionReason: string | null
    IsDeleted: boolean | null
  }

  export type ToolRequestMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    toolName: string | null
    description: string | null
    howToContact: string | null
    status: $Enums.RequestStatus | null
    userId: number | null
    departamentId: number | null
    RejectionReason: string | null
    IsDeleted: boolean | null
  }

  export type ToolRequestCountAggregateOutputType = {
    id: number
    createdAt: number
    toolName: number
    description: number
    howToContact: number
    status: number
    userId: number
    departamentId: number
    RejectionReason: number
    IsDeleted: number
    _all: number
  }


  export type ToolRequestAvgAggregateInputType = {
    id?: true
    userId?: true
    departamentId?: true
  }

  export type ToolRequestSumAggregateInputType = {
    id?: true
    userId?: true
    departamentId?: true
  }

  export type ToolRequestMinAggregateInputType = {
    id?: true
    createdAt?: true
    toolName?: true
    description?: true
    howToContact?: true
    status?: true
    userId?: true
    departamentId?: true
    RejectionReason?: true
    IsDeleted?: true
  }

  export type ToolRequestMaxAggregateInputType = {
    id?: true
    createdAt?: true
    toolName?: true
    description?: true
    howToContact?: true
    status?: true
    userId?: true
    departamentId?: true
    RejectionReason?: true
    IsDeleted?: true
  }

  export type ToolRequestCountAggregateInputType = {
    id?: true
    createdAt?: true
    toolName?: true
    description?: true
    howToContact?: true
    status?: true
    userId?: true
    departamentId?: true
    RejectionReason?: true
    IsDeleted?: true
    _all?: true
  }

  export type ToolRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolRequest to aggregate.
     */
    where?: ToolRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolRequests to fetch.
     */
    orderBy?: ToolRequestOrderByWithRelationInput | ToolRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ToolRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ToolRequests
    **/
    _count?: true | ToolRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ToolRequestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ToolRequestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ToolRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ToolRequestMaxAggregateInputType
  }

  export type GetToolRequestAggregateType<T extends ToolRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateToolRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateToolRequest[P]>
      : GetScalarType<T[P], AggregateToolRequest[P]>
  }




  export type ToolRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ToolRequestWhereInput
    orderBy?: ToolRequestOrderByWithAggregationInput | ToolRequestOrderByWithAggregationInput[]
    by: ToolRequestScalarFieldEnum[] | ToolRequestScalarFieldEnum
    having?: ToolRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ToolRequestCountAggregateInputType | true
    _avg?: ToolRequestAvgAggregateInputType
    _sum?: ToolRequestSumAggregateInputType
    _min?: ToolRequestMinAggregateInputType
    _max?: ToolRequestMaxAggregateInputType
  }

  export type ToolRequestGroupByOutputType = {
    id: number
    createdAt: Date
    toolName: string
    description: string
    howToContact: string | null
    status: $Enums.RequestStatus
    userId: number
    departamentId: number
    RejectionReason: string | null
    IsDeleted: boolean
    _count: ToolRequestCountAggregateOutputType | null
    _avg: ToolRequestAvgAggregateOutputType | null
    _sum: ToolRequestSumAggregateOutputType | null
    _min: ToolRequestMinAggregateOutputType | null
    _max: ToolRequestMaxAggregateOutputType | null
  }

  type GetToolRequestGroupByPayload<T extends ToolRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ToolRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ToolRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ToolRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ToolRequestGroupByOutputType[P]>
        }
      >
    >


  export type ToolRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    toolName?: boolean
    description?: boolean
    howToContact?: boolean
    status?: boolean
    userId?: boolean
    departamentId?: boolean
    RejectionReason?: boolean
    IsDeleted?: boolean
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolRequest"]>

  export type ToolRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    toolName?: boolean
    description?: boolean
    howToContact?: boolean
    status?: boolean
    userId?: boolean
    departamentId?: boolean
    RejectionReason?: boolean
    IsDeleted?: boolean
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolRequest"]>

  export type ToolRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    toolName?: boolean
    description?: boolean
    howToContact?: boolean
    status?: boolean
    userId?: boolean
    departamentId?: boolean
    RejectionReason?: boolean
    IsDeleted?: boolean
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["toolRequest"]>

  export type ToolRequestSelectScalar = {
    id?: boolean
    createdAt?: boolean
    toolName?: boolean
    description?: boolean
    howToContact?: boolean
    status?: boolean
    userId?: boolean
    departamentId?: boolean
    RejectionReason?: boolean
    IsDeleted?: boolean
  }

  export type ToolRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "toolName" | "description" | "howToContact" | "status" | "userId" | "departamentId" | "RejectionReason" | "IsDeleted", ExtArgs["result"]["toolRequest"]>
  export type ToolRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ToolRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ToolRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ForUser?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ToolRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ToolRequest"
    objects: {
      ForUser: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      createdAt: Date
      toolName: string
      description: string
      howToContact: string | null
      status: $Enums.RequestStatus
      userId: number
      departamentId: number
      RejectionReason: string | null
      IsDeleted: boolean
    }, ExtArgs["result"]["toolRequest"]>
    composites: {}
  }

  type ToolRequestGetPayload<S extends boolean | null | undefined | ToolRequestDefaultArgs> = $Result.GetResult<Prisma.$ToolRequestPayload, S>

  type ToolRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ToolRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ToolRequestCountAggregateInputType | true
    }

  export interface ToolRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ToolRequest'], meta: { name: 'ToolRequest' } }
    /**
     * Find zero or one ToolRequest that matches the filter.
     * @param {ToolRequestFindUniqueArgs} args - Arguments to find a ToolRequest
     * @example
     * // Get one ToolRequest
     * const toolRequest = await prisma.toolRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ToolRequestFindUniqueArgs>(args: SelectSubset<T, ToolRequestFindUniqueArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ToolRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ToolRequestFindUniqueOrThrowArgs} args - Arguments to find a ToolRequest
     * @example
     * // Get one ToolRequest
     * const toolRequest = await prisma.toolRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ToolRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ToolRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolRequestFindFirstArgs} args - Arguments to find a ToolRequest
     * @example
     * // Get one ToolRequest
     * const toolRequest = await prisma.toolRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ToolRequestFindFirstArgs>(args?: SelectSubset<T, ToolRequestFindFirstArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ToolRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolRequestFindFirstOrThrowArgs} args - Arguments to find a ToolRequest
     * @example
     * // Get one ToolRequest
     * const toolRequest = await prisma.toolRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ToolRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ToolRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ToolRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ToolRequests
     * const toolRequests = await prisma.toolRequest.findMany()
     * 
     * // Get first 10 ToolRequests
     * const toolRequests = await prisma.toolRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const toolRequestWithIdOnly = await prisma.toolRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ToolRequestFindManyArgs>(args?: SelectSubset<T, ToolRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ToolRequest.
     * @param {ToolRequestCreateArgs} args - Arguments to create a ToolRequest.
     * @example
     * // Create one ToolRequest
     * const ToolRequest = await prisma.toolRequest.create({
     *   data: {
     *     // ... data to create a ToolRequest
     *   }
     * })
     * 
     */
    create<T extends ToolRequestCreateArgs>(args: SelectSubset<T, ToolRequestCreateArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ToolRequests.
     * @param {ToolRequestCreateManyArgs} args - Arguments to create many ToolRequests.
     * @example
     * // Create many ToolRequests
     * const toolRequest = await prisma.toolRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ToolRequestCreateManyArgs>(args?: SelectSubset<T, ToolRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ToolRequests and returns the data saved in the database.
     * @param {ToolRequestCreateManyAndReturnArgs} args - Arguments to create many ToolRequests.
     * @example
     * // Create many ToolRequests
     * const toolRequest = await prisma.toolRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ToolRequests and only return the `id`
     * const toolRequestWithIdOnly = await prisma.toolRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ToolRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ToolRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ToolRequest.
     * @param {ToolRequestDeleteArgs} args - Arguments to delete one ToolRequest.
     * @example
     * // Delete one ToolRequest
     * const ToolRequest = await prisma.toolRequest.delete({
     *   where: {
     *     // ... filter to delete one ToolRequest
     *   }
     * })
     * 
     */
    delete<T extends ToolRequestDeleteArgs>(args: SelectSubset<T, ToolRequestDeleteArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ToolRequest.
     * @param {ToolRequestUpdateArgs} args - Arguments to update one ToolRequest.
     * @example
     * // Update one ToolRequest
     * const toolRequest = await prisma.toolRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ToolRequestUpdateArgs>(args: SelectSubset<T, ToolRequestUpdateArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ToolRequests.
     * @param {ToolRequestDeleteManyArgs} args - Arguments to filter ToolRequests to delete.
     * @example
     * // Delete a few ToolRequests
     * const { count } = await prisma.toolRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ToolRequestDeleteManyArgs>(args?: SelectSubset<T, ToolRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ToolRequests
     * const toolRequest = await prisma.toolRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ToolRequestUpdateManyArgs>(args: SelectSubset<T, ToolRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ToolRequests and returns the data updated in the database.
     * @param {ToolRequestUpdateManyAndReturnArgs} args - Arguments to update many ToolRequests.
     * @example
     * // Update many ToolRequests
     * const toolRequest = await prisma.toolRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ToolRequests and only return the `id`
     * const toolRequestWithIdOnly = await prisma.toolRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ToolRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ToolRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ToolRequest.
     * @param {ToolRequestUpsertArgs} args - Arguments to update or create a ToolRequest.
     * @example
     * // Update or create a ToolRequest
     * const toolRequest = await prisma.toolRequest.upsert({
     *   create: {
     *     // ... data to create a ToolRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ToolRequest we want to update
     *   }
     * })
     */
    upsert<T extends ToolRequestUpsertArgs>(args: SelectSubset<T, ToolRequestUpsertArgs<ExtArgs>>): Prisma__ToolRequestClient<$Result.GetResult<Prisma.$ToolRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ToolRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolRequestCountArgs} args - Arguments to filter ToolRequests to count.
     * @example
     * // Count the number of ToolRequests
     * const count = await prisma.toolRequest.count({
     *   where: {
     *     // ... the filter for the ToolRequests we want to count
     *   }
     * })
    **/
    count<T extends ToolRequestCountArgs>(
      args?: Subset<T, ToolRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ToolRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ToolRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ToolRequestAggregateArgs>(args: Subset<T, ToolRequestAggregateArgs>): Prisma.PrismaPromise<GetToolRequestAggregateType<T>>

    /**
     * Group by ToolRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ToolRequestGroupByArgs} args - Group by arguments.
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
      T extends ToolRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ToolRequestGroupByArgs['orderBy'] }
        : { orderBy?: ToolRequestGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ToolRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetToolRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ToolRequest model
   */
  readonly fields: ToolRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ToolRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ToolRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ForUser<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ToolRequest model
   */ 
  interface ToolRequestFieldRefs {
    readonly id: FieldRef<"ToolRequest", 'Int'>
    readonly createdAt: FieldRef<"ToolRequest", 'DateTime'>
    readonly toolName: FieldRef<"ToolRequest", 'String'>
    readonly description: FieldRef<"ToolRequest", 'String'>
    readonly howToContact: FieldRef<"ToolRequest", 'String'>
    readonly status: FieldRef<"ToolRequest", 'RequestStatus'>
    readonly userId: FieldRef<"ToolRequest", 'Int'>
    readonly departamentId: FieldRef<"ToolRequest", 'Int'>
    readonly RejectionReason: FieldRef<"ToolRequest", 'String'>
    readonly IsDeleted: FieldRef<"ToolRequest", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ToolRequest findUnique
   */
  export type ToolRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * Filter, which ToolRequest to fetch.
     */
    where: ToolRequestWhereUniqueInput
  }

  /**
   * ToolRequest findUniqueOrThrow
   */
  export type ToolRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * Filter, which ToolRequest to fetch.
     */
    where: ToolRequestWhereUniqueInput
  }

  /**
   * ToolRequest findFirst
   */
  export type ToolRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * Filter, which ToolRequest to fetch.
     */
    where?: ToolRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolRequests to fetch.
     */
    orderBy?: ToolRequestOrderByWithRelationInput | ToolRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolRequests.
     */
    cursor?: ToolRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolRequests.
     */
    distinct?: ToolRequestScalarFieldEnum | ToolRequestScalarFieldEnum[]
  }

  /**
   * ToolRequest findFirstOrThrow
   */
  export type ToolRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * Filter, which ToolRequest to fetch.
     */
    where?: ToolRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolRequests to fetch.
     */
    orderBy?: ToolRequestOrderByWithRelationInput | ToolRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ToolRequests.
     */
    cursor?: ToolRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ToolRequests.
     */
    distinct?: ToolRequestScalarFieldEnum | ToolRequestScalarFieldEnum[]
  }

  /**
   * ToolRequest findMany
   */
  export type ToolRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * Filter, which ToolRequests to fetch.
     */
    where?: ToolRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ToolRequests to fetch.
     */
    orderBy?: ToolRequestOrderByWithRelationInput | ToolRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ToolRequests.
     */
    cursor?: ToolRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ToolRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ToolRequests.
     */
    skip?: number
    distinct?: ToolRequestScalarFieldEnum | ToolRequestScalarFieldEnum[]
  }

  /**
   * ToolRequest create
   */
  export type ToolRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ToolRequest.
     */
    data: XOR<ToolRequestCreateInput, ToolRequestUncheckedCreateInput>
  }

  /**
   * ToolRequest createMany
   */
  export type ToolRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ToolRequests.
     */
    data: ToolRequestCreateManyInput | ToolRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ToolRequest createManyAndReturn
   */
  export type ToolRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ToolRequests.
     */
    data: ToolRequestCreateManyInput | ToolRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolRequest update
   */
  export type ToolRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ToolRequest.
     */
    data: XOR<ToolRequestUpdateInput, ToolRequestUncheckedUpdateInput>
    /**
     * Choose, which ToolRequest to update.
     */
    where: ToolRequestWhereUniqueInput
  }

  /**
   * ToolRequest updateMany
   */
  export type ToolRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ToolRequests.
     */
    data: XOR<ToolRequestUpdateManyMutationInput, ToolRequestUncheckedUpdateManyInput>
    /**
     * Filter which ToolRequests to update
     */
    where?: ToolRequestWhereInput
    /**
     * Limit how many ToolRequests to update.
     */
    limit?: number
  }

  /**
   * ToolRequest updateManyAndReturn
   */
  export type ToolRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * The data used to update ToolRequests.
     */
    data: XOR<ToolRequestUpdateManyMutationInput, ToolRequestUncheckedUpdateManyInput>
    /**
     * Filter which ToolRequests to update
     */
    where?: ToolRequestWhereInput
    /**
     * Limit how many ToolRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ToolRequest upsert
   */
  export type ToolRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ToolRequest to update in case it exists.
     */
    where: ToolRequestWhereUniqueInput
    /**
     * In case the ToolRequest found by the `where` argument doesn't exist, create a new ToolRequest with this data.
     */
    create: XOR<ToolRequestCreateInput, ToolRequestUncheckedCreateInput>
    /**
     * In case the ToolRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ToolRequestUpdateInput, ToolRequestUncheckedUpdateInput>
  }

  /**
   * ToolRequest delete
   */
  export type ToolRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
    /**
     * Filter which ToolRequest to delete.
     */
    where: ToolRequestWhereUniqueInput
  }

  /**
   * ToolRequest deleteMany
   */
  export type ToolRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ToolRequests to delete
     */
    where?: ToolRequestWhereInput
    /**
     * Limit how many ToolRequests to delete.
     */
    limit?: number
  }

  /**
   * ToolRequest without action
   */
  export type ToolRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ToolRequest
     */
    select?: ToolRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ToolRequest
     */
    omit?: ToolRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ToolRequestInclude<ExtArgs> | null
  }


  /**
   * Model ActivationRejection
   */

  export type AggregateActivationRejection = {
    _count: ActivationRejectionCountAggregateOutputType | null
    _avg: ActivationRejectionAvgAggregateOutputType | null
    _sum: ActivationRejectionSumAggregateOutputType | null
    _min: ActivationRejectionMinAggregateOutputType | null
    _max: ActivationRejectionMaxAggregateOutputType | null
  }

  export type ActivationRejectionAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivationRejectionSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ActivationRejectionMinAggregateOutputType = {
    id: number | null
    userId: number | null
    reason: string | null
  }

  export type ActivationRejectionMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    reason: string | null
  }

  export type ActivationRejectionCountAggregateOutputType = {
    id: number
    userId: number
    reason: number
    _all: number
  }


  export type ActivationRejectionAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivationRejectionSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ActivationRejectionMinAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
  }

  export type ActivationRejectionMaxAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
  }

  export type ActivationRejectionCountAggregateInputType = {
    id?: true
    userId?: true
    reason?: true
    _all?: true
  }

  export type ActivationRejectionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivationRejection to aggregate.
     */
    where?: ActivationRejectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationRejections to fetch.
     */
    orderBy?: ActivationRejectionOrderByWithRelationInput | ActivationRejectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActivationRejectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationRejections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationRejections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ActivationRejections
    **/
    _count?: true | ActivationRejectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActivationRejectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActivationRejectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActivationRejectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActivationRejectionMaxAggregateInputType
  }

  export type GetActivationRejectionAggregateType<T extends ActivationRejectionAggregateArgs> = {
        [P in keyof T & keyof AggregateActivationRejection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActivationRejection[P]>
      : GetScalarType<T[P], AggregateActivationRejection[P]>
  }




  export type ActivationRejectionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActivationRejectionWhereInput
    orderBy?: ActivationRejectionOrderByWithAggregationInput | ActivationRejectionOrderByWithAggregationInput[]
    by: ActivationRejectionScalarFieldEnum[] | ActivationRejectionScalarFieldEnum
    having?: ActivationRejectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActivationRejectionCountAggregateInputType | true
    _avg?: ActivationRejectionAvgAggregateInputType
    _sum?: ActivationRejectionSumAggregateInputType
    _min?: ActivationRejectionMinAggregateInputType
    _max?: ActivationRejectionMaxAggregateInputType
  }

  export type ActivationRejectionGroupByOutputType = {
    id: number
    userId: number
    reason: string
    _count: ActivationRejectionCountAggregateOutputType | null
    _avg: ActivationRejectionAvgAggregateOutputType | null
    _sum: ActivationRejectionSumAggregateOutputType | null
    _min: ActivationRejectionMinAggregateOutputType | null
    _max: ActivationRejectionMaxAggregateOutputType | null
  }

  type GetActivationRejectionGroupByPayload<T extends ActivationRejectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActivationRejectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActivationRejectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActivationRejectionGroupByOutputType[P]>
            : GetScalarType<T[P], ActivationRejectionGroupByOutputType[P]>
        }
      >
    >


  export type ActivationRejectionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activationRejection"]>

  export type ActivationRejectionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activationRejection"]>

  export type ActivationRejectionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    reason?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["activationRejection"]>

  export type ActivationRejectionSelectScalar = {
    id?: boolean
    userId?: boolean
    reason?: boolean
  }

  export type ActivationRejectionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "reason", ExtArgs["result"]["activationRejection"]>
  export type ActivationRejectionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivationRejectionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ActivationRejectionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ActivationRejectionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ActivationRejection"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      reason: string
    }, ExtArgs["result"]["activationRejection"]>
    composites: {}
  }

  type ActivationRejectionGetPayload<S extends boolean | null | undefined | ActivationRejectionDefaultArgs> = $Result.GetResult<Prisma.$ActivationRejectionPayload, S>

  type ActivationRejectionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ActivationRejectionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ActivationRejectionCountAggregateInputType | true
    }

  export interface ActivationRejectionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ActivationRejection'], meta: { name: 'ActivationRejection' } }
    /**
     * Find zero or one ActivationRejection that matches the filter.
     * @param {ActivationRejectionFindUniqueArgs} args - Arguments to find a ActivationRejection
     * @example
     * // Get one ActivationRejection
     * const activationRejection = await prisma.activationRejection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ActivationRejectionFindUniqueArgs>(args: SelectSubset<T, ActivationRejectionFindUniqueArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ActivationRejection that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ActivationRejectionFindUniqueOrThrowArgs} args - Arguments to find a ActivationRejection
     * @example
     * // Get one ActivationRejection
     * const activationRejection = await prisma.activationRejection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ActivationRejectionFindUniqueOrThrowArgs>(args: SelectSubset<T, ActivationRejectionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivationRejection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationRejectionFindFirstArgs} args - Arguments to find a ActivationRejection
     * @example
     * // Get one ActivationRejection
     * const activationRejection = await prisma.activationRejection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ActivationRejectionFindFirstArgs>(args?: SelectSubset<T, ActivationRejectionFindFirstArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ActivationRejection that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationRejectionFindFirstOrThrowArgs} args - Arguments to find a ActivationRejection
     * @example
     * // Get one ActivationRejection
     * const activationRejection = await prisma.activationRejection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ActivationRejectionFindFirstOrThrowArgs>(args?: SelectSubset<T, ActivationRejectionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ActivationRejections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationRejectionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ActivationRejections
     * const activationRejections = await prisma.activationRejection.findMany()
     * 
     * // Get first 10 ActivationRejections
     * const activationRejections = await prisma.activationRejection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const activationRejectionWithIdOnly = await prisma.activationRejection.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ActivationRejectionFindManyArgs>(args?: SelectSubset<T, ActivationRejectionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ActivationRejection.
     * @param {ActivationRejectionCreateArgs} args - Arguments to create a ActivationRejection.
     * @example
     * // Create one ActivationRejection
     * const ActivationRejection = await prisma.activationRejection.create({
     *   data: {
     *     // ... data to create a ActivationRejection
     *   }
     * })
     * 
     */
    create<T extends ActivationRejectionCreateArgs>(args: SelectSubset<T, ActivationRejectionCreateArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ActivationRejections.
     * @param {ActivationRejectionCreateManyArgs} args - Arguments to create many ActivationRejections.
     * @example
     * // Create many ActivationRejections
     * const activationRejection = await prisma.activationRejection.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ActivationRejectionCreateManyArgs>(args?: SelectSubset<T, ActivationRejectionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ActivationRejections and returns the data saved in the database.
     * @param {ActivationRejectionCreateManyAndReturnArgs} args - Arguments to create many ActivationRejections.
     * @example
     * // Create many ActivationRejections
     * const activationRejection = await prisma.activationRejection.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ActivationRejections and only return the `id`
     * const activationRejectionWithIdOnly = await prisma.activationRejection.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ActivationRejectionCreateManyAndReturnArgs>(args?: SelectSubset<T, ActivationRejectionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ActivationRejection.
     * @param {ActivationRejectionDeleteArgs} args - Arguments to delete one ActivationRejection.
     * @example
     * // Delete one ActivationRejection
     * const ActivationRejection = await prisma.activationRejection.delete({
     *   where: {
     *     // ... filter to delete one ActivationRejection
     *   }
     * })
     * 
     */
    delete<T extends ActivationRejectionDeleteArgs>(args: SelectSubset<T, ActivationRejectionDeleteArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ActivationRejection.
     * @param {ActivationRejectionUpdateArgs} args - Arguments to update one ActivationRejection.
     * @example
     * // Update one ActivationRejection
     * const activationRejection = await prisma.activationRejection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ActivationRejectionUpdateArgs>(args: SelectSubset<T, ActivationRejectionUpdateArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ActivationRejections.
     * @param {ActivationRejectionDeleteManyArgs} args - Arguments to filter ActivationRejections to delete.
     * @example
     * // Delete a few ActivationRejections
     * const { count } = await prisma.activationRejection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ActivationRejectionDeleteManyArgs>(args?: SelectSubset<T, ActivationRejectionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivationRejections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationRejectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ActivationRejections
     * const activationRejection = await prisma.activationRejection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ActivationRejectionUpdateManyArgs>(args: SelectSubset<T, ActivationRejectionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ActivationRejections and returns the data updated in the database.
     * @param {ActivationRejectionUpdateManyAndReturnArgs} args - Arguments to update many ActivationRejections.
     * @example
     * // Update many ActivationRejections
     * const activationRejection = await prisma.activationRejection.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ActivationRejections and only return the `id`
     * const activationRejectionWithIdOnly = await prisma.activationRejection.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ActivationRejectionUpdateManyAndReturnArgs>(args: SelectSubset<T, ActivationRejectionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ActivationRejection.
     * @param {ActivationRejectionUpsertArgs} args - Arguments to update or create a ActivationRejection.
     * @example
     * // Update or create a ActivationRejection
     * const activationRejection = await prisma.activationRejection.upsert({
     *   create: {
     *     // ... data to create a ActivationRejection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ActivationRejection we want to update
     *   }
     * })
     */
    upsert<T extends ActivationRejectionUpsertArgs>(args: SelectSubset<T, ActivationRejectionUpsertArgs<ExtArgs>>): Prisma__ActivationRejectionClient<$Result.GetResult<Prisma.$ActivationRejectionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ActivationRejections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationRejectionCountArgs} args - Arguments to filter ActivationRejections to count.
     * @example
     * // Count the number of ActivationRejections
     * const count = await prisma.activationRejection.count({
     *   where: {
     *     // ... the filter for the ActivationRejections we want to count
     *   }
     * })
    **/
    count<T extends ActivationRejectionCountArgs>(
      args?: Subset<T, ActivationRejectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActivationRejectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ActivationRejection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationRejectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActivationRejectionAggregateArgs>(args: Subset<T, ActivationRejectionAggregateArgs>): Prisma.PrismaPromise<GetActivationRejectionAggregateType<T>>

    /**
     * Group by ActivationRejection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActivationRejectionGroupByArgs} args - Group by arguments.
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
      T extends ActivationRejectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActivationRejectionGroupByArgs['orderBy'] }
        : { orderBy?: ActivationRejectionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActivationRejectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActivationRejectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ActivationRejection model
   */
  readonly fields: ActivationRejectionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ActivationRejection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActivationRejectionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ActivationRejection model
   */ 
  interface ActivationRejectionFieldRefs {
    readonly id: FieldRef<"ActivationRejection", 'Int'>
    readonly userId: FieldRef<"ActivationRejection", 'Int'>
    readonly reason: FieldRef<"ActivationRejection", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ActivationRejection findUnique
   */
  export type ActivationRejectionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * Filter, which ActivationRejection to fetch.
     */
    where: ActivationRejectionWhereUniqueInput
  }

  /**
   * ActivationRejection findUniqueOrThrow
   */
  export type ActivationRejectionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * Filter, which ActivationRejection to fetch.
     */
    where: ActivationRejectionWhereUniqueInput
  }

  /**
   * ActivationRejection findFirst
   */
  export type ActivationRejectionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * Filter, which ActivationRejection to fetch.
     */
    where?: ActivationRejectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationRejections to fetch.
     */
    orderBy?: ActivationRejectionOrderByWithRelationInput | ActivationRejectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivationRejections.
     */
    cursor?: ActivationRejectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationRejections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationRejections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivationRejections.
     */
    distinct?: ActivationRejectionScalarFieldEnum | ActivationRejectionScalarFieldEnum[]
  }

  /**
   * ActivationRejection findFirstOrThrow
   */
  export type ActivationRejectionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * Filter, which ActivationRejection to fetch.
     */
    where?: ActivationRejectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationRejections to fetch.
     */
    orderBy?: ActivationRejectionOrderByWithRelationInput | ActivationRejectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ActivationRejections.
     */
    cursor?: ActivationRejectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationRejections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationRejections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ActivationRejections.
     */
    distinct?: ActivationRejectionScalarFieldEnum | ActivationRejectionScalarFieldEnum[]
  }

  /**
   * ActivationRejection findMany
   */
  export type ActivationRejectionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * Filter, which ActivationRejections to fetch.
     */
    where?: ActivationRejectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ActivationRejections to fetch.
     */
    orderBy?: ActivationRejectionOrderByWithRelationInput | ActivationRejectionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ActivationRejections.
     */
    cursor?: ActivationRejectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ActivationRejections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ActivationRejections.
     */
    skip?: number
    distinct?: ActivationRejectionScalarFieldEnum | ActivationRejectionScalarFieldEnum[]
  }

  /**
   * ActivationRejection create
   */
  export type ActivationRejectionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * The data needed to create a ActivationRejection.
     */
    data: XOR<ActivationRejectionCreateInput, ActivationRejectionUncheckedCreateInput>
  }

  /**
   * ActivationRejection createMany
   */
  export type ActivationRejectionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ActivationRejections.
     */
    data: ActivationRejectionCreateManyInput | ActivationRejectionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ActivationRejection createManyAndReturn
   */
  export type ActivationRejectionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * The data used to create many ActivationRejections.
     */
    data: ActivationRejectionCreateManyInput | ActivationRejectionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivationRejection update
   */
  export type ActivationRejectionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * The data needed to update a ActivationRejection.
     */
    data: XOR<ActivationRejectionUpdateInput, ActivationRejectionUncheckedUpdateInput>
    /**
     * Choose, which ActivationRejection to update.
     */
    where: ActivationRejectionWhereUniqueInput
  }

  /**
   * ActivationRejection updateMany
   */
  export type ActivationRejectionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ActivationRejections.
     */
    data: XOR<ActivationRejectionUpdateManyMutationInput, ActivationRejectionUncheckedUpdateManyInput>
    /**
     * Filter which ActivationRejections to update
     */
    where?: ActivationRejectionWhereInput
    /**
     * Limit how many ActivationRejections to update.
     */
    limit?: number
  }

  /**
   * ActivationRejection updateManyAndReturn
   */
  export type ActivationRejectionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * The data used to update ActivationRejections.
     */
    data: XOR<ActivationRejectionUpdateManyMutationInput, ActivationRejectionUncheckedUpdateManyInput>
    /**
     * Filter which ActivationRejections to update
     */
    where?: ActivationRejectionWhereInput
    /**
     * Limit how many ActivationRejections to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ActivationRejection upsert
   */
  export type ActivationRejectionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * The filter to search for the ActivationRejection to update in case it exists.
     */
    where: ActivationRejectionWhereUniqueInput
    /**
     * In case the ActivationRejection found by the `where` argument doesn't exist, create a new ActivationRejection with this data.
     */
    create: XOR<ActivationRejectionCreateInput, ActivationRejectionUncheckedCreateInput>
    /**
     * In case the ActivationRejection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActivationRejectionUpdateInput, ActivationRejectionUncheckedUpdateInput>
  }

  /**
   * ActivationRejection delete
   */
  export type ActivationRejectionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
    /**
     * Filter which ActivationRejection to delete.
     */
    where: ActivationRejectionWhereUniqueInput
  }

  /**
   * ActivationRejection deleteMany
   */
  export type ActivationRejectionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ActivationRejections to delete
     */
    where?: ActivationRejectionWhereInput
    /**
     * Limit how many ActivationRejections to delete.
     */
    limit?: number
  }

  /**
   * ActivationRejection without action
   */
  export type ActivationRejectionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActivationRejection
     */
    select?: ActivationRejectionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ActivationRejection
     */
    omit?: ActivationRejectionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActivationRejectionInclude<ExtArgs> | null
  }


  /**
   * Model Paternoster
   */

  export type AggregatePaternoster = {
    _count: PaternosterCountAggregateOutputType | null
    _avg: PaternosterAvgAggregateOutputType | null
    _sum: PaternosterSumAggregateOutputType | null
    _min: PaternosterMinAggregateOutputType | null
    _max: PaternosterMaxAggregateOutputType | null
  }

  export type PaternosterAvgAggregateOutputType = {
    id: number | null
    MaxSize: number | null
    ShopId: number | null
  }

  export type PaternosterSumAggregateOutputType = {
    id: number | null
    MaxSize: number | null
    ShopId: number | null
  }

  export type PaternosterMinAggregateOutputType = {
    id: number | null
    Name: string | null
    MaxSize: number | null
    ShopId: number | null
  }

  export type PaternosterMaxAggregateOutputType = {
    id: number | null
    Name: string | null
    MaxSize: number | null
    ShopId: number | null
  }

  export type PaternosterCountAggregateOutputType = {
    id: number
    Name: number
    MaxSize: number
    ShopId: number
    _all: number
  }


  export type PaternosterAvgAggregateInputType = {
    id?: true
    MaxSize?: true
    ShopId?: true
  }

  export type PaternosterSumAggregateInputType = {
    id?: true
    MaxSize?: true
    ShopId?: true
  }

  export type PaternosterMinAggregateInputType = {
    id?: true
    Name?: true
    MaxSize?: true
    ShopId?: true
  }

  export type PaternosterMaxAggregateInputType = {
    id?: true
    Name?: true
    MaxSize?: true
    ShopId?: true
  }

  export type PaternosterCountAggregateInputType = {
    id?: true
    Name?: true
    MaxSize?: true
    ShopId?: true
    _all?: true
  }

  export type PaternosterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paternoster to aggregate.
     */
    where?: PaternosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paternosters to fetch.
     */
    orderBy?: PaternosterOrderByWithRelationInput | PaternosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaternosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paternosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paternosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Paternosters
    **/
    _count?: true | PaternosterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaternosterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaternosterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaternosterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaternosterMaxAggregateInputType
  }

  export type GetPaternosterAggregateType<T extends PaternosterAggregateArgs> = {
        [P in keyof T & keyof AggregatePaternoster]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaternoster[P]>
      : GetScalarType<T[P], AggregatePaternoster[P]>
  }




  export type PaternosterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaternosterWhereInput
    orderBy?: PaternosterOrderByWithAggregationInput | PaternosterOrderByWithAggregationInput[]
    by: PaternosterScalarFieldEnum[] | PaternosterScalarFieldEnum
    having?: PaternosterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaternosterCountAggregateInputType | true
    _avg?: PaternosterAvgAggregateInputType
    _sum?: PaternosterSumAggregateInputType
    _min?: PaternosterMinAggregateInputType
    _max?: PaternosterMaxAggregateInputType
  }

  export type PaternosterGroupByOutputType = {
    id: number
    Name: string
    MaxSize: number
    ShopId: number
    _count: PaternosterCountAggregateOutputType | null
    _avg: PaternosterAvgAggregateOutputType | null
    _sum: PaternosterSumAggregateOutputType | null
    _min: PaternosterMinAggregateOutputType | null
    _max: PaternosterMaxAggregateOutputType | null
  }

  type GetPaternosterGroupByPayload<T extends PaternosterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaternosterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaternosterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaternosterGroupByOutputType[P]>
            : GetScalarType<T[P], PaternosterGroupByOutputType[P]>
        }
      >
    >


  export type PaternosterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    MaxSize?: boolean
    ShopId?: boolean
    Axises?: boolean | Paternoster$AxisesArgs<ExtArgs>
    _count?: boolean | PaternosterCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paternoster"]>

  export type PaternosterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    MaxSize?: boolean
    ShopId?: boolean
  }, ExtArgs["result"]["paternoster"]>

  export type PaternosterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Name?: boolean
    MaxSize?: boolean
    ShopId?: boolean
  }, ExtArgs["result"]["paternoster"]>

  export type PaternosterSelectScalar = {
    id?: boolean
    Name?: boolean
    MaxSize?: boolean
    ShopId?: boolean
  }

  export type PaternosterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "Name" | "MaxSize" | "ShopId", ExtArgs["result"]["paternoster"]>
  export type PaternosterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Axises?: boolean | Paternoster$AxisesArgs<ExtArgs>
    _count?: boolean | PaternosterCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaternosterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PaternosterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PaternosterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Paternoster"
    objects: {
      Axises: Prisma.$PaternosterAxisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      Name: string
      MaxSize: number
      ShopId: number
    }, ExtArgs["result"]["paternoster"]>
    composites: {}
  }

  type PaternosterGetPayload<S extends boolean | null | undefined | PaternosterDefaultArgs> = $Result.GetResult<Prisma.$PaternosterPayload, S>

  type PaternosterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaternosterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaternosterCountAggregateInputType | true
    }

  export interface PaternosterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Paternoster'], meta: { name: 'Paternoster' } }
    /**
     * Find zero or one Paternoster that matches the filter.
     * @param {PaternosterFindUniqueArgs} args - Arguments to find a Paternoster
     * @example
     * // Get one Paternoster
     * const paternoster = await prisma.paternoster.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaternosterFindUniqueArgs>(args: SelectSubset<T, PaternosterFindUniqueArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Paternoster that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaternosterFindUniqueOrThrowArgs} args - Arguments to find a Paternoster
     * @example
     * // Get one Paternoster
     * const paternoster = await prisma.paternoster.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaternosterFindUniqueOrThrowArgs>(args: SelectSubset<T, PaternosterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paternoster that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterFindFirstArgs} args - Arguments to find a Paternoster
     * @example
     * // Get one Paternoster
     * const paternoster = await prisma.paternoster.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaternosterFindFirstArgs>(args?: SelectSubset<T, PaternosterFindFirstArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Paternoster that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterFindFirstOrThrowArgs} args - Arguments to find a Paternoster
     * @example
     * // Get one Paternoster
     * const paternoster = await prisma.paternoster.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaternosterFindFirstOrThrowArgs>(args?: SelectSubset<T, PaternosterFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Paternosters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Paternosters
     * const paternosters = await prisma.paternoster.findMany()
     * 
     * // Get first 10 Paternosters
     * const paternosters = await prisma.paternoster.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paternosterWithIdOnly = await prisma.paternoster.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaternosterFindManyArgs>(args?: SelectSubset<T, PaternosterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Paternoster.
     * @param {PaternosterCreateArgs} args - Arguments to create a Paternoster.
     * @example
     * // Create one Paternoster
     * const Paternoster = await prisma.paternoster.create({
     *   data: {
     *     // ... data to create a Paternoster
     *   }
     * })
     * 
     */
    create<T extends PaternosterCreateArgs>(args: SelectSubset<T, PaternosterCreateArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Paternosters.
     * @param {PaternosterCreateManyArgs} args - Arguments to create many Paternosters.
     * @example
     * // Create many Paternosters
     * const paternoster = await prisma.paternoster.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaternosterCreateManyArgs>(args?: SelectSubset<T, PaternosterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Paternosters and returns the data saved in the database.
     * @param {PaternosterCreateManyAndReturnArgs} args - Arguments to create many Paternosters.
     * @example
     * // Create many Paternosters
     * const paternoster = await prisma.paternoster.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Paternosters and only return the `id`
     * const paternosterWithIdOnly = await prisma.paternoster.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaternosterCreateManyAndReturnArgs>(args?: SelectSubset<T, PaternosterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Paternoster.
     * @param {PaternosterDeleteArgs} args - Arguments to delete one Paternoster.
     * @example
     * // Delete one Paternoster
     * const Paternoster = await prisma.paternoster.delete({
     *   where: {
     *     // ... filter to delete one Paternoster
     *   }
     * })
     * 
     */
    delete<T extends PaternosterDeleteArgs>(args: SelectSubset<T, PaternosterDeleteArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Paternoster.
     * @param {PaternosterUpdateArgs} args - Arguments to update one Paternoster.
     * @example
     * // Update one Paternoster
     * const paternoster = await prisma.paternoster.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaternosterUpdateArgs>(args: SelectSubset<T, PaternosterUpdateArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Paternosters.
     * @param {PaternosterDeleteManyArgs} args - Arguments to filter Paternosters to delete.
     * @example
     * // Delete a few Paternosters
     * const { count } = await prisma.paternoster.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaternosterDeleteManyArgs>(args?: SelectSubset<T, PaternosterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paternosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Paternosters
     * const paternoster = await prisma.paternoster.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaternosterUpdateManyArgs>(args: SelectSubset<T, PaternosterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Paternosters and returns the data updated in the database.
     * @param {PaternosterUpdateManyAndReturnArgs} args - Arguments to update many Paternosters.
     * @example
     * // Update many Paternosters
     * const paternoster = await prisma.paternoster.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Paternosters and only return the `id`
     * const paternosterWithIdOnly = await prisma.paternoster.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaternosterUpdateManyAndReturnArgs>(args: SelectSubset<T, PaternosterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Paternoster.
     * @param {PaternosterUpsertArgs} args - Arguments to update or create a Paternoster.
     * @example
     * // Update or create a Paternoster
     * const paternoster = await prisma.paternoster.upsert({
     *   create: {
     *     // ... data to create a Paternoster
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Paternoster we want to update
     *   }
     * })
     */
    upsert<T extends PaternosterUpsertArgs>(args: SelectSubset<T, PaternosterUpsertArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Paternosters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterCountArgs} args - Arguments to filter Paternosters to count.
     * @example
     * // Count the number of Paternosters
     * const count = await prisma.paternoster.count({
     *   where: {
     *     // ... the filter for the Paternosters we want to count
     *   }
     * })
    **/
    count<T extends PaternosterCountArgs>(
      args?: Subset<T, PaternosterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaternosterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Paternoster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaternosterAggregateArgs>(args: Subset<T, PaternosterAggregateArgs>): Prisma.PrismaPromise<GetPaternosterAggregateType<T>>

    /**
     * Group by Paternoster.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterGroupByArgs} args - Group by arguments.
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
      T extends PaternosterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaternosterGroupByArgs['orderBy'] }
        : { orderBy?: PaternosterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaternosterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaternosterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Paternoster model
   */
  readonly fields: PaternosterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Paternoster.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaternosterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Axises<T extends Paternoster$AxisesArgs<ExtArgs> = {}>(args?: Subset<T, Paternoster$AxisesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Paternoster model
   */ 
  interface PaternosterFieldRefs {
    readonly id: FieldRef<"Paternoster", 'Int'>
    readonly Name: FieldRef<"Paternoster", 'String'>
    readonly MaxSize: FieldRef<"Paternoster", 'Float'>
    readonly ShopId: FieldRef<"Paternoster", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Paternoster findUnique
   */
  export type PaternosterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * Filter, which Paternoster to fetch.
     */
    where: PaternosterWhereUniqueInput
  }

  /**
   * Paternoster findUniqueOrThrow
   */
  export type PaternosterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * Filter, which Paternoster to fetch.
     */
    where: PaternosterWhereUniqueInput
  }

  /**
   * Paternoster findFirst
   */
  export type PaternosterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * Filter, which Paternoster to fetch.
     */
    where?: PaternosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paternosters to fetch.
     */
    orderBy?: PaternosterOrderByWithRelationInput | PaternosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paternosters.
     */
    cursor?: PaternosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paternosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paternosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paternosters.
     */
    distinct?: PaternosterScalarFieldEnum | PaternosterScalarFieldEnum[]
  }

  /**
   * Paternoster findFirstOrThrow
   */
  export type PaternosterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * Filter, which Paternoster to fetch.
     */
    where?: PaternosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paternosters to fetch.
     */
    orderBy?: PaternosterOrderByWithRelationInput | PaternosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Paternosters.
     */
    cursor?: PaternosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paternosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paternosters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Paternosters.
     */
    distinct?: PaternosterScalarFieldEnum | PaternosterScalarFieldEnum[]
  }

  /**
   * Paternoster findMany
   */
  export type PaternosterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * Filter, which Paternosters to fetch.
     */
    where?: PaternosterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Paternosters to fetch.
     */
    orderBy?: PaternosterOrderByWithRelationInput | PaternosterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Paternosters.
     */
    cursor?: PaternosterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Paternosters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Paternosters.
     */
    skip?: number
    distinct?: PaternosterScalarFieldEnum | PaternosterScalarFieldEnum[]
  }

  /**
   * Paternoster create
   */
  export type PaternosterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * The data needed to create a Paternoster.
     */
    data: XOR<PaternosterCreateInput, PaternosterUncheckedCreateInput>
  }

  /**
   * Paternoster createMany
   */
  export type PaternosterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Paternosters.
     */
    data: PaternosterCreateManyInput | PaternosterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paternoster createManyAndReturn
   */
  export type PaternosterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * The data used to create many Paternosters.
     */
    data: PaternosterCreateManyInput | PaternosterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Paternoster update
   */
  export type PaternosterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * The data needed to update a Paternoster.
     */
    data: XOR<PaternosterUpdateInput, PaternosterUncheckedUpdateInput>
    /**
     * Choose, which Paternoster to update.
     */
    where: PaternosterWhereUniqueInput
  }

  /**
   * Paternoster updateMany
   */
  export type PaternosterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Paternosters.
     */
    data: XOR<PaternosterUpdateManyMutationInput, PaternosterUncheckedUpdateManyInput>
    /**
     * Filter which Paternosters to update
     */
    where?: PaternosterWhereInput
    /**
     * Limit how many Paternosters to update.
     */
    limit?: number
  }

  /**
   * Paternoster updateManyAndReturn
   */
  export type PaternosterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * The data used to update Paternosters.
     */
    data: XOR<PaternosterUpdateManyMutationInput, PaternosterUncheckedUpdateManyInput>
    /**
     * Filter which Paternosters to update
     */
    where?: PaternosterWhereInput
    /**
     * Limit how many Paternosters to update.
     */
    limit?: number
  }

  /**
   * Paternoster upsert
   */
  export type PaternosterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * The filter to search for the Paternoster to update in case it exists.
     */
    where: PaternosterWhereUniqueInput
    /**
     * In case the Paternoster found by the `where` argument doesn't exist, create a new Paternoster with this data.
     */
    create: XOR<PaternosterCreateInput, PaternosterUncheckedCreateInput>
    /**
     * In case the Paternoster was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaternosterUpdateInput, PaternosterUncheckedUpdateInput>
  }

  /**
   * Paternoster delete
   */
  export type PaternosterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
    /**
     * Filter which Paternoster to delete.
     */
    where: PaternosterWhereUniqueInput
  }

  /**
   * Paternoster deleteMany
   */
  export type PaternosterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Paternosters to delete
     */
    where?: PaternosterWhereInput
    /**
     * Limit how many Paternosters to delete.
     */
    limit?: number
  }

  /**
   * Paternoster.Axises
   */
  export type Paternoster$AxisesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    where?: PaternosterAxisWhereInput
    orderBy?: PaternosterAxisOrderByWithRelationInput | PaternosterAxisOrderByWithRelationInput[]
    cursor?: PaternosterAxisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaternosterAxisScalarFieldEnum | PaternosterAxisScalarFieldEnum[]
  }

  /**
   * Paternoster without action
   */
  export type PaternosterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Paternoster
     */
    select?: PaternosterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Paternoster
     */
    omit?: PaternosterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterInclude<ExtArgs> | null
  }


  /**
   * Model PaternosterAxis
   */

  export type AggregatePaternosterAxis = {
    _count: PaternosterAxisCountAggregateOutputType | null
    _avg: PaternosterAxisAvgAggregateOutputType | null
    _sum: PaternosterAxisSumAggregateOutputType | null
    _min: PaternosterAxisMinAggregateOutputType | null
    _max: PaternosterAxisMaxAggregateOutputType | null
  }

  export type PaternosterAxisAvgAggregateOutputType = {
    id: number | null
    PaternosterId: number | null
  }

  export type PaternosterAxisSumAggregateOutputType = {
    id: number | null
    PaternosterId: number | null
  }

  export type PaternosterAxisMinAggregateOutputType = {
    id: number | null
    PaternosterId: number | null
  }

  export type PaternosterAxisMaxAggregateOutputType = {
    id: number | null
    PaternosterId: number | null
  }

  export type PaternosterAxisCountAggregateOutputType = {
    id: number
    PaternosterId: number
    _all: number
  }


  export type PaternosterAxisAvgAggregateInputType = {
    id?: true
    PaternosterId?: true
  }

  export type PaternosterAxisSumAggregateInputType = {
    id?: true
    PaternosterId?: true
  }

  export type PaternosterAxisMinAggregateInputType = {
    id?: true
    PaternosterId?: true
  }

  export type PaternosterAxisMaxAggregateInputType = {
    id?: true
    PaternosterId?: true
  }

  export type PaternosterAxisCountAggregateInputType = {
    id?: true
    PaternosterId?: true
    _all?: true
  }

  export type PaternosterAxisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaternosterAxis to aggregate.
     */
    where?: PaternosterAxisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaternosterAxes to fetch.
     */
    orderBy?: PaternosterAxisOrderByWithRelationInput | PaternosterAxisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaternosterAxisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaternosterAxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaternosterAxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaternosterAxes
    **/
    _count?: true | PaternosterAxisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaternosterAxisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaternosterAxisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaternosterAxisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaternosterAxisMaxAggregateInputType
  }

  export type GetPaternosterAxisAggregateType<T extends PaternosterAxisAggregateArgs> = {
        [P in keyof T & keyof AggregatePaternosterAxis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaternosterAxis[P]>
      : GetScalarType<T[P], AggregatePaternosterAxis[P]>
  }




  export type PaternosterAxisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaternosterAxisWhereInput
    orderBy?: PaternosterAxisOrderByWithAggregationInput | PaternosterAxisOrderByWithAggregationInput[]
    by: PaternosterAxisScalarFieldEnum[] | PaternosterAxisScalarFieldEnum
    having?: PaternosterAxisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaternosterAxisCountAggregateInputType | true
    _avg?: PaternosterAxisAvgAggregateInputType
    _sum?: PaternosterAxisSumAggregateInputType
    _min?: PaternosterAxisMinAggregateInputType
    _max?: PaternosterAxisMaxAggregateInputType
  }

  export type PaternosterAxisGroupByOutputType = {
    id: number
    PaternosterId: number
    _count: PaternosterAxisCountAggregateOutputType | null
    _avg: PaternosterAxisAvgAggregateOutputType | null
    _sum: PaternosterAxisSumAggregateOutputType | null
    _min: PaternosterAxisMinAggregateOutputType | null
    _max: PaternosterAxisMaxAggregateOutputType | null
  }

  type GetPaternosterAxisGroupByPayload<T extends PaternosterAxisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaternosterAxisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaternosterAxisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaternosterAxisGroupByOutputType[P]>
            : GetScalarType<T[P], PaternosterAxisGroupByOutputType[P]>
        }
      >
    >


  export type PaternosterAxisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    PaternosterId?: boolean
    Paternoster?: boolean | PaternosterDefaultArgs<ExtArgs>
    Placements?: boolean | PaternosterAxis$PlacementsArgs<ExtArgs>
    _count?: boolean | PaternosterAxisCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paternosterAxis"]>

  export type PaternosterAxisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    PaternosterId?: boolean
    Paternoster?: boolean | PaternosterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paternosterAxis"]>

  export type PaternosterAxisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    PaternosterId?: boolean
    Paternoster?: boolean | PaternosterDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["paternosterAxis"]>

  export type PaternosterAxisSelectScalar = {
    id?: boolean
    PaternosterId?: boolean
  }

  export type PaternosterAxisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "PaternosterId", ExtArgs["result"]["paternosterAxis"]>
  export type PaternosterAxisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Paternoster?: boolean | PaternosterDefaultArgs<ExtArgs>
    Placements?: boolean | PaternosterAxis$PlacementsArgs<ExtArgs>
    _count?: boolean | PaternosterAxisCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PaternosterAxisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Paternoster?: boolean | PaternosterDefaultArgs<ExtArgs>
  }
  export type PaternosterAxisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Paternoster?: boolean | PaternosterDefaultArgs<ExtArgs>
  }

  export type $PaternosterAxisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaternosterAxis"
    objects: {
      Paternoster: Prisma.$PaternosterPayload<ExtArgs>
      Placements: Prisma.$RollPlacementPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      PaternosterId: number
    }, ExtArgs["result"]["paternosterAxis"]>
    composites: {}
  }

  type PaternosterAxisGetPayload<S extends boolean | null | undefined | PaternosterAxisDefaultArgs> = $Result.GetResult<Prisma.$PaternosterAxisPayload, S>

  type PaternosterAxisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaternosterAxisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaternosterAxisCountAggregateInputType | true
    }

  export interface PaternosterAxisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaternosterAxis'], meta: { name: 'PaternosterAxis' } }
    /**
     * Find zero or one PaternosterAxis that matches the filter.
     * @param {PaternosterAxisFindUniqueArgs} args - Arguments to find a PaternosterAxis
     * @example
     * // Get one PaternosterAxis
     * const paternosterAxis = await prisma.paternosterAxis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaternosterAxisFindUniqueArgs>(args: SelectSubset<T, PaternosterAxisFindUniqueArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PaternosterAxis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaternosterAxisFindUniqueOrThrowArgs} args - Arguments to find a PaternosterAxis
     * @example
     * // Get one PaternosterAxis
     * const paternosterAxis = await prisma.paternosterAxis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaternosterAxisFindUniqueOrThrowArgs>(args: SelectSubset<T, PaternosterAxisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaternosterAxis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAxisFindFirstArgs} args - Arguments to find a PaternosterAxis
     * @example
     * // Get one PaternosterAxis
     * const paternosterAxis = await prisma.paternosterAxis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaternosterAxisFindFirstArgs>(args?: SelectSubset<T, PaternosterAxisFindFirstArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PaternosterAxis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAxisFindFirstOrThrowArgs} args - Arguments to find a PaternosterAxis
     * @example
     * // Get one PaternosterAxis
     * const paternosterAxis = await prisma.paternosterAxis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaternosterAxisFindFirstOrThrowArgs>(args?: SelectSubset<T, PaternosterAxisFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PaternosterAxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAxisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaternosterAxes
     * const paternosterAxes = await prisma.paternosterAxis.findMany()
     * 
     * // Get first 10 PaternosterAxes
     * const paternosterAxes = await prisma.paternosterAxis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paternosterAxisWithIdOnly = await prisma.paternosterAxis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaternosterAxisFindManyArgs>(args?: SelectSubset<T, PaternosterAxisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PaternosterAxis.
     * @param {PaternosterAxisCreateArgs} args - Arguments to create a PaternosterAxis.
     * @example
     * // Create one PaternosterAxis
     * const PaternosterAxis = await prisma.paternosterAxis.create({
     *   data: {
     *     // ... data to create a PaternosterAxis
     *   }
     * })
     * 
     */
    create<T extends PaternosterAxisCreateArgs>(args: SelectSubset<T, PaternosterAxisCreateArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PaternosterAxes.
     * @param {PaternosterAxisCreateManyArgs} args - Arguments to create many PaternosterAxes.
     * @example
     * // Create many PaternosterAxes
     * const paternosterAxis = await prisma.paternosterAxis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaternosterAxisCreateManyArgs>(args?: SelectSubset<T, PaternosterAxisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaternosterAxes and returns the data saved in the database.
     * @param {PaternosterAxisCreateManyAndReturnArgs} args - Arguments to create many PaternosterAxes.
     * @example
     * // Create many PaternosterAxes
     * const paternosterAxis = await prisma.paternosterAxis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaternosterAxes and only return the `id`
     * const paternosterAxisWithIdOnly = await prisma.paternosterAxis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaternosterAxisCreateManyAndReturnArgs>(args?: SelectSubset<T, PaternosterAxisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PaternosterAxis.
     * @param {PaternosterAxisDeleteArgs} args - Arguments to delete one PaternosterAxis.
     * @example
     * // Delete one PaternosterAxis
     * const PaternosterAxis = await prisma.paternosterAxis.delete({
     *   where: {
     *     // ... filter to delete one PaternosterAxis
     *   }
     * })
     * 
     */
    delete<T extends PaternosterAxisDeleteArgs>(args: SelectSubset<T, PaternosterAxisDeleteArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PaternosterAxis.
     * @param {PaternosterAxisUpdateArgs} args - Arguments to update one PaternosterAxis.
     * @example
     * // Update one PaternosterAxis
     * const paternosterAxis = await prisma.paternosterAxis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaternosterAxisUpdateArgs>(args: SelectSubset<T, PaternosterAxisUpdateArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PaternosterAxes.
     * @param {PaternosterAxisDeleteManyArgs} args - Arguments to filter PaternosterAxes to delete.
     * @example
     * // Delete a few PaternosterAxes
     * const { count } = await prisma.paternosterAxis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaternosterAxisDeleteManyArgs>(args?: SelectSubset<T, PaternosterAxisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaternosterAxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAxisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaternosterAxes
     * const paternosterAxis = await prisma.paternosterAxis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaternosterAxisUpdateManyArgs>(args: SelectSubset<T, PaternosterAxisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaternosterAxes and returns the data updated in the database.
     * @param {PaternosterAxisUpdateManyAndReturnArgs} args - Arguments to update many PaternosterAxes.
     * @example
     * // Update many PaternosterAxes
     * const paternosterAxis = await prisma.paternosterAxis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PaternosterAxes and only return the `id`
     * const paternosterAxisWithIdOnly = await prisma.paternosterAxis.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaternosterAxisUpdateManyAndReturnArgs>(args: SelectSubset<T, PaternosterAxisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PaternosterAxis.
     * @param {PaternosterAxisUpsertArgs} args - Arguments to update or create a PaternosterAxis.
     * @example
     * // Update or create a PaternosterAxis
     * const paternosterAxis = await prisma.paternosterAxis.upsert({
     *   create: {
     *     // ... data to create a PaternosterAxis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaternosterAxis we want to update
     *   }
     * })
     */
    upsert<T extends PaternosterAxisUpsertArgs>(args: SelectSubset<T, PaternosterAxisUpsertArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PaternosterAxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAxisCountArgs} args - Arguments to filter PaternosterAxes to count.
     * @example
     * // Count the number of PaternosterAxes
     * const count = await prisma.paternosterAxis.count({
     *   where: {
     *     // ... the filter for the PaternosterAxes we want to count
     *   }
     * })
    **/
    count<T extends PaternosterAxisCountArgs>(
      args?: Subset<T, PaternosterAxisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaternosterAxisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaternosterAxis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAxisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaternosterAxisAggregateArgs>(args: Subset<T, PaternosterAxisAggregateArgs>): Prisma.PrismaPromise<GetPaternosterAxisAggregateType<T>>

    /**
     * Group by PaternosterAxis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaternosterAxisGroupByArgs} args - Group by arguments.
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
      T extends PaternosterAxisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaternosterAxisGroupByArgs['orderBy'] }
        : { orderBy?: PaternosterAxisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaternosterAxisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaternosterAxisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaternosterAxis model
   */
  readonly fields: PaternosterAxisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaternosterAxis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaternosterAxisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Paternoster<T extends PaternosterDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaternosterDefaultArgs<ExtArgs>>): Prisma__PaternosterClient<$Result.GetResult<Prisma.$PaternosterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Placements<T extends PaternosterAxis$PlacementsArgs<ExtArgs> = {}>(args?: Subset<T, PaternosterAxis$PlacementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaternosterAxis model
   */ 
  interface PaternosterAxisFieldRefs {
    readonly id: FieldRef<"PaternosterAxis", 'Int'>
    readonly PaternosterId: FieldRef<"PaternosterAxis", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * PaternosterAxis findUnique
   */
  export type PaternosterAxisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * Filter, which PaternosterAxis to fetch.
     */
    where: PaternosterAxisWhereUniqueInput
  }

  /**
   * PaternosterAxis findUniqueOrThrow
   */
  export type PaternosterAxisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * Filter, which PaternosterAxis to fetch.
     */
    where: PaternosterAxisWhereUniqueInput
  }

  /**
   * PaternosterAxis findFirst
   */
  export type PaternosterAxisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * Filter, which PaternosterAxis to fetch.
     */
    where?: PaternosterAxisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaternosterAxes to fetch.
     */
    orderBy?: PaternosterAxisOrderByWithRelationInput | PaternosterAxisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaternosterAxes.
     */
    cursor?: PaternosterAxisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaternosterAxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaternosterAxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaternosterAxes.
     */
    distinct?: PaternosterAxisScalarFieldEnum | PaternosterAxisScalarFieldEnum[]
  }

  /**
   * PaternosterAxis findFirstOrThrow
   */
  export type PaternosterAxisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * Filter, which PaternosterAxis to fetch.
     */
    where?: PaternosterAxisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaternosterAxes to fetch.
     */
    orderBy?: PaternosterAxisOrderByWithRelationInput | PaternosterAxisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaternosterAxes.
     */
    cursor?: PaternosterAxisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaternosterAxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaternosterAxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaternosterAxes.
     */
    distinct?: PaternosterAxisScalarFieldEnum | PaternosterAxisScalarFieldEnum[]
  }

  /**
   * PaternosterAxis findMany
   */
  export type PaternosterAxisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * Filter, which PaternosterAxes to fetch.
     */
    where?: PaternosterAxisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaternosterAxes to fetch.
     */
    orderBy?: PaternosterAxisOrderByWithRelationInput | PaternosterAxisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaternosterAxes.
     */
    cursor?: PaternosterAxisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaternosterAxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaternosterAxes.
     */
    skip?: number
    distinct?: PaternosterAxisScalarFieldEnum | PaternosterAxisScalarFieldEnum[]
  }

  /**
   * PaternosterAxis create
   */
  export type PaternosterAxisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * The data needed to create a PaternosterAxis.
     */
    data: XOR<PaternosterAxisCreateInput, PaternosterAxisUncheckedCreateInput>
  }

  /**
   * PaternosterAxis createMany
   */
  export type PaternosterAxisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaternosterAxes.
     */
    data: PaternosterAxisCreateManyInput | PaternosterAxisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaternosterAxis createManyAndReturn
   */
  export type PaternosterAxisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * The data used to create many PaternosterAxes.
     */
    data: PaternosterAxisCreateManyInput | PaternosterAxisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaternosterAxis update
   */
  export type PaternosterAxisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * The data needed to update a PaternosterAxis.
     */
    data: XOR<PaternosterAxisUpdateInput, PaternosterAxisUncheckedUpdateInput>
    /**
     * Choose, which PaternosterAxis to update.
     */
    where: PaternosterAxisWhereUniqueInput
  }

  /**
   * PaternosterAxis updateMany
   */
  export type PaternosterAxisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaternosterAxes.
     */
    data: XOR<PaternosterAxisUpdateManyMutationInput, PaternosterAxisUncheckedUpdateManyInput>
    /**
     * Filter which PaternosterAxes to update
     */
    where?: PaternosterAxisWhereInput
    /**
     * Limit how many PaternosterAxes to update.
     */
    limit?: number
  }

  /**
   * PaternosterAxis updateManyAndReturn
   */
  export type PaternosterAxisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * The data used to update PaternosterAxes.
     */
    data: XOR<PaternosterAxisUpdateManyMutationInput, PaternosterAxisUncheckedUpdateManyInput>
    /**
     * Filter which PaternosterAxes to update
     */
    where?: PaternosterAxisWhereInput
    /**
     * Limit how many PaternosterAxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PaternosterAxis upsert
   */
  export type PaternosterAxisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * The filter to search for the PaternosterAxis to update in case it exists.
     */
    where: PaternosterAxisWhereUniqueInput
    /**
     * In case the PaternosterAxis found by the `where` argument doesn't exist, create a new PaternosterAxis with this data.
     */
    create: XOR<PaternosterAxisCreateInput, PaternosterAxisUncheckedCreateInput>
    /**
     * In case the PaternosterAxis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaternosterAxisUpdateInput, PaternosterAxisUncheckedUpdateInput>
  }

  /**
   * PaternosterAxis delete
   */
  export type PaternosterAxisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
    /**
     * Filter which PaternosterAxis to delete.
     */
    where: PaternosterAxisWhereUniqueInput
  }

  /**
   * PaternosterAxis deleteMany
   */
  export type PaternosterAxisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaternosterAxes to delete
     */
    where?: PaternosterAxisWhereInput
    /**
     * Limit how many PaternosterAxes to delete.
     */
    limit?: number
  }

  /**
   * PaternosterAxis.Placements
   */
  export type PaternosterAxis$PlacementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    where?: RollPlacementWhereInput
    orderBy?: RollPlacementOrderByWithRelationInput | RollPlacementOrderByWithRelationInput[]
    cursor?: RollPlacementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RollPlacementScalarFieldEnum | RollPlacementScalarFieldEnum[]
  }

  /**
   * PaternosterAxis without action
   */
  export type PaternosterAxisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaternosterAxis
     */
    select?: PaternosterAxisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PaternosterAxis
     */
    omit?: PaternosterAxisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaternosterAxisInclude<ExtArgs> | null
  }


  /**
   * Model RollPlacement
   */

  export type AggregateRollPlacement = {
    _count: RollPlacementCountAggregateOutputType | null
    _avg: RollPlacementAvgAggregateOutputType | null
    _sum: RollPlacementSumAggregateOutputType | null
    _min: RollPlacementMinAggregateOutputType | null
    _max: RollPlacementMaxAggregateOutputType | null
  }

  export type RollPlacementAvgAggregateOutputType = {
    id: number | null
    AxisId: number | null
  }

  export type RollPlacementSumAggregateOutputType = {
    id: number | null
    AxisId: number | null
  }

  export type RollPlacementMinAggregateOutputType = {
    id: number | null
    AxisId: number | null
    Itemcode: string | null
  }

  export type RollPlacementMaxAggregateOutputType = {
    id: number | null
    AxisId: number | null
    Itemcode: string | null
  }

  export type RollPlacementCountAggregateOutputType = {
    id: number
    AxisId: number
    Itemcode: number
    _all: number
  }


  export type RollPlacementAvgAggregateInputType = {
    id?: true
    AxisId?: true
  }

  export type RollPlacementSumAggregateInputType = {
    id?: true
    AxisId?: true
  }

  export type RollPlacementMinAggregateInputType = {
    id?: true
    AxisId?: true
    Itemcode?: true
  }

  export type RollPlacementMaxAggregateInputType = {
    id?: true
    AxisId?: true
    Itemcode?: true
  }

  export type RollPlacementCountAggregateInputType = {
    id?: true
    AxisId?: true
    Itemcode?: true
    _all?: true
  }

  export type RollPlacementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RollPlacement to aggregate.
     */
    where?: RollPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RollPlacements to fetch.
     */
    orderBy?: RollPlacementOrderByWithRelationInput | RollPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RollPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RollPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RollPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RollPlacements
    **/
    _count?: true | RollPlacementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RollPlacementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RollPlacementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RollPlacementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RollPlacementMaxAggregateInputType
  }

  export type GetRollPlacementAggregateType<T extends RollPlacementAggregateArgs> = {
        [P in keyof T & keyof AggregateRollPlacement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRollPlacement[P]>
      : GetScalarType<T[P], AggregateRollPlacement[P]>
  }




  export type RollPlacementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RollPlacementWhereInput
    orderBy?: RollPlacementOrderByWithAggregationInput | RollPlacementOrderByWithAggregationInput[]
    by: RollPlacementScalarFieldEnum[] | RollPlacementScalarFieldEnum
    having?: RollPlacementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RollPlacementCountAggregateInputType | true
    _avg?: RollPlacementAvgAggregateInputType
    _sum?: RollPlacementSumAggregateInputType
    _min?: RollPlacementMinAggregateInputType
    _max?: RollPlacementMaxAggregateInputType
  }

  export type RollPlacementGroupByOutputType = {
    id: number
    AxisId: number
    Itemcode: string
    _count: RollPlacementCountAggregateOutputType | null
    _avg: RollPlacementAvgAggregateOutputType | null
    _sum: RollPlacementSumAggregateOutputType | null
    _min: RollPlacementMinAggregateOutputType | null
    _max: RollPlacementMaxAggregateOutputType | null
  }

  type GetRollPlacementGroupByPayload<T extends RollPlacementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RollPlacementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RollPlacementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RollPlacementGroupByOutputType[P]>
            : GetScalarType<T[P], RollPlacementGroupByOutputType[P]>
        }
      >
    >


  export type RollPlacementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    AxisId?: boolean
    Itemcode?: boolean
    PaternosterAxis?: boolean | PaternosterAxisDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rollPlacement"]>

  export type RollPlacementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    AxisId?: boolean
    Itemcode?: boolean
    PaternosterAxis?: boolean | PaternosterAxisDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rollPlacement"]>

  export type RollPlacementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    AxisId?: boolean
    Itemcode?: boolean
    PaternosterAxis?: boolean | PaternosterAxisDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rollPlacement"]>

  export type RollPlacementSelectScalar = {
    id?: boolean
    AxisId?: boolean
    Itemcode?: boolean
  }

  export type RollPlacementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "AxisId" | "Itemcode", ExtArgs["result"]["rollPlacement"]>
  export type RollPlacementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaternosterAxis?: boolean | PaternosterAxisDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type RollPlacementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaternosterAxis?: boolean | PaternosterAxisDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type RollPlacementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PaternosterAxis?: boolean | PaternosterAxisDefaultArgs<ExtArgs>
    Item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $RollPlacementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RollPlacement"
    objects: {
      PaternosterAxis: Prisma.$PaternosterAxisPayload<ExtArgs>
      Item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      AxisId: number
      Itemcode: string
    }, ExtArgs["result"]["rollPlacement"]>
    composites: {}
  }

  type RollPlacementGetPayload<S extends boolean | null | undefined | RollPlacementDefaultArgs> = $Result.GetResult<Prisma.$RollPlacementPayload, S>

  type RollPlacementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RollPlacementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RollPlacementCountAggregateInputType | true
    }

  export interface RollPlacementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RollPlacement'], meta: { name: 'RollPlacement' } }
    /**
     * Find zero or one RollPlacement that matches the filter.
     * @param {RollPlacementFindUniqueArgs} args - Arguments to find a RollPlacement
     * @example
     * // Get one RollPlacement
     * const rollPlacement = await prisma.rollPlacement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RollPlacementFindUniqueArgs>(args: SelectSubset<T, RollPlacementFindUniqueArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RollPlacement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RollPlacementFindUniqueOrThrowArgs} args - Arguments to find a RollPlacement
     * @example
     * // Get one RollPlacement
     * const rollPlacement = await prisma.rollPlacement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RollPlacementFindUniqueOrThrowArgs>(args: SelectSubset<T, RollPlacementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RollPlacement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollPlacementFindFirstArgs} args - Arguments to find a RollPlacement
     * @example
     * // Get one RollPlacement
     * const rollPlacement = await prisma.rollPlacement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RollPlacementFindFirstArgs>(args?: SelectSubset<T, RollPlacementFindFirstArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RollPlacement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollPlacementFindFirstOrThrowArgs} args - Arguments to find a RollPlacement
     * @example
     * // Get one RollPlacement
     * const rollPlacement = await prisma.rollPlacement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RollPlacementFindFirstOrThrowArgs>(args?: SelectSubset<T, RollPlacementFindFirstOrThrowArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RollPlacements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollPlacementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RollPlacements
     * const rollPlacements = await prisma.rollPlacement.findMany()
     * 
     * // Get first 10 RollPlacements
     * const rollPlacements = await prisma.rollPlacement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rollPlacementWithIdOnly = await prisma.rollPlacement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RollPlacementFindManyArgs>(args?: SelectSubset<T, RollPlacementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RollPlacement.
     * @param {RollPlacementCreateArgs} args - Arguments to create a RollPlacement.
     * @example
     * // Create one RollPlacement
     * const RollPlacement = await prisma.rollPlacement.create({
     *   data: {
     *     // ... data to create a RollPlacement
     *   }
     * })
     * 
     */
    create<T extends RollPlacementCreateArgs>(args: SelectSubset<T, RollPlacementCreateArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RollPlacements.
     * @param {RollPlacementCreateManyArgs} args - Arguments to create many RollPlacements.
     * @example
     * // Create many RollPlacements
     * const rollPlacement = await prisma.rollPlacement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RollPlacementCreateManyArgs>(args?: SelectSubset<T, RollPlacementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RollPlacements and returns the data saved in the database.
     * @param {RollPlacementCreateManyAndReturnArgs} args - Arguments to create many RollPlacements.
     * @example
     * // Create many RollPlacements
     * const rollPlacement = await prisma.rollPlacement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RollPlacements and only return the `id`
     * const rollPlacementWithIdOnly = await prisma.rollPlacement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RollPlacementCreateManyAndReturnArgs>(args?: SelectSubset<T, RollPlacementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RollPlacement.
     * @param {RollPlacementDeleteArgs} args - Arguments to delete one RollPlacement.
     * @example
     * // Delete one RollPlacement
     * const RollPlacement = await prisma.rollPlacement.delete({
     *   where: {
     *     // ... filter to delete one RollPlacement
     *   }
     * })
     * 
     */
    delete<T extends RollPlacementDeleteArgs>(args: SelectSubset<T, RollPlacementDeleteArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RollPlacement.
     * @param {RollPlacementUpdateArgs} args - Arguments to update one RollPlacement.
     * @example
     * // Update one RollPlacement
     * const rollPlacement = await prisma.rollPlacement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RollPlacementUpdateArgs>(args: SelectSubset<T, RollPlacementUpdateArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RollPlacements.
     * @param {RollPlacementDeleteManyArgs} args - Arguments to filter RollPlacements to delete.
     * @example
     * // Delete a few RollPlacements
     * const { count } = await prisma.rollPlacement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RollPlacementDeleteManyArgs>(args?: SelectSubset<T, RollPlacementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RollPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollPlacementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RollPlacements
     * const rollPlacement = await prisma.rollPlacement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RollPlacementUpdateManyArgs>(args: SelectSubset<T, RollPlacementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RollPlacements and returns the data updated in the database.
     * @param {RollPlacementUpdateManyAndReturnArgs} args - Arguments to update many RollPlacements.
     * @example
     * // Update many RollPlacements
     * const rollPlacement = await prisma.rollPlacement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RollPlacements and only return the `id`
     * const rollPlacementWithIdOnly = await prisma.rollPlacement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RollPlacementUpdateManyAndReturnArgs>(args: SelectSubset<T, RollPlacementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RollPlacement.
     * @param {RollPlacementUpsertArgs} args - Arguments to update or create a RollPlacement.
     * @example
     * // Update or create a RollPlacement
     * const rollPlacement = await prisma.rollPlacement.upsert({
     *   create: {
     *     // ... data to create a RollPlacement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RollPlacement we want to update
     *   }
     * })
     */
    upsert<T extends RollPlacementUpsertArgs>(args: SelectSubset<T, RollPlacementUpsertArgs<ExtArgs>>): Prisma__RollPlacementClient<$Result.GetResult<Prisma.$RollPlacementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RollPlacements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollPlacementCountArgs} args - Arguments to filter RollPlacements to count.
     * @example
     * // Count the number of RollPlacements
     * const count = await prisma.rollPlacement.count({
     *   where: {
     *     // ... the filter for the RollPlacements we want to count
     *   }
     * })
    **/
    count<T extends RollPlacementCountArgs>(
      args?: Subset<T, RollPlacementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RollPlacementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RollPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollPlacementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RollPlacementAggregateArgs>(args: Subset<T, RollPlacementAggregateArgs>): Prisma.PrismaPromise<GetRollPlacementAggregateType<T>>

    /**
     * Group by RollPlacement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RollPlacementGroupByArgs} args - Group by arguments.
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
      T extends RollPlacementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RollPlacementGroupByArgs['orderBy'] }
        : { orderBy?: RollPlacementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RollPlacementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRollPlacementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RollPlacement model
   */
  readonly fields: RollPlacementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RollPlacement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RollPlacementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    PaternosterAxis<T extends PaternosterAxisDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PaternosterAxisDefaultArgs<ExtArgs>>): Prisma__PaternosterAxisClient<$Result.GetResult<Prisma.$PaternosterAxisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RollPlacement model
   */ 
  interface RollPlacementFieldRefs {
    readonly id: FieldRef<"RollPlacement", 'Int'>
    readonly AxisId: FieldRef<"RollPlacement", 'Int'>
    readonly Itemcode: FieldRef<"RollPlacement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RollPlacement findUnique
   */
  export type RollPlacementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * Filter, which RollPlacement to fetch.
     */
    where: RollPlacementWhereUniqueInput
  }

  /**
   * RollPlacement findUniqueOrThrow
   */
  export type RollPlacementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * Filter, which RollPlacement to fetch.
     */
    where: RollPlacementWhereUniqueInput
  }

  /**
   * RollPlacement findFirst
   */
  export type RollPlacementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * Filter, which RollPlacement to fetch.
     */
    where?: RollPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RollPlacements to fetch.
     */
    orderBy?: RollPlacementOrderByWithRelationInput | RollPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RollPlacements.
     */
    cursor?: RollPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RollPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RollPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RollPlacements.
     */
    distinct?: RollPlacementScalarFieldEnum | RollPlacementScalarFieldEnum[]
  }

  /**
   * RollPlacement findFirstOrThrow
   */
  export type RollPlacementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * Filter, which RollPlacement to fetch.
     */
    where?: RollPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RollPlacements to fetch.
     */
    orderBy?: RollPlacementOrderByWithRelationInput | RollPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RollPlacements.
     */
    cursor?: RollPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RollPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RollPlacements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RollPlacements.
     */
    distinct?: RollPlacementScalarFieldEnum | RollPlacementScalarFieldEnum[]
  }

  /**
   * RollPlacement findMany
   */
  export type RollPlacementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * Filter, which RollPlacements to fetch.
     */
    where?: RollPlacementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RollPlacements to fetch.
     */
    orderBy?: RollPlacementOrderByWithRelationInput | RollPlacementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RollPlacements.
     */
    cursor?: RollPlacementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RollPlacements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RollPlacements.
     */
    skip?: number
    distinct?: RollPlacementScalarFieldEnum | RollPlacementScalarFieldEnum[]
  }

  /**
   * RollPlacement create
   */
  export type RollPlacementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * The data needed to create a RollPlacement.
     */
    data: XOR<RollPlacementCreateInput, RollPlacementUncheckedCreateInput>
  }

  /**
   * RollPlacement createMany
   */
  export type RollPlacementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RollPlacements.
     */
    data: RollPlacementCreateManyInput | RollPlacementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RollPlacement createManyAndReturn
   */
  export type RollPlacementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * The data used to create many RollPlacements.
     */
    data: RollPlacementCreateManyInput | RollPlacementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RollPlacement update
   */
  export type RollPlacementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * The data needed to update a RollPlacement.
     */
    data: XOR<RollPlacementUpdateInput, RollPlacementUncheckedUpdateInput>
    /**
     * Choose, which RollPlacement to update.
     */
    where: RollPlacementWhereUniqueInput
  }

  /**
   * RollPlacement updateMany
   */
  export type RollPlacementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RollPlacements.
     */
    data: XOR<RollPlacementUpdateManyMutationInput, RollPlacementUncheckedUpdateManyInput>
    /**
     * Filter which RollPlacements to update
     */
    where?: RollPlacementWhereInput
    /**
     * Limit how many RollPlacements to update.
     */
    limit?: number
  }

  /**
   * RollPlacement updateManyAndReturn
   */
  export type RollPlacementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * The data used to update RollPlacements.
     */
    data: XOR<RollPlacementUpdateManyMutationInput, RollPlacementUncheckedUpdateManyInput>
    /**
     * Filter which RollPlacements to update
     */
    where?: RollPlacementWhereInput
    /**
     * Limit how many RollPlacements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RollPlacement upsert
   */
  export type RollPlacementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * The filter to search for the RollPlacement to update in case it exists.
     */
    where: RollPlacementWhereUniqueInput
    /**
     * In case the RollPlacement found by the `where` argument doesn't exist, create a new RollPlacement with this data.
     */
    create: XOR<RollPlacementCreateInput, RollPlacementUncheckedCreateInput>
    /**
     * In case the RollPlacement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RollPlacementUpdateInput, RollPlacementUncheckedUpdateInput>
  }

  /**
   * RollPlacement delete
   */
  export type RollPlacementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
    /**
     * Filter which RollPlacement to delete.
     */
    where: RollPlacementWhereUniqueInput
  }

  /**
   * RollPlacement deleteMany
   */
  export type RollPlacementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RollPlacements to delete
     */
    where?: RollPlacementWhereInput
    /**
     * Limit how many RollPlacements to delete.
     */
    limit?: number
  }

  /**
   * RollPlacement without action
   */
  export type RollPlacementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RollPlacement
     */
    select?: RollPlacementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RollPlacement
     */
    omit?: RollPlacementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RollPlacementInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    password: 'password',
    lastOnline: 'lastOnline',
    role: 'role',
    shopId: 'shopId',
    departamentId: 'departamentId',
    phone: 'phone',
    telegramChat: 'telegramChat',
    telegramSettings: 'telegramSettings'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PasswordResetRequestScalarFieldEnum: {
    id: 'id',
    ip: 'ip',
    key: 'key',
    created: 'created',
    expiredAt: 'expiredAt',
    isUsed: 'isUsed',
    userId: 'userId'
  };

  export type PasswordResetRequestScalarFieldEnum = (typeof PasswordResetRequestScalarFieldEnum)[keyof typeof PasswordResetRequestScalarFieldEnum]


  export const RefreshTokenScalarFieldEnum: {
    id: 'id',
    token: 'token',
    userId: 'userId'
  };

  export type RefreshTokenScalarFieldEnum = (typeof RefreshTokenScalarFieldEnum)[keyof typeof RefreshTokenScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    code: 'code',
    name: 'name',
    type: 'type',
    departamentId: 'departamentId'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const RemainScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    metadata: 'metadata',
    shop: 'shop',
    userId: 'userId',
    itemId: 'itemId',
    SellDate: 'SellDate',
    PrintedDate: 'PrintedDate',
    DepartamentId: 'DepartamentId',
    IsDeleted: 'IsDeleted'
  };

  export type RemainScalarFieldEnum = (typeof RemainScalarFieldEnum)[keyof typeof RemainScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    userId: 'userId',
    Readed: 'Readed',
    message: 'message',
    showed: 'showed',
    IsDeleted: 'IsDeleted'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


  export const ToolRequestScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    toolName: 'toolName',
    description: 'description',
    howToContact: 'howToContact',
    status: 'status',
    userId: 'userId',
    departamentId: 'departamentId',
    RejectionReason: 'RejectionReason',
    IsDeleted: 'IsDeleted'
  };

  export type ToolRequestScalarFieldEnum = (typeof ToolRequestScalarFieldEnum)[keyof typeof ToolRequestScalarFieldEnum]


  export const ActivationRejectionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    reason: 'reason'
  };

  export type ActivationRejectionScalarFieldEnum = (typeof ActivationRejectionScalarFieldEnum)[keyof typeof ActivationRejectionScalarFieldEnum]


  export const PaternosterScalarFieldEnum: {
    id: 'id',
    Name: 'Name',
    MaxSize: 'MaxSize',
    ShopId: 'ShopId'
  };

  export type PaternosterScalarFieldEnum = (typeof PaternosterScalarFieldEnum)[keyof typeof PaternosterScalarFieldEnum]


  export const PaternosterAxisScalarFieldEnum: {
    id: 'id',
    PaternosterId: 'PaternosterId'
  };

  export type PaternosterAxisScalarFieldEnum = (typeof PaternosterAxisScalarFieldEnum)[keyof typeof PaternosterAxisScalarFieldEnum]


  export const RollPlacementScalarFieldEnum: {
    id: 'id',
    AxisId: 'AxisId',
    Itemcode: 'Itemcode'
  };

  export type RollPlacementScalarFieldEnum = (typeof RollPlacementScalarFieldEnum)[keyof typeof RollPlacementScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'ItemType'
   */
  export type EnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType'>
    


  /**
   * Reference to a field of type 'ItemType[]'
   */
  export type ListEnumItemTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ItemType[]'>
    


  /**
   * Reference to a field of type 'RequestStatus'
   */
  export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>
    


  /**
   * Reference to a field of type 'RequestStatus[]'
   */
  export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    lastOnline?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    shopId?: IntNullableFilter<"User"> | number | null
    departamentId?: IntNullableFilter<"User"> | number | null
    phone?: StringFilter<"User"> | string
    telegramChat?: StringNullableFilter<"User"> | string | null
    telegramSettings?: JsonNullableFilter<"User">
    notifications?: NotificationListRelationFilter
    passwordResets?: PasswordResetRequestListRelationFilter
    refreshToken?: XOR<RefreshTokenNullableScalarRelationFilter, RefreshTokenWhereInput> | null
    createdRemains?: RemainListRelationFilter
    toolRequests?: ToolRequestListRelationFilter
    ActivationRejection?: XOR<ActivationRejectionNullableScalarRelationFilter, ActivationRejectionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    lastOnline?: SortOrderInput | SortOrder
    role?: SortOrder
    shopId?: SortOrderInput | SortOrder
    departamentId?: SortOrderInput | SortOrder
    phone?: SortOrder
    telegramChat?: SortOrderInput | SortOrder
    telegramSettings?: SortOrderInput | SortOrder
    notifications?: NotificationOrderByRelationAggregateInput
    passwordResets?: PasswordResetRequestOrderByRelationAggregateInput
    refreshToken?: RefreshTokenOrderByWithRelationInput
    createdRemains?: RemainOrderByRelationAggregateInput
    toolRequests?: ToolRequestOrderByRelationAggregateInput
    ActivationRejection?: ActivationRejectionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    lastOnline?: DateTimeNullableFilter<"User"> | Date | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    shopId?: IntNullableFilter<"User"> | number | null
    departamentId?: IntNullableFilter<"User"> | number | null
    telegramChat?: StringNullableFilter<"User"> | string | null
    telegramSettings?: JsonNullableFilter<"User">
    notifications?: NotificationListRelationFilter
    passwordResets?: PasswordResetRequestListRelationFilter
    refreshToken?: XOR<RefreshTokenNullableScalarRelationFilter, RefreshTokenWhereInput> | null
    createdRemains?: RemainListRelationFilter
    toolRequests?: ToolRequestListRelationFilter
    ActivationRejection?: XOR<ActivationRejectionNullableScalarRelationFilter, ActivationRejectionWhereInput> | null
  }, "id" | "name" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    lastOnline?: SortOrderInput | SortOrder
    role?: SortOrder
    shopId?: SortOrderInput | SortOrder
    departamentId?: SortOrderInput | SortOrder
    phone?: SortOrder
    telegramChat?: SortOrderInput | SortOrder
    telegramSettings?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    lastOnline?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    shopId?: IntNullableWithAggregatesFilter<"User"> | number | null
    departamentId?: IntNullableWithAggregatesFilter<"User"> | number | null
    phone?: StringWithAggregatesFilter<"User"> | string
    telegramChat?: StringNullableWithAggregatesFilter<"User"> | string | null
    telegramSettings?: JsonNullableWithAggregatesFilter<"User">
  }

  export type PasswordResetRequestWhereInput = {
    AND?: PasswordResetRequestWhereInput | PasswordResetRequestWhereInput[]
    OR?: PasswordResetRequestWhereInput[]
    NOT?: PasswordResetRequestWhereInput | PasswordResetRequestWhereInput[]
    id?: IntFilter<"PasswordResetRequest"> | number
    ip?: StringFilter<"PasswordResetRequest"> | string
    key?: StringFilter<"PasswordResetRequest"> | string
    created?: DateTimeFilter<"PasswordResetRequest"> | Date | string
    expiredAt?: DateTimeFilter<"PasswordResetRequest"> | Date | string
    isUsed?: BoolFilter<"PasswordResetRequest"> | boolean
    userId?: IntFilter<"PasswordResetRequest"> | number
    forUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetRequestOrderByWithRelationInput = {
    id?: SortOrder
    ip?: SortOrder
    key?: SortOrder
    created?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    userId?: SortOrder
    forUser?: UserOrderByWithRelationInput
  }

  export type PasswordResetRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PasswordResetRequestWhereInput | PasswordResetRequestWhereInput[]
    OR?: PasswordResetRequestWhereInput[]
    NOT?: PasswordResetRequestWhereInput | PasswordResetRequestWhereInput[]
    ip?: StringFilter<"PasswordResetRequest"> | string
    key?: StringFilter<"PasswordResetRequest"> | string
    created?: DateTimeFilter<"PasswordResetRequest"> | Date | string
    expiredAt?: DateTimeFilter<"PasswordResetRequest"> | Date | string
    isUsed?: BoolFilter<"PasswordResetRequest"> | boolean
    userId?: IntFilter<"PasswordResetRequest"> | number
    forUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PasswordResetRequestOrderByWithAggregationInput = {
    id?: SortOrder
    ip?: SortOrder
    key?: SortOrder
    created?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    userId?: SortOrder
    _count?: PasswordResetRequestCountOrderByAggregateInput
    _avg?: PasswordResetRequestAvgOrderByAggregateInput
    _max?: PasswordResetRequestMaxOrderByAggregateInput
    _min?: PasswordResetRequestMinOrderByAggregateInput
    _sum?: PasswordResetRequestSumOrderByAggregateInput
  }

  export type PasswordResetRequestScalarWhereWithAggregatesInput = {
    AND?: PasswordResetRequestScalarWhereWithAggregatesInput | PasswordResetRequestScalarWhereWithAggregatesInput[]
    OR?: PasswordResetRequestScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetRequestScalarWhereWithAggregatesInput | PasswordResetRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PasswordResetRequest"> | number
    ip?: StringWithAggregatesFilter<"PasswordResetRequest"> | string
    key?: StringWithAggregatesFilter<"PasswordResetRequest"> | string
    created?: DateTimeWithAggregatesFilter<"PasswordResetRequest"> | Date | string
    expiredAt?: DateTimeWithAggregatesFilter<"PasswordResetRequest"> | Date | string
    isUsed?: BoolWithAggregatesFilter<"PasswordResetRequest"> | boolean
    userId?: IntWithAggregatesFilter<"PasswordResetRequest"> | number
  }

  export type RefreshTokenWhereInput = {
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    id?: IntFilter<"RefreshToken"> | number
    token?: StringFilter<"RefreshToken"> | string
    userId?: IntFilter<"RefreshToken"> | number
    forUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RefreshTokenOrderByWithRelationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    forUser?: UserOrderByWithRelationInput
  }

  export type RefreshTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    OR?: RefreshTokenWhereInput[]
    NOT?: RefreshTokenWhereInput | RefreshTokenWhereInput[]
    token?: StringFilter<"RefreshToken"> | string
    forUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type RefreshTokenOrderByWithAggregationInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
    _count?: RefreshTokenCountOrderByAggregateInput
    _avg?: RefreshTokenAvgOrderByAggregateInput
    _max?: RefreshTokenMaxOrderByAggregateInput
    _min?: RefreshTokenMinOrderByAggregateInput
    _sum?: RefreshTokenSumOrderByAggregateInput
  }

  export type RefreshTokenScalarWhereWithAggregatesInput = {
    AND?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    OR?: RefreshTokenScalarWhereWithAggregatesInput[]
    NOT?: RefreshTokenScalarWhereWithAggregatesInput | RefreshTokenScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RefreshToken"> | number
    token?: StringWithAggregatesFilter<"RefreshToken"> | string
    userId?: IntWithAggregatesFilter<"RefreshToken"> | number
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    code?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    departamentId?: IntNullableFilter<"Item"> | number | null
    remains?: RemainListRelationFilter
    RollPlacement?: RollPlacementListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    departamentId?: SortOrderInput | SortOrder
    remains?: RemainOrderByRelationAggregateInput
    RollPlacement?: RollPlacementOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    code?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    type?: EnumItemTypeFilter<"Item"> | $Enums.ItemType
    departamentId?: IntNullableFilter<"Item"> | number | null
    remains?: RemainListRelationFilter
    RollPlacement?: RollPlacementListRelationFilter
  }, "code">

  export type ItemOrderByWithAggregationInput = {
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    departamentId?: SortOrderInput | SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    code?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    type?: EnumItemTypeWithAggregatesFilter<"Item"> | $Enums.ItemType
    departamentId?: IntNullableWithAggregatesFilter<"Item"> | number | null
  }

  export type RemainWhereInput = {
    AND?: RemainWhereInput | RemainWhereInput[]
    OR?: RemainWhereInput[]
    NOT?: RemainWhereInput | RemainWhereInput[]
    id?: UuidFilter<"Remain"> | string
    createdAt?: DateTimeFilter<"Remain"> | Date | string
    metadata?: JsonFilter<"Remain">
    shop?: IntFilter<"Remain"> | number
    userId?: IntFilter<"Remain"> | number
    itemId?: StringFilter<"Remain"> | string
    SellDate?: DateTimeNullableFilter<"Remain"> | Date | string | null
    PrintedDate?: DateTimeNullableFilter<"Remain"> | Date | string | null
    DepartamentId?: IntNullableFilter<"Remain"> | number | null
    IsDeleted?: BoolFilter<"Remain"> | boolean
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RemainOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    metadata?: SortOrder
    shop?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    SellDate?: SortOrderInput | SortOrder
    PrintedDate?: SortOrderInput | SortOrder
    DepartamentId?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    item?: ItemOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type RemainWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RemainWhereInput | RemainWhereInput[]
    OR?: RemainWhereInput[]
    NOT?: RemainWhereInput | RemainWhereInput[]
    createdAt?: DateTimeFilter<"Remain"> | Date | string
    metadata?: JsonFilter<"Remain">
    shop?: IntFilter<"Remain"> | number
    userId?: IntFilter<"Remain"> | number
    itemId?: StringFilter<"Remain"> | string
    SellDate?: DateTimeNullableFilter<"Remain"> | Date | string | null
    PrintedDate?: DateTimeNullableFilter<"Remain"> | Date | string | null
    DepartamentId?: IntNullableFilter<"Remain"> | number | null
    IsDeleted?: BoolFilter<"Remain"> | boolean
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RemainOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    metadata?: SortOrder
    shop?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    SellDate?: SortOrderInput | SortOrder
    PrintedDate?: SortOrderInput | SortOrder
    DepartamentId?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    _count?: RemainCountOrderByAggregateInput
    _avg?: RemainAvgOrderByAggregateInput
    _max?: RemainMaxOrderByAggregateInput
    _min?: RemainMinOrderByAggregateInput
    _sum?: RemainSumOrderByAggregateInput
  }

  export type RemainScalarWhereWithAggregatesInput = {
    AND?: RemainScalarWhereWithAggregatesInput | RemainScalarWhereWithAggregatesInput[]
    OR?: RemainScalarWhereWithAggregatesInput[]
    NOT?: RemainScalarWhereWithAggregatesInput | RemainScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Remain"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Remain"> | Date | string
    metadata?: JsonWithAggregatesFilter<"Remain">
    shop?: IntWithAggregatesFilter<"Remain"> | number
    userId?: IntWithAggregatesFilter<"Remain"> | number
    itemId?: StringWithAggregatesFilter<"Remain"> | string
    SellDate?: DateTimeNullableWithAggregatesFilter<"Remain"> | Date | string | null
    PrintedDate?: DateTimeNullableWithAggregatesFilter<"Remain"> | Date | string | null
    DepartamentId?: IntNullableWithAggregatesFilter<"Remain"> | number | null
    IsDeleted?: BoolWithAggregatesFilter<"Remain"> | boolean
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    Readed?: BoolFilter<"Notification"> | boolean
    message?: StringFilter<"Notification"> | string
    showed?: DateTimeNullableFilter<"Notification"> | Date | string | null
    IsDeleted?: BoolFilter<"Notification"> | boolean
    ForUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    Readed?: SortOrder
    message?: SortOrder
    showed?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    ForUser?: UserOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    Readed?: BoolFilter<"Notification"> | boolean
    message?: StringFilter<"Notification"> | string
    showed?: DateTimeNullableFilter<"Notification"> | Date | string | null
    IsDeleted?: BoolFilter<"Notification"> | boolean
    ForUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    Readed?: SortOrder
    message?: SortOrder
    showed?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _avg?: NotificationAvgOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
    _sum?: NotificationSumOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Notification"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    userId?: IntWithAggregatesFilter<"Notification"> | number
    Readed?: BoolWithAggregatesFilter<"Notification"> | boolean
    message?: StringWithAggregatesFilter<"Notification"> | string
    showed?: DateTimeNullableWithAggregatesFilter<"Notification"> | Date | string | null
    IsDeleted?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type ToolRequestWhereInput = {
    AND?: ToolRequestWhereInput | ToolRequestWhereInput[]
    OR?: ToolRequestWhereInput[]
    NOT?: ToolRequestWhereInput | ToolRequestWhereInput[]
    id?: IntFilter<"ToolRequest"> | number
    createdAt?: DateTimeFilter<"ToolRequest"> | Date | string
    toolName?: StringFilter<"ToolRequest"> | string
    description?: StringFilter<"ToolRequest"> | string
    howToContact?: StringNullableFilter<"ToolRequest"> | string | null
    status?: EnumRequestStatusFilter<"ToolRequest"> | $Enums.RequestStatus
    userId?: IntFilter<"ToolRequest"> | number
    departamentId?: IntFilter<"ToolRequest"> | number
    RejectionReason?: StringNullableFilter<"ToolRequest"> | string | null
    IsDeleted?: BoolFilter<"ToolRequest"> | boolean
    ForUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ToolRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    toolName?: SortOrder
    description?: SortOrder
    howToContact?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    departamentId?: SortOrder
    RejectionReason?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    ForUser?: UserOrderByWithRelationInput
  }

  export type ToolRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ToolRequestWhereInput | ToolRequestWhereInput[]
    OR?: ToolRequestWhereInput[]
    NOT?: ToolRequestWhereInput | ToolRequestWhereInput[]
    createdAt?: DateTimeFilter<"ToolRequest"> | Date | string
    toolName?: StringFilter<"ToolRequest"> | string
    description?: StringFilter<"ToolRequest"> | string
    howToContact?: StringNullableFilter<"ToolRequest"> | string | null
    status?: EnumRequestStatusFilter<"ToolRequest"> | $Enums.RequestStatus
    userId?: IntFilter<"ToolRequest"> | number
    departamentId?: IntFilter<"ToolRequest"> | number
    RejectionReason?: StringNullableFilter<"ToolRequest"> | string | null
    IsDeleted?: BoolFilter<"ToolRequest"> | boolean
    ForUser?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ToolRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    toolName?: SortOrder
    description?: SortOrder
    howToContact?: SortOrderInput | SortOrder
    status?: SortOrder
    userId?: SortOrder
    departamentId?: SortOrder
    RejectionReason?: SortOrderInput | SortOrder
    IsDeleted?: SortOrder
    _count?: ToolRequestCountOrderByAggregateInput
    _avg?: ToolRequestAvgOrderByAggregateInput
    _max?: ToolRequestMaxOrderByAggregateInput
    _min?: ToolRequestMinOrderByAggregateInput
    _sum?: ToolRequestSumOrderByAggregateInput
  }

  export type ToolRequestScalarWhereWithAggregatesInput = {
    AND?: ToolRequestScalarWhereWithAggregatesInput | ToolRequestScalarWhereWithAggregatesInput[]
    OR?: ToolRequestScalarWhereWithAggregatesInput[]
    NOT?: ToolRequestScalarWhereWithAggregatesInput | ToolRequestScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ToolRequest"> | number
    createdAt?: DateTimeWithAggregatesFilter<"ToolRequest"> | Date | string
    toolName?: StringWithAggregatesFilter<"ToolRequest"> | string
    description?: StringWithAggregatesFilter<"ToolRequest"> | string
    howToContact?: StringNullableWithAggregatesFilter<"ToolRequest"> | string | null
    status?: EnumRequestStatusWithAggregatesFilter<"ToolRequest"> | $Enums.RequestStatus
    userId?: IntWithAggregatesFilter<"ToolRequest"> | number
    departamentId?: IntWithAggregatesFilter<"ToolRequest"> | number
    RejectionReason?: StringNullableWithAggregatesFilter<"ToolRequest"> | string | null
    IsDeleted?: BoolWithAggregatesFilter<"ToolRequest"> | boolean
  }

  export type ActivationRejectionWhereInput = {
    AND?: ActivationRejectionWhereInput | ActivationRejectionWhereInput[]
    OR?: ActivationRejectionWhereInput[]
    NOT?: ActivationRejectionWhereInput | ActivationRejectionWhereInput[]
    id?: IntFilter<"ActivationRejection"> | number
    userId?: IntFilter<"ActivationRejection"> | number
    reason?: StringFilter<"ActivationRejection"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ActivationRejectionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ActivationRejectionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: number
    AND?: ActivationRejectionWhereInput | ActivationRejectionWhereInput[]
    OR?: ActivationRejectionWhereInput[]
    NOT?: ActivationRejectionWhereInput | ActivationRejectionWhereInput[]
    reason?: StringFilter<"ActivationRejection"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type ActivationRejectionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
    _count?: ActivationRejectionCountOrderByAggregateInput
    _avg?: ActivationRejectionAvgOrderByAggregateInput
    _max?: ActivationRejectionMaxOrderByAggregateInput
    _min?: ActivationRejectionMinOrderByAggregateInput
    _sum?: ActivationRejectionSumOrderByAggregateInput
  }

  export type ActivationRejectionScalarWhereWithAggregatesInput = {
    AND?: ActivationRejectionScalarWhereWithAggregatesInput | ActivationRejectionScalarWhereWithAggregatesInput[]
    OR?: ActivationRejectionScalarWhereWithAggregatesInput[]
    NOT?: ActivationRejectionScalarWhereWithAggregatesInput | ActivationRejectionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ActivationRejection"> | number
    userId?: IntWithAggregatesFilter<"ActivationRejection"> | number
    reason?: StringWithAggregatesFilter<"ActivationRejection"> | string
  }

  export type PaternosterWhereInput = {
    AND?: PaternosterWhereInput | PaternosterWhereInput[]
    OR?: PaternosterWhereInput[]
    NOT?: PaternosterWhereInput | PaternosterWhereInput[]
    id?: IntFilter<"Paternoster"> | number
    Name?: StringFilter<"Paternoster"> | string
    MaxSize?: FloatFilter<"Paternoster"> | number
    ShopId?: IntFilter<"Paternoster"> | number
    Axises?: PaternosterAxisListRelationFilter
  }

  export type PaternosterOrderByWithRelationInput = {
    id?: SortOrder
    Name?: SortOrder
    MaxSize?: SortOrder
    ShopId?: SortOrder
    Axises?: PaternosterAxisOrderByRelationAggregateInput
  }

  export type PaternosterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaternosterWhereInput | PaternosterWhereInput[]
    OR?: PaternosterWhereInput[]
    NOT?: PaternosterWhereInput | PaternosterWhereInput[]
    Name?: StringFilter<"Paternoster"> | string
    MaxSize?: FloatFilter<"Paternoster"> | number
    ShopId?: IntFilter<"Paternoster"> | number
    Axises?: PaternosterAxisListRelationFilter
  }, "id">

  export type PaternosterOrderByWithAggregationInput = {
    id?: SortOrder
    Name?: SortOrder
    MaxSize?: SortOrder
    ShopId?: SortOrder
    _count?: PaternosterCountOrderByAggregateInput
    _avg?: PaternosterAvgOrderByAggregateInput
    _max?: PaternosterMaxOrderByAggregateInput
    _min?: PaternosterMinOrderByAggregateInput
    _sum?: PaternosterSumOrderByAggregateInput
  }

  export type PaternosterScalarWhereWithAggregatesInput = {
    AND?: PaternosterScalarWhereWithAggregatesInput | PaternosterScalarWhereWithAggregatesInput[]
    OR?: PaternosterScalarWhereWithAggregatesInput[]
    NOT?: PaternosterScalarWhereWithAggregatesInput | PaternosterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Paternoster"> | number
    Name?: StringWithAggregatesFilter<"Paternoster"> | string
    MaxSize?: FloatWithAggregatesFilter<"Paternoster"> | number
    ShopId?: IntWithAggregatesFilter<"Paternoster"> | number
  }

  export type PaternosterAxisWhereInput = {
    AND?: PaternosterAxisWhereInput | PaternosterAxisWhereInput[]
    OR?: PaternosterAxisWhereInput[]
    NOT?: PaternosterAxisWhereInput | PaternosterAxisWhereInput[]
    id?: IntFilter<"PaternosterAxis"> | number
    PaternosterId?: IntFilter<"PaternosterAxis"> | number
    Paternoster?: XOR<PaternosterScalarRelationFilter, PaternosterWhereInput>
    Placements?: RollPlacementListRelationFilter
  }

  export type PaternosterAxisOrderByWithRelationInput = {
    id?: SortOrder
    PaternosterId?: SortOrder
    Paternoster?: PaternosterOrderByWithRelationInput
    Placements?: RollPlacementOrderByRelationAggregateInput
  }

  export type PaternosterAxisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PaternosterAxisWhereInput | PaternosterAxisWhereInput[]
    OR?: PaternosterAxisWhereInput[]
    NOT?: PaternosterAxisWhereInput | PaternosterAxisWhereInput[]
    PaternosterId?: IntFilter<"PaternosterAxis"> | number
    Paternoster?: XOR<PaternosterScalarRelationFilter, PaternosterWhereInput>
    Placements?: RollPlacementListRelationFilter
  }, "id">

  export type PaternosterAxisOrderByWithAggregationInput = {
    id?: SortOrder
    PaternosterId?: SortOrder
    _count?: PaternosterAxisCountOrderByAggregateInput
    _avg?: PaternosterAxisAvgOrderByAggregateInput
    _max?: PaternosterAxisMaxOrderByAggregateInput
    _min?: PaternosterAxisMinOrderByAggregateInput
    _sum?: PaternosterAxisSumOrderByAggregateInput
  }

  export type PaternosterAxisScalarWhereWithAggregatesInput = {
    AND?: PaternosterAxisScalarWhereWithAggregatesInput | PaternosterAxisScalarWhereWithAggregatesInput[]
    OR?: PaternosterAxisScalarWhereWithAggregatesInput[]
    NOT?: PaternosterAxisScalarWhereWithAggregatesInput | PaternosterAxisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PaternosterAxis"> | number
    PaternosterId?: IntWithAggregatesFilter<"PaternosterAxis"> | number
  }

  export type RollPlacementWhereInput = {
    AND?: RollPlacementWhereInput | RollPlacementWhereInput[]
    OR?: RollPlacementWhereInput[]
    NOT?: RollPlacementWhereInput | RollPlacementWhereInput[]
    id?: IntFilter<"RollPlacement"> | number
    AxisId?: IntFilter<"RollPlacement"> | number
    Itemcode?: StringFilter<"RollPlacement"> | string
    PaternosterAxis?: XOR<PaternosterAxisScalarRelationFilter, PaternosterAxisWhereInput>
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type RollPlacementOrderByWithRelationInput = {
    id?: SortOrder
    AxisId?: SortOrder
    Itemcode?: SortOrder
    PaternosterAxis?: PaternosterAxisOrderByWithRelationInput
    Item?: ItemOrderByWithRelationInput
  }

  export type RollPlacementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RollPlacementWhereInput | RollPlacementWhereInput[]
    OR?: RollPlacementWhereInput[]
    NOT?: RollPlacementWhereInput | RollPlacementWhereInput[]
    AxisId?: IntFilter<"RollPlacement"> | number
    Itemcode?: StringFilter<"RollPlacement"> | string
    PaternosterAxis?: XOR<PaternosterAxisScalarRelationFilter, PaternosterAxisWhereInput>
    Item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id">

  export type RollPlacementOrderByWithAggregationInput = {
    id?: SortOrder
    AxisId?: SortOrder
    Itemcode?: SortOrder
    _count?: RollPlacementCountOrderByAggregateInput
    _avg?: RollPlacementAvgOrderByAggregateInput
    _max?: RollPlacementMaxOrderByAggregateInput
    _min?: RollPlacementMinOrderByAggregateInput
    _sum?: RollPlacementSumOrderByAggregateInput
  }

  export type RollPlacementScalarWhereWithAggregatesInput = {
    AND?: RollPlacementScalarWhereWithAggregatesInput | RollPlacementScalarWhereWithAggregatesInput[]
    OR?: RollPlacementScalarWhereWithAggregatesInput[]
    NOT?: RollPlacementScalarWhereWithAggregatesInput | RollPlacementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RollPlacement"> | number
    AxisId?: IntWithAggregatesFilter<"RollPlacement"> | number
    Itemcode?: StringWithAggregatesFilter<"RollPlacement"> | string
  }

  export type UserCreateInput = {
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutForUserInput
    createdRemains?: RemainCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestUncheckedCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutForUserInput
    createdRemains?: RemainUncheckedCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestUncheckedCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUncheckedUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUncheckedUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUncheckedUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
  }

  export type PasswordResetRequestCreateInput = {
    ip: string
    key: string
    created?: Date | string
    expiredAt: Date | string
    isUsed?: boolean
    forUser: UserCreateNestedOneWithoutPasswordResetsInput
  }

  export type PasswordResetRequestUncheckedCreateInput = {
    id?: number
    ip: string
    key: string
    created?: Date | string
    expiredAt: Date | string
    isUsed?: boolean
    userId: number
  }

  export type PasswordResetRequestUpdateInput = {
    ip?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    forUser?: UserUpdateOneRequiredWithoutPasswordResetsNestedInput
  }

  export type PasswordResetRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PasswordResetRequestCreateManyInput = {
    id?: number
    ip: string
    key: string
    created?: Date | string
    expiredAt: Date | string
    isUsed?: boolean
    userId: number
  }

  export type PasswordResetRequestUpdateManyMutationInput = {
    ip?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenCreateInput = {
    token: string
    forUser: UserCreateNestedOneWithoutRefreshTokenInput
  }

  export type RefreshTokenUncheckedCreateInput = {
    id?: number
    token: string
    userId: number
  }

  export type RefreshTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    forUser?: UserUpdateOneRequiredWithoutRefreshTokenNestedInput
  }

  export type RefreshTokenUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type RefreshTokenCreateManyInput = {
    id?: number
    token: string
    userId: number
  }

  export type RefreshTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemCreateInput = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId?: number | null
    remains?: RemainCreateNestedManyWithoutItemInput
    RollPlacement?: RollPlacementCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId?: number | null
    remains?: RemainUncheckedCreateNestedManyWithoutItemInput
    RollPlacement?: RollPlacementUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: RemainUpdateManyWithoutItemNestedInput
    RollPlacement?: RollPlacementUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: RemainUncheckedUpdateManyWithoutItemNestedInput
    RollPlacement?: RollPlacementUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId?: number | null
  }

  export type ItemUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ItemUncheckedUpdateManyInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RemainCreateInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
    item: ItemCreateNestedOneWithoutRemainsInput
    createdBy: UserCreateNestedOneWithoutCreatedRemainsInput
  }

  export type RemainUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    userId: number
    itemId: string
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
  }

  export type RemainUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    item?: ItemUpdateOneRequiredWithoutRemainsNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedRemainsNestedInput
  }

  export type RemainUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RemainCreateManyInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    userId: number
    itemId: string
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
  }

  export type RemainUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RemainUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateInput = {
    createdAt?: Date | string
    Readed?: boolean
    message: string
    showed?: Date | string | null
    IsDeleted?: boolean
    ForUser: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    Readed?: boolean
    message: string
    showed?: Date | string | null
    IsDeleted?: boolean
  }

  export type NotificationUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Readed?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    showed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    ForUser?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Readed?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    showed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: number
    createdAt?: Date | string
    userId: number
    Readed?: boolean
    message: string
    showed?: Date | string | null
    IsDeleted?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Readed?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    showed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    Readed?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    showed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToolRequestCreateInput = {
    createdAt?: Date | string
    toolName: string
    description: string
    howToContact?: string | null
    status?: $Enums.RequestStatus
    departamentId: number
    RejectionReason?: string | null
    IsDeleted?: boolean
    ForUser: UserCreateNestedOneWithoutToolRequestsInput
  }

  export type ToolRequestUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    toolName: string
    description: string
    howToContact?: string | null
    status?: $Enums.RequestStatus
    userId: number
    departamentId: number
    RejectionReason?: string | null
    IsDeleted?: boolean
  }

  export type ToolRequestUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toolName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    howToContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    departamentId?: IntFieldUpdateOperationsInput | number
    RejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    ForUser?: UserUpdateOneRequiredWithoutToolRequestsNestedInput
  }

  export type ToolRequestUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toolName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    howToContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    userId?: IntFieldUpdateOperationsInput | number
    departamentId?: IntFieldUpdateOperationsInput | number
    RejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToolRequestCreateManyInput = {
    id?: number
    createdAt?: Date | string
    toolName: string
    description: string
    howToContact?: string | null
    status?: $Enums.RequestStatus
    userId: number
    departamentId: number
    RejectionReason?: string | null
    IsDeleted?: boolean
  }

  export type ToolRequestUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toolName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    howToContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    departamentId?: IntFieldUpdateOperationsInput | number
    RejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToolRequestUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toolName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    howToContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    userId?: IntFieldUpdateOperationsInput | number
    departamentId?: IntFieldUpdateOperationsInput | number
    RejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ActivationRejectionCreateInput = {
    reason: string
    user: UserCreateNestedOneWithoutActivationRejectionInput
  }

  export type ActivationRejectionUncheckedCreateInput = {
    id?: number
    userId: number
    reason: string
  }

  export type ActivationRejectionUpdateInput = {
    reason?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutActivationRejectionNestedInput
  }

  export type ActivationRejectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type ActivationRejectionCreateManyInput = {
    id?: number
    userId: number
    reason: string
  }

  export type ActivationRejectionUpdateManyMutationInput = {
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type ActivationRejectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type PaternosterCreateInput = {
    Name: string
    MaxSize: number
    ShopId: number
    Axises?: PaternosterAxisCreateNestedManyWithoutPaternosterInput
  }

  export type PaternosterUncheckedCreateInput = {
    id?: number
    Name: string
    MaxSize: number
    ShopId: number
    Axises?: PaternosterAxisUncheckedCreateNestedManyWithoutPaternosterInput
  }

  export type PaternosterUpdateInput = {
    Name?: StringFieldUpdateOperationsInput | string
    MaxSize?: FloatFieldUpdateOperationsInput | number
    ShopId?: IntFieldUpdateOperationsInput | number
    Axises?: PaternosterAxisUpdateManyWithoutPaternosterNestedInput
  }

  export type PaternosterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MaxSize?: FloatFieldUpdateOperationsInput | number
    ShopId?: IntFieldUpdateOperationsInput | number
    Axises?: PaternosterAxisUncheckedUpdateManyWithoutPaternosterNestedInput
  }

  export type PaternosterCreateManyInput = {
    id?: number
    Name: string
    MaxSize: number
    ShopId: number
  }

  export type PaternosterUpdateManyMutationInput = {
    Name?: StringFieldUpdateOperationsInput | string
    MaxSize?: FloatFieldUpdateOperationsInput | number
    ShopId?: IntFieldUpdateOperationsInput | number
  }

  export type PaternosterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MaxSize?: FloatFieldUpdateOperationsInput | number
    ShopId?: IntFieldUpdateOperationsInput | number
  }

  export type PaternosterAxisCreateInput = {
    Paternoster: PaternosterCreateNestedOneWithoutAxisesInput
    Placements?: RollPlacementCreateNestedManyWithoutPaternosterAxisInput
  }

  export type PaternosterAxisUncheckedCreateInput = {
    id?: number
    PaternosterId: number
    Placements?: RollPlacementUncheckedCreateNestedManyWithoutPaternosterAxisInput
  }

  export type PaternosterAxisUpdateInput = {
    Paternoster?: PaternosterUpdateOneRequiredWithoutAxisesNestedInput
    Placements?: RollPlacementUpdateManyWithoutPaternosterAxisNestedInput
  }

  export type PaternosterAxisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    PaternosterId?: IntFieldUpdateOperationsInput | number
    Placements?: RollPlacementUncheckedUpdateManyWithoutPaternosterAxisNestedInput
  }

  export type PaternosterAxisCreateManyInput = {
    id?: number
    PaternosterId: number
  }

  export type PaternosterAxisUpdateManyMutationInput = {

  }

  export type PaternosterAxisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    PaternosterId?: IntFieldUpdateOperationsInput | number
  }

  export type RollPlacementCreateInput = {
    PaternosterAxis: PaternosterAxisCreateNestedOneWithoutPlacementsInput
    Item: ItemCreateNestedOneWithoutRollPlacementInput
  }

  export type RollPlacementUncheckedCreateInput = {
    id?: number
    AxisId: number
    Itemcode: string
  }

  export type RollPlacementUpdateInput = {
    PaternosterAxis?: PaternosterAxisUpdateOneRequiredWithoutPlacementsNestedInput
    Item?: ItemUpdateOneRequiredWithoutRollPlacementNestedInput
  }

  export type RollPlacementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    AxisId?: IntFieldUpdateOperationsInput | number
    Itemcode?: StringFieldUpdateOperationsInput | string
  }

  export type RollPlacementCreateManyInput = {
    id?: number
    AxisId: number
    Itemcode: string
  }

  export type RollPlacementUpdateManyMutationInput = {

  }

  export type RollPlacementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    AxisId?: IntFieldUpdateOperationsInput | number
    Itemcode?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type PasswordResetRequestListRelationFilter = {
    every?: PasswordResetRequestWhereInput
    some?: PasswordResetRequestWhereInput
    none?: PasswordResetRequestWhereInput
  }

  export type RefreshTokenNullableScalarRelationFilter = {
    is?: RefreshTokenWhereInput | null
    isNot?: RefreshTokenWhereInput | null
  }

  export type RemainListRelationFilter = {
    every?: RemainWhereInput
    some?: RemainWhereInput
    none?: RemainWhereInput
  }

  export type ToolRequestListRelationFilter = {
    every?: ToolRequestWhereInput
    some?: ToolRequestWhereInput
    none?: ToolRequestWhereInput
  }

  export type ActivationRejectionNullableScalarRelationFilter = {
    is?: ActivationRejectionWhereInput | null
    isNot?: ActivationRejectionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PasswordResetRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RemainOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ToolRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    lastOnline?: SortOrder
    role?: SortOrder
    shopId?: SortOrder
    departamentId?: SortOrder
    phone?: SortOrder
    telegramChat?: SortOrder
    telegramSettings?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    departamentId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    lastOnline?: SortOrder
    role?: SortOrder
    shopId?: SortOrder
    departamentId?: SortOrder
    phone?: SortOrder
    telegramChat?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    password?: SortOrder
    lastOnline?: SortOrder
    role?: SortOrder
    shopId?: SortOrder
    departamentId?: SortOrder
    phone?: SortOrder
    telegramChat?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
    departamentId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PasswordResetRequestCountOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    key?: SortOrder
    created?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    key?: SortOrder
    created?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetRequestMinOrderByAggregateInput = {
    id?: SortOrder
    ip?: SortOrder
    key?: SortOrder
    created?: SortOrder
    expiredAt?: SortOrder
    isUsed?: SortOrder
    userId?: SortOrder
  }

  export type PasswordResetRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type RefreshTokenCountOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMaxOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenMinOrderByAggregateInput = {
    id?: SortOrder
    token?: SortOrder
    userId?: SortOrder
  }

  export type RefreshTokenSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type RollPlacementListRelationFilter = {
    every?: RollPlacementWhereInput
    some?: RollPlacementWhereInput
    none?: RollPlacementWhereInput
  }

  export type RollPlacementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    departamentId?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    departamentId?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    departamentId?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    code?: SortOrder
    name?: SortOrder
    type?: SortOrder
    departamentId?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    departamentId?: SortOrder
  }

  export type EnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type RemainCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    metadata?: SortOrder
    shop?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    SellDate?: SortOrder
    PrintedDate?: SortOrder
    DepartamentId?: SortOrder
    IsDeleted?: SortOrder
  }

  export type RemainAvgOrderByAggregateInput = {
    shop?: SortOrder
    userId?: SortOrder
    DepartamentId?: SortOrder
  }

  export type RemainMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shop?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    SellDate?: SortOrder
    PrintedDate?: SortOrder
    DepartamentId?: SortOrder
    IsDeleted?: SortOrder
  }

  export type RemainMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    shop?: SortOrder
    userId?: SortOrder
    itemId?: SortOrder
    SellDate?: SortOrder
    PrintedDate?: SortOrder
    DepartamentId?: SortOrder
    IsDeleted?: SortOrder
  }

  export type RemainSumOrderByAggregateInput = {
    shop?: SortOrder
    userId?: SortOrder
    DepartamentId?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    Readed?: SortOrder
    message?: SortOrder
    showed?: SortOrder
    IsDeleted?: SortOrder
  }

  export type NotificationAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    Readed?: SortOrder
    message?: SortOrder
    showed?: SortOrder
    IsDeleted?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    Readed?: SortOrder
    message?: SortOrder
    showed?: SortOrder
    IsDeleted?: SortOrder
  }

  export type NotificationSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type ToolRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    toolName?: SortOrder
    description?: SortOrder
    howToContact?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    departamentId?: SortOrder
    RejectionReason?: SortOrder
    IsDeleted?: SortOrder
  }

  export type ToolRequestAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departamentId?: SortOrder
  }

  export type ToolRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    toolName?: SortOrder
    description?: SortOrder
    howToContact?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    departamentId?: SortOrder
    RejectionReason?: SortOrder
    IsDeleted?: SortOrder
  }

  export type ToolRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    toolName?: SortOrder
    description?: SortOrder
    howToContact?: SortOrder
    status?: SortOrder
    userId?: SortOrder
    departamentId?: SortOrder
    RejectionReason?: SortOrder
    IsDeleted?: SortOrder
  }

  export type ToolRequestSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    departamentId?: SortOrder
  }

  export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type ActivationRejectionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
  }

  export type ActivationRejectionAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ActivationRejectionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
  }

  export type ActivationRejectionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    reason?: SortOrder
  }

  export type ActivationRejectionSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type PaternosterAxisListRelationFilter = {
    every?: PaternosterAxisWhereInput
    some?: PaternosterAxisWhereInput
    none?: PaternosterAxisWhereInput
  }

  export type PaternosterAxisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaternosterCountOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    MaxSize?: SortOrder
    ShopId?: SortOrder
  }

  export type PaternosterAvgOrderByAggregateInput = {
    id?: SortOrder
    MaxSize?: SortOrder
    ShopId?: SortOrder
  }

  export type PaternosterMaxOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    MaxSize?: SortOrder
    ShopId?: SortOrder
  }

  export type PaternosterMinOrderByAggregateInput = {
    id?: SortOrder
    Name?: SortOrder
    MaxSize?: SortOrder
    ShopId?: SortOrder
  }

  export type PaternosterSumOrderByAggregateInput = {
    id?: SortOrder
    MaxSize?: SortOrder
    ShopId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PaternosterScalarRelationFilter = {
    is?: PaternosterWhereInput
    isNot?: PaternosterWhereInput
  }

  export type PaternosterAxisCountOrderByAggregateInput = {
    id?: SortOrder
    PaternosterId?: SortOrder
  }

  export type PaternosterAxisAvgOrderByAggregateInput = {
    id?: SortOrder
    PaternosterId?: SortOrder
  }

  export type PaternosterAxisMaxOrderByAggregateInput = {
    id?: SortOrder
    PaternosterId?: SortOrder
  }

  export type PaternosterAxisMinOrderByAggregateInput = {
    id?: SortOrder
    PaternosterId?: SortOrder
  }

  export type PaternosterAxisSumOrderByAggregateInput = {
    id?: SortOrder
    PaternosterId?: SortOrder
  }

  export type PaternosterAxisScalarRelationFilter = {
    is?: PaternosterAxisWhereInput
    isNot?: PaternosterAxisWhereInput
  }

  export type RollPlacementCountOrderByAggregateInput = {
    id?: SortOrder
    AxisId?: SortOrder
    Itemcode?: SortOrder
  }

  export type RollPlacementAvgOrderByAggregateInput = {
    id?: SortOrder
    AxisId?: SortOrder
  }

  export type RollPlacementMaxOrderByAggregateInput = {
    id?: SortOrder
    AxisId?: SortOrder
    Itemcode?: SortOrder
  }

  export type RollPlacementMinOrderByAggregateInput = {
    id?: SortOrder
    AxisId?: SortOrder
    Itemcode?: SortOrder
  }

  export type RollPlacementSumOrderByAggregateInput = {
    id?: SortOrder
    AxisId?: SortOrder
  }

  export type NotificationCreateNestedManyWithoutForUserInput = {
    create?: XOR<NotificationCreateWithoutForUserInput, NotificationUncheckedCreateWithoutForUserInput> | NotificationCreateWithoutForUserInput[] | NotificationUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutForUserInput | NotificationCreateOrConnectWithoutForUserInput[]
    createMany?: NotificationCreateManyForUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PasswordResetRequestCreateNestedManyWithoutForUserInput = {
    create?: XOR<PasswordResetRequestCreateWithoutForUserInput, PasswordResetRequestUncheckedCreateWithoutForUserInput> | PasswordResetRequestCreateWithoutForUserInput[] | PasswordResetRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: PasswordResetRequestCreateOrConnectWithoutForUserInput | PasswordResetRequestCreateOrConnectWithoutForUserInput[]
    createMany?: PasswordResetRequestCreateManyForUserInputEnvelope
    connect?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
  }

  export type RefreshTokenCreateNestedOneWithoutForUserInput = {
    create?: XOR<RefreshTokenCreateWithoutForUserInput, RefreshTokenUncheckedCreateWithoutForUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutForUserInput
    connect?: RefreshTokenWhereUniqueInput
  }

  export type RemainCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RemainCreateWithoutCreatedByInput, RemainUncheckedCreateWithoutCreatedByInput> | RemainCreateWithoutCreatedByInput[] | RemainUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutCreatedByInput | RemainCreateOrConnectWithoutCreatedByInput[]
    createMany?: RemainCreateManyCreatedByInputEnvelope
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
  }

  export type ToolRequestCreateNestedManyWithoutForUserInput = {
    create?: XOR<ToolRequestCreateWithoutForUserInput, ToolRequestUncheckedCreateWithoutForUserInput> | ToolRequestCreateWithoutForUserInput[] | ToolRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: ToolRequestCreateOrConnectWithoutForUserInput | ToolRequestCreateOrConnectWithoutForUserInput[]
    createMany?: ToolRequestCreateManyForUserInputEnvelope
    connect?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
  }

  export type ActivationRejectionCreateNestedOneWithoutUserInput = {
    create?: XOR<ActivationRejectionCreateWithoutUserInput, ActivationRejectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActivationRejectionCreateOrConnectWithoutUserInput
    connect?: ActivationRejectionWhereUniqueInput
  }

  export type NotificationUncheckedCreateNestedManyWithoutForUserInput = {
    create?: XOR<NotificationCreateWithoutForUserInput, NotificationUncheckedCreateWithoutForUserInput> | NotificationCreateWithoutForUserInput[] | NotificationUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutForUserInput | NotificationCreateOrConnectWithoutForUserInput[]
    createMany?: NotificationCreateManyForUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type PasswordResetRequestUncheckedCreateNestedManyWithoutForUserInput = {
    create?: XOR<PasswordResetRequestCreateWithoutForUserInput, PasswordResetRequestUncheckedCreateWithoutForUserInput> | PasswordResetRequestCreateWithoutForUserInput[] | PasswordResetRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: PasswordResetRequestCreateOrConnectWithoutForUserInput | PasswordResetRequestCreateOrConnectWithoutForUserInput[]
    createMany?: PasswordResetRequestCreateManyForUserInputEnvelope
    connect?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
  }

  export type RefreshTokenUncheckedCreateNestedOneWithoutForUserInput = {
    create?: XOR<RefreshTokenCreateWithoutForUserInput, RefreshTokenUncheckedCreateWithoutForUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutForUserInput
    connect?: RefreshTokenWhereUniqueInput
  }

  export type RemainUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<RemainCreateWithoutCreatedByInput, RemainUncheckedCreateWithoutCreatedByInput> | RemainCreateWithoutCreatedByInput[] | RemainUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutCreatedByInput | RemainCreateOrConnectWithoutCreatedByInput[]
    createMany?: RemainCreateManyCreatedByInputEnvelope
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
  }

  export type ToolRequestUncheckedCreateNestedManyWithoutForUserInput = {
    create?: XOR<ToolRequestCreateWithoutForUserInput, ToolRequestUncheckedCreateWithoutForUserInput> | ToolRequestCreateWithoutForUserInput[] | ToolRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: ToolRequestCreateOrConnectWithoutForUserInput | ToolRequestCreateOrConnectWithoutForUserInput[]
    createMany?: ToolRequestCreateManyForUserInputEnvelope
    connect?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
  }

  export type ActivationRejectionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ActivationRejectionCreateWithoutUserInput, ActivationRejectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActivationRejectionCreateOrConnectWithoutUserInput
    connect?: ActivationRejectionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NotificationUpdateManyWithoutForUserNestedInput = {
    create?: XOR<NotificationCreateWithoutForUserInput, NotificationUncheckedCreateWithoutForUserInput> | NotificationCreateWithoutForUserInput[] | NotificationUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutForUserInput | NotificationCreateOrConnectWithoutForUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutForUserInput | NotificationUpsertWithWhereUniqueWithoutForUserInput[]
    createMany?: NotificationCreateManyForUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutForUserInput | NotificationUpdateWithWhereUniqueWithoutForUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutForUserInput | NotificationUpdateManyWithWhereWithoutForUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PasswordResetRequestUpdateManyWithoutForUserNestedInput = {
    create?: XOR<PasswordResetRequestCreateWithoutForUserInput, PasswordResetRequestUncheckedCreateWithoutForUserInput> | PasswordResetRequestCreateWithoutForUserInput[] | PasswordResetRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: PasswordResetRequestCreateOrConnectWithoutForUserInput | PasswordResetRequestCreateOrConnectWithoutForUserInput[]
    upsert?: PasswordResetRequestUpsertWithWhereUniqueWithoutForUserInput | PasswordResetRequestUpsertWithWhereUniqueWithoutForUserInput[]
    createMany?: PasswordResetRequestCreateManyForUserInputEnvelope
    set?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    disconnect?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    delete?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    connect?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    update?: PasswordResetRequestUpdateWithWhereUniqueWithoutForUserInput | PasswordResetRequestUpdateWithWhereUniqueWithoutForUserInput[]
    updateMany?: PasswordResetRequestUpdateManyWithWhereWithoutForUserInput | PasswordResetRequestUpdateManyWithWhereWithoutForUserInput[]
    deleteMany?: PasswordResetRequestScalarWhereInput | PasswordResetRequestScalarWhereInput[]
  }

  export type RefreshTokenUpdateOneWithoutForUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutForUserInput, RefreshTokenUncheckedCreateWithoutForUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutForUserInput
    upsert?: RefreshTokenUpsertWithoutForUserInput
    disconnect?: RefreshTokenWhereInput | boolean
    delete?: RefreshTokenWhereInput | boolean
    connect?: RefreshTokenWhereUniqueInput
    update?: XOR<XOR<RefreshTokenUpdateToOneWithWhereWithoutForUserInput, RefreshTokenUpdateWithoutForUserInput>, RefreshTokenUncheckedUpdateWithoutForUserInput>
  }

  export type RemainUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RemainCreateWithoutCreatedByInput, RemainUncheckedCreateWithoutCreatedByInput> | RemainCreateWithoutCreatedByInput[] | RemainUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutCreatedByInput | RemainCreateOrConnectWithoutCreatedByInput[]
    upsert?: RemainUpsertWithWhereUniqueWithoutCreatedByInput | RemainUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RemainCreateManyCreatedByInputEnvelope
    set?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    disconnect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    delete?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    update?: RemainUpdateWithWhereUniqueWithoutCreatedByInput | RemainUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RemainUpdateManyWithWhereWithoutCreatedByInput | RemainUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RemainScalarWhereInput | RemainScalarWhereInput[]
  }

  export type ToolRequestUpdateManyWithoutForUserNestedInput = {
    create?: XOR<ToolRequestCreateWithoutForUserInput, ToolRequestUncheckedCreateWithoutForUserInput> | ToolRequestCreateWithoutForUserInput[] | ToolRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: ToolRequestCreateOrConnectWithoutForUserInput | ToolRequestCreateOrConnectWithoutForUserInput[]
    upsert?: ToolRequestUpsertWithWhereUniqueWithoutForUserInput | ToolRequestUpsertWithWhereUniqueWithoutForUserInput[]
    createMany?: ToolRequestCreateManyForUserInputEnvelope
    set?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    disconnect?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    delete?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    connect?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    update?: ToolRequestUpdateWithWhereUniqueWithoutForUserInput | ToolRequestUpdateWithWhereUniqueWithoutForUserInput[]
    updateMany?: ToolRequestUpdateManyWithWhereWithoutForUserInput | ToolRequestUpdateManyWithWhereWithoutForUserInput[]
    deleteMany?: ToolRequestScalarWhereInput | ToolRequestScalarWhereInput[]
  }

  export type ActivationRejectionUpdateOneWithoutUserNestedInput = {
    create?: XOR<ActivationRejectionCreateWithoutUserInput, ActivationRejectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActivationRejectionCreateOrConnectWithoutUserInput
    upsert?: ActivationRejectionUpsertWithoutUserInput
    disconnect?: ActivationRejectionWhereInput | boolean
    delete?: ActivationRejectionWhereInput | boolean
    connect?: ActivationRejectionWhereUniqueInput
    update?: XOR<XOR<ActivationRejectionUpdateToOneWithWhereWithoutUserInput, ActivationRejectionUpdateWithoutUserInput>, ActivationRejectionUncheckedUpdateWithoutUserInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NotificationUncheckedUpdateManyWithoutForUserNestedInput = {
    create?: XOR<NotificationCreateWithoutForUserInput, NotificationUncheckedCreateWithoutForUserInput> | NotificationCreateWithoutForUserInput[] | NotificationUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutForUserInput | NotificationCreateOrConnectWithoutForUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutForUserInput | NotificationUpsertWithWhereUniqueWithoutForUserInput[]
    createMany?: NotificationCreateManyForUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutForUserInput | NotificationUpdateWithWhereUniqueWithoutForUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutForUserInput | NotificationUpdateManyWithWhereWithoutForUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type PasswordResetRequestUncheckedUpdateManyWithoutForUserNestedInput = {
    create?: XOR<PasswordResetRequestCreateWithoutForUserInput, PasswordResetRequestUncheckedCreateWithoutForUserInput> | PasswordResetRequestCreateWithoutForUserInput[] | PasswordResetRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: PasswordResetRequestCreateOrConnectWithoutForUserInput | PasswordResetRequestCreateOrConnectWithoutForUserInput[]
    upsert?: PasswordResetRequestUpsertWithWhereUniqueWithoutForUserInput | PasswordResetRequestUpsertWithWhereUniqueWithoutForUserInput[]
    createMany?: PasswordResetRequestCreateManyForUserInputEnvelope
    set?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    disconnect?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    delete?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    connect?: PasswordResetRequestWhereUniqueInput | PasswordResetRequestWhereUniqueInput[]
    update?: PasswordResetRequestUpdateWithWhereUniqueWithoutForUserInput | PasswordResetRequestUpdateWithWhereUniqueWithoutForUserInput[]
    updateMany?: PasswordResetRequestUpdateManyWithWhereWithoutForUserInput | PasswordResetRequestUpdateManyWithWhereWithoutForUserInput[]
    deleteMany?: PasswordResetRequestScalarWhereInput | PasswordResetRequestScalarWhereInput[]
  }

  export type RefreshTokenUncheckedUpdateOneWithoutForUserNestedInput = {
    create?: XOR<RefreshTokenCreateWithoutForUserInput, RefreshTokenUncheckedCreateWithoutForUserInput>
    connectOrCreate?: RefreshTokenCreateOrConnectWithoutForUserInput
    upsert?: RefreshTokenUpsertWithoutForUserInput
    disconnect?: RefreshTokenWhereInput | boolean
    delete?: RefreshTokenWhereInput | boolean
    connect?: RefreshTokenWhereUniqueInput
    update?: XOR<XOR<RefreshTokenUpdateToOneWithWhereWithoutForUserInput, RefreshTokenUpdateWithoutForUserInput>, RefreshTokenUncheckedUpdateWithoutForUserInput>
  }

  export type RemainUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<RemainCreateWithoutCreatedByInput, RemainUncheckedCreateWithoutCreatedByInput> | RemainCreateWithoutCreatedByInput[] | RemainUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutCreatedByInput | RemainCreateOrConnectWithoutCreatedByInput[]
    upsert?: RemainUpsertWithWhereUniqueWithoutCreatedByInput | RemainUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: RemainCreateManyCreatedByInputEnvelope
    set?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    disconnect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    delete?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    update?: RemainUpdateWithWhereUniqueWithoutCreatedByInput | RemainUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: RemainUpdateManyWithWhereWithoutCreatedByInput | RemainUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: RemainScalarWhereInput | RemainScalarWhereInput[]
  }

  export type ToolRequestUncheckedUpdateManyWithoutForUserNestedInput = {
    create?: XOR<ToolRequestCreateWithoutForUserInput, ToolRequestUncheckedCreateWithoutForUserInput> | ToolRequestCreateWithoutForUserInput[] | ToolRequestUncheckedCreateWithoutForUserInput[]
    connectOrCreate?: ToolRequestCreateOrConnectWithoutForUserInput | ToolRequestCreateOrConnectWithoutForUserInput[]
    upsert?: ToolRequestUpsertWithWhereUniqueWithoutForUserInput | ToolRequestUpsertWithWhereUniqueWithoutForUserInput[]
    createMany?: ToolRequestCreateManyForUserInputEnvelope
    set?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    disconnect?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    delete?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    connect?: ToolRequestWhereUniqueInput | ToolRequestWhereUniqueInput[]
    update?: ToolRequestUpdateWithWhereUniqueWithoutForUserInput | ToolRequestUpdateWithWhereUniqueWithoutForUserInput[]
    updateMany?: ToolRequestUpdateManyWithWhereWithoutForUserInput | ToolRequestUpdateManyWithWhereWithoutForUserInput[]
    deleteMany?: ToolRequestScalarWhereInput | ToolRequestScalarWhereInput[]
  }

  export type ActivationRejectionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ActivationRejectionCreateWithoutUserInput, ActivationRejectionUncheckedCreateWithoutUserInput>
    connectOrCreate?: ActivationRejectionCreateOrConnectWithoutUserInput
    upsert?: ActivationRejectionUpsertWithoutUserInput
    disconnect?: ActivationRejectionWhereInput | boolean
    delete?: ActivationRejectionWhereInput | boolean
    connect?: ActivationRejectionWhereUniqueInput
    update?: XOR<XOR<ActivationRejectionUpdateToOneWithWhereWithoutUserInput, ActivationRejectionUpdateWithoutUserInput>, ActivationRejectionUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetsInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPasswordResetsNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetsInput
    upsert?: UserUpsertWithoutPasswordResetsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetsInput, UserUpdateWithoutPasswordResetsInput>, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserCreateNestedOneWithoutRefreshTokenInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRefreshTokenNestedInput = {
    create?: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutRefreshTokenInput
    upsert?: UserUpsertWithoutRefreshTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRefreshTokenInput, UserUpdateWithoutRefreshTokenInput>, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type RemainCreateNestedManyWithoutItemInput = {
    create?: XOR<RemainCreateWithoutItemInput, RemainUncheckedCreateWithoutItemInput> | RemainCreateWithoutItemInput[] | RemainUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutItemInput | RemainCreateOrConnectWithoutItemInput[]
    createMany?: RemainCreateManyItemInputEnvelope
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
  }

  export type RollPlacementCreateNestedManyWithoutItemInput = {
    create?: XOR<RollPlacementCreateWithoutItemInput, RollPlacementUncheckedCreateWithoutItemInput> | RollPlacementCreateWithoutItemInput[] | RollPlacementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutItemInput | RollPlacementCreateOrConnectWithoutItemInput[]
    createMany?: RollPlacementCreateManyItemInputEnvelope
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
  }

  export type RemainUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<RemainCreateWithoutItemInput, RemainUncheckedCreateWithoutItemInput> | RemainCreateWithoutItemInput[] | RemainUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutItemInput | RemainCreateOrConnectWithoutItemInput[]
    createMany?: RemainCreateManyItemInputEnvelope
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
  }

  export type RollPlacementUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<RollPlacementCreateWithoutItemInput, RollPlacementUncheckedCreateWithoutItemInput> | RollPlacementCreateWithoutItemInput[] | RollPlacementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutItemInput | RollPlacementCreateOrConnectWithoutItemInput[]
    createMany?: RollPlacementCreateManyItemInputEnvelope
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
  }

  export type EnumItemTypeFieldUpdateOperationsInput = {
    set?: $Enums.ItemType
  }

  export type RemainUpdateManyWithoutItemNestedInput = {
    create?: XOR<RemainCreateWithoutItemInput, RemainUncheckedCreateWithoutItemInput> | RemainCreateWithoutItemInput[] | RemainUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutItemInput | RemainCreateOrConnectWithoutItemInput[]
    upsert?: RemainUpsertWithWhereUniqueWithoutItemInput | RemainUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RemainCreateManyItemInputEnvelope
    set?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    disconnect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    delete?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    update?: RemainUpdateWithWhereUniqueWithoutItemInput | RemainUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RemainUpdateManyWithWhereWithoutItemInput | RemainUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RemainScalarWhereInput | RemainScalarWhereInput[]
  }

  export type RollPlacementUpdateManyWithoutItemNestedInput = {
    create?: XOR<RollPlacementCreateWithoutItemInput, RollPlacementUncheckedCreateWithoutItemInput> | RollPlacementCreateWithoutItemInput[] | RollPlacementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutItemInput | RollPlacementCreateOrConnectWithoutItemInput[]
    upsert?: RollPlacementUpsertWithWhereUniqueWithoutItemInput | RollPlacementUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RollPlacementCreateManyItemInputEnvelope
    set?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    disconnect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    delete?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    update?: RollPlacementUpdateWithWhereUniqueWithoutItemInput | RollPlacementUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RollPlacementUpdateManyWithWhereWithoutItemInput | RollPlacementUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RollPlacementScalarWhereInput | RollPlacementScalarWhereInput[]
  }

  export type RemainUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<RemainCreateWithoutItemInput, RemainUncheckedCreateWithoutItemInput> | RemainCreateWithoutItemInput[] | RemainUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RemainCreateOrConnectWithoutItemInput | RemainCreateOrConnectWithoutItemInput[]
    upsert?: RemainUpsertWithWhereUniqueWithoutItemInput | RemainUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RemainCreateManyItemInputEnvelope
    set?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    disconnect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    delete?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    connect?: RemainWhereUniqueInput | RemainWhereUniqueInput[]
    update?: RemainUpdateWithWhereUniqueWithoutItemInput | RemainUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RemainUpdateManyWithWhereWithoutItemInput | RemainUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RemainScalarWhereInput | RemainScalarWhereInput[]
  }

  export type RollPlacementUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<RollPlacementCreateWithoutItemInput, RollPlacementUncheckedCreateWithoutItemInput> | RollPlacementCreateWithoutItemInput[] | RollPlacementUncheckedCreateWithoutItemInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutItemInput | RollPlacementCreateOrConnectWithoutItemInput[]
    upsert?: RollPlacementUpsertWithWhereUniqueWithoutItemInput | RollPlacementUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: RollPlacementCreateManyItemInputEnvelope
    set?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    disconnect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    delete?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    update?: RollPlacementUpdateWithWhereUniqueWithoutItemInput | RollPlacementUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: RollPlacementUpdateManyWithWhereWithoutItemInput | RollPlacementUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: RollPlacementScalarWhereInput | RollPlacementScalarWhereInput[]
  }

  export type ItemCreateNestedOneWithoutRemainsInput = {
    create?: XOR<ItemCreateWithoutRemainsInput, ItemUncheckedCreateWithoutRemainsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRemainsInput
    connect?: ItemWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedRemainsInput = {
    create?: XOR<UserCreateWithoutCreatedRemainsInput, UserUncheckedCreateWithoutCreatedRemainsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRemainsInput
    connect?: UserWhereUniqueInput
  }

  export type ItemUpdateOneRequiredWithoutRemainsNestedInput = {
    create?: XOR<ItemCreateWithoutRemainsInput, ItemUncheckedCreateWithoutRemainsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRemainsInput
    upsert?: ItemUpsertWithoutRemainsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutRemainsInput, ItemUpdateWithoutRemainsInput>, ItemUncheckedUpdateWithoutRemainsInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedRemainsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedRemainsInput, UserUncheckedCreateWithoutCreatedRemainsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedRemainsInput
    upsert?: UserUpsertWithoutCreatedRemainsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedRemainsInput, UserUpdateWithoutCreatedRemainsInput>, UserUncheckedUpdateWithoutCreatedRemainsInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserCreateNestedOneWithoutToolRequestsInput = {
    create?: XOR<UserCreateWithoutToolRequestsInput, UserUncheckedCreateWithoutToolRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToolRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus
  }

  export type UserUpdateOneRequiredWithoutToolRequestsNestedInput = {
    create?: XOR<UserCreateWithoutToolRequestsInput, UserUncheckedCreateWithoutToolRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutToolRequestsInput
    upsert?: UserUpsertWithoutToolRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutToolRequestsInput, UserUpdateWithoutToolRequestsInput>, UserUncheckedUpdateWithoutToolRequestsInput>
  }

  export type UserCreateNestedOneWithoutActivationRejectionInput = {
    create?: XOR<UserCreateWithoutActivationRejectionInput, UserUncheckedCreateWithoutActivationRejectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivationRejectionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutActivationRejectionNestedInput = {
    create?: XOR<UserCreateWithoutActivationRejectionInput, UserUncheckedCreateWithoutActivationRejectionInput>
    connectOrCreate?: UserCreateOrConnectWithoutActivationRejectionInput
    upsert?: UserUpsertWithoutActivationRejectionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutActivationRejectionInput, UserUpdateWithoutActivationRejectionInput>, UserUncheckedUpdateWithoutActivationRejectionInput>
  }

  export type PaternosterAxisCreateNestedManyWithoutPaternosterInput = {
    create?: XOR<PaternosterAxisCreateWithoutPaternosterInput, PaternosterAxisUncheckedCreateWithoutPaternosterInput> | PaternosterAxisCreateWithoutPaternosterInput[] | PaternosterAxisUncheckedCreateWithoutPaternosterInput[]
    connectOrCreate?: PaternosterAxisCreateOrConnectWithoutPaternosterInput | PaternosterAxisCreateOrConnectWithoutPaternosterInput[]
    createMany?: PaternosterAxisCreateManyPaternosterInputEnvelope
    connect?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
  }

  export type PaternosterAxisUncheckedCreateNestedManyWithoutPaternosterInput = {
    create?: XOR<PaternosterAxisCreateWithoutPaternosterInput, PaternosterAxisUncheckedCreateWithoutPaternosterInput> | PaternosterAxisCreateWithoutPaternosterInput[] | PaternosterAxisUncheckedCreateWithoutPaternosterInput[]
    connectOrCreate?: PaternosterAxisCreateOrConnectWithoutPaternosterInput | PaternosterAxisCreateOrConnectWithoutPaternosterInput[]
    createMany?: PaternosterAxisCreateManyPaternosterInputEnvelope
    connect?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PaternosterAxisUpdateManyWithoutPaternosterNestedInput = {
    create?: XOR<PaternosterAxisCreateWithoutPaternosterInput, PaternosterAxisUncheckedCreateWithoutPaternosterInput> | PaternosterAxisCreateWithoutPaternosterInput[] | PaternosterAxisUncheckedCreateWithoutPaternosterInput[]
    connectOrCreate?: PaternosterAxisCreateOrConnectWithoutPaternosterInput | PaternosterAxisCreateOrConnectWithoutPaternosterInput[]
    upsert?: PaternosterAxisUpsertWithWhereUniqueWithoutPaternosterInput | PaternosterAxisUpsertWithWhereUniqueWithoutPaternosterInput[]
    createMany?: PaternosterAxisCreateManyPaternosterInputEnvelope
    set?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    disconnect?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    delete?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    connect?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    update?: PaternosterAxisUpdateWithWhereUniqueWithoutPaternosterInput | PaternosterAxisUpdateWithWhereUniqueWithoutPaternosterInput[]
    updateMany?: PaternosterAxisUpdateManyWithWhereWithoutPaternosterInput | PaternosterAxisUpdateManyWithWhereWithoutPaternosterInput[]
    deleteMany?: PaternosterAxisScalarWhereInput | PaternosterAxisScalarWhereInput[]
  }

  export type PaternosterAxisUncheckedUpdateManyWithoutPaternosterNestedInput = {
    create?: XOR<PaternosterAxisCreateWithoutPaternosterInput, PaternosterAxisUncheckedCreateWithoutPaternosterInput> | PaternosterAxisCreateWithoutPaternosterInput[] | PaternosterAxisUncheckedCreateWithoutPaternosterInput[]
    connectOrCreate?: PaternosterAxisCreateOrConnectWithoutPaternosterInput | PaternosterAxisCreateOrConnectWithoutPaternosterInput[]
    upsert?: PaternosterAxisUpsertWithWhereUniqueWithoutPaternosterInput | PaternosterAxisUpsertWithWhereUniqueWithoutPaternosterInput[]
    createMany?: PaternosterAxisCreateManyPaternosterInputEnvelope
    set?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    disconnect?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    delete?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    connect?: PaternosterAxisWhereUniqueInput | PaternosterAxisWhereUniqueInput[]
    update?: PaternosterAxisUpdateWithWhereUniqueWithoutPaternosterInput | PaternosterAxisUpdateWithWhereUniqueWithoutPaternosterInput[]
    updateMany?: PaternosterAxisUpdateManyWithWhereWithoutPaternosterInput | PaternosterAxisUpdateManyWithWhereWithoutPaternosterInput[]
    deleteMany?: PaternosterAxisScalarWhereInput | PaternosterAxisScalarWhereInput[]
  }

  export type PaternosterCreateNestedOneWithoutAxisesInput = {
    create?: XOR<PaternosterCreateWithoutAxisesInput, PaternosterUncheckedCreateWithoutAxisesInput>
    connectOrCreate?: PaternosterCreateOrConnectWithoutAxisesInput
    connect?: PaternosterWhereUniqueInput
  }

  export type RollPlacementCreateNestedManyWithoutPaternosterAxisInput = {
    create?: XOR<RollPlacementCreateWithoutPaternosterAxisInput, RollPlacementUncheckedCreateWithoutPaternosterAxisInput> | RollPlacementCreateWithoutPaternosterAxisInput[] | RollPlacementUncheckedCreateWithoutPaternosterAxisInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutPaternosterAxisInput | RollPlacementCreateOrConnectWithoutPaternosterAxisInput[]
    createMany?: RollPlacementCreateManyPaternosterAxisInputEnvelope
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
  }

  export type RollPlacementUncheckedCreateNestedManyWithoutPaternosterAxisInput = {
    create?: XOR<RollPlacementCreateWithoutPaternosterAxisInput, RollPlacementUncheckedCreateWithoutPaternosterAxisInput> | RollPlacementCreateWithoutPaternosterAxisInput[] | RollPlacementUncheckedCreateWithoutPaternosterAxisInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutPaternosterAxisInput | RollPlacementCreateOrConnectWithoutPaternosterAxisInput[]
    createMany?: RollPlacementCreateManyPaternosterAxisInputEnvelope
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
  }

  export type PaternosterUpdateOneRequiredWithoutAxisesNestedInput = {
    create?: XOR<PaternosterCreateWithoutAxisesInput, PaternosterUncheckedCreateWithoutAxisesInput>
    connectOrCreate?: PaternosterCreateOrConnectWithoutAxisesInput
    upsert?: PaternosterUpsertWithoutAxisesInput
    connect?: PaternosterWhereUniqueInput
    update?: XOR<XOR<PaternosterUpdateToOneWithWhereWithoutAxisesInput, PaternosterUpdateWithoutAxisesInput>, PaternosterUncheckedUpdateWithoutAxisesInput>
  }

  export type RollPlacementUpdateManyWithoutPaternosterAxisNestedInput = {
    create?: XOR<RollPlacementCreateWithoutPaternosterAxisInput, RollPlacementUncheckedCreateWithoutPaternosterAxisInput> | RollPlacementCreateWithoutPaternosterAxisInput[] | RollPlacementUncheckedCreateWithoutPaternosterAxisInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutPaternosterAxisInput | RollPlacementCreateOrConnectWithoutPaternosterAxisInput[]
    upsert?: RollPlacementUpsertWithWhereUniqueWithoutPaternosterAxisInput | RollPlacementUpsertWithWhereUniqueWithoutPaternosterAxisInput[]
    createMany?: RollPlacementCreateManyPaternosterAxisInputEnvelope
    set?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    disconnect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    delete?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    update?: RollPlacementUpdateWithWhereUniqueWithoutPaternosterAxisInput | RollPlacementUpdateWithWhereUniqueWithoutPaternosterAxisInput[]
    updateMany?: RollPlacementUpdateManyWithWhereWithoutPaternosterAxisInput | RollPlacementUpdateManyWithWhereWithoutPaternosterAxisInput[]
    deleteMany?: RollPlacementScalarWhereInput | RollPlacementScalarWhereInput[]
  }

  export type RollPlacementUncheckedUpdateManyWithoutPaternosterAxisNestedInput = {
    create?: XOR<RollPlacementCreateWithoutPaternosterAxisInput, RollPlacementUncheckedCreateWithoutPaternosterAxisInput> | RollPlacementCreateWithoutPaternosterAxisInput[] | RollPlacementUncheckedCreateWithoutPaternosterAxisInput[]
    connectOrCreate?: RollPlacementCreateOrConnectWithoutPaternosterAxisInput | RollPlacementCreateOrConnectWithoutPaternosterAxisInput[]
    upsert?: RollPlacementUpsertWithWhereUniqueWithoutPaternosterAxisInput | RollPlacementUpsertWithWhereUniqueWithoutPaternosterAxisInput[]
    createMany?: RollPlacementCreateManyPaternosterAxisInputEnvelope
    set?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    disconnect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    delete?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    connect?: RollPlacementWhereUniqueInput | RollPlacementWhereUniqueInput[]
    update?: RollPlacementUpdateWithWhereUniqueWithoutPaternosterAxisInput | RollPlacementUpdateWithWhereUniqueWithoutPaternosterAxisInput[]
    updateMany?: RollPlacementUpdateManyWithWhereWithoutPaternosterAxisInput | RollPlacementUpdateManyWithWhereWithoutPaternosterAxisInput[]
    deleteMany?: RollPlacementScalarWhereInput | RollPlacementScalarWhereInput[]
  }

  export type PaternosterAxisCreateNestedOneWithoutPlacementsInput = {
    create?: XOR<PaternosterAxisCreateWithoutPlacementsInput, PaternosterAxisUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: PaternosterAxisCreateOrConnectWithoutPlacementsInput
    connect?: PaternosterAxisWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutRollPlacementInput = {
    create?: XOR<ItemCreateWithoutRollPlacementInput, ItemUncheckedCreateWithoutRollPlacementInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRollPlacementInput
    connect?: ItemWhereUniqueInput
  }

  export type PaternosterAxisUpdateOneRequiredWithoutPlacementsNestedInput = {
    create?: XOR<PaternosterAxisCreateWithoutPlacementsInput, PaternosterAxisUncheckedCreateWithoutPlacementsInput>
    connectOrCreate?: PaternosterAxisCreateOrConnectWithoutPlacementsInput
    upsert?: PaternosterAxisUpsertWithoutPlacementsInput
    connect?: PaternosterAxisWhereUniqueInput
    update?: XOR<XOR<PaternosterAxisUpdateToOneWithWhereWithoutPlacementsInput, PaternosterAxisUpdateWithoutPlacementsInput>, PaternosterAxisUncheckedUpdateWithoutPlacementsInput>
  }

  export type ItemUpdateOneRequiredWithoutRollPlacementNestedInput = {
    create?: XOR<ItemCreateWithoutRollPlacementInput, ItemUncheckedCreateWithoutRollPlacementInput>
    connectOrCreate?: ItemCreateOrConnectWithoutRollPlacementInput
    upsert?: ItemUpsertWithoutRollPlacementInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutRollPlacementInput, ItemUpdateWithoutRollPlacementInput>, ItemUncheckedUpdateWithoutRollPlacementInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumItemTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeFilter<$PrismaModel> | $Enums.ItemType
  }

  export type NestedEnumItemTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ItemType | EnumItemTypeFieldRefInput<$PrismaModel>
    in?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.ItemType[] | ListEnumItemTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumItemTypeWithAggregatesFilter<$PrismaModel> | $Enums.ItemType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumItemTypeFilter<$PrismaModel>
    _max?: NestedEnumItemTypeFilter<$PrismaModel>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus
  }

  export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | EnumRequestStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestStatus[] | ListEnumRequestStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestStatusFilter<$PrismaModel>
    _max?: NestedEnumRequestStatusFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NotificationCreateWithoutForUserInput = {
    createdAt?: Date | string
    Readed?: boolean
    message: string
    showed?: Date | string | null
    IsDeleted?: boolean
  }

  export type NotificationUncheckedCreateWithoutForUserInput = {
    id?: number
    createdAt?: Date | string
    Readed?: boolean
    message: string
    showed?: Date | string | null
    IsDeleted?: boolean
  }

  export type NotificationCreateOrConnectWithoutForUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutForUserInput, NotificationUncheckedCreateWithoutForUserInput>
  }

  export type NotificationCreateManyForUserInputEnvelope = {
    data: NotificationCreateManyForUserInput | NotificationCreateManyForUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetRequestCreateWithoutForUserInput = {
    ip: string
    key: string
    created?: Date | string
    expiredAt: Date | string
    isUsed?: boolean
  }

  export type PasswordResetRequestUncheckedCreateWithoutForUserInput = {
    id?: number
    ip: string
    key: string
    created?: Date | string
    expiredAt: Date | string
    isUsed?: boolean
  }

  export type PasswordResetRequestCreateOrConnectWithoutForUserInput = {
    where: PasswordResetRequestWhereUniqueInput
    create: XOR<PasswordResetRequestCreateWithoutForUserInput, PasswordResetRequestUncheckedCreateWithoutForUserInput>
  }

  export type PasswordResetRequestCreateManyForUserInputEnvelope = {
    data: PasswordResetRequestCreateManyForUserInput | PasswordResetRequestCreateManyForUserInput[]
    skipDuplicates?: boolean
  }

  export type RefreshTokenCreateWithoutForUserInput = {
    token: string
  }

  export type RefreshTokenUncheckedCreateWithoutForUserInput = {
    id?: number
    token: string
  }

  export type RefreshTokenCreateOrConnectWithoutForUserInput = {
    where: RefreshTokenWhereUniqueInput
    create: XOR<RefreshTokenCreateWithoutForUserInput, RefreshTokenUncheckedCreateWithoutForUserInput>
  }

  export type RemainCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
    item: ItemCreateNestedOneWithoutRemainsInput
  }

  export type RemainUncheckedCreateWithoutCreatedByInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    itemId: string
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
  }

  export type RemainCreateOrConnectWithoutCreatedByInput = {
    where: RemainWhereUniqueInput
    create: XOR<RemainCreateWithoutCreatedByInput, RemainUncheckedCreateWithoutCreatedByInput>
  }

  export type RemainCreateManyCreatedByInputEnvelope = {
    data: RemainCreateManyCreatedByInput | RemainCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type ToolRequestCreateWithoutForUserInput = {
    createdAt?: Date | string
    toolName: string
    description: string
    howToContact?: string | null
    status?: $Enums.RequestStatus
    departamentId: number
    RejectionReason?: string | null
    IsDeleted?: boolean
  }

  export type ToolRequestUncheckedCreateWithoutForUserInput = {
    id?: number
    createdAt?: Date | string
    toolName: string
    description: string
    howToContact?: string | null
    status?: $Enums.RequestStatus
    departamentId: number
    RejectionReason?: string | null
    IsDeleted?: boolean
  }

  export type ToolRequestCreateOrConnectWithoutForUserInput = {
    where: ToolRequestWhereUniqueInput
    create: XOR<ToolRequestCreateWithoutForUserInput, ToolRequestUncheckedCreateWithoutForUserInput>
  }

  export type ToolRequestCreateManyForUserInputEnvelope = {
    data: ToolRequestCreateManyForUserInput | ToolRequestCreateManyForUserInput[]
    skipDuplicates?: boolean
  }

  export type ActivationRejectionCreateWithoutUserInput = {
    reason: string
  }

  export type ActivationRejectionUncheckedCreateWithoutUserInput = {
    id?: number
    reason: string
  }

  export type ActivationRejectionCreateOrConnectWithoutUserInput = {
    where: ActivationRejectionWhereUniqueInput
    create: XOR<ActivationRejectionCreateWithoutUserInput, ActivationRejectionUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutForUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutForUserInput, NotificationUncheckedUpdateWithoutForUserInput>
    create: XOR<NotificationCreateWithoutForUserInput, NotificationUncheckedCreateWithoutForUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutForUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutForUserInput, NotificationUncheckedUpdateWithoutForUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutForUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutForUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: IntFilter<"Notification"> | number
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    userId?: IntFilter<"Notification"> | number
    Readed?: BoolFilter<"Notification"> | boolean
    message?: StringFilter<"Notification"> | string
    showed?: DateTimeNullableFilter<"Notification"> | Date | string | null
    IsDeleted?: BoolFilter<"Notification"> | boolean
  }

  export type PasswordResetRequestUpsertWithWhereUniqueWithoutForUserInput = {
    where: PasswordResetRequestWhereUniqueInput
    update: XOR<PasswordResetRequestUpdateWithoutForUserInput, PasswordResetRequestUncheckedUpdateWithoutForUserInput>
    create: XOR<PasswordResetRequestCreateWithoutForUserInput, PasswordResetRequestUncheckedCreateWithoutForUserInput>
  }

  export type PasswordResetRequestUpdateWithWhereUniqueWithoutForUserInput = {
    where: PasswordResetRequestWhereUniqueInput
    data: XOR<PasswordResetRequestUpdateWithoutForUserInput, PasswordResetRequestUncheckedUpdateWithoutForUserInput>
  }

  export type PasswordResetRequestUpdateManyWithWhereWithoutForUserInput = {
    where: PasswordResetRequestScalarWhereInput
    data: XOR<PasswordResetRequestUpdateManyMutationInput, PasswordResetRequestUncheckedUpdateManyWithoutForUserInput>
  }

  export type PasswordResetRequestScalarWhereInput = {
    AND?: PasswordResetRequestScalarWhereInput | PasswordResetRequestScalarWhereInput[]
    OR?: PasswordResetRequestScalarWhereInput[]
    NOT?: PasswordResetRequestScalarWhereInput | PasswordResetRequestScalarWhereInput[]
    id?: IntFilter<"PasswordResetRequest"> | number
    ip?: StringFilter<"PasswordResetRequest"> | string
    key?: StringFilter<"PasswordResetRequest"> | string
    created?: DateTimeFilter<"PasswordResetRequest"> | Date | string
    expiredAt?: DateTimeFilter<"PasswordResetRequest"> | Date | string
    isUsed?: BoolFilter<"PasswordResetRequest"> | boolean
    userId?: IntFilter<"PasswordResetRequest"> | number
  }

  export type RefreshTokenUpsertWithoutForUserInput = {
    update: XOR<RefreshTokenUpdateWithoutForUserInput, RefreshTokenUncheckedUpdateWithoutForUserInput>
    create: XOR<RefreshTokenCreateWithoutForUserInput, RefreshTokenUncheckedCreateWithoutForUserInput>
    where?: RefreshTokenWhereInput
  }

  export type RefreshTokenUpdateToOneWithWhereWithoutForUserInput = {
    where?: RefreshTokenWhereInput
    data: XOR<RefreshTokenUpdateWithoutForUserInput, RefreshTokenUncheckedUpdateWithoutForUserInput>
  }

  export type RefreshTokenUpdateWithoutForUserInput = {
    token?: StringFieldUpdateOperationsInput | string
  }

  export type RefreshTokenUncheckedUpdateWithoutForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    token?: StringFieldUpdateOperationsInput | string
  }

  export type RemainUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: RemainWhereUniqueInput
    update: XOR<RemainUpdateWithoutCreatedByInput, RemainUncheckedUpdateWithoutCreatedByInput>
    create: XOR<RemainCreateWithoutCreatedByInput, RemainUncheckedCreateWithoutCreatedByInput>
  }

  export type RemainUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: RemainWhereUniqueInput
    data: XOR<RemainUpdateWithoutCreatedByInput, RemainUncheckedUpdateWithoutCreatedByInput>
  }

  export type RemainUpdateManyWithWhereWithoutCreatedByInput = {
    where: RemainScalarWhereInput
    data: XOR<RemainUpdateManyMutationInput, RemainUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type RemainScalarWhereInput = {
    AND?: RemainScalarWhereInput | RemainScalarWhereInput[]
    OR?: RemainScalarWhereInput[]
    NOT?: RemainScalarWhereInput | RemainScalarWhereInput[]
    id?: UuidFilter<"Remain"> | string
    createdAt?: DateTimeFilter<"Remain"> | Date | string
    metadata?: JsonFilter<"Remain">
    shop?: IntFilter<"Remain"> | number
    userId?: IntFilter<"Remain"> | number
    itemId?: StringFilter<"Remain"> | string
    SellDate?: DateTimeNullableFilter<"Remain"> | Date | string | null
    PrintedDate?: DateTimeNullableFilter<"Remain"> | Date | string | null
    DepartamentId?: IntNullableFilter<"Remain"> | number | null
    IsDeleted?: BoolFilter<"Remain"> | boolean
  }

  export type ToolRequestUpsertWithWhereUniqueWithoutForUserInput = {
    where: ToolRequestWhereUniqueInput
    update: XOR<ToolRequestUpdateWithoutForUserInput, ToolRequestUncheckedUpdateWithoutForUserInput>
    create: XOR<ToolRequestCreateWithoutForUserInput, ToolRequestUncheckedCreateWithoutForUserInput>
  }

  export type ToolRequestUpdateWithWhereUniqueWithoutForUserInput = {
    where: ToolRequestWhereUniqueInput
    data: XOR<ToolRequestUpdateWithoutForUserInput, ToolRequestUncheckedUpdateWithoutForUserInput>
  }

  export type ToolRequestUpdateManyWithWhereWithoutForUserInput = {
    where: ToolRequestScalarWhereInput
    data: XOR<ToolRequestUpdateManyMutationInput, ToolRequestUncheckedUpdateManyWithoutForUserInput>
  }

  export type ToolRequestScalarWhereInput = {
    AND?: ToolRequestScalarWhereInput | ToolRequestScalarWhereInput[]
    OR?: ToolRequestScalarWhereInput[]
    NOT?: ToolRequestScalarWhereInput | ToolRequestScalarWhereInput[]
    id?: IntFilter<"ToolRequest"> | number
    createdAt?: DateTimeFilter<"ToolRequest"> | Date | string
    toolName?: StringFilter<"ToolRequest"> | string
    description?: StringFilter<"ToolRequest"> | string
    howToContact?: StringNullableFilter<"ToolRequest"> | string | null
    status?: EnumRequestStatusFilter<"ToolRequest"> | $Enums.RequestStatus
    userId?: IntFilter<"ToolRequest"> | number
    departamentId?: IntFilter<"ToolRequest"> | number
    RejectionReason?: StringNullableFilter<"ToolRequest"> | string | null
    IsDeleted?: BoolFilter<"ToolRequest"> | boolean
  }

  export type ActivationRejectionUpsertWithoutUserInput = {
    update: XOR<ActivationRejectionUpdateWithoutUserInput, ActivationRejectionUncheckedUpdateWithoutUserInput>
    create: XOR<ActivationRejectionCreateWithoutUserInput, ActivationRejectionUncheckedCreateWithoutUserInput>
    where?: ActivationRejectionWhereInput
  }

  export type ActivationRejectionUpdateToOneWithWhereWithoutUserInput = {
    where?: ActivationRejectionWhereInput
    data: XOR<ActivationRejectionUpdateWithoutUserInput, ActivationRejectionUncheckedUpdateWithoutUserInput>
  }

  export type ActivationRejectionUpdateWithoutUserInput = {
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type ActivationRejectionUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    reason?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateWithoutPasswordResetsInput = {
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutForUserInput
    createdRemains?: RemainCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetsInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutForUserInput
    createdRemains?: RemainUncheckedCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestUncheckedCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
  }

  export type UserUpsertWithoutPasswordResetsInput = {
    update: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
    create: XOR<UserCreateWithoutPasswordResetsInput, UserUncheckedCreateWithoutPasswordResetsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetsInput, UserUncheckedUpdateWithoutPasswordResetsInput>
  }

  export type UserUpdateWithoutPasswordResetsInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUncheckedUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUncheckedUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutRefreshTokenInput = {
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestCreateNestedManyWithoutForUserInput
    createdRemains?: RemainCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRefreshTokenInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestUncheckedCreateNestedManyWithoutForUserInput
    createdRemains?: RemainUncheckedCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestUncheckedCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRefreshTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
  }

  export type UserUpsertWithoutRefreshTokenInput = {
    update: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
    create: XOR<UserCreateWithoutRefreshTokenInput, UserUncheckedCreateWithoutRefreshTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRefreshTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRefreshTokenInput, UserUncheckedUpdateWithoutRefreshTokenInput>
  }

  export type UserUpdateWithoutRefreshTokenInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUpdateManyWithoutForUserNestedInput
    createdRemains?: RemainUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRefreshTokenInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUncheckedUpdateManyWithoutForUserNestedInput
    createdRemains?: RemainUncheckedUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUncheckedUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type RemainCreateWithoutItemInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
    createdBy: UserCreateNestedOneWithoutCreatedRemainsInput
  }

  export type RemainUncheckedCreateWithoutItemInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    userId: number
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
  }

  export type RemainCreateOrConnectWithoutItemInput = {
    where: RemainWhereUniqueInput
    create: XOR<RemainCreateWithoutItemInput, RemainUncheckedCreateWithoutItemInput>
  }

  export type RemainCreateManyItemInputEnvelope = {
    data: RemainCreateManyItemInput | RemainCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type RollPlacementCreateWithoutItemInput = {
    PaternosterAxis: PaternosterAxisCreateNestedOneWithoutPlacementsInput
  }

  export type RollPlacementUncheckedCreateWithoutItemInput = {
    id?: number
    AxisId: number
  }

  export type RollPlacementCreateOrConnectWithoutItemInput = {
    where: RollPlacementWhereUniqueInput
    create: XOR<RollPlacementCreateWithoutItemInput, RollPlacementUncheckedCreateWithoutItemInput>
  }

  export type RollPlacementCreateManyItemInputEnvelope = {
    data: RollPlacementCreateManyItemInput | RollPlacementCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type RemainUpsertWithWhereUniqueWithoutItemInput = {
    where: RemainWhereUniqueInput
    update: XOR<RemainUpdateWithoutItemInput, RemainUncheckedUpdateWithoutItemInput>
    create: XOR<RemainCreateWithoutItemInput, RemainUncheckedCreateWithoutItemInput>
  }

  export type RemainUpdateWithWhereUniqueWithoutItemInput = {
    where: RemainWhereUniqueInput
    data: XOR<RemainUpdateWithoutItemInput, RemainUncheckedUpdateWithoutItemInput>
  }

  export type RemainUpdateManyWithWhereWithoutItemInput = {
    where: RemainScalarWhereInput
    data: XOR<RemainUpdateManyMutationInput, RemainUncheckedUpdateManyWithoutItemInput>
  }

  export type RollPlacementUpsertWithWhereUniqueWithoutItemInput = {
    where: RollPlacementWhereUniqueInput
    update: XOR<RollPlacementUpdateWithoutItemInput, RollPlacementUncheckedUpdateWithoutItemInput>
    create: XOR<RollPlacementCreateWithoutItemInput, RollPlacementUncheckedCreateWithoutItemInput>
  }

  export type RollPlacementUpdateWithWhereUniqueWithoutItemInput = {
    where: RollPlacementWhereUniqueInput
    data: XOR<RollPlacementUpdateWithoutItemInput, RollPlacementUncheckedUpdateWithoutItemInput>
  }

  export type RollPlacementUpdateManyWithWhereWithoutItemInput = {
    where: RollPlacementScalarWhereInput
    data: XOR<RollPlacementUpdateManyMutationInput, RollPlacementUncheckedUpdateManyWithoutItemInput>
  }

  export type RollPlacementScalarWhereInput = {
    AND?: RollPlacementScalarWhereInput | RollPlacementScalarWhereInput[]
    OR?: RollPlacementScalarWhereInput[]
    NOT?: RollPlacementScalarWhereInput | RollPlacementScalarWhereInput[]
    id?: IntFilter<"RollPlacement"> | number
    AxisId?: IntFilter<"RollPlacement"> | number
    Itemcode?: StringFilter<"RollPlacement"> | string
  }

  export type ItemCreateWithoutRemainsInput = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId?: number | null
    RollPlacement?: RollPlacementCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutRemainsInput = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId?: number | null
    RollPlacement?: RollPlacementUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutRemainsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutRemainsInput, ItemUncheckedCreateWithoutRemainsInput>
  }

  export type UserCreateWithoutCreatedRemainsInput = {
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutForUserInput
    toolRequests?: ToolRequestCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedRemainsInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestUncheckedCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutForUserInput
    toolRequests?: ToolRequestUncheckedCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedRemainsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedRemainsInput, UserUncheckedCreateWithoutCreatedRemainsInput>
  }

  export type ItemUpsertWithoutRemainsInput = {
    update: XOR<ItemUpdateWithoutRemainsInput, ItemUncheckedUpdateWithoutRemainsInput>
    create: XOR<ItemCreateWithoutRemainsInput, ItemUncheckedCreateWithoutRemainsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutRemainsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutRemainsInput, ItemUncheckedUpdateWithoutRemainsInput>
  }

  export type ItemUpdateWithoutRemainsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    RollPlacement?: RollPlacementUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutRemainsInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    RollPlacement?: RollPlacementUncheckedUpdateManyWithoutItemNestedInput
  }

  export type UserUpsertWithoutCreatedRemainsInput = {
    update: XOR<UserUpdateWithoutCreatedRemainsInput, UserUncheckedUpdateWithoutCreatedRemainsInput>
    create: XOR<UserCreateWithoutCreatedRemainsInput, UserUncheckedCreateWithoutCreatedRemainsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedRemainsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedRemainsInput, UserUncheckedUpdateWithoutCreatedRemainsInput>
  }

  export type UserUpdateWithoutCreatedRemainsInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutForUserNestedInput
    toolRequests?: ToolRequestUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedRemainsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUncheckedUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutForUserNestedInput
    toolRequests?: ToolRequestUncheckedUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    passwordResets?: PasswordResetRequestCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutForUserInput
    createdRemains?: RemainCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    passwordResets?: PasswordResetRequestUncheckedCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutForUserInput
    createdRemains?: RemainUncheckedCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestUncheckedCreateNestedManyWithoutForUserInput
    ActivationRejection?: ActivationRejectionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    passwordResets?: PasswordResetRequestUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    passwordResets?: PasswordResetRequestUncheckedUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUncheckedUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUncheckedUpdateManyWithoutForUserNestedInput
    ActivationRejection?: ActivationRejectionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutToolRequestsInput = {
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutForUserInput
    createdRemains?: RemainCreateNestedManyWithoutCreatedByInput
    ActivationRejection?: ActivationRejectionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutToolRequestsInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestUncheckedCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutForUserInput
    createdRemains?: RemainUncheckedCreateNestedManyWithoutCreatedByInput
    ActivationRejection?: ActivationRejectionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutToolRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutToolRequestsInput, UserUncheckedCreateWithoutToolRequestsInput>
  }

  export type UserUpsertWithoutToolRequestsInput = {
    update: XOR<UserUpdateWithoutToolRequestsInput, UserUncheckedUpdateWithoutToolRequestsInput>
    create: XOR<UserCreateWithoutToolRequestsInput, UserUncheckedCreateWithoutToolRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutToolRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutToolRequestsInput, UserUncheckedUpdateWithoutToolRequestsInput>
  }

  export type UserUpdateWithoutToolRequestsInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUpdateManyWithoutCreatedByNestedInput
    ActivationRejection?: ActivationRejectionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutToolRequestsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUncheckedUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUncheckedUpdateManyWithoutCreatedByNestedInput
    ActivationRejection?: ActivationRejectionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutActivationRejectionInput = {
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenCreateNestedOneWithoutForUserInput
    createdRemains?: RemainCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestCreateNestedManyWithoutForUserInput
  }

  export type UserUncheckedCreateWithoutActivationRejectionInput = {
    id?: number
    name: string
    password: string
    lastOnline?: Date | string | null
    role?: $Enums.Role
    shopId?: number | null
    departamentId?: number | null
    phone: string
    telegramChat?: string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedCreateNestedManyWithoutForUserInput
    passwordResets?: PasswordResetRequestUncheckedCreateNestedManyWithoutForUserInput
    refreshToken?: RefreshTokenUncheckedCreateNestedOneWithoutForUserInput
    createdRemains?: RemainUncheckedCreateNestedManyWithoutCreatedByInput
    toolRequests?: ToolRequestUncheckedCreateNestedManyWithoutForUserInput
  }

  export type UserCreateOrConnectWithoutActivationRejectionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutActivationRejectionInput, UserUncheckedCreateWithoutActivationRejectionInput>
  }

  export type UserUpsertWithoutActivationRejectionInput = {
    update: XOR<UserUpdateWithoutActivationRejectionInput, UserUncheckedUpdateWithoutActivationRejectionInput>
    create: XOR<UserCreateWithoutActivationRejectionInput, UserUncheckedCreateWithoutActivationRejectionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutActivationRejectionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutActivationRejectionInput, UserUncheckedUpdateWithoutActivationRejectionInput>
  }

  export type UserUpdateWithoutActivationRejectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUpdateManyWithoutForUserNestedInput
  }

  export type UserUncheckedUpdateWithoutActivationRejectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    lastOnline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    phone?: StringFieldUpdateOperationsInput | string
    telegramChat?: NullableStringFieldUpdateOperationsInput | string | null
    telegramSettings?: NullableJsonNullValueInput | InputJsonValue
    notifications?: NotificationUncheckedUpdateManyWithoutForUserNestedInput
    passwordResets?: PasswordResetRequestUncheckedUpdateManyWithoutForUserNestedInput
    refreshToken?: RefreshTokenUncheckedUpdateOneWithoutForUserNestedInput
    createdRemains?: RemainUncheckedUpdateManyWithoutCreatedByNestedInput
    toolRequests?: ToolRequestUncheckedUpdateManyWithoutForUserNestedInput
  }

  export type PaternosterAxisCreateWithoutPaternosterInput = {
    Placements?: RollPlacementCreateNestedManyWithoutPaternosterAxisInput
  }

  export type PaternosterAxisUncheckedCreateWithoutPaternosterInput = {
    id?: number
    Placements?: RollPlacementUncheckedCreateNestedManyWithoutPaternosterAxisInput
  }

  export type PaternosterAxisCreateOrConnectWithoutPaternosterInput = {
    where: PaternosterAxisWhereUniqueInput
    create: XOR<PaternosterAxisCreateWithoutPaternosterInput, PaternosterAxisUncheckedCreateWithoutPaternosterInput>
  }

  export type PaternosterAxisCreateManyPaternosterInputEnvelope = {
    data: PaternosterAxisCreateManyPaternosterInput | PaternosterAxisCreateManyPaternosterInput[]
    skipDuplicates?: boolean
  }

  export type PaternosterAxisUpsertWithWhereUniqueWithoutPaternosterInput = {
    where: PaternosterAxisWhereUniqueInput
    update: XOR<PaternosterAxisUpdateWithoutPaternosterInput, PaternosterAxisUncheckedUpdateWithoutPaternosterInput>
    create: XOR<PaternosterAxisCreateWithoutPaternosterInput, PaternosterAxisUncheckedCreateWithoutPaternosterInput>
  }

  export type PaternosterAxisUpdateWithWhereUniqueWithoutPaternosterInput = {
    where: PaternosterAxisWhereUniqueInput
    data: XOR<PaternosterAxisUpdateWithoutPaternosterInput, PaternosterAxisUncheckedUpdateWithoutPaternosterInput>
  }

  export type PaternosterAxisUpdateManyWithWhereWithoutPaternosterInput = {
    where: PaternosterAxisScalarWhereInput
    data: XOR<PaternosterAxisUpdateManyMutationInput, PaternosterAxisUncheckedUpdateManyWithoutPaternosterInput>
  }

  export type PaternosterAxisScalarWhereInput = {
    AND?: PaternosterAxisScalarWhereInput | PaternosterAxisScalarWhereInput[]
    OR?: PaternosterAxisScalarWhereInput[]
    NOT?: PaternosterAxisScalarWhereInput | PaternosterAxisScalarWhereInput[]
    id?: IntFilter<"PaternosterAxis"> | number
    PaternosterId?: IntFilter<"PaternosterAxis"> | number
  }

  export type PaternosterCreateWithoutAxisesInput = {
    Name: string
    MaxSize: number
    ShopId: number
  }

  export type PaternosterUncheckedCreateWithoutAxisesInput = {
    id?: number
    Name: string
    MaxSize: number
    ShopId: number
  }

  export type PaternosterCreateOrConnectWithoutAxisesInput = {
    where: PaternosterWhereUniqueInput
    create: XOR<PaternosterCreateWithoutAxisesInput, PaternosterUncheckedCreateWithoutAxisesInput>
  }

  export type RollPlacementCreateWithoutPaternosterAxisInput = {
    Item: ItemCreateNestedOneWithoutRollPlacementInput
  }

  export type RollPlacementUncheckedCreateWithoutPaternosterAxisInput = {
    id?: number
    Itemcode: string
  }

  export type RollPlacementCreateOrConnectWithoutPaternosterAxisInput = {
    where: RollPlacementWhereUniqueInput
    create: XOR<RollPlacementCreateWithoutPaternosterAxisInput, RollPlacementUncheckedCreateWithoutPaternosterAxisInput>
  }

  export type RollPlacementCreateManyPaternosterAxisInputEnvelope = {
    data: RollPlacementCreateManyPaternosterAxisInput | RollPlacementCreateManyPaternosterAxisInput[]
    skipDuplicates?: boolean
  }

  export type PaternosterUpsertWithoutAxisesInput = {
    update: XOR<PaternosterUpdateWithoutAxisesInput, PaternosterUncheckedUpdateWithoutAxisesInput>
    create: XOR<PaternosterCreateWithoutAxisesInput, PaternosterUncheckedCreateWithoutAxisesInput>
    where?: PaternosterWhereInput
  }

  export type PaternosterUpdateToOneWithWhereWithoutAxisesInput = {
    where?: PaternosterWhereInput
    data: XOR<PaternosterUpdateWithoutAxisesInput, PaternosterUncheckedUpdateWithoutAxisesInput>
  }

  export type PaternosterUpdateWithoutAxisesInput = {
    Name?: StringFieldUpdateOperationsInput | string
    MaxSize?: FloatFieldUpdateOperationsInput | number
    ShopId?: IntFieldUpdateOperationsInput | number
  }

  export type PaternosterUncheckedUpdateWithoutAxisesInput = {
    id?: IntFieldUpdateOperationsInput | number
    Name?: StringFieldUpdateOperationsInput | string
    MaxSize?: FloatFieldUpdateOperationsInput | number
    ShopId?: IntFieldUpdateOperationsInput | number
  }

  export type RollPlacementUpsertWithWhereUniqueWithoutPaternosterAxisInput = {
    where: RollPlacementWhereUniqueInput
    update: XOR<RollPlacementUpdateWithoutPaternosterAxisInput, RollPlacementUncheckedUpdateWithoutPaternosterAxisInput>
    create: XOR<RollPlacementCreateWithoutPaternosterAxisInput, RollPlacementUncheckedCreateWithoutPaternosterAxisInput>
  }

  export type RollPlacementUpdateWithWhereUniqueWithoutPaternosterAxisInput = {
    where: RollPlacementWhereUniqueInput
    data: XOR<RollPlacementUpdateWithoutPaternosterAxisInput, RollPlacementUncheckedUpdateWithoutPaternosterAxisInput>
  }

  export type RollPlacementUpdateManyWithWhereWithoutPaternosterAxisInput = {
    where: RollPlacementScalarWhereInput
    data: XOR<RollPlacementUpdateManyMutationInput, RollPlacementUncheckedUpdateManyWithoutPaternosterAxisInput>
  }

  export type PaternosterAxisCreateWithoutPlacementsInput = {
    Paternoster: PaternosterCreateNestedOneWithoutAxisesInput
  }

  export type PaternosterAxisUncheckedCreateWithoutPlacementsInput = {
    id?: number
    PaternosterId: number
  }

  export type PaternosterAxisCreateOrConnectWithoutPlacementsInput = {
    where: PaternosterAxisWhereUniqueInput
    create: XOR<PaternosterAxisCreateWithoutPlacementsInput, PaternosterAxisUncheckedCreateWithoutPlacementsInput>
  }

  export type ItemCreateWithoutRollPlacementInput = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId?: number | null
    remains?: RemainCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateWithoutRollPlacementInput = {
    code: string
    name: string
    type: $Enums.ItemType
    departamentId?: number | null
    remains?: RemainUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemCreateOrConnectWithoutRollPlacementInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutRollPlacementInput, ItemUncheckedCreateWithoutRollPlacementInput>
  }

  export type PaternosterAxisUpsertWithoutPlacementsInput = {
    update: XOR<PaternosterAxisUpdateWithoutPlacementsInput, PaternosterAxisUncheckedUpdateWithoutPlacementsInput>
    create: XOR<PaternosterAxisCreateWithoutPlacementsInput, PaternosterAxisUncheckedCreateWithoutPlacementsInput>
    where?: PaternosterAxisWhereInput
  }

  export type PaternosterAxisUpdateToOneWithWhereWithoutPlacementsInput = {
    where?: PaternosterAxisWhereInput
    data: XOR<PaternosterAxisUpdateWithoutPlacementsInput, PaternosterAxisUncheckedUpdateWithoutPlacementsInput>
  }

  export type PaternosterAxisUpdateWithoutPlacementsInput = {
    Paternoster?: PaternosterUpdateOneRequiredWithoutAxisesNestedInput
  }

  export type PaternosterAxisUncheckedUpdateWithoutPlacementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    PaternosterId?: IntFieldUpdateOperationsInput | number
  }

  export type ItemUpsertWithoutRollPlacementInput = {
    update: XOR<ItemUpdateWithoutRollPlacementInput, ItemUncheckedUpdateWithoutRollPlacementInput>
    create: XOR<ItemCreateWithoutRollPlacementInput, ItemUncheckedCreateWithoutRollPlacementInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutRollPlacementInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutRollPlacementInput, ItemUncheckedUpdateWithoutRollPlacementInput>
  }

  export type ItemUpdateWithoutRollPlacementInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: RemainUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateWithoutRollPlacementInput = {
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: EnumItemTypeFieldUpdateOperationsInput | $Enums.ItemType
    departamentId?: NullableIntFieldUpdateOperationsInput | number | null
    remains?: RemainUncheckedUpdateManyWithoutItemNestedInput
  }

  export type NotificationCreateManyForUserInput = {
    id?: number
    createdAt?: Date | string
    Readed?: boolean
    message: string
    showed?: Date | string | null
    IsDeleted?: boolean
  }

  export type PasswordResetRequestCreateManyForUserInput = {
    id?: number
    ip: string
    key: string
    created?: Date | string
    expiredAt: Date | string
    isUsed?: boolean
  }

  export type RemainCreateManyCreatedByInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    itemId: string
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
  }

  export type ToolRequestCreateManyForUserInput = {
    id?: number
    createdAt?: Date | string
    toolName: string
    description: string
    howToContact?: string | null
    status?: $Enums.RequestStatus
    departamentId: number
    RejectionReason?: string | null
    IsDeleted?: boolean
  }

  export type NotificationUpdateWithoutForUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Readed?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    showed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateWithoutForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Readed?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    showed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Readed?: BoolFieldUpdateOperationsInput | boolean
    message?: StringFieldUpdateOperationsInput | string
    showed?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetRequestUpdateWithoutForUserInput = {
    ip?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetRequestUncheckedUpdateWithoutForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PasswordResetRequestUncheckedUpdateManyWithoutForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    ip?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    created?: DateTimeFieldUpdateOperationsInput | Date | string
    expiredAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isUsed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RemainUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    item?: ItemUpdateOneRequiredWithoutRemainsNestedInput
  }

  export type RemainUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RemainUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    itemId?: StringFieldUpdateOperationsInput | string
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToolRequestUpdateWithoutForUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toolName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    howToContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    departamentId?: IntFieldUpdateOperationsInput | number
    RejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToolRequestUncheckedUpdateWithoutForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toolName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    howToContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    departamentId?: IntFieldUpdateOperationsInput | number
    RejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ToolRequestUncheckedUpdateManyWithoutForUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    toolName?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    howToContact?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus
    departamentId?: IntFieldUpdateOperationsInput | number
    RejectionReason?: NullableStringFieldUpdateOperationsInput | string | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RemainCreateManyItemInput = {
    id?: string
    createdAt?: Date | string
    metadata: JsonNullValueInput | InputJsonValue
    shop: number
    userId: number
    SellDate?: Date | string | null
    PrintedDate?: Date | string | null
    DepartamentId?: number | null
    IsDeleted?: boolean
  }

  export type RollPlacementCreateManyItemInput = {
    id?: number
    AxisId: number
  }

  export type RemainUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneRequiredWithoutCreatedRemainsNestedInput
  }

  export type RemainUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RemainUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    metadata?: JsonNullValueInput | InputJsonValue
    shop?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    SellDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PrintedDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    DepartamentId?: NullableIntFieldUpdateOperationsInput | number | null
    IsDeleted?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RollPlacementUpdateWithoutItemInput = {
    PaternosterAxis?: PaternosterAxisUpdateOneRequiredWithoutPlacementsNestedInput
  }

  export type RollPlacementUncheckedUpdateWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    AxisId?: IntFieldUpdateOperationsInput | number
  }

  export type RollPlacementUncheckedUpdateManyWithoutItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    AxisId?: IntFieldUpdateOperationsInput | number
  }

  export type PaternosterAxisCreateManyPaternosterInput = {
    id?: number
  }

  export type PaternosterAxisUpdateWithoutPaternosterInput = {
    Placements?: RollPlacementUpdateManyWithoutPaternosterAxisNestedInput
  }

  export type PaternosterAxisUncheckedUpdateWithoutPaternosterInput = {
    id?: IntFieldUpdateOperationsInput | number
    Placements?: RollPlacementUncheckedUpdateManyWithoutPaternosterAxisNestedInput
  }

  export type PaternosterAxisUncheckedUpdateManyWithoutPaternosterInput = {
    id?: IntFieldUpdateOperationsInput | number
  }

  export type RollPlacementCreateManyPaternosterAxisInput = {
    id?: number
    Itemcode: string
  }

  export type RollPlacementUpdateWithoutPaternosterAxisInput = {
    Item?: ItemUpdateOneRequiredWithoutRollPlacementNestedInput
  }

  export type RollPlacementUncheckedUpdateWithoutPaternosterAxisInput = {
    id?: IntFieldUpdateOperationsInput | number
    Itemcode?: StringFieldUpdateOperationsInput | string
  }

  export type RollPlacementUncheckedUpdateManyWithoutPaternosterAxisInput = {
    id?: IntFieldUpdateOperationsInput | number
    Itemcode?: StringFieldUpdateOperationsInput | string
  }



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