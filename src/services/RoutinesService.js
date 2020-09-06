import routines from '../routines'

/** Singleton
 * @example
 * const service = RoutinesService.getInstance()
 * const categories = service.categories
 */
export default class RoutinesService {

  static _instance = null

  static getInstance() {
    if (!RoutinesService._instance) {
      RoutinesService._instance = new RoutinesService()
    }
    return RoutinesService._instance
  }

  _clusters = null

  constructor() {
    this._clusters = this._clusterize(routines)
  }

  categories = () => Object.keys(this._clusters)

  filteredRoutines = (category, searchText) => this._clusters[category].filter(Routine => (
    this.matchSearch(searchText, Routine.title) ||
    Routine.tags && Routine.tags.reduce((hasSearchedTag, tag) =>
      hasSearchedTag || this.matchSearch(searchText, tag), false
    )
  ))

  matchSearch = (searched, text) => {
    const normalize = x => x
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
    return normalize(text).includes(normalize(searched))
  }

  _clusterize(routines) {
    // Split routines into categories;
    let clusters = routines.reduce((clusters, Routine) => {
      if (!clusters[Routine.category]) {
        clusters[Routine.category] = []
      }
      clusters[Routine.category].push(Routine)
      return clusters
    }, {})
    // Sort categories;
    const categories = Object.keys(clusters).sort()
    clusters = categories.reduce((newClusters, category) => {
      newClusters[category] = clusters[category]
      return newClusters
    }, {})
    // Add category 'Todas Rotinas';
    clusters = categories.reduce((newClusters, category) => {
      newClusters['Todas Rotinas'] = newClusters['Todas Rotinas'].concat(clusters[category])
      return newClusters
    }, { 'Todas Rotinas': [], ...clusters })
    // Sort Routines;
    for (let category of Object.keys(clusters)) {
      clusters[category].sort((Routine0, Routine1) => Routine0.title.localeCompare(Routine1.title))
    }
    return clusters;
  }

}