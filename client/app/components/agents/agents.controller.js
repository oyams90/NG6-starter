
class AgentsController {
  searchText = '';

  constructor($http) {
    "ngInject";
    this.$http = $http;
    this.search();
    this.name = 'agents';
  }

  search = function () {
    this.$http.get('https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=' + this.searchText).then(o=>{
      this.results = o.data.Results;
    })
  };

}

export default AgentsController;

