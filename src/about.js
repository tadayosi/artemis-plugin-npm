var Artemis;
(function (Artemis) {
  Artemis._module.run(configurePlugin);

  function configurePlugin(aboutService) {
    aboutService.addProductInfo('Artemis', '${artemis.version}');
  }
  configurePlugin.$inject = ['aboutService'];

})(Artemis || (Artemis = {}));
