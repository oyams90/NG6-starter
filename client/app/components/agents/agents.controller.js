
class AgentsController {
  searchText = '';
  constructor($http, agentsService) {
    "ngInject";
    this.$http = $http;
    this.agentsService = agentsService;
    this.search();
    this.name = 'agents';

  }

  search = function () {
    this.agentsService.search(this.searchText).then(results=>{
         this.results = results
    }, error=>{
        alert("An error occured in the server. Please try again later.");
    })
  };
}

export default AgentsController;

