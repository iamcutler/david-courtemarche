/**
 * Created by allancutler on 4/9/16.
 */

angular.module('DavidCourtemarche.controllers')
  .controller('PortfolioController', PortfolioController);

function PortfolioController($stateParams, CommonService, PortfolioService) {
  let vm = this;

  vm.assetUrl = assetUrl;
  vm.getPortfolio = getPortfolio;
  vm.portfolio = [];

  function getPortfolio() {
    PortfolioService.get()
      .then(response => {
        vm.portfolio = _typeReducer(response, $stateParams.type);
      })
      .catch(err => {
        console.error(err);
      });
  }

  function assetUrl(id) {
    return CommonService.assetUrl(id);
  }

  function _typeReducer(data, type) {
    if(!Array.isArray(data)) return [];
    if(!type) return data;

    return data.filter(cur => {
      return cur.type === type;
    });
  }
}
