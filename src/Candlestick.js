/* @flow */

/**
 * A Japanese Candlestick
 */
export default class Candlestick
{
    /**
     * Open timestamp (milliseconds)
     */
    openTime:number;

    /**
     * Close timestamp (milliseconds)
     */
    closeTime:number;

    /**
     * Open price
     */
    open:number;

    /**
     * Close price
     */
    close:number;

    /**
     * Low price
     */
    low:number;

    /**
     * High price
     */
    high:number;

    /**
     * Trade volume
     */
    volume:number;

    /**
     * Trade count
     */
    tradeCount:number;
}
