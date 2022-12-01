// tslint:disable
/**
 * Midgard Public API
 * The Midgard Public API queries THORChain and any chains linked via the Bifröst and prepares information about the network to be readily available for public users. The API parses transaction event data from THORChain and stores them in a time-series database to make time-dependent queries easy. Midgard does not hold critical information. To interact with BEPSwap and Asgardex, users should query THORChain directly.
 *
 * The version of the OpenAPI document: 2.12.1
 * Contact: devs@thorchain.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * @export
 * @interface MemberPool
 */
export interface MemberPool {
    /**
     * Int64(e8), total asset added to the pool by member
     * @type {string}
     * @memberof MemberPool
     */
    assetAdded: string;
    /**
     * asset address used by the member
     * @type {string}
     * @memberof MemberPool
     */
    assetAddress: string;
    /**
     * Int64(e8), asset sent but not added yet, it will be added when the rune pair arrives 
     * @type {string}
     * @memberof MemberPool
     */
    assetPending: string;
    /**
     * Int64(e8), total asset withdrawn from the pool by member
     * @type {string}
     * @memberof MemberPool
     */
    assetWithdrawn: string;
    /**
     * Int64, Unix timestamp for the first time member deposited into the pool
     * @type {string}
     * @memberof MemberPool
     */
    dateFirstAdded: string;
    /**
     * Int64, Unix timestamp for the last time member deposited into the pool
     * @type {string}
     * @memberof MemberPool
     */
    dateLastAdded: string;
    /**
     * Int64, pool liquidity units that belong the the member
     * @type {string}
     * @memberof MemberPool
     */
    liquidityUnits: string;
    /**
     * Pool rest of the data refers to
     * @type {string}
     * @memberof MemberPool
     */
    pool: string;
    /**
     * Int64(e8), total Rune added to the pool by member
     * @type {string}
     * @memberof MemberPool
     */
    runeAdded: string;
    /**
     * Rune address used by the member
     * @type {string}
     * @memberof MemberPool
     */
    runeAddress: string;
    /**
     * Int64(e8), Rune sent but not added yet, it will be added when the asset pair arrives 
     * @type {string}
     * @memberof MemberPool
     */
    runePending: string;
    /**
     * Int64(e8), total Rune withdrawn from the pool by member
     * @type {string}
     * @memberof MemberPool
     */
    runeWithdrawn: string;
}
