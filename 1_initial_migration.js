const MarketToken =artifacts.require("MarketToken");

module.export =  function (deployer) {
 deployer.deploy(MarketToken);
};
