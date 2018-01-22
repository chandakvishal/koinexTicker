function Currency() {
    this.symbol = '';
    this.price = '';
    this.stats = {};
}

var currencySymbolNameMap = new Map();
currencySymbolNameMap.set("BTC", "Bitcoin");
currencySymbolNameMap.set("BCH", "Bitcoin Cash");
currencySymbolNameMap.set("BTG", "Bitcoin Gold");
currencySymbolNameMap.set("XRP", "Ripple");
currencySymbolNameMap.set("ETH", "Ethereum");
currencySymbolNameMap.set("LTC", "Litecoin");
currencySymbolNameMap.set("MIOTA", "Iota");
currencySymbolNameMap.set("OMG", "OmiseGo");
currencySymbolNameMap.set("GMT", "Mercury Protocol");

export function GetCurrencyName(symbol) {
    if (currencySymbolNameMap.has(symbol)) {
        return currencySymbolNameMap.get(symbol);
    } else {
        return "";
    }

}

export default Currency;
