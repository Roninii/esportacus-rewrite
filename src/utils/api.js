import lol from '../assets/lol.png';
import overwatch from '../assets/overwatch.png';
import dota2 from '../assets/dota2.png';
// import pubg from '../assets/pubg.png';
// import csgo from '../assets/csgo.svg';

export const esportacus = {
  // yes this is a private api key in a public repo
  // yes I plan to purge this and generate a new key in the future
  // this setup is temporary until the basics are covered, then it will
  // be migrated to aws and environment variables
  sec: `?token=rzHaDh7xA20vAeJw57j7-VK4Jq5BwrLMKlhQ5z79ouEE15DuhU8`,
  path: `https://api.pandascore.co`,
  corsAnywhere: `https://cors-anywhere.herokuapp.com/`,
  _games: [
    { name: 'League of Legends', slug: 'lol', image: `${lol}` },
    { name: 'Overwatch', slug: 'ow', image: `${overwatch}` },
    { name: 'Dota 2', slug: 'dota2', image: `${dota2}` },
    {
      name: 'Counter-Strike: Global Offensive',
      slug: 'cs:go'
    },
    { name: `PlayerUnknown's Battlegrounds`, slug: 'pubg' }
  ],
  sortList(list) {
    return list.sort((a, b) => {
      // higher in alphabet
      if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
      // lower in alphabet
      if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

      // names are equal
      return 0;
    });
  },

  games() {
    return this._games;
  },

  async leagues() {
    const res = await fetch(
      `${this.corsAnywhere}${this.path}/leagues${this.sec}`
    );
    const leagues = await res.json();

    return leagues;
  },

  async teams() {
    const res = await fetch(
      `${this.corsAnywhere}${this.path}/teams${this.sec}`
    );
    const teams = await res.json();
    const sortedTeams = await this.sortList(teams);

    return sortedTeams;
  },

  async players() {
    const res = await fetch(
      `${this.corsAnywhere}${this.path}/players${this.sec}`
    );
    const players = await res.json();
    const sortedPlayers = await this.sortList(players);

    return sortedPlayers;
  }
};
