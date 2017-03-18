export default class AgentsService
{
  constructor($http) {
    "ngInject";
    this.$http = $http;
  }
  search(searchText) {
    return this.$http.get('https://api.ratemyagent.com.au/autosearch/agents?SearchTerm=' + searchText).then(o=>{
      return this.results = o.data.Results;
    })
  };
}
